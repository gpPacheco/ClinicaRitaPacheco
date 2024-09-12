'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Sobre() {
  const images = [
    '/images/espaco1.jpg',
    '/images/espaco2.jpg',
    '/images/espaco3.jpg',
  ];

  return (
    <div className="sobre-container">
      <section className="texto-sobre">
        <h1>Sobre a Clínica Rita Pacheco</h1>
        <div className="missao-visao-valores">
          <div className="missao">
            <h2>Missão</h2>
            <p>Nossa missão é proporcionar cuidado e bem-estar através de tratamentos de saúde podológica de qualidade, focados na satisfação e segurança dos nossos pacientes.</p>
          </div>
          <div className="visao">
            <h2>Visão</h2>
            <p>Ser referência em podologia, reconhecida pela excelência dos serviços e pelo ambiente acolhedor.</p>
          </div>
          <div className="valores">
            <h2>Valores</h2>
            <ul>
              <li>Ética e respeito</li>
              <li>Excelência no atendimento</li>
              <li>Dedicação e profissionalismo</li>
              <li>Responsabilidade social</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="carrossel">
        <h2>Conheça o Espaço</h2>
        <Swiper spaceBetween={50} slidesPerView={1}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image} alt={`Espaço ${index + 1}`} width={600} height={400} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <style jsx>{`
        .sobre-container {
          padding: 2rem;
          text-align: center;
        }
        .texto-sobre {
          margin-bottom: 2rem;
        }
        .missao-visao-valores {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .missao, .visao, .valores {
          width: 30%;
        }
        .carrossel {
          margin-top: 3rem;
        }
      `}</style>
    </div>
  );
}
