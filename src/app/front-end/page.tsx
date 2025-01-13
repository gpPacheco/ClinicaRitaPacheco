import { FaixaContato } from "./pages/components/button";
import { Procedimentos } from "@/app/front-end/pages/home/components/homeSections/procedimentos";
import { Depoimentos } from "./pages/home/components/homeSections/depoimentos";
import { Avaliacoes } from "./pages/home/components/homeSections/avaliacoes";
import { EmblaCarousel } from "./pages/home/components/carrossel";
import { Local } from "./pages/home/components/homeSections/espaco";
import { Cursos } from "./pages/home/components/homeSections/cursos";
import Location from "./pages/components/location";

export default function Home() {
  return (
    <div className="w-screen h-full flex flex-col">
      <div className="min-h-screen">
        <EmblaCarousel />
        <div className="w-full bg-[#f7f0ea] py-5">
          <FaixaContato />
        </div>
        <Procedimentos />
        <Local />
        <Cursos />
        <Depoimentos />
        <Avaliacoes />
        <div className="bg-[#dbbeb0]">
          <div className="mx-4 pb-8 rounded-lg">
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
