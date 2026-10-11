"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { checkCredentials, createSession, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/directory-auth";

// `user` vuelve al formulario: React lo reinicia tras cada envío.
export type LoginState = { error: string; user: string } | null;

export async function login(_prev: LoginState, form: FormData): Promise<LoginState> {
  const user = String(form.get("user") ?? "").trim();
  const pass = String(form.get("password") ?? "");

  if (!checkCredentials(user, pass)) {
    // Freno ligero contra intentos repetidos.
    await new Promise((resolve) => setTimeout(resolve, 700));
    return { error: "Usuario o contraseña incorrectos.", user };
  }

  (await cookies()).set(SESSION_COOKIE, createSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  redirect("/");
}
