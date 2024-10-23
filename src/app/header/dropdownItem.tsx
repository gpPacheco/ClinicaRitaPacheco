import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import classNames from "classnames";
import { Transition as ReactTransition } from "react-transition-group";

type DropdownItemProps = {
  name: string;
  href: string;
  icon: JSX.Element;
  submenuItems: { name: string; href: string }[];
};

// submenu item "A clinica"
const DropdownItem = ({
  name,
  href,
  icon,
  submenuItems,
}: DropdownItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSubMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

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
          "flex items-center px-3 py-2 text-sm font-medium rounded-md",
          {
            "bg-gray-900 text-white": isOpen,
            "text-gray-700 hover:bg-gray-600 hover:text-white": !isOpen,
          }
        )}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <span>{name}</span>
        {submenuItems && submenuItems.length > 0 && (
          <FaAngleDown
            className={classNames(
              "ml-1 transition-transform duration-275 transform",
              {
                "rotate-180": isOpen,
              }
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
              <div className="relative bg-[#f7f0ea] p-2">
                {submenuItems.map((item, index) => (
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

export default DropdownItem;

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
