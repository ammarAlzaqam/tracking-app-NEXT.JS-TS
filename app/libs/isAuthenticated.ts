import { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export default async function isAuthenticated(
  request: NextRequest
): Promise<string | null> {
  const token = request.cookies.get("token")?.value as string;
  const JWT_SECRET = process.env.JWT_SECRET as string;

  if (!token || !JWT_SECRET) return null;

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );
    const userId = payload.userId as string;
    return userId;
  } catch (e) {
    console.error("[isAuthenticated] JWT Verification Failed:", (e as Error).message);
    return null;
  }
}
