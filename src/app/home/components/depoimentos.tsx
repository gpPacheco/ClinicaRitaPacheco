"use client"
import { useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export function Depoimentos() {
  const depoimentos = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/D1AOCszhNKs",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/9DXSue6Q5MU",
    },
  ];

  // Função para extrair o ID do vídeo do YouTube
  const getYouTubeID = (url: string) => {
    const match = url.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : "";
  };

  return (
    <div className="py-6 bg-gradient-to-b from-[#f7f0ea] via-[#dbbeb0] to-[#f7f0ea] p-3">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-light text-gray-800 text-center mb-5">
          O que dizem nossos pacientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {depoimentos.map((depoimento) => {
            const videoId = getYouTubeID(depoimento.videoUrl);
            return (
              <div
                key={depoimento.id}
                className="relative rounded-md overflow-hidden shadow-md"
              >
                <LiteYouTubeEmbed
                  id={videoId}
                  title={`Depoimento ${depoimento.id}`}
                  poster="maxresdefault" // Opcional: define thumbnail de qualidade
                  wrapperClass="yt-lite w-full aspect-video"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
