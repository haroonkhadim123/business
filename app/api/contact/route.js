import dbConnect from "@/lib/db";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend API initialize
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save in MongoDB
    const createcontact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send Email via Resend
    await resend.emails.send({
      from: "Contact Form <info@hoorabgroup.com>", // default from, can be your domain email later
      to: ["haroonkhadim971@gmail.com"], // replace with your email
      subject: `You have received new message: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json(
      {
        error: false,
        success: true,
        message: "Your message has been sent successfully",
        createcontact,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: true,
        success: false,
        message: "Something went wrong while sending your message",
      },
      { status: 500 }
    );
  }
}