import { createHash, createHmac, timingSafeEqual } from "node:crypto";

// Sesión del directorio privado: cookie firmada con las credenciales del servidor.
// Cambiar PORTFOLIO_PASSWORD invalida todas las sesiones abiertas.
export const SESSION_COOKIE = "directorio";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 30;

function credentials() {
  const user = process.env.PORTFOLIO_USER;
  const pass = process.env.PORTFOLIO_PASSWORD;
  return user && pass ? { user, pass } : null;
}

export function authConfigured() {
  return credentials() !== null;
}

const digest = (value: string) => createHash("sha256").update(value).digest();
const safeEqual = (a: string, b: string) => timingSafeEqual(digest(a), digest(b));

function sign(expires: number, secret: string) {
  return createHmac("sha256", secret).update(`directorio.${expires}`).digest("base64url");
}

export function checkCredentials(user: string, pass: string) {
  const c = credentials();
  if (!c) return false;
  // Ambas comparaciones siempre se evalúan para no filtrar cuál falló.
  const okUser = safeEqual(user, c.user);
  const okPass = safeEqual(pass, c.pass);
  return okUser && okPass;
}

export function createSession() {
  const c = credentials();
  if (!c) throw new Error("PORTFOLIO_USER / PORTFOLIO_PASSWORD no configurados");
  const expires = Math.floor(Date.now() / 1000) + SESSION_MAX_AGE;
  return `${expires}.${sign(expires, `${c.user}:${c.pass}`)}`;
}

export function verifySession(token: string | undefined) {
  const c = credentials();
  if (!c || !token) return false;
  const [raw, signature] = token.split(".");
  const expires = Number(raw);
  if (!Number.isInteger(expires) || !signature || expires < Date.now() / 1000) return false;
  return safeEqual(signature, sign(expires, `${c.user}:${c.pass}`));
}
