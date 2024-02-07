"use client";
import { useState, useEffect, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Link from "next/link";
import Image from 'next/image';
import DropdownItem from './DropdownItem';
import MobileSubmenu from './MobileSubmenu';

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
    name: 'Especializações', current: false, submenuItems: [
      { name: 'Cursos', href: '/' },
      { name: 'Mentorias', href: '/' },

    ]
  },
  { name: 'Produtos', href: 'produtos', current: false },

  { name: 'Contato', href: 'contato', current: false },
];

export function Header() {
  const [isHeaderOpaque, setIsHeaderOpaque] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const headerHeight = 20;
      setIsHeaderOpaque(offset < headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={classNames('bg-zinc-100/60 fixed w-full h-20 z-50', {
        'bg-zinc-100': isHeaderOpaque,
      })}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                        className="h-8 w-auto cursor-pointer"
                        src="/logo.png"
                        alt="Clinica Rita Pacheco"
                        width={500}
                        height={300}
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block sm:items-stretch">
                  <div className="flex space-x-4">
                    {navigation.map((item) =>
                      item.submenuItems ? (
                        <DropdownItem
                          key={item.name}
                          name={item.name}
                          href={item.href}
                          submenuItems={item.submenuItems}
                        />
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-900 hover:bg-gray-600 hover:text-white ransition duration-300 ease-in-out',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-zinc-100/50 text-sm focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">User menu</span>
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
                            WhatsApp
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
                            Instagram
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
                            Facebook
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
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden bg-zinc-100/75 y-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-black hover:bg-gray-600 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                    {/* Verifica se o item possui submenus */}
                    {item.submenuItems && (
                      <MobileSubmenu submenuItems={item.submenuItems} title={"-------------------------------------------------------------"} />
                    )}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}