"use client";
import { FaixaContato } from "@/components/faixaContato";
import Location from "@/components/location";

export default function ContactForm() {
  return (
    <div className="px-4 py-10 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0]">
      <h1 className="text-4xl font-light text-gray-800 sm:text-5xl lg:text-6xl text-center mb-5">
        Fale Conosco
      </h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Envie suas dúvidas e sugestões. Estamos prontos para ajudar!
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 text-center">
        <div className="bg-[#dbbeb0] w-80 p-6 mx-auto rounded-lg shadow-md h-auto flex flex-col justify-between">
          <h2 className="text-2xl text-gray-800">Endereço</h2>
          <div>
            <p className="text-lg text-gray-700">
              Av. 7 de Setembro, 650 | Sala 1
            </p>
            <p className="text-lg text-gray-700">Bairro São José | 14401-278</p>
            <p className="text-lg text-gray-700">Franca/SP</p>
          </div>
        </div>

        <div className="bg-[#dbbeb0] w-80 p-6 mx-auto rounded-lg shadow-md flex-grow flex flex-col justify-between">
          <h2 className="text-2xl text-gray-800">Horários de Atendimento</h2>
          <div>
            <p className="text-lg text-gray-700">Segunda à Sexta-feira</p>
            <p className="text-lg text-gray-700">
              08h00 - 11h30 | 13h30 - 18h00
            </p>
          </div>
        </div>

        <div className="bg-[#dbbeb0] w-80 p-6 mx-auto rounded-lg shadow-md h-auto flex flex-col justify-between">
          <h2 className="text-2xl text-gray-800">Contato</h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>
              <a
                href="tel:+551637205691"
                className="hover:underline text-gray-700"
              >
                <i className="fas fa-phone-alt"></i> (16) 3720-5691
              </a>
            </li>
            <li>
              <a
                href="tel:+5516993108637"
                className="hover:underline text-gray-700"
              >
                <i className="fas fa-mobile-alt"></i> (16) 99310-8637
              </a>
            </li>
            <li>
              <a
                href="mailto:clinica@clinicaritapacheco.com.br"
                className="hover:underline text-gray-700 text-base"
              >
                <i className="fas fa-envelope"></i>{" "}
                clinica@clinicaritapacheco.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <FaixaContato />
      </div>

      <div className="mt-5">
        <Location />
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
