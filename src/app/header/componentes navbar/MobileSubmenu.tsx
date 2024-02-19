// import React, { useState } from 'react';
// import Link from 'next/link';
// import { FaAngleDown } from 'react-icons/fa';
// import classNames from 'classnames';

// interface MobileMenuSectionProps {
//   title: string;
//   submenuItems: { name: string; href: string }[];
// }

// const MobileMenuSection: React.FC<MobileMenuSectionProps> = ({ title, submenuItems }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpenSubmenu, setIsOpenSubmenu] = useState(false);

//   const [clinicaSubmenu, setClinicaSubmenu] = useState(false)

//   const toggleSubMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const  toggleSubMenuItem = () => {
//     if (!isOpen) {
//       setIsOpenSubmenu(true);
//     }
//   }

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleSubMenu}
//         className={classNames(
//           'flex items-center px-2 text-sm transition duration-200 ease-in-out rounded-md w-full focus:outline-none',
//           {
//             'bg-gray-900 text-white': isOpen,
//             'text-black hover:bg-gray-600 hover:text-white': !isOpen,
//           }
//         )}
//       >
//         <span className="flex-grow">{title}</span>
//         <FaAngleDown
//           className={classNames(
//             'ml-1 transition-transform duration-185 transform',
//             { 'rotate-180': isOpen, 'rotate-0': !isOpen }
//           )}
//         />
//       </button>
//       {isOpen && (
//         <div className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl">
//           <div className="rounded-lg shadow-lg overflow-hidden">
//             <div className="relative grid gap-6 bg-white p-5 grid-cols-2 sm:gap-8 sm:p-8">
//               {submenuItems.map((item, index) => (
//                 <button key={index} type="button" onClick={() => {setClinicaSubmenu(!clinicaSubmenu)}}>
//                   <a className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
//                     {item.name}
//                   </a>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobileMenuSection;
