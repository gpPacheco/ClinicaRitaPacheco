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
  FaHome,
  FaUserMd,
  FaClinicMedical,
  FaBookOpen,
  FaShoppingCart,
  FaPhone,
} from "react-icons/fa";
import { Transition as ReactTransition } from "react-transition-group";

const navigation = [
  { name: "Home", href: "/", current: true, icon: <FaHome /> },
  {
    name: "Profissionais",
    href: "/profissionais",
    current: false,
    icon: <FaUserMd />,
  },
  {
    name: "A Clinica",
    current: false,
    icon: <FaClinicMedical />,
    submenuItems: [
      { name: "Sobre", href: "/clinica/sobre" },
      { name: "Espaço", href: "/clinica/espaco" },
      { name: "Biossegurança", href: "/clinica/biosec" },
    ],
  },
  {
    name: "Especialidades",
    current: false,
    icon: <FaClinicMedical />,
    submenuItems: [
      { name: "Onicomicose", href: "/especialidades" },
      { name: "Pé de Risco", href: "/especialidades" },
      { name: "Onicocriptose", href: "/especialidades" },
      { name: "Outros Cuidados", href: "/especialidades" },
    ],
  },
  {
    name: "Aprenda conosco",
    current: false,
    icon: <FaBookOpen />,
    submenuItems: [
      { name: "Cursos", href: "/" },
      { name: "Mentorias", href: "/mentoria" },
    ],
  },
  {
    name: "Produtos",
    href: "/produtos",
    current: false,
    icon: <FaShoppingCart />,
  },
  { name: "Contato", href: "/contato", current: false, icon: <FaPhone /> },
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

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsHeaderShrunk(true);
    } else {
      setIsHeaderShrunk(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuItem = ({
    name,
    href,
    icon,
  }: {
    name: string;
    href: string;
    icon: JSX.Element;
  }) => (
    <a
      href={href}
      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-600 hover:text-white"
    >
      {icon}
      <span className="ml-2">{name}</span>
    </a>
  );

  //codigo responsavel pelas palavras com opcoes de submenu e transicoes de submenu
  const DropdownItem = ({
    name,
    href,
    submenuItems,
    icon,
  }: {
    name: string;
    href: string;
    icon: JSX.Element;
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
            "flex items-center px-3 py-2 text-sm font-medium rounded-md ",
            {
              "bg-gray-900 text-white": isOpen,
              "text-gray-700 hover:bg-gray-600 hover:text-white": !isOpen,
            }
          )}
        >
          {icon && <span className="mr-2">{icon}</span>}{" "}
          {/* Exibindo o ícone */}
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
                <div className="relative bg-[#f7f0ea] p-2 ">
                  {submenuItems &&
                    submenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-2 py-3 font-medium rounded text-gray-700 hover:bg-gray-600 hover:text-white whitespace-nowrap"
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

  // container dos submenus
  const SubmenuItem = ({ name, href }: { name: string; href: string }) => (
    <a
      href={href}
      className="block px-2 py-3 font-medium rounded text-gray-700 hover:bg-gray-200 border-b borde-gray-300 shadow-sm"
    >
      {name}
    </a>
  );

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
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sticky mt-1.5">
            <div className="relative flex h-16 items-center justify-between">
              {/* logo*/}
              <div className="flex flex-1 items-center justify-center lg:ml-20 md:ml-20 sm:ml-20">
                <div className="flex-shrink-0">
                  <Link legacyBehavior href="/">
                    <a>
                      <Image
                        className={
                          isHeaderShrunk
                            ? "max-h-16 h-full w-auto cursor-pointer transition-all motion-safe "
                            : "max-h-18 h-full w-auto cursor-pointer transition-all motion-safe "
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

              {/* Mobile menu button*/}
              <div className="absolute left-1 inset-x-0 flex">
                <Disclosure.Button
                  as={BurgerButton}
                  isOpen={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Menu</span>
                </Disclosure.Button>
                {/* Container do menu mobile com transição */}
              <Transition
                as={Fragment}
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

              {/* Redes sociais button*/}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6">
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
                    <Menu.Items className="absolute right-0 z-[102] mt-2 w-48 p-4 origin-top-right rounded-md transition-transform transform duration-300 ease-in-out bg-[#f7f0ea] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="https://api.whatsapp.com/send/?phone=5516993108637&text&type=phone_number&app_absent=0"
                            className={classNames(
                              active ? "bg-gray-600 hover:text-white rounded-md" : "",
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
                              active ? "bg-gray-600 hover:text-white rounded-md" : "",
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
                              active ? "bg-gray-600 hover:text-white rounded-md" : "",
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
                              active ? "bg-gray-600 hover:text-white rounded-md" : "",
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
                              active ? "bg-gray-600 hover:text-white rounded-md" : "",
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
