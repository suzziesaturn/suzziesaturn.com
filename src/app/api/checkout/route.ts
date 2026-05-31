import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const SHIPPING_RATES: Record<string, number> = {
  "price_1TalmPJiWX4PgmRvBRnvOZlF": 995,
  "price_1TamZSJiWX4PgmRvP8OJf3DD": 995,
  "price_1TamZhJiWX4PgmRvPiXB9XoB": 995,
  "price_1Tama9JiWX4PgmRvkFVDGzB": 995,
  "price_1TamaQJiWX4PgmRvFWjOT8T8": 995,
  "price_1TamaqJiWX4PgmRvYhBfh37": 995,
  "price_1TambJiWX4PgmRvGA0Pq3zV": 995,
  "price_1TambfJiWX4PgmRvgd5yhdRp": 995,
  "price_1TanLcJiWX4PgmRvN6biQdJW": 350,
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items: { priceId: string; quantity: number }[] = body.items
      ? body.items
      : [{ priceId: body.priceId, quantity: 1 }];

    const lineItems = items.map(i => ({ price: i.priceId, quantity: i.quantity }));

    // Calculate order subtotal to determine free shipping
    // We'll use shipping_options with Stripe instead
    const subtotal = await getSubtotal(items);
    const freeShipping = subtotal >= 7500;

    // Calculate shipping cost based on items
    let shippingCost = 0;
    if (!freeShipping) {
      // Use highest shipping rate in the order
      shippingCost = Math.max(...items.map(i => SHIPPING_RATES[i.priceId] || 0));
    }

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://suzziesaturn.com/success",
      cancel_url: "https://suzziesaturn.com",
      shipping_address_collection: { allowed_countries: ["US"] },
    };

    if (shippingCost > 0) {
      const shippingRate = await stripe.shippingRates.create({
        display_name: "Standard Shipping",
        type: "fixed_amount",
        fixed_amount: { amount: shippingCost, currency: "usd" },
        delivery_estimate: {
          minimum: { unit: "business_day", value: 3 },
          maximum: { unit: "business_day", value: 5 },
        },
      });
      sessionParams.shipping_options = [{ shipping_rate: shippingRate.id }];
    } else {
      const freeRate = await stripe.shippingRates.create({
        display_name: "Free Shipping",
        type: "fixed_amount",
        fixed_amount: { amount: 0, currency: "usd" },
        delivery_estimate: {
          minimum: { unit: "business_day", value: 3 },
          maximum: { unit: "business_day", value: 5 },
        },
      });
      sessionParams.shipping_options = [{ shipping_rate: freeRate.id }];
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

async function getSubtotal(items: { priceId: string; quantity: number }[]) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  let total = 0;
  for (const item of items) {
    const price = await stripe.prices.retrieve(item.priceId);
    total += (price.unit_amount || 0) * item.quantity;
  }
  return total;
}
