import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, product } = await req.json();
    await resend.emails.send({
      from: "SUZZIESATURN <onboarding@resend.dev>",
      to: email,
      subject: `You'll be first for ${product}.`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:40px 20px;">
          <h1 style="font-size:32px;text-transform:uppercase;letter-spacing:-0.02em;margin-bottom:24px;">SUZZIESATURN</h1>
          <p style="font-size:14px;line-height:1.7;color:#555;">You're on the list for <strong>${product}</strong>. We'll let you know the second it drops.</p>
          <p style="margin-top:32px;font-size:12px;color:#999;">Stay off the radar. Est. 2017.</p>
        </div>
      `,
    });
    await resend.emails.send({
      from: "SUZZIESATURN <onboarding@resend.dev>",
      to: "coolemail@suzziesaturn.com",
      subject: `Notify Me: ${product} — ${email}`,
      html: `<p><strong>${email}</strong> wants to be notified when <strong>${product}</strong> drops.</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
