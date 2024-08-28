import { EmblaCarousel } from "@/app/home/components/carrossel";
import { FaixaContato } from "@/app/home/components/homeSections/faixaContato";
import { Procedimentos } from "@/app/home/components/homeSections/procedimentos";
import { Depoimentos } from "./home/components/homeSections/depoimentos";

export default function Home() {
  return (
    <div className="w-screen h-full flex flex-col">
      <div className="min-h-screen">
        <EmblaCarousel />
        <FaixaContato />
        <Procedimentos />
        <Depoimentos />
      </div>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/