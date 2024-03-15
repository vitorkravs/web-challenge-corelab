import type { Metadata } from "next";
import "../global.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
