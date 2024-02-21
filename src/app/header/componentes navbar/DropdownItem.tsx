// import { useState } from "react";
// import { Transition } from "react-transition-group";
// import { FaAngleDown } from "react-icons/fa";
// import classNames from "classnames";

// interface SubmenuItemProps {
//   name: string;
//   href?: string;
// }

// interface Data {
//   name: string;
//   href?: string;
//   submenuItems?: SubmenuItemProps[];
// }

// const SubmenuItem: React.FC<SubmenuItemProps> = ({ name, href }) => (
//   <a href={href} className="block px-4 py-3 text-gray-700 hover:bg-gray-200">
//     {name}
//   </a>
// );

// const DropdownItem: React.FC<Data> = ({ name, href, submenuItems }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSubMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
//     e.preventDefault();
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative">
//       <a
//         href={href}
//         onClick={toggleSubMenu}
//         className={classNames(
//           "flex items-center px-2 py-2 text-sm transition duration-200 ease-in-out rounded-md",
//           {
//             "bg-gray-900 text-white": isOpen,
//             "text-black hover:bg-gray-600 hover:text-white": !isOpen,
//           }
//         )}
//       >
//         <span>{name}</span>
//         {submenuItems && submenuItems.length > 0 && (
//           <FaAngleDown
//             className={classNames(
//               "ml-1 transition-transform duration-170 transform",
//               { "rotate-180": isOpen }
//             )}
//           />
//         )}
//       </a>
//       <Transition in={isOpen} timeout={200} unmountOnExit>
//         {(state) => (
//           <div
//             className={classNames(
//               "absolute z-10 transform w-screen max-w-md lg:max-w-2xl transition-opacity",
//               {
//                 "opacity-100": state === "entered",
//                 "opacity-0": state === "exiting",
//               }
//             )}
//             style={{ width: "550px" }}
//           >
//             <div className="rounded-lg shadow-lg overflow-hidden">
//               <div className="relative grid bg-white p-2 grid-cols-2">
//                 {submenuItems &&
//                   submenuItems.map((item, index) => (
//                     <SubmenuItem key={index} name={item.name} href={item.href} />
//                   ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </div>
//   );
// };

// export default DropdownItem;
