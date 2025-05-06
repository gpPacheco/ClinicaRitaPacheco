"use client";
import Image from "next/legacy/image";
import { Carousel } from "primereact/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Local() {
  type CarouselItem = {
    id: string;
    image: string;
    title: string;
  };

  const carouselTemplate = (carousel: CarouselItem) => {
    return (
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="carousel-item flex justify-center px-2"
        key={carousel.id}
      >
        <div className="relative rounded-xl overflow-hidden shadow-xl group">
          <Image
            src={carousel.image}
            alt={`Imagem ${carousel.id}`}
            width={800}
            height={500}
            className="object-cover w-full h-[28rem] md:h-96 transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
            <h3 className="text-white text-2xl font-light font-playfair">
              {carousel.title}
            </h3>
          </div>
        </div>
      </motion.div>
    );
  };

  const carouselEspacoGeral = [
    { id: "1", image: "/sobre/1.jpg", title: "Recepção" },
    { id: "2", image: "/sobre/3.jpg", title: "Recepção" },
    { id: "3", image: "/spa/9.jpg", title: "Relaxamento" },
    { id: "4", image: "/spa/4.jpg", title: "Spa" },
    { id: "5", image: "/sobre/21.jpg", title: "Spa dos Pés" },
    { id: "6", image: "/sobre/10.jpg", title: "Atendimento"},
    { id: "7", image: "/podologia_infantil/2.jpg", title: "Infantil" },
    { id: "8", image: "/spa/7.jpg", title: "Spa" },
    { id: "9", image: "/spa/11.jpg", title: "Spa" },
    { id: "10", image: "/sobre/9.jpg", title: "Relaxamento" },
  ];

  return (
    <div className="px-1 py-16 bg-gradient-to-b from-[#dbbeb0] via-[#f7f0ea] to-[#dbbeb0]">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-light text-center mb-12 font-playfair text-gray-800">
          Conheça nosso{" "}
          <Link
            href="/clinica/espaco"
            className="font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 hover:text-orange-700 transition-colors duration-300"
          >
            espaço
          </Link>
        </h1>
  
        <div className="w-full px-0 sm:px-6 relative">
          {/* Absolute navs only in mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10 md:hidden pl-2">
            <ChevronLeft
              size={40}
              className="text-white/70 hover:text-orange-300 transition duration-200"
              onClick={() =>
                document.querySelector(".custom-carousel .p-carousel-prev")?.dispatchEvent(new Event("click", { bubbles: true }))
              }
            />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-10 md:hidden pr-2">
            <ChevronRight
              size={40}
              className="text-white/70 hover:text-orange-300 transition duration-200"
              onClick={() =>
                document.querySelector(".custom-carousel .p-carousel-next")?.dispatchEvent(new Event("click", { bubbles: true }))
              }
            />
          </div>
  
          <Carousel
            value={carouselEspacoGeral}
            numVisible={1}
            numScroll={1}
            circular
            autoplayInterval={5000}
            itemTemplate={carouselTemplate}
            className="custom-carousel mx-auto"
            prevIcon={
              <ChevronLeft
                size={40}
                className="text-black/30 hover:text-orange-300 transition duration-200 p-0 hidden md:block"
              />
            }
            nextIcon={
              <ChevronRight
                size={40}
                className="text-black/30 hover:text-orange-300 transition duration-200 p-0 hidden md:block"
              />
            }
          />
        </div>
  
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-center mt-10"
        >
          <Link
            href="/clinica/espaco"
            className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium font-montserrat shadow-lg hover:shadow-xl transition"
          >
            Visite Virtualmente
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}