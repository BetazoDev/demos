import { NextResponse, type NextRequest } from "next/server";
import { authConfigured, SESSION_COOKIE, verifySession } from "@/lib/directory-auth";

// El directorio (/) y sus miniaturas son privados; las propuestas (/NN-slug) se comparten por enlace.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!authConfigured()) {
    if (process.env.NODE_ENV === "production") return new NextResponse("Not found", { status: 404 });
    return NextResponse.next();
  }

  const signedIn = verifySession(request.cookies.get(SESSION_COOKIE)?.value);

  if (pathname === "/acceso") {
    return signedIn ? NextResponse.redirect(new URL("/", request.url)) : NextResponse.next();
  }
  if (signedIn) return NextResponse.next();
  if (pathname === "/") return NextResponse.redirect(new URL("/acceso", request.url));
  return new NextResponse("Not found", { status: 404 });
}

export const config = { matcher: ["/", "/acceso", "/thumbs/:path*"] };
