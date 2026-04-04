"use server";

import dbConnect from "@/lib/db";
import Partner from "@/models/partner";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    // Validation
    if (!body.isConfirmed) {
      return NextResponse.json(
        {error:true, success: false, message: "Please confirm the terms and conditions" },
        { status: 400 }
      );
    }

    // Check for duplicate email (better message)
    const existingPartner = await Partner.findOne({ email: body.email });
    if (existingPartner) {
      return NextResponse.json(
        { 
          success: false, 
          message: "A partner application with this email already exists." 
        },
        { status: 409 }   // 409 Conflict is more appropriate
      );
    }

    // Create new partner application
    const partner = await Partner.create(body);

    // Send Email Notification (Same style as Contact Form)
    try {
      await resend.emails.send({
        from: "Partner Application <info@hoorabgroup.com>",
        to: ["info@hoorabgroup.com"],           // Change if you want multiple emails
        subject: `New Partnership Application - ${body.companyName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00e6ff;">New Partnership Application Received</h2>
            <p><strong>Company Name:</strong> ${body.companyName}</p>
            <p><strong>Contact Person:</strong> ${body.contactPerson}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Phone:</strong> ${body.phone}</p>
            <p><strong>Country:</strong> ${body.country}</p>
            <p><strong>City:</strong> ${body.city}</p>
            <p><strong>Business Type:</strong> ${body.businessType}</p>
            <p><strong>Partnership Type:</strong> ${body.partnershipType}</p>
            <p><strong>Number of Branches:</strong> ${body.branches || "N/A"}</p>
            <p><strong>Website:</strong> ${body.website || "N/A"}</p>
            
            <h3>Business Introduction:</h3>
            <p style="white-space: pre-wrap;">${body.introduction}</p>
            
            <hr style="margin: 20px 0;">
            <p style="color: #666; font-size: 14px;">
              Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: "Partnership application submitted successfully",
      data: partner,
    });

  } catch (error) {
    console.error("Partner API Error:", error);

    // Handle MongoDB duplicate key error (in case findOne missed it)
    if (error.code === 11000) {
      return NextResponse.json(
        { 
            error:true,
          success: false, 
          message: "A partner application with this email already exists." 
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: "Something went wrong while submitting your application" 
      },
      { status: 500 }
    );
  }
}