"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaAngleDown, FaShareAlt, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTiktok, FaBookOpen, FaBriefcaseMedical, FaClinicMedical, FaHome, FaPhone, FaShoppingCart, FaUserMd } from "react-icons/fa";
import BurgerButton from './burgerButton'; // Importar o BurgerButton
import MenuItem from './MenuItem'; // Importar o MenuItem
import DropdownItem from './dropdownItem'; // Importar o DropdownItem

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
    href: "/especialidades",
    current: false,
    icon: <FaBriefcaseMedical />,
  },
  {
    name: "Aprenda conosco",
    href: "/aprenda",
    current: false,
    icon: <FaBookOpen />,
  },
  {
    name: "Produtos",
    href: "/produtos",
    current: false,
    icon: <FaShoppingCart />,
  },
  { name: "Contato", href: "/contato", current: false, icon: <FaPhone /> },
];

export function Header() {
  const [isHeaderShrunk, setIsHeaderShrunk] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 sticky mt-1.5">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1 items-center justify-center lg:ml-20 md:ml-20 sm:ml-20">
                <div className="flex-shrink-0">
                  <Link href="/" legacyBehavior>
                    <a>
                      <Image
                        className={
                          isHeaderShrunk
                            ? "max-h-12 h-full w-auto cursor-pointer transition-all motion-safe "
                            : "max-h-14 h-full w-auto cursor-pointer transition-all motion-safe "
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
              <div className="absolute left-1 inset-x-0 flex">
                <Disclosure.Button
                  as={BurgerButton}
                  isOpen={isOpen}
                  onClick={() => setIsOpen(!isOpen)}
                />
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

              {/* Redes sociais button */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full px-1.5 py-1.5 text-gray-900 hover:bg-gray-600 hover:text-white focus:outline-none">
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
                      {/* Outros itens de menu social... */}
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
                            href="https://www.tiktok.com/@ritapacheco"
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
