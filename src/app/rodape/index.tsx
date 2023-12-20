"use client";

export function Rodape() {
  return (
    <div className="bg-zinc-100 w-full h-auto mt-auto">
      <img src="/ritapachecointeiro-logo.png" alt="Logo" className="h-fit" />
      <div className="text-center text-sm font-normal mx-4 my-auto flex flex-row">
        <p>
          Copyright © 2023 Todos os Direitos Reservados&nbsp;|&nbsp;
        </p>
        <a className="hover:text-orange-600 text-zinc-950" href="https://www.clinicaritapacheco.com.br/index.html"> 
          Rita Pacheco 
        </a>
      </div>
    </div>
  );
}