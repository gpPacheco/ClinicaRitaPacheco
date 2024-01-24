 "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Bars3Icon } from "@heroicons/react/24/outline";
// import classNames from "classnames";
// import Image from "next/image";

// const navigation = [
//   { name: "Home", href: "/", current: true },
//   { name: "Profissionais", href: "/profissionais", current: false },
//   { name: "A Clinica", href: "/clinica", current: false },
//   { name: "Especialidades", href: "/especialidades", current: false },
//   { name: "Produtos", href: "/produtos", current: false },
//   { name: "Mentorias", href: "/mentoria", current: false },
//   { name: "Contato", href: "/contato", current: false },
// ];

// export function Header() {

//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const handleRouteChange = () => {
//         setOpen(false);
//       };
//     }
//   }, );

//   return (
//     <div className="bg-zinc-100/50 flex flex-row gap-10 justify-around fixed w-full h-20 z-50 items-center px-4 font-light">
//       <a href="/" target="_self">
//         <Image
//           src="/logo.png"
//           alt="Logo"
//           width={200}
//           height={200}
//           style={{ maxWidth: "100%", height: "auto" }}
//         />
//       </a>

//       <button
//         className="inline-flex items-center p-2 w-10 h-10 justify-center text-xs gap-15 text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-200"
//         onClick={() => setOpen(!open)}
//       >
//         <Bars3Icon className="w-6 h-6" aria-hidden="true" />
//       </button>

//       <nav
//         className={classNames("flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row", {
//           "flex": open,
//           "hidden": !open,
//         })}
//       >
//         {navigation.map((item) => (
//           <a
//             key={item.name}
//             href={item.href}
//             className={classNames(
//               item.current
//                 ? "bg-gray-900 text-white"
//                 : "text-gray-300 hover:bg-gray-700 hover:text-white",
//               "rounded-lg px-4 py-2 mt-2 md:mt-0 md:ml-4 text-sm font-semibold"
//             )}
//             aria-current={item.current ? "page" : undefined}
//             onClick={() => {
//               setOpen(false);
//               router.push(item.href);
//             }}
//           >
//             {item.name}
//           </a>
//         ))}
//       </nav>
//     </div>
//   );
// }
