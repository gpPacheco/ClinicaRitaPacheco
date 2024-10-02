import { FaixaContato } from "@/app/home/components/homeSections/faixaContato";
import { Procedimentos } from "@/app/home/components/homeSections/procedimentos";
import { Depoimentos } from "./home/components/homeSections/depoimentos";
import { Avaliacoes } from "./home/components/homeSections/avaliacoes";
import { EmblaCarousel } from "./home/components/carrossel";
import { Local } from "./home/components/homeSections/espaco";


export default function Home() {
  return (
    <div className="w-screen h-full flex flex-col">
      <div className="min-h-screen">
        <EmblaCarousel />
        <FaixaContato />
        <Procedimentos />
        <Local />
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