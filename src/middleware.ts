import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req: any) {
    const role = (req.nextauth?.token as any)?.role || "user"
    const pathname = req.nextUrl.pathname

    if (pathname.startsWith("/admin") && role !== "admin") {
      const url = new URL("/", req.url)
      return NextResponse.redirect(url)
    }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }: any) => !!token,
    },
  }
)

export const config = {
  matcher: ["/usuario/:path*", "/admin/:path*"],
}
