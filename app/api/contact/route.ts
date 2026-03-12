import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Log the contact request for development/production tracking (without nodemailer)
    console.log("New Contact Form Submission:", {
      name,
      email,
      phone: phone || "N/A",
      company: company || "N/A",
      message,
      timestamp: new Date().toISOString(),
    });

    // In a real production environment, this would be sent to a database or a different service.
    // Since nodemailer is removed per user instruction, we return a successful response.
    
    return NextResponse.json({ 
      message: "Success! Your message has been received.",
      details: "In production, this would be routed to the CLI-MET team."
    }, { status: 200 });
  } catch (error: any) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please try again later." },
      { status: 500 }
    );
  }
}
