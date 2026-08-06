import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { isCaseStudyVisible } from "./lib/portfolio-config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/case-studies/") && pathname !== "/case-studies/") {
    const slug = pathname.slice("/case-studies/".length).split("/")[0];

    if (slug && !isCaseStudyVisible(slug)) {
      return NextResponse.redirect(new URL("/case-studies", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/case-studies/:path+",
};
