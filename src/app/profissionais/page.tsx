'use client'

import React, { useState } from "react";

export default function Profissionais() {
  const [profissionais, setProfissionais] = useState([
    { id: 1, nome: "Rita Fernandes Rosa Pacheco", especialidade: "Podóloga" },
    { id: 2, nome: "Profissional 2", especialidade: "Especialidade 2" },
    // Adicione mais profissionais conforme necessário
  ]);

  return (
    <div className="">
      <h1>Profissionais</h1>
      <section className="cards">
        {/* Mapeia a lista de profissionais e renderiza um card para cada um */}
        {profissionais.map((profissional) => (
          <div key={profissional.id} className="card">
            <h2>{profissional.nome}</h2>
            <p>Especialidade: {profissional.especialidade}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
