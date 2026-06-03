import { NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;

const PRODUCT_LIST_IDS: Record<string, number> = {
  "Radarskin Kicks": 2,
  "Suzzie Beanie": 4,
  "Radarskin Socks": 5,
  "Suzzie Lighters": 6,
};

export async function POST(req: Request) {
  try {
    const { email, product } = await req.json();
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    });

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown";
    const city = req.headers.get("x-vercel-ip-city") || "Unknown";
    const region = req.headers.get("x-vercel-ip-country-region") || "Unknown";
    const country = req.headers.get("x-vercel-ip-country") || "Unknown";

    const listId = PRODUCT_LIST_IDS[product] || 1;

    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": BREVO_API_KEY },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
        attributes: {
          SIGNUP_DATE: timestamp,
          CITY: city,
          REGION: region,
          COUNTRY: country,
          IP: ip,
          SOURCE: "Notify Me",
          PRODUCT: product,
        },
      }),
    });

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": BREVO_API_KEY },
      body: JSON.stringify({
        sender: { name: "SUZZIESATURN", email: "noreply@suzziesaturn.com" },
        to: [{ email }],
        subject: `You'll be first for ${product}.`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:40px 20px;">
            <h1 style="font-size:32px;text-transform:uppercase;letter-spacing:-0.02em;margin-bottom:24px;">SUZZIESATURN</h1>
            <p style="font-size:14px;line-height:1.7;color:#555;">You're on the list for <strong>${product}</strong>. We'll let you know the second it drops.</p>
            <p style="margin-top:32px;font-size:12px;color:#999;">Stay off the radar. Est. 2017.</p>
          </div>
        `,
      }),
    });

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": BREVO_API_KEY },
      body: JSON.stringify({
        sender: { name: "SUZZIESATURN", email: "noreply@suzziesaturn.com" },
        to: [{ email: "coolemail@suzziesaturn.com" }],
        subject: `Notify Me: ${product} — ${email}`,
        htmlContent: `
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Signed up:</strong> ${timestamp} ET</p>
          <p><strong>Location:</strong> ${city}, ${region}, ${country}</p>
          <p><strong>IP:</strong> ${ip}</p>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
