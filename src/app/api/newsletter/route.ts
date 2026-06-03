import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = "adf32a04-da17-4f4e-9a96-886a59e32049";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    });

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "Unknown";
    const city = req.headers.get("x-vercel-ip-city") || "Unknown";
    const region = req.headers.get("x-vercel-ip-country-region") || "Unknown";
    const country = req.headers.get("x-vercel-ip-country") || "Unknown";

    await resend.contacts.create({
      audienceId: AUDIENCE_ID,
      email,
      unsubscribed: false,
    });

    await resend.emails.send({
      from: "SUZZIESATURN <noreply@suzziesaturn.com>",
      to: email,
      subject: "You're on the radar.",
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:40px 20px;">
          <h1 style="font-size:32px;text-transform:uppercase;letter-spacing:-0.02em;margin-bottom:24px;">SUZZIESATURN</h1>
          <p style="font-size:14px;line-height:1.7;color:#555;">You're on the list. Stay off the radar.</p>
          <p style="font-size:14px;line-height:1.7;color:#555;">We'll hit you when new drops land — no spam, no noise.</p>
          <p style="margin-top:32px;font-size:12px;color:#999;">DMV roots. No ceilings. Est. 2017.</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "SUZZIESATURN <noreply@suzziesaturn.com>",
      to: "coolemail@suzziesaturn.com",
      subject: `New subscriber: ${email}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signed up:</strong> ${timestamp} ET</p>
        <p><strong>Location:</strong> ${city}, ${region}, ${country}</p>
        <p><strong>IP:</strong> ${ip}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
