// Leyenda de autoría que acompaña al copyright en el pie de cada propuesta.
export function HemeronCredit({ lang = "es" }: { lang?: "es" | "en" }) {
  return (
    <span className="whitespace-nowrap">
      {lang === "en" ? "Developed by" : "Desarrollado por"}{" "}
      <a
        href="https://hemeron.com"
        target="_blank"
        rel="noopener"
        className="underline decoration-current/40 underline-offset-[3px] transition-opacity hover:opacity-70"
      >
        hemeron.com
      </a>
    </span>
  );
}
