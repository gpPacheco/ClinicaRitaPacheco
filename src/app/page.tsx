import { FaixaContato } from "@/app/home/components/homeSections/faixaContato";
import { Procedimentos } from "@/app/home/components/homeSections/procedimentos";
import { Depoimentos } from "./home/components/homeSections/depoimentos";
import { Avaliacoes } from "./home/components/homeSections/avaliacoes";
import { EmblaCarousel } from "./home/components/carrossel";


export default function Home() {
  return (
    <div className="w-screen h-full flex flex-col">
      <div className="min-h-screen">
        <EmblaCarousel />
        <FaixaContato />
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