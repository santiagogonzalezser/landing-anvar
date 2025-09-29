import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apartamentos - ARIA 93 | Modelos y Planos Exclusivos",
  description: "Explora los diferentes modelos de apartamentos en ARIA 93. Desde estudios hasta apartamentos con terraza en el corazón del Parque de la 93, Chicó.",
};

export default function ApartamentosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}