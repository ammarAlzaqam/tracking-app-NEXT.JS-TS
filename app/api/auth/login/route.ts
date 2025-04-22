import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";
import createToken from "@/app/libs/createToken";
import { cookies } from "next/headers";
import connectDB from "@/app/libs/connectDB";
import { setAuthCookie } from "@/app/libs/setAuthCookie";

interface Body {
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  try {
    const { email, password }: Body = await req.json();

    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: "Password is incorrect" },
        { status: 400 }
      );
    }

    const token = await createToken(user._id.toString());

    // set cookie with token
    await setAuthCookie(token);
    
    return NextResponse.json({ user });
  } catch (e) {
    console.error("Error in registration:", e);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
