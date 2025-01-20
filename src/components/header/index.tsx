"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  FaBookOpen,
  FaBriefcaseMedical,
  FaClinicMedical,
  FaHome,
  FaPhone,
  FaShoppingCart,
  FaUserMd,
} from "react-icons/fa";
import BurgerButton from "./burgerButton";
import MenuItem from "./menuItem";
import DropdownItem from "./dropdownItem";
import SocialMenu from "./socialMenu";
// import LoginButton from './loginButton';

const navigation = [
  { name: "Home", href: "/", current: true, icon: <FaHome /> },
  {
    name: "Profissionais",
    href: "../profissionais",
    current: false,
    icon: <FaUserMd />,
  },
  {
    name: "A Clinica",
    current: false,
    icon: <FaClinicMedical />,
    submenuItems: [
      { name: "Sobre", href: "../clinica/sobre" },
      { name: "Espaço", href: "../clinica/espaco" },
      { name: "Biossegurança", href: "../clinica/biosec" },
    ],
  },
  {
    name: "Especialidades",
    href: "../especialidades",
    current: false,
    icon: <FaBriefcaseMedical />,
  },
  {
    name: "Aprenda conosco",
    href: "../aprenda",
    current: false,
    icon: <FaBookOpen />,
  },
  {
    name: "Produtos",
    href: "../produtos",
    current: false,
    icon: <FaShoppingCart />,
  },
  { name: "Contato", href: "../contato", current: false, icon: <FaPhone /> },
];

export function Header() {
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScroll = () => {
    setIsHeaderShrunk(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "bg-gradient-to-r from-[#dbbeb0] via-[#f7f0ea] to-[#dbbeb0] shadow-md fixed top-0 left-0 right-0 z-50 transition-all motion-safe",
        {
          "h-20 duration-300 ease-in-out": !isHeaderShrunk,
          "h-18 transition-all motion-safe": isHeaderShrunk,
          "-translate-y-2": isHeaderShrunk,
        },
        "duration-500 ease-in-out"
      )}
    >
      {({}) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-10 sticky mt-1.5">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1 items-center justify-center lg:ml-20 md:ml-20 sm:ml-20">
                <div className="flex-shrink-0">
                  <Link href="/" legacyBehavior>
                    <a>
                      <Image
                        className={
                          isHeaderShrunk
                            ? "max-h-10 h-full w-auto cursor-pointer transition-all motion-safe"
                            : "max-h-11 h-full w-auto cursor-pointer transition-all motion-safe"
                        }
                        src="/logoLinear.png"
                        alt="Clinica Rita Pacheco"
                        width={300}
                        height={200}
                        priority
                      />
                    </a>
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="absolute left-1 inset-x-0 flex" ref={menuRef}>
                <Disclosure.Button
                  as={BurgerButton}
                  isOpen={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                />
                <Transition
                  as={Fragment}
                  show={isOpen}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div className="absolute top-full left-0 bg-[#f7f0ea] rounded-md shadow-md mt-3 w-64 p-4 transition-transform transform duration-300 ease-in-out ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {navigation.map((item) =>
                      item.submenuItems ? (
                        <DropdownItem
                          key={item.name}
                          name={item.name}
                          href={item.href ?? "#"}
                          icon={item.icon}
                          submenuItems={item.submenuItems}
                        />
                      ) : (
                        <MenuItem
                          key={item.name}
                          name={item.name}
                          href={item.href}
                          icon={item.icon}
                        />
                      )
                    )}
                  </div>
                </Transition>
              </div>

              {/* Redes sociais button */}
              <div className="flex items-center space-x-4">
        <SocialMenu />
        {/* <LoginButton /> */}
      </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
  
}


//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
