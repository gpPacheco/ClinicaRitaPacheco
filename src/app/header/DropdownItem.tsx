import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';


interface SubmenuItemProps {
  name: string;
  href?: string;
}

interface Data {
  name: string;
  href?: string;
  submenuItems?: SubmenuItemProps[];
}

const SubmenuItem: React.FC<SubmenuItemProps> = ({ name, href }) => (
  <a href={href} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
    {name}
  </a>
);

const DropdownItem: React.FC<Data> = ({ name, href, submenuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <a
        href={href}
        onClick={toggleSubMenu}
        className={`flex items-center px-2 py-2 text-sm transition duration-200 ease-in-out rounded-md ${
          isOpen
            ? 'bg-gray-900 text-white'
            : 'text-black hover:bg-gray-600 hover:text-white'
        }`}
      >
        <span>{name}</span>
        {submenuItems && submenuItems.length > 0 && (
          <FaAngleDown
            className={`ml-1 transition-transform duration-180 transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        )}
      </a>
      {isOpen && submenuItems && submenuItems.length > 0 && (
        <div className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="relative grid gap-6 bg-white p-5 grid-cols-2 sm:gap-8 sm:p-8">
            {submenuItems.map((item, index) => (
              <SubmenuItem key={index} name={item.name} href={item.href} />
            ))}
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default DropdownItem;
