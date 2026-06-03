import { NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY!;
const CONTACT_LIST_ID = 3;

export async function POST(req: Request) {
  try {
    const { name, email, orderNumber, message } = await req.json();
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    });

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown";
    const city = req.headers.get("x-vercel-ip-city") || "Unknown";
    const region = req.headers.get("x-vercel-ip-country-region") || "Unknown";
    const country = req.headers.get("x-vercel-ip-country") || "Unknown";

    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": BREVO_API_KEY },
      body: JSON.stringify({
        email,
        listIds: [CONTACT_LIST_ID],
        updateEnabled: true,
        attributes: {
          FIRSTNAME: name,
          SIGNUP_DATE: timestamp,
          CITY: city,
          REGION: region,
          COUNTRY: country,
          IP: ip,
          SOURCE: "Contact Form",
        },
      }),
    });

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "Content-Type": "application/json", "api-key": BREVO_API_KEY },
      body: JSON.stringify({
        sender: { name: "SUZZIESATURN", email: "noreply@suzziesaturn.com" },
        to: [{ email: "coolemail@suzziesaturn.com" }],
        subject: `New Contact Form Message from ${name}`,
        htmlContent: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${orderNumber ? `<p><strong>Order:</strong> ${orderNumber}</p>` : ""}
          <p><strong>Message:</strong><br/>${message}</p>
          <p><strong>Sent:</strong> ${timestamp} ET</p>
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
