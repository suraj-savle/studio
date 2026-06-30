import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, Phone_number, message } = body;

    // Strict validation verification matching formState keys
    if (!fullName || !email || !Phone_number || !message) {
      return NextResponse.json(
        { success: false, error: "All required configuration fields must be provided." },
        { status: 400 },
      );
    }

    // Transmit email payload structure
    const data = await resend.emails.send({
      from: "UpgradeUX <onboarding@resend.dev>",
      to: ["iamsurajsavle@gmail.com"],
      subject: `⚡ Strategy Briefing: ${fullName.slice(0, 30)}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-w: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 12px; bg: #ffffff;">
          <h2 style="color: #18181b; font-size: 20px; font-weight: 800; border-bottom: 1px solid #f4f4f5; padding-bottom: 12px; margin-top: 0; tracking-tight: -0.025em;">
            New Strategy Briefing Request
          </h2>
          
          <div style="margin: 16px 0;">
            <p style="margin: 10px 0; font-size: 14px;"><strong style="color: #71717a; text-transform: uppercase; font-size: 11px; tracking-weight: 0.05em;">Client Identity:</strong><br/><span style="color: #18181b; font-weight: 600;">${fullName}</span></p>
            
            <p style="margin: 10px 0; font-size: 14px;"><strong style="color: #71717a; text-transform: uppercase; font-size: 11px; tracking-weight: 0.05em;">Work Email:</strong><br/><a href="mailto:${email}" style="color: #4db2e0; text-decoration: none; font-weight: 500;">${email}</a></p>
            
            <p style="margin: 10px 0; font-size: 14px;"><strong style="color: #71717a; text-transform: uppercase; font-size: 11px; tracking-weight: 0.05em;">Phone Number:</strong><br/><span style="color: #18181b; font-weight: 600;">${Phone_number}</span></p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #f4f4f5; margin: 20px 0;" />
          
          <div>
            <h3 style="color: #18181b; font-size: 12px; text-transform: uppercase; tracking-weight: 0.05em; margin-bottom: 8px; color: #71717a;">
              Core Interface Bottleneck & Goals:
            </h3>
            <p style="color: #27272a; line-height: 1.6; font-size: 14px; white-space: pre-wrap; background-color: #fafafa; padding: 14px; border-radius: 8px; border: 1px solid #f4f4f5; margin-top: 0;">${message}</p>
          </div>
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
    console.error("Critical server internal consultation handler exception:", error);

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