"use client";
import { FaixaContato } from "../components/button";

export default function ContactForm() {
  return (
    <div className="px-4 py-12 bg-gradient-to-b from-[#f7f0ea] to-[#dbbeb0]">
      <h1 className="text-4xl font-light text-gray-800 sm:text-5xl lg:text-6xl text-center mb-10">
        Fale Conosco
      </h1>
      <p className="mb-8 text-center text-lg text-gray-700">
        Envie suas dúvidas e sugestões. Estamos prontos para ajudar!
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 text-center">
        <div className="mt-8">
          <h2 className="text-2xl text-gray-800 mb-4">Endereço</h2>
          <p className="text-lg text-gray-700">
            Av. 7 de Setembro, 650 | Sala 1
          </p>
          <p className="text-lg text-gray-700">Bairro São José | 14401-278</p>
          <p className="text-lg text-gray-700">Franca/SP</p>
          
        </div>

        <div className="mt-8">
          <h2 className="text-2xl text-gray-800 mb-4">
            Horários de Atendimento
          </h2>
          <p className="text-lg text-gray-700">Segunda à Sexta-feira</p>
          <p className="text-lg text-gray-700">08h00 - 11h30 | 13h30 - 18h00</p>
          <p className="text-lg text-gray-700 mt-2">
            Horário especial: (16) 99310-8637
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl text-gray-800 mb-4">
            Contato
          </h2>
          <ul className="mt-4 space-y-2 text-lg">
            <li>
              <a
                href="tel:+551637205691"
                className="hover:underline"
              >
                <i className="fas fa-phone-alt"></i> (16) 3720-5691
              </a>
            </li>
            <li>
              <a
                href="tel:+5516993108637"
                className="hover:underline"
              >
                <i className="fas fa-mobile-alt"></i> (16) 99310-8637
              </a>
            </li>
            <li>
              <a
                href="mailto:clinica@clinicaritapacheco.com.br"
                className="hover:underline"
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

      <div className="mt-12">
        <h2 className="text-2xl text-gray-800 mb-4 text-center">Localização</h2>
        <iframe
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.563340110967!2d-47.399299!3d-20.536321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b6f941d77f1b8b%3A0x5cb7286ab5cda5da!2sAv.%207%20de%20Setembro%2C%20650%20-%20S%C3%A3o%20Jos%C3%A9%2C%20Franca%20-%20SP%2C%2014401-278!5e0!3m2!1sen!2sbr!4v1696865609804!5m2!1sen!2sbr"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
