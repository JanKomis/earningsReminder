import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";
const { auth } = NextAuth(authConfig);

const privateRoute = "/dashboard";
const authRoute = "/signin";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const nextPath = req.nextUrl;

  //const isAuthRoute = authRoute.includes(nextPath.pathname);
  const isAuthRoute = nextPath.pathname.startsWith(authRoute);
  const isPrivateRoute = nextPath.pathname.startsWith(privateRoute);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/dashboard", nextPath));
    }
    null;
  }

  if (!isPrivateRoute && isLoggedIn) {
    return NextResponse.redirect(new URL(privateRoute, nextPath));
  }

  if (!isLoggedIn && isPrivateRoute) {
    return NextResponse.redirect(new URL("/signin", nextPath));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
