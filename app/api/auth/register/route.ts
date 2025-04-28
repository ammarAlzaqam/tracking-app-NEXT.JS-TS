import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/app/models/User";
import createToken from "@/app/libs/createToken";
import connectDB from "@/app/libs/connectDB";
import { cookies } from "next/headers";
import { setAuthCookie } from "@/app/libs/setAuthCookie";

type Body = {
  email: string;
  password: string;
  confirmPassword?: string;
  username: string;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();
    if (body.password !== body.confirmPassword) {
      return NextResponse.json(
        { message: "failed: password doesn't Match" },
        { status: 400 }
      );
    }

    await connectDB();
    delete body.confirmPassword;
    const hashedPassword = await bcrypt.hash(body.password, 12);
    let user = await User.create({ ...body, password: hashedPassword });
    const token = await createToken(user._id.toString());
    user = user.toObject();
    delete user.password;

    // Set the cookie with the token
    await setAuthCookie(token);

    return NextResponse.json({ user, token });
  } catch (e) {
    console.error("Error in registration:", e);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
