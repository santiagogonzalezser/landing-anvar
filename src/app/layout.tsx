import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARIA 93 - El Nuevo Ícono de Bogotá | Apartamentos Exclusivos Parque de la 93",
  description: "Descubre el exclusivo desarrollo residencial ARIA 93 en el corazón del Parque de la 93, Chicó. 152 apartamentos de lujo, Club House premium y zona comercial. Lanzamiento privado disponible.",
  icons: {
    icon: [
      { url: '/q-equanime.png', sizes: '32x32', type: 'image/png' },
      { url: '/q-equanime.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/q-equanime.png',
    apple: '/q-equanime.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/q-equanime.png',
    },
  },
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
