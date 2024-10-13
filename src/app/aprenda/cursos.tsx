export default function Cursos() {
  const cursos = [
    {
      titulo: "Curso de Podologia Básica",
      descricao: "Aprenda os fundamentos da podologia e comece sua carreira.",
      link: "#",
    },
    {
      titulo: "Curso Avançado de Podologia",
      descricao: "Aprofunde-se em técnicas avançadas e especialize-se.",
      link: "#",
    },
    {
      titulo: "Workshop de Cuidados com os Pés",
      descricao:
        "Dicas práticas e cuidados essenciais para manter os pés saudáveis.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold text-center text-[#7b4f38] mb-6">
        Cursos Disponíveis
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cursos.map((curso, index) => (
          <div key={index} className="bg-[#fdf6f1] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#7b4f38] mb-2">
              {curso.titulo}
            </h3>
            <p className="text-gray-700 mb-4">{curso.descricao}</p>
            <a
              href={curso.link}
              className="inline-block bg-[#F2784B] hover:bg-orange-500 text-white px-4 py-2 rounded transition-transform transform hover:scale-105"
            >
              Saiba mais
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
