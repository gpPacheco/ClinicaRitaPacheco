"use client";
import { useEffect, useRef } from "react";
import { Disclosure, Transition } from "@headlessui/react";

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const BurgerButton = ({ isOpen, onClick }: Props) => (
  <button className="h-5 w-5 relative" onClick={onClick}>
    <div className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</div>
    <div
      aria-hidden="true"
      className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
        isOpen ? "rotate-45" : "-translate-y-1.5"
      }`}
    />
    <div
      aria-hidden="true"
      className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    />
    <div
      aria-hidden="true"
      className={`absolute h-0.5 w-5 bg-current transition duration-300 ease-in-out ${
        isOpen ? "-rotate-45" : "translate-y-1.5"
      }`}
    />
  </button>
);

export default BurgerButton;

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
