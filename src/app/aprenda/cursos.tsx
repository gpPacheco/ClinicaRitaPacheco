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
      titulo: "Cuidados com os Pés Diabéticos",
      descricao:
        "Dicas práticas e cuidados essenciais para manter os pés saudáveis.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-dancing font-light text-center text-comfort-accent mb-6">
        Cursos Disponíveis
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cursos.map((curso, index) => (
          <div key={index} className="bg-comfort-pearl p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-poppins font-semibold text-comfort-text mb-2">
              {curso.titulo}
            </h3>
            <p className="text-comfort-text-muted font-poppins mb-4">{curso.descricao}</p>
            <a
              href={curso.link}
              className="inline-block bg-gradient-to-r from-comfort-accent to-comfort-warm hover:from-comfort-warm hover:to-comfort-accent text-white px-4 py-2 rounded-full font-poppins transition-all duration-300 transform hover:scale-105"
            >
              Saiba mais
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
