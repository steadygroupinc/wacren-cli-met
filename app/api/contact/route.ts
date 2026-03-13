import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message } = await req.json();

    // 1. Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Transporter configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", // true for 465, false for 587
      requireTLS: true,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PWD,
      },
      tls: {
        rejectUnauthorized: false, // Help with some SMTP self-signed cert issues
        minVersion: "TLSv1",
      },
      connectionTimeout: 15000, // 15 seconds
      greetingTimeout: 15000,   // 15 seconds
      socketTimeout: 30000,     // 30 seconds
    });

    console.log(`Verifying SMTP connection to ${process.env.SMTP_HOST}:${process.env.SMTP_PORT}...`);
    // Verify connection configuration
    try {
      await transporter.verify();
      console.log("SMTP Connection verified successfully.");
    } catch (verifyError) {
      console.error("SMTP Verification Error:", verifyError);
      throw verifyError;
    }

    // 3. Team Notification Email
    const teamMailOptions = {
      from: `"${name}" <${process.env.MAILER_EMAIL}>`,
      to: "climet@wacren.net",
      subject: `[NEW INQUIRY] Contact Form Submission - ${name}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}

Message:
${message}

---
This email was generated automatically from the CLI-MET website.
      `,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #004A99;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #999;">This email was generated automatically from the CLI-MET website.</p>
        </div>
      `,
    };

    // 4. User Confirmation Email
    const userMailOptions = {
      from: `"CLI-MET" <${process.env.MAILER_EMAIL}>`,
      to: email,
      subject: "Re: Your inquiry to CLI-MET",
      text: `
Hello ${name},

Thank you for reaching out to CLI-MET. We have received your message regarding "${company || "your inquiry"}" and our team is currently reviewing your request.

We aim to respond to all inquiries within 24-48 business hours.

Best regards,
The CLI-MET Team
West and Central African Research and Education Network (WACREN)
      `,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 30px; border-radius: 8px;">
          <h2 style="color: #004A99;">Hello ${name},</h2>
          <p>Thank you for reaching out to <strong>CLI-MET</strong>. We have received your message regarding "<strong>${company || "your inquiry"}</strong>" and our team is currently reviewing your request.</p>
          <p>We aim to respond to all inquiries within 24-48 business hours.</p>
          <p>Best regards,<br />
          <strong>The CLI-MET Team</strong><br />
          <span style="font-size: 12px; color: #666;">West and Central African Research and Education Network (WACREN)</span></p>
        </div>
      `,
    };

    // 5. Send both emails
    await transporter.sendMail(teamMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
