import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import UserSignup from "@/models/usersignup";
import OTP from "@/models/otp";
import { generateOTP, sendOTPEmail } from "@/lib/email";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password required" },
        { status: 400 }
      );
    }

    await connectDB();

    // Find user
    const user = await UserSignup.findOne({ email }).select("+password");
    
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate and save OTP
    const otp = generateOTP();
    
    // Delete old OTP if exists
    await OTP.findOneAndDelete({ email });
    
    // Save new OTP
    await OTP.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    });

    // Send email
    const emailSent = await sendOTPEmail(email, otp);
    
    if (!emailSent) {
      return NextResponse.json(
        { error: "Failed to send OTP" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully",
      email: email,
      role: user.role,
    });
    
  } catch (error) {
    console.error("Send OTP error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}