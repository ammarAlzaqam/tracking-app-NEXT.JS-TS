import { NextResponse, NextRequest } from "next/server";
import isAuthenticated from "./app/libs/isAuthenticated";
import { setResCookie } from "./app/libs/setAuthCookie";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isApiRoute = pathname.startsWith("/api");
  const isHomePage = pathname === "/";

  const userId = await isAuthenticated(request);
  if (!userId) {
    if (isApiRoute) {
      return NextResponse.json(
        { message: "Your are not Authenticated!" },
        { status: 401 }
      );
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isHomePage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  const response = NextResponse.next();
  setResCookie(userId, response);
  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/transaction/:path*", "/"],
};
