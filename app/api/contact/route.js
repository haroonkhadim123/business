"use server";

import dbConnect from "@/lib/db";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend API
const resend = new Resend(process.env.RESEND_API_KEY);

// Verified fallback email (Resend default)
const VERIFIED_EMAIL = "onboarding@resend.dev";

export async function POST(req) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Parse request body
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save contact message to MongoDB
    const createContact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    // Determine the sender email
    let fromEmail = `care@hoorab.co.uk`;

    // Attempt to send email
    let emailResult;
    try {
      emailResult = await resend.emails.send({
        from: `Contact Form <${fromEmail}>`,
        to: ["care@hoorab.co.uk"], // recipient
        subject: `New Contact Message: ${subject}`,
        html: `
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Subject:</b> ${subject}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });
    } catch (err) {
      // If domain not verified, fallback to verified email
      console.warn(
        "Original sender not verified, falling back to verified email.",
        err
      );
      fromEmail = VERIFIED_EMAIL;
      emailResult = await resend.emails.send({
        from: `Contact Form <${fromEmail}>`,
        to: ["care@hoorab.co.uk"],
        subject: `New Contact Message: ${subject}`,
        html: `
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Subject:</b> ${subject}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });
    }

    console.log("Resend Email Result:", emailResult);

    return NextResponse.json(
      {
        error: false,
        success: true,
        message: "Your message has been sent successfully",
        createContact,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form Error:", error);
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