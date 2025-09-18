import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ÁNVAR 93 - El Nuevo Ícono de Bogotá | Apartamentos Exclusivos Parque de la 93",
  description: "Descubre el exclusivo desarrollo residencial ÁNVAR 93 en el corazón del Parque de la 93, Chicó. 152 apartamentos de lujo, Club House premium y zona comercial. Pre-venta privada disponible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: '"Century Gothic", "Lato", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
