export default function Mentoria() {
  return (
    <div className="max-w-4xl mx-6 my-10 text-center">
      <h2 className="text-2xl font-semibold text-[#7b4f38] mb-4">
        Mentoria Exclusiva
      </h2>
      <p className="text-gray-700 mb-4">
        Transforme sua carreira com uma mentoria exclusiva e focada nos seus
        objetivos. Juntos, vamos alcançar resultados reais!
      </p>
      <ul className="list-disc list-inside bg-[#fdf6f1] p-6 rounded-lg shadow-lg text-[#6f4f3f]">
        <li className="mb-2">Plano de carreira personalizado</li>
        <li className="mb-2">Dicas e estratégias exclusivas</li>
        <li className="mb-2">Acompanhamento contínuo e suporte</li>
        <li className="mb-2">Acesso a recursos e materiais de apoio</li>
      </ul>
      <a
        href="https://wa.me/5516993108637?text=Oi%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20mentoria%20profissional."
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-6 bg-[#F2784B] hover:bg-orange-500 text-white px-6 py-3 rounded shadow-md transition-transform transform hover:scale-105">
          Agende sua sessão
        </button>
      </a>
    </div>
  );
}
