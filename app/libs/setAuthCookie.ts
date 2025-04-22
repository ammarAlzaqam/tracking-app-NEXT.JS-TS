import { cookies } from "next/headers";

export async function setAuthCookie(token: string) {
  const cookieStorage = await cookies();
  cookieStorage.set("token", token, {
    httpOnly: true, // cant read in client side
    secure: true, // (https) not work at http
    path: "/", // able to all page
    maxAge: 60 * 60 * 24, // 1day
  });
}
