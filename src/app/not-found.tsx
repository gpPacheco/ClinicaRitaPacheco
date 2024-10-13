import React from 'react';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0]">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Página não encontrada</h1>
        <p className="text-lg text-gray-600">Desculpe, a página que você está procurando não existe.</p>
        <p>
          Clique&nbsp;
          <a className="hover:text-orange-600 text-zinc-950 font-bold underline" href="/">
            aqui
          </a>
          &nbsp;para ser redirecionado à página inicial!
        </p>
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/