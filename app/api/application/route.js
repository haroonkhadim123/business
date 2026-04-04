import dbConnect from "@/lib/db";
import Application from '@/models/apllyform';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);// API key from .env

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
 
    const { name, email, phoneNumber, position, coverLetter, cv } = body;

    // Validation
    if (!name || !email || !phoneNumber || !position || !coverLetter || !cv) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save in MongoDB
    const createapplication = await Application.create({
      name,
      email,
      phoneNumber,
      position,
      coverLetter,
      cv,
    });

    // ================= Send Admin Notification Email =================
    try {
      await resend.emails.send({
      from: "Contact Form <info@hoorabgroup.com>",
  to: ["info@hoorabgroup.com"],                 
        subject: 'New Job Application Received ',
        html: `
          <h2>New Application Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Position Applied:</strong> ${position}</p>
          <p><strong>Cover Letter:</strong></p>
          <p>${coverLetter}</p>
          <p><strong>CV Link:</strong> <a href="${cv}" target="_blank">Download CV</a></p>
        `,
      });
    } catch (emailError) {
      console.error("Admin email failed:", emailError);
      // Don't fail request if email fails
    }

    return NextResponse.json(
      {
        error: false,
        success: true,
        message: "Your application has been submitted successfully",
        createapplication,
      },
      { status: 200 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: true,
        success: false,
        message: "Something went wrong while submitting your application",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();

    const applyitem = await Application.find();

    return Response.json(
      { success: true, applyitem },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in fetching Application", error);
    return NextResponse.json(
      { success: false, message: "Error in fetching Application" },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const deletedProduct = await Application.findByIdAndDelete(body.id);

    if (!deletedProduct) {
      return NextResponse.json({ success: false, message: "Application not found" });
    }

    return NextResponse.json({ success: true, message: "Application deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Internal Server Error", error: error.message });
  }
}