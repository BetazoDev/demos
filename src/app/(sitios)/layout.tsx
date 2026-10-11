import { DemoBadge } from "@/components/demo-badge";

// Todas las propuestas llevan el botón flotante que las identifica como demo de Hemeron.
export default function SitiosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <DemoBadge />
    </>
  );
}
