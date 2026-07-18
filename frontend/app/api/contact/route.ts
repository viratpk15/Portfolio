import { NextRequest, NextResponse } from "next/server";

// Email service configuration
// Set RESEND_API_KEY environment variable for production
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || "viratpkgupta1506@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // If RESEND_API_KEY is configured, send real email
    if (RESEND_API_KEY) {
      const resendResponse = await fetch("https://api.resend.com/v1/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <contact@yourdomain.com>",
          to: [RECIPIENT_EMAIL],
          subject: `New Contact Form Message from ${name}`,
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px;">
              <h2 style="color: #5B84FF;">New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p style="background: #f5f5f5; padding: 16px; border-radius: 8px;">${message.replace(/\n/g, "<br>")}</p>
            </div>
          `,
        }),
      });

      if (!resendResponse.ok) {
        throw new Error("Failed to send email");
      }
    } else {
      // Development mode - log to console
      console.log("Contact form submission (no email service configured):");
      console.log({ name, email, message });
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

// GET endpoint to check if email service is configured (for frontend hint)
export async function GET() {
  return NextResponse.json({
    emailConfigured: !!RESEND_API_KEY,
  });
}