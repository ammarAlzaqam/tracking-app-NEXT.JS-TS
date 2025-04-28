import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function setAuthCookie(token: string) {
  const cookieStorage = await cookies();
  cookieStorage.set("token", token, {
    httpOnly: true, // cant read in client side
    secure: true, // (https) not work at http
    path: "/", // able to all page
    maxAge: 60 * 60 * 24, // 1day
    sameSite: "strict",
  });
}

export function setResCookie(userId: string, res: NextResponse) {
  // const response = res.next();
  res.cookies.set("userId", userId, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "strict",
  });
}
