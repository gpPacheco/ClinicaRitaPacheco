"use client";
import { useState, useEffect, Fragment, Key } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Link from "next/link";
import Image from 'next/image';
import { FaAngleDown, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Transition as ReactTransition } from "react-transition-group";

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Profissionais', href: '/profissionais', current: false },
  {
    name: 'A Clinica', current: false, submenuItems: [
      { name: 'Sobre', href: '/' },
      { name: 'Spa', href: '/' },
      { name: 'Biossegurança', href: '/' },
      { name: 'Esterelização', href: '/' },
    ]
  },
  {
    name: 'Especialidades', current: false, submenuItems: [
      { name: 'Pé de Risco: Diabético', href: '/' },
      { name: 'Pé Neuro-Vascular', href: '/' },
      { name: 'Podologia Esportiva', href: '/' },
      { name: 'Podologia Geriátrica', href: '/' },
      { name: 'Podologia Hospitalar', href: '/' },
      { name: 'Podologia Infantil', href: '/' },
    ]
  },
  {
    name: 'Aprenda conosco', current: false, submenuItems: [
      { name: 'Cursos', href: '/' },
      { name: 'Mentorias', href: '/' },
    ]
  },
  { name: 'Produtos', href: 'produtos', current: false },

  { name: 'Contato', href: 'contato', current: false },
];

export function Header() {
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);

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

  const SubmenuItem = ({ name, href }: { name: string; href: string }) => (
    <a href={href} className="block px-4 py-3 text-gray-700 hover:bg-gray-200">
      {name}
    </a>
  );

  const DropdownItem = ({ name, href, submenuItems }: { name: string; href: string; submenuItems: { name: string; href: string; }[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSubMenu = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };
    return (
      <div className="relative">
        <a
          href={href}
          onClick={toggleSubMenu}
          className={classNames(
            "flex items-center px-2 py-2 text-sm transition duration-200 ease-in-out rounded-md",
            { //coidgo responsavel pelas palavras que tem a funcao de submenu:
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
          timeout={{ enter: 300, exit: 150 }} // Tempo de duração da transição
          classNames="transition-opacity transition duration-150 ease-out hover:ease-in" // Classe para animação de opacidade
          unmountOnExit
        >
          {(state) => (
            <div
              className={classNames(
                "absolute z-10 transform w-screen max-w-md lg:max-w-2xl transition-opacity",
                {
                  "opacity-100": state === "entered",
                  "opacity-0": state === "exiting",
                }
              )}
              style={{ width: "550px" }}
            >
              <div className="rounded-lg shadow-lg overflow-hidden">
                <div className="relative grid bg-white p-2 grid-cols-2">
                  {submenuItems &&
                    submenuItems.map((item: { name: any; href: any; }, index: Key | null | undefined) => (
                      <SubmenuItem key={index} name={item.name} href={item.href} />
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
      className={classNames("bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all motion-safe",
        {
          "h-20 duration-300 ease-in-out": !isHeaderShrunk, // Altura normal do navbar quando não encolhido
          "h-16 transition-all motion-safe": isHeaderShrunk, // Altura reduzida do navbar quando encolhido
          "-translate-y-1.5": isHeaderShrunk, // Move o navbar para cima quando encolhido
        },
        "duration-300 ease-in-out" // Adiciona a propriedade transition-timing-function
      )}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sticky top-0"> {/* Adicionando a classe sticky e top-0 */}
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-zinc-100/50 hover:text-gray-600">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Menu</span>
                  {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                  <Link legacyBehavior href="/">
                    <a>
                      <Image
                        className={isHeaderShrunk ? "h-10 w-auto cursor-pointer transition-all motion-safe" : "h-12 w-auto cursor-pointer transition-all motion-safe"}
                        src="/logo.png"
                        alt="Clinica Rita Pacheco"
                        width={500}
                        height={300}
                      />
                    </a>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block sm:items-stretch">
                  {/* Desktop menu */}
                  <div className="flex space-x-4">
                    {navigation.map((item) =>
                      item.submenuItems ? (
                        <DropdownItem
                          key={item.name}
                          name={item.name}
                          href={item.href || '#'} // Defina um valor padrão, como '#', caso href seja undefined
                          submenuItems={item.submenuItems}
                        />
                      ) : (
                        <a
                          key={item.name}
                          href={item.href || '#'} // Defina um valor padrão, como '#', caso href seja undefined
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-black hover:bg-gray-600 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      )
                    )}

                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-zinc-100/50 text-sm focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only"></span>
                      <Image
                        className="h-10 w-10 rounded-full"
                        src="/marca.png"
                        alt="Redes Sociais"
                        width={500}
                        height={200}
                      />
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
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {/* menu mobile container */}
            <div className="bg-white shadow-md sm:hidden">
              {navigation.map((item) => (
                <Fragment key={item.name}>
                  {item.submenuItems ? (
                    <DropdownItem
                      name={item.name}
                      href={item.href || '#'}
                      submenuItems={item.submenuItems}
                    />
                  ) : (
                    <Disclosure.Button
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-600 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
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
// |_________/     
// /_/_/ /_/_/