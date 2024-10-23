import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  FaShareAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import classNames from "classnames";

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://api.whatsapp.com/send/?phone=5516993108637&text&type=phone_number&app_absent=0",
    icon: <FaWhatsapp />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ritafpacheco/",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ritapachecopodologa",
    icon: <FaFacebook />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/clinica-rita-pacheco/",
    icon: <FaLinkedin />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ritapacheco",
    icon: <FaTiktok />,
  },
];

export default function SocialMenu() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6">
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative flex transform transition-transform duration-150 hover:scale-110 active:scale-90">
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
            {socialLinks.map((link) => (
              <Menu.Item key={link.name}>
                {({ active }) => (
                  <a
                    href={link.href}
                    className={classNames(
                      active ? "bg-gray-600 hover:text-white rounded-md" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="flex items-center">
                      {link.icon} <span className="ml-2">{link.name}</span>
                    </span>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
