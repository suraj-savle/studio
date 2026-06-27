import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Strict validation verification
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All configuration fields are required." },
        { status: 400 },
      );
    }

    // Transmit email payload structure
    const data = await resend.emails.send({
      from: "UpgradeUX <onboarding@resend.dev>",
      to: ["iamsurajsavle@gmail.com"],
      subject: `New Contact Form: ${subject.slice(0, 60)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; rounded: 8px;">
          <h2 style="color: #18181b; font-size: 20px; border-bottom: 1px solid #e4e4e7; padding-bottom: 10px;">New Website Inquiry</h2>
          <p style="margin: 14px 0;"><strong style="color: #4b5563;">Name:</strong> ${name}</p>
          <p style="margin: 14px 0;"><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${email}" style="color: #4db2e0; text-decoration: none;">${email}</a></p>
          <p style="margin: 14px 0;"><strong style="color: #4b5563;">Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #e4e4e7; margin: 20px 0;" />
          <p style="color: #27272a; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (data.error) {
      console.error("Resend API processing layer error:", data.error);
      return NextResponse.json(
        { success: false, error: data.error.message },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Critical server internal contact handler exception:", error);

    const message =
      error instanceof Error ? error.message : "Internal server setup failure.";

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      {
        status: 500,
      },
    );
  }
}
