import { NextResponse, type NextRequest } from "next/server";
import { authConfigured, SESSION_COOKIE, verifySession } from "@/lib/directory-auth";

// El directorio (/), la página de contacto y las miniaturas son privados;
// las propuestas (/slug) se comparten por enlace.
const PRIVATE_PAGES = ["/", "/contacto"];

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (!authConfigured()) {
    if (process.env.NODE_ENV === "production") return new NextResponse("Not found", { status: 404 });
    return NextResponse.next();
  }

  const signedIn = verifySession(request.cookies.get(SESSION_COOKIE)?.value);

  if (pathname === "/acceso") {
    if (!signedIn) return NextResponse.next();
    const next = searchParams.get("next");
    return NextResponse.redirect(new URL(next && PRIVATE_PAGES.includes(next) ? next : "/", request.url));
  }
  if (signedIn) return NextResponse.next();
  if (PRIVATE_PAGES.includes(pathname)) {
    const login = new URL("/acceso", request.url);
    if (pathname !== "/") login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  }
  return new NextResponse("Not found", { status: 404 });
}

export const config = { matcher: ["/", "/acceso", "/contacto", "/thumbs/:path*"] };
