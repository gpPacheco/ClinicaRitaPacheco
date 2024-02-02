import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const SubmenuItem = ({ name, href }) => (
  <a href={href} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
    {name}
  </a>
);

const DropdownItem = ({ name, href, submenuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <a
        href={href}
        onClick={toggleSubMenu}
        className={`flex items-center px-2 py-2 text-sm transition duration-300 ease-in-out rounded-md ${
          isOpen 
          ? "bg-gray-900 text-white"
          : "text-black hover:bg-gray-600 hover:text-white"
        }`}
      >
        <span>{name}</span>
        {submenuItems && (
          <FaAngleDown
            className={`ml-1 transition-transform duration-300 transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        )}
      </a>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
          {submenuItems.map((item, index) => (
            <SubmenuItem key={index} name={item.name} href={item.href} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownItem;
