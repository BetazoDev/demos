"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const field =
  "h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-[15px] text-[#141414] placeholder:text-black/35 focus:border-black/50 focus:outline-none aria-[invalid=true]:border-[#B42318]/60";

export function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(login, null);
  const invalid = Boolean(state?.error);

  return (
    <form action={action} className="grid gap-4" noValidate>
      <label className="grid gap-1.5">
        <span className="text-sm text-black/60">Usuario</span>
        <input name="user" defaultValue={state?.user} autoComplete="username" autoCapitalize="none" spellCheck={false} required aria-invalid={invalid} className={field} />
      </label>
      <label className="grid gap-1.5">
        <span className="text-sm text-black/60">Contraseña</span>
        <input name="password" type="password" autoComplete="current-password" required aria-invalid={invalid} className={field} />
      </label>
      <p role="alert" className="min-h-5 text-sm text-[#B42318]">
        {state?.error}
      </p>
      <button
        type="submit"
        disabled={pending}
        className="press h-12 rounded-full bg-[#141414] text-[15px] font-medium text-white disabled:opacity-60"
      >
        {pending ? "Entrando…" : "Entrar"}
      </button>
    </form>
  );
}
