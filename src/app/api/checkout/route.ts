import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const lineItems = body.items
      ? body.items.map((i: { priceId: string; quantity: number }) => ({ price: i.priceId, quantity: i.quantity }))
      : [{ price: body.priceId, quantity: 1 }];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://suzziesaturn.com/success",
      cancel_url: "https://suzziesaturn.com",
    });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
