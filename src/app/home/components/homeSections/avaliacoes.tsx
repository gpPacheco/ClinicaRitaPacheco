"use client";

export function Avaliacoes() {
  const avaliacoes = [
    {
      nome: "João Silva",
      comentario: "Excelente atendimento, recomendo a todos!",
      avaliacao: 5,
    },
    {
      nome: "Maria Souza",
      comentario: "Ambiente limpo e profissionais qualificados.",
      avaliacao: 4,
    },
    {
      nome: "Pedro Lima",
      comentario: "Fui muito bem atendido, serviço de qualidade.",
      avaliacao: 5,
    },
  ];

  return (
    <div className="w-full px-4 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] shadow-md">
      <div className="text-xl text-center mb-4">Avaliações dos Clientes</div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {avaliacoes.map((avaliacao) => (
          <div key={avaliacao.nome} className="text-center bg-white p-4 rounded-lg shadow-md w-60">
            <h2 className="text-lg font-semibold">{avaliacao.nome}</h2>
            <p className="text-yellow-500">{"★".repeat(avaliacao.avaliacao)}</p>
            <p className="text-gray-600 mt-2">{avaliacao.comentario}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
