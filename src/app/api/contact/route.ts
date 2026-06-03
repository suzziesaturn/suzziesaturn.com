import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, orderNumber, message } = await req.json();
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    });

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "SUZZIESATURN", email: "noreply@suzziesaturn.com" },
        to: [{ email: "coolemail@suzziesaturn.com" }],
        subject: `New Contact: ${name}`,
        htmlContent: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${orderNumber ? `<p><strong>Order:</strong> ${orderNumber}</p>` : ""}
          <p><strong>Message:</strong><br/>${message}</p>
          <p><strong>Sent:</strong> ${timestamp} ET</p>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
