import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Rodape } from "@/components/footer";

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
      <head>
        <meta
          name="description"
          content="Podóloga em Franca, especializada em cuidados dos pés para todas as idades. Encontre serviços de podologia, podologia esportiva, geriátrica e infantil."
        />
        <meta
          name="keywords"
          content="podóloga, podologia em Franca, podóloga em franca, podologia perto de mim, , podóloga perto de mim, unha encravada, micose, cuidados dos pés, podologia esportiva, podologia geriátrica, podologia infantil, Franca, São Paulo"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Podóloga em Franca - Cuidados Completo para Seus Pés"
        />
        <meta
          property="og:description"
          content="Encontre uma podóloga em Franca especializada em unhas encravadas, micose, podologia esportiva, geriátrica e infantil. Cuidamos dos seus pés com carinho e profissionalismo."
        />
        <meta property="og:image" content="/logo-site.png" />
        <meta property="og:image:alt" content="Logo da podóloga em Franca" />
        <meta property="og:url" content="https://clinica-rita-pacheco.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="author" content="Rita Pacheco" />
        <meta property="og:site_name" content="Podóloga em Franca" />

        <link rel="icon" href="/logo-site.png" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" sizes="16x16" href="/icons/favicon-16x16.png" />
      </head>

      <body className={`${poppins.className} overflow-x-hidden flex flex-col`}>
        <Header />
        <main className="w-screen h-full pt-20">{children}</main>
        <Rodape />
      </body>
    </html>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
