import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
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
      html: `<p>New newsletter signup: <strong>${email}</strong></p>`,
    });
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
