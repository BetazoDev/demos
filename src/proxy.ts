import { NextResponse, type NextRequest } from "next/server";

/**
 * El directorio (/) y sus miniaturas son solo para el equipo: se protegen con HTTP Basic Auth.
 * Credenciales en variables de entorno PORTFOLIO_USER y PORTFOLIO_PASSWORD.
 * Sin esas variables, en producción el directorio responde 404; en desarrollo queda abierto.
 * Las páginas de cada despacho (/NN-slug) siguen siendo públicas por enlace directo.
 */
export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // next/image también puede servir las miniaturas: protégelas igual.
  if (pathname === "/_next/image" && !(searchParams.get("url") ?? "").startsWith("/thumbs/")) {
    return NextResponse.next();
  }

  const user = process.env.PORTFOLIO_USER;
  const pass = process.env.PORTFOLIO_PASSWORD;

  if (!user || !pass) {
    if (process.env.NODE_ENV === "production") {
      return new NextResponse("Not found", { status: 404 });
    }
    return NextResponse.next();
  }

  const header = request.headers.get("authorization") ?? "";
  if (header.startsWith("Basic ")) {
    const [u, ...rest] = atob(header.slice(6)).split(":");
    if (u === user && rest.join(":") === pass) return NextResponse.next();
  }

  return new NextResponse("Autenticación requerida", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Directorio", charset="UTF-8"' },
  });
}

export const config = {
  matcher: ["/", "/thumbs/:path*", "/_next/image"],
};
