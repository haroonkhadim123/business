"use server";

import dbConnect from "@/lib/db";
import UserSignup from "@/models/usersignup";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await dbConnect();

    const { email, password } = await req.json();

    // 🔹 Validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // 🔹 Check if user already exists
    const existingUser = await UserSignup.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 400 }
      );
    }

    // 🔹 Hash password (IMPORTANT)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 Save to DB
    const newUser = await UserSignup.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User signed up successfully",
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    // 🔹 Handle duplicate key error (extra safety)
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}