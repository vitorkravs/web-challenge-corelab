import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "CoreNotes",
  description:
    "WebApp para criação de notas, feito com o intuito de aprimorar minhas habilidades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
