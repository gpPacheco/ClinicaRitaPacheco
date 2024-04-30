import { Header } from "@/app/header";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Rodape } from "@/app/footer";

const poppins = Poppins({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinica Rita Pacheco",
  description: "Clinica de podologia Rita Pacheco",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} overflow-x-hidden flex flex-col`}>
        <Header />
        <main className="w-screen h-full pt-20">{children}</main>
        <Rodape />
      </body>
    </html>
  );
}

