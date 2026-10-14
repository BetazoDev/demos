import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { authConfigured, SESSION_COOKIE, verifySession } from "@/lib/directory-auth";

// Seguimiento de /contacto compartido entre navegadores: estados y mensajes editados en un JSON en disco.
// CONTACT_STATE_DIR debe apuntar a un volumen persistente; si no, se pierde en cada despliegue.
const DIR = process.env.CONTACT_STATE_DIR || path.join(/* turbopackIgnore: true */ process.cwd(), "data");
const FILE = path.join(DIR, "contacto-estado.json");

type State = { status: Record<string, string>; edits: Record<string, string>; updatedAt: string | null };
const EMPTY: State = { status: {}, edits: {}, updatedAt: null };

async function read(): Promise<State> {
  try { return { ...EMPTY, ...JSON.parse(await readFile(FILE, "utf8")) }; } catch { return { ...EMPTY }; }
}

async function authorized() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return authConfigured() && verifySession(token);
}

const strings = (v: unknown, max: number) =>
  v && typeof v === "object" && !Array.isArray(v)
    ? Object.fromEntries(Object.entries(v).filter(([k, x]) => k.length <= 200 && typeof x === "string" && x.length <= max)) as Record<string, string>
    : null;

export async function GET() {
  if (!(await authorized())) return new Response(null, { status: 404 });
  return Response.json(await read(), { headers: { "Cache-Control": "no-store" } });
}

// Los estados se fusionan (cada cambio llega por clave); los textos editados se reemplazan completos para que «Restablecer» borre.
let queue = Promise.resolve();
export async function POST(req: Request) {
  if (!(await authorized())) return new Response(null, { status: 404 });
  const body = await req.json().catch(() => null);
  const status = strings(body?.status, 40);
  const edits = strings(body?.edits, 8000);
  if (!status && !edits) return new Response("Datos inválidos", { status: 400 });
  let next: State = EMPTY;
  queue = queue.then(async () => {
    const cur = await read();
    next = { status: { ...cur.status, ...status }, edits: edits ?? cur.edits, updatedAt: new Date().toISOString() };
    await mkdir(DIR, { recursive: true });
    await writeFile(FILE + ".tmp", JSON.stringify(next));
    await rename(FILE + ".tmp", FILE);
  });
  try { await queue; } catch (e) { queue = Promise.resolve(); console.error("contacto/estado", e); return new Response("No se pudo guardar", { status: 500 }); }
  return Response.json(next);
}
