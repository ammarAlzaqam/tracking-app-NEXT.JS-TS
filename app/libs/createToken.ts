import { SignJWT } from "jose";
export default function createToken(userId: string) {
  const token = new SignJWT({ userId })
    .setExpirationTime("1d")
    .setProtectedHeader({ alg: "HS256" })
    .sign(new TextEncoder().encode(process.env.JWT_SECRET));
  return token;
}
