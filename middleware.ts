import { NextRequest, NextResponse } from "next/server"

const RENTPOWER_HOSTS = [
  "rentpower.vercel.app",
  "rentpower-git-main-medialabs-projects.vercel.app",
  "rentpower-jm1v83zsn-medialabs-projects.vercel.app",
]

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? ""

  if (RENTPOWER_HOSTS.some((h) => host.startsWith(h.split(".")[0]))) {
    const { pathname } = request.nextUrl

    // If already on /rentpower, let it through
    if (pathname.startsWith("/rentpower")) {
      return NextResponse.next()
    }

    // Rewrite root and other paths to /rentpower
    const url = request.nextUrl.clone()
    url.pathname = `/rentpower${pathname === "/" ? "" : pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
}
