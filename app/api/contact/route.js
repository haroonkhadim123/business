"use server";

import dbConnect from "@/lib/db";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await dbConnect();

    const { name, email, phone, subject, message } = await req.json();

    // Simple validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Save to DB
    const newContact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send email (use Resend default email to avoid errors)
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["haroonkhadim971@gmail.com"],
      subject: `New Message: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        data: newContact,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}