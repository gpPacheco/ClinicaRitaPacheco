import { FaixaContato } from "@/app/home/components/homeSections/faixaContato";
import { Procedimentos } from "@/app/home/components/homeSections/procedimentos";
import { Depoimentos } from "./home/components/homeSections/depoimentos";
import { Avaliacoes } from "./home/components/homeSections/avaliacoes";
import { EmblaCarousel } from "./home/components/carrossel";
import { Experiencia } from "./home/components/homeSections/experiencia";


export default function Home() {
  return (
    <div className="w-screen h-full flex flex-col">
      <div className="min-h-screen">
        <EmblaCarousel />
        <FaixaContato />
        <Experiencia />
        <Procedimentos />
        <Depoimentos />
        <Avaliacoes />
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/