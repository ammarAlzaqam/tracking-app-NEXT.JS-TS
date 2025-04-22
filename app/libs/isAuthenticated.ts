import { NextRequest } from "next/server";
import { jwtVerify } from "jose";
export default async function isAuthenticated(request: NextRequest) {
  const token = request.cookies.get("token")?.value as string;
  const JWT_SECRET = process.env.JWT_SECRET as string;
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );
    const userId = payload.userId as string;
    return userId;
  } catch (e) {
    return false;
  }
}
