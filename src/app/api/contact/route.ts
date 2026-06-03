import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, orderNumber, message } = await req.json();
    await resend.emails.send({
      from: "SUZZIESATURN <noreply@suzziesaturn.com>",
      to: "coolemail@suzziesaturn.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${orderNumber ? `<p><strong>Order:</strong> ${orderNumber}</p>` : ""}
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
