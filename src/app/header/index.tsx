"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  FaAngleDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaShareAlt,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { Transition as ReactTransition } from "react-transition-group";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Profissionais", href: "/profissionais", current: false },
  {
    name: "A Clinica",
    current: false,
    submenuItems: [
      { name: "Sobre", href: "/" },
      { name: "Spa", href: "/" },
      { name: "Biossegurança", href: "/" },
      { name: "Esterelização", href: "/" },
    ],
  },
  {
    name: "Especialidades",
    current: false,
    submenuItems: [
      { name: "Pé de Risco: Diabético", href: "/" },
      { name: "Pé Neuro-Vascular", href: "/" },
      { name: "Podologia Esportiva", href: "/" },
      { name: "Podologia Geriátrica", href: "/" },
      { name: "Podologia Hospitalar", href: "/" },
      { name: "Podologia Infantil", href: "/" },
    ],
  },
  {
    name: "Aprenda conosco",
    current: false,
    submenuItems: [
      { name: "Cursos", href: "/" },
      { name: "Mentorias", href: "/" },
    ],
  },
  { name: "Produtos", href: "produtos", current: false },

  { name: "Contato", href: "contato", current: false },
];

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

const BurgerButton = ({ isOpen, onClick }: Props) => (
  <button className="h-5 w-5" onClick={onClick}>
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

export function Header() {
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const headerShrinkThreshold = 50; // Altura em pixels em que o header começa a encolher
      setIsHeaderShrunk(offset > headerShrinkThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // reponsavel pela posicao das palavras dos submenus
  const SubmenuItem = ({ name, href }: { name: string; href: string }) => (
    <a
      href={href}
      className="block px-2 py-3 font-medium rounded text-gray-700 hover:bg-gray-200"
    >
      {name}
    </a>
  );

  //codigo responsavel pelas palavras com opcoes de submenu e transicoes de submenu
  const DropdownItem = ({
    name,
    href,
    submenuItems,
  }: {
    name: string;
    href: string;
    submenuItems: { name: string; href: string }[];
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Função para alternar o submenu
    const toggleSubMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };

    // Efeito para fechar o submenu ao clicar fora
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    return (
      <div ref={dropdownRef} className="relative">
        <a
          href={href}
          onClick={toggleSubMenu}
          className={classNames(
            "flex items-center px-3 py-2 text-sm font-medium transition duration-200 ease-in-out rounded-md",
            {
              "bg-gray-900 text-white": isOpen,
              "text-black hover:bg-gray-600 hover:text-white": !isOpen,
            }
          )}
        >
          <span>{name}</span>
          {submenuItems && submenuItems.length > 0 && (
            <FaAngleDown
              className={classNames(
                "ml-1 transition-transform duration-275 transform",
                { "rotate-180": isOpen }
              )}
            />
          )}
        </a>

        <ReactTransition
          in={isOpen}
          timeout={{ enter: 300, exit: 150 }}
          classNames="transition-opacity"
          unmountOnExit
        >
          {(state) => (
            <div
            className={classNames(
              "absolute z-10 transform w-auto max-w-md lg:max-w-2xl transition-opacity",
              {
                "opacity-100": state === "entered",
                "opacity-0": state === "exiting",
              }
            )}
          >
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative bg-white p-2">
                {submenuItems &&
                  submenuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-2 py-3 font-medium rounded text-gray-700 hover:bg-gray-200 whitespace-nowrap"
                    >
                      {item.name}
                    </a>
                  ))}
              </div>
            </div>
          </div>
          
          )}
        </ReactTransition>
      </div>
    );
  };

  return (
    <Disclosure
      as="nav"
      className={classNames(
        "bg-[#f7f0ea] shadow-md fixed top-0 left-0 right-0 z-50 transition-all motion-safe",
        {
          "h-20 duration-300 ease-in-out": !isHeaderShrunk,
          "h-16 transition-all motion-safe": isHeaderShrunk,
          "-translate-y-1.5": isHeaderShrunk,
        },
        "duration-300 ease-in-out"
      )}
    >
      {({ }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sticky top-0">
            <div className="relative flex h-16 items-center justify-between">
              {/* logo*/}
              <div className="flex flex-1 items-center justify-center lg:jsutify-start">
                <div className="flex-shrink-0 ">
                  <Link legacyBehavior href="/">
                    <a >
                      <Image
                        className={
                          isHeaderShrunk
                            ? "max-h-16 h-full w-auto cursor-pointer transition-all motion-safe"
                            : "max-h-20 h-full w-auto cursor-pointer transition-all motion-safe"
                        }
                        src="/logoRp.png"
                        alt="Clinica Rita Pacheco"
                        width={500}
                        height={300}
                        priority
                      />
                    </a>
                  </Link>
                </div>
              </div>

              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                <Disclosure.Button
                  as={BurgerButton}
                  isOpen={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Menu</span>
                </Disclosure.Button>
              </div>

              {/* Desktop menu */}
              <div className="hidden lg:ml-6 lg:flex">
                <div className="flex justify-between items-center xl:space-x-6 lg:space-x-5 md:space-x-4 sm:space-x-2 xs:space-x-1">
                  {navigation.map((item, index) =>
                    item.submenuItems ? (
                      <DropdownItem
                        key={index}
                        name={item.name}
                        href={item.href || "#"}
                        submenuItems={item.submenuItems}
                      />
                    ) : (
                      <a
                        key={index}
                        href={item.href || "#"}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black hover:bg-gray-600 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Redes sociais */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full px-1.5 py-1.5 text-gray-900 hover:bg-gray-600 hover:text-white focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only"></span>
                      <FaShareAlt className="h-5 w-5" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://api.whatsapp.com/send/?phone=5516993108637&text&type=phone_number&app_absent=0"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="flex items-center">
                              <FaWhatsapp className="mr-2" /> WhatsApp
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.instagram.com/ritafpacheco/"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="flex items-center">
                              <FaInstagram className="mr-2" /> Instagram
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.facebook.com/ritapachecopodologa"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="flex items-center">
                              <FaFacebook className="mr-2" /> Facebook
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.linkedin.com/company/clinica-rita-pacheco/"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="flex items-center">
                              <FaLinkedin className="mr-2" /> LinkedIn
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://www.tiktok.com/@ritafpachecoo"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="flex items-center">
                              <FaTiktok className="mr-2" /> TikTok
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* menu mobile container */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="bg-white shadow-md lg:hidden">
              {navigation.map((item) => (
                <Fragment key={item.name}>
                  {item.submenuItems ? (
                    <DropdownItem
                      name={item.name}
                      href={item.href || "#"}
                      submenuItems={item.submenuItems}
                    />
                  ) : (
                    <Disclosure.Button
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-black hover:bg-gray-600 hover:text-white ",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )}
                </Fragment>
              ))}
            </div>
          </Transition>
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
