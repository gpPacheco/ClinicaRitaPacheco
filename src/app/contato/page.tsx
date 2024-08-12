'use client'
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      // Send the form data to your server using a fetch request
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        // Handle successful submission, e.g., display a success message
        console.log('Message sent successfully!');
        // Reset the form fields
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        // Handle error, e.g., display an error message
        console.error('Failed to send message!');
      }
    } catch (error) {
      // Handle network errors, e.g., display an error message
      console.error('Network error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Fale Conosco</h1>
      <p className="mb-8">Envie suas dúvidas, sugestões e críticas</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Mensagem
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
        >
          Enviar Mensagem
        </button>
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Clínica</h2>
        <p>Av. 7 de Setembro, 650 | Sala 1</p>
        <p>Bairro São José | 14401-278</p>
        <p>Franca/SP</p>
        <ul className="mt-4">
          <li>
            <a href="tel:+551637205691">
              <i className="fas fa-phone-alt"></i> 16.3720.5691
            </a>
          </li>
          <li>
            <a href="tel:+5516993108637">
              <i className="fas fa-mobile-alt"></i> 16-99310.8637
            </a>
          </li>
          <li>
            <a href="mailto:clinica@clinicaritapacheco.com.br">
              <i className="fas fa-envelope"></i> clinica@clinicaritapacheco.com.br
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Horários</h2>
        <p>Segunda à Sexta-feira</p>
        <p>08h00-11h30</p>
        <p>13h30-18h00</p>
        <p>Horário especial: 16-99310.8637</p>
      </div>
    </div>
  );
}