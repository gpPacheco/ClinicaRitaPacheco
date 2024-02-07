import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';

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
  <a href={href} className="block px-4 py-3 text-gray-700 hover:bg-gray-200">
    {name}
  </a>
);

const DropdownItem: React.FC<Data> = ({ name, href, submenuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSubMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="relative">
      <a
        href={href}
        onClick={toggleSubMenu}
        className={classNames(
          'flex items-center px-2 py-2 text-sm transition duration-200 ease-in-out rounded-md',
          {
            'bg-gray-900 text-white': isOpen,
            'text-black hover:bg-gray-600 hover:text-white': !isOpen,
          }
        )}
      >
        <span>{name}</span>
        {submenuItems && submenuItems.length > 0 && (
          <FaAngleDown
            className={classNames(
              'ml-1 transition-transform duration-170 transform',
              { 'rotate-180': isOpen, 'rotate-0': !isOpen }
            )}
          />
        )}
      </a>
      <Transition
        in={isOpen}
        timeout={{
          enter: 50,
          exit: 75,
        }}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div
            className={`absolute z-10 transform w-screen max-w-md lg:max-w-2xl transition-opacity ${
              state === 'entered' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ width: '550px' }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="relative grid bg-white p-2 grid-cols-2">
                {submenuItems &&
                  submenuItems.map((item, index) => (
                    <SubmenuItem key={index} name={item.name} href={item.href} />
                  ))}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default DropdownItem;
