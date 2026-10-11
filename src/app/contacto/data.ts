import { createDecipheriv, scryptSync } from "node:crypto";
import { gunzipSync } from "node:zlib";
import { PAYLOAD } from "./payload";
import type { Contact } from "./types";

// Los contactos traen teléfonos y mensajes de cada despacho y el repositorio es público,
// así que viajan cifrados (AES-256-GCM, clave derivada de PORTFOLIO_PASSWORD) y solo se abren aquí.
let contacts: Contact[] | null = null;

export function loadContacts(): Contact[] {
  if (contacts) return contacts;
  const [salt, iv, tag, data] = PAYLOAD.split(".").map((part) => Buffer.from(part, "base64"));
  const decipher = createDecipheriv("aes-256-gcm", scryptSync(process.env.PORTFOLIO_PASSWORD ?? "", salt, 32), iv);
  decipher.setAuthTag(tag);
  contacts = JSON.parse(gunzipSync(Buffer.concat([decipher.update(data), decipher.final()])).toString("utf8"));
  return contacts!;
}
