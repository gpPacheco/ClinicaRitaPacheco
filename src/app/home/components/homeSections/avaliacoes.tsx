  "use client";
  import { useState, useEffect } from "react";
  import { ChevronLeft, ChevronRight } from "lucide-react";
  import { FaGoogle } from "react-icons/fa";

  export function Avaliacoes() {
    const avaliacoes = [
      {
        nome: "Carla Criss",
        comentario: "Eu fiquei apaixonada pelo atendimento, além de resolver meu problema. Não tem o que reclamar!",
        avaliacao: 5,
      },
      {
        nome: "Elaine Nascimento",
        comentario: "Excelente!! Muito profissional no que faz e no que fala explica antes de fazer o procedimento deixando o paciente tranquilo.",
        avaliacao: 5,
      },
      {
        nome: "Fernando César Raymundo",
        comentario: "Eu como médico, cirurgião vascular, não só indico como também confio meus pés à equipe do SPA DOS PÉS RITA PACHECO.",
        avaliacao: 5,
      },
      {
        nome: "Milena Vieira da Silva",
        comentario: "Atendimento maravilhoso ! Equipe muito simpática e o trabalho é sensacional!",
        avaliacao: 5,
      },
      {
        nome: "Leticia Serafim",
        comentario: "Excelente atendimento, solucionando o problema de imediato, acompanhando para saber como está se sentindo se houve melhoras.",
        avaliacao: 5,
      },
      {
        nome: "Ana Elisa Radi",
        comentario: "Rita foi incrível, super profissional e muito amável com minhas filhas.",
        avaliacao: 5,
      },
      {
        nome: "Eduardo Miron",
        comentario: "Clinica excelente , profissionais super qualificados, experiência nota 10",
        avaliacao: 5,
      },
      {
        nome: "Adriana Bassi",
        comentario: "Atendimento de primeira. Todas as dúvidas são sanadas, muito atenciosa.  Recomendo muito.",
        avaliacao: 5,
      },
      {
        nome: "Gleice Cristina",
        comentario: "Uma clínica maravilhosa, e profissionais nota 10 sem comentários....❤️",
        avaliacao: 5,
      },
      {
        nome: "Elisangela Rosa",
        comentario: "Excelente profissional, conseguiu resolver o problema da unha do meu bebê de 8 meses, super indico!!!",
        avaliacao: 5,
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
      const intervalId = setInterval(() => {
        goToNext();
      }, 4000);

      return () => clearInterval(intervalId);
    });

    const goToPrev = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? avaliacoes.length - 1 : prevIndex - 1
      );
    };

    const goToNext = () => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === avaliacoes.length - 1 ? 0 : prevIndex + 1
      );
    };

    useEffect(() => {
      const timeout = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timeout);
    }, [currentIndex]);

    return (
      <div className="w-full px-1 py-5 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0] min-h-[250px]">
        <div className="text-3xl font-light text-gray-800 text-center mb-2">
          Avaliações dos Clientes
        </div>
        <div className="relative overflow-hidden w-full max-w-[400px] mx-auto">
          <button
            className="absolute text-zinc-500 hover:text-zinc-700 transition duration-200 top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 p-1 rounded-full z-10"
            onClick={goToPrev}
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className={`flex transition-transform duration-500 ease-in-out ${isTransitioning ? "" : "transition-none"}`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {avaliacoes.map((avaliacao, index) => (
              <div key={index} className="flex-shrink-0 w-full p-4">
                <div className="text-center bg-white p-4 rounded-lg shadow-md h-64 justify-between">
                  <h2 className="text-lg font-semibold">{avaliacao.nome}</h2>
                  <div className="flex items-center justify-center mb-2">
                    <FaGoogle className="text-blue-500 mr-2" />
                    <span className="text-sm text-gray-600">Avaliação Verificada no Google</span>
                  </div>
                  <p className="text-yellow-500">{"★".repeat(avaliacao.avaliacao)}</p>
                  <p className="text-gray-600 mt-2">{avaliacao.comentario}</p>
                  <p className="text-gray-600 mt-2 line-clamp-3"></p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute text-zinc-500 hover:text-zinc-700 transition duration-200 top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 p-1 rounded-full z-10 shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    );
  }
