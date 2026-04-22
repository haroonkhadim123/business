// proxy.js
import { NextResponse } from "next/server";

export function proxy(request) {  // ← changed from "middleware" to "proxy"
  const url = request.nextUrl.clone();
  const host = request.headers.get("host");

  if (
    host.includes("hoorabgroup.com") ||
    host.includes("www.hoorabgroup.com")
  ) {
    url.pathname = "/under-construction";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}