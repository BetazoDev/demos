import { createDecipheriv, scryptSync } from "node:crypto";
import { gunzipSync } from "node:zlib";
import { cookies } from "next/headers";
import { authConfigured, SESSION_COOKIE, verifySession } from "@/lib/directory-auth";
import { PAYLOAD } from "./payload";

// Página privada de contacto por WhatsApp. Trae teléfonos y mensajes de cada despacho y este
// repositorio es público, así que se guarda cifrada (ver payload.ts) y se descifra solo aquí.
let html: string | null = null;

function decrypt() {
  if (html) return html;
  const [salt, iv, tag, data] = PAYLOAD.split(".").map((part) => Buffer.from(part, "base64"));
  const decipher = createDecipheriv("aes-256-gcm", scryptSync(process.env.PORTFOLIO_PASSWORD ?? "", salt, 32), iv);
  decipher.setAuthTag(tag);
  html = gunzipSync(Buffer.concat([decipher.update(data), decipher.final()])).toString("utf8");
  return html;
}

export async function GET() {
  // El proxy ya exige sesión; se vuelve a comprobar aquí, junto a los datos.
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!authConfigured() || !verifySession(token)) return new Response("Not found", { status: 404 });

  try {
    return new Response(decrypt(), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "private, no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  } catch {
    // Contraseña distinta a la usada al cifrar: hay que regenerar payload.ts.
    return new Response("Página de contacto no disponible", { status: 503 });
  }
}
