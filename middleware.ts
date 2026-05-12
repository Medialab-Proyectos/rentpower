import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? ""

  // Only apply rewrites for rentpower domains
  if (!host.includes("rentpower")) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  // Already on /rentpower path, let it through
  if (pathname.startsWith("/rentpower")) {
    return NextResponse.next()
  }

  // Rewrite to /rentpower subpath
  const url = request.nextUrl.clone()
  url.pathname = `/rentpower${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\.).*)"],
}
