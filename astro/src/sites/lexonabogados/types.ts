export type Block =
  | { t: "text"; title?: string; p: string[] }
  | { t: "list"; title: string; intro?: string; items: string[] }
  | { t: "steps"; title: string; intro?: string; items: string[] }
  | { t: "benefits"; title: string; items: { h: string; d?: string }[] };

export type Group = "sanitario" | "penal" | "familiar" | "civil";

export interface Area {
  key: string;
  group: Group;
  title: string;
  /** Frase corta para tarjetas e índice */
  short: string;
  /** Entradilla de la página */
  lead: string;
  icon: string;
  blocks: Block[];
  /** Descripción meta */
  meta: string;
}
