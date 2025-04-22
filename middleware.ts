import { NextResponse, NextRequest } from "next/server";
import isAuthenticated from "./app/libs/isAuthenticated";
export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/api/transaction")) {
    const userId = await isAuthenticated(request);
    if (userId) {
      const response = NextResponse.next();
      response.cookies.set("userId", userId);
      return response;
    } else {
      return NextResponse.json(
        { message: "You are not authenticated !" },
        { status: 401 }
      );
    }
  }
}

export const config = {
  matcher: ["/api/transaction"],
};
