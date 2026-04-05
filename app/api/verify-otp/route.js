import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import OTP from "@/models/otp";
import UserSignup from "@/models/usersignup";

export async function POST(request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP required" },
        { status: 400 }
      );
    }

    await connectDB();

    // Find valid OTP
    const otpRecord = await OTP.findOne({
      email,
      otp,
      expiresAt: { $gt: new Date() },
    });

    if (!otpRecord) {
      // Check if OTP exists but expired
      const existingOTP = await OTP.findOne({ email, otp });
      
      if (existingOTP) {
        existingOTP.attempts += 1;
        await existingOTP.save();
        
        if (existingOTP.attempts >= 3) {
          await OTP.deleteOne({ email });
          return NextResponse.json(
            { error: "Too many failed attempts. Request new OTP." },
            { status: 400 }
          );
        }
      }
      
      return NextResponse.json(
        { error: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    // Get user details
    const user = await UserSignup.findOne({ email });
    
    // Delete used OTP
    await OTP.deleteOne({ _id: otpRecord._id });

    return NextResponse.json({
      success: true,
      user: {
        id: user._id.toString(),
        email: user.email,
        role: user.role,
      },
    });
    
  } catch (error) {
    console.error("Verify OTP error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}