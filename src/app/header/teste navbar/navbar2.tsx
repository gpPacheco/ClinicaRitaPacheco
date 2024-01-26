// "use client";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Lks } from "./links";
// import Image from "next/image";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa"; 

// export function Header() {
//   const router = useRouter();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [menuVisible, setMenuVisible] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const screenSizeThreshold = 768;
//       setIsMobileMenuOpen(window.innerWidth <= screenSizeThreshold);
//     };

//     if (typeof window !== 'undefined') {
//       window.addEventListener("resize", handleResize);
//       handleResize();

//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     }
//   }, []);

//   const toggleMenuVisibility = () => {
//     setMenuVisible(!menuVisible);
//   };

//   function navigate(link: string) {
//     router.push(link);
//     setIsMobileMenuOpen(false);
//   }

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

//       {isMobileMenuOpen ? (
//         <div>
//           <button
//             data-collapse-toggle="navbar-default"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-xs gap-15 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-200"
//             aria-controls="navbar-default"
//             aria-expanded="false"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <FaAngleUp className="w-5 h-5" />
//             ) : (
//               <FaAngleDown className="w-5 h-5" />
//             )}
//           </button>
//         </div>
//       ) : (
//         <>
//           <Lks onClick={() => navigate("/")}>HOME</Lks>
//           <Lks onClick={() => navigate("/profissionais")}>PROFISSIONAIS</Lks>
//           <Lks onClick={() => navigate("/clinica")}>A CLINICA</Lks>
//           <button className="relative inline-block group">
//             <div
//               className="flex"
//               onClick={toggleMenuVisibility} // Função para mostrar/ocultar o menu
//             >
//               <span>ESPECIALIDADES</span>
//               <FaAngleDown className="ml-1" />
//             </div>
//             <div
//               className={`absolute ${menuVisible ? "block" : "hidden"
//                 } bg-white shadow-md py-2 mt-2 space-y-4 opacity-70 w-48 h-auto`}
//             >
//               <Lks onClick={() => navigate("especialidades/pe-de-risco")}>
//                 Pé de Risco: Diabético / Neuro-Vascular
//               </Lks>
//               <Lks onClick={() => navigate("/podologia-esportiva")}>
//                 Podologia Esportiva
//               </Lks>
//               <Lks onClick={() => navigate("/podologia-infantil")}>
//                 Podologia Infantil
//               </Lks>
//               <Lks onClick={() => navigate("/podologia-geriatrica")}>
//                 Podologia Geriátrica
//               </Lks>
//               <Lks onClick={() => navigate("/podologia-hospitalar")}>
//                 Podologia Hospitalar
//               </Lks>
//             </div>
//           </button>

//           <Lks onClick={() => navigate("/produtos")}>PRODUTOS</Lks>
//           <Lks onClick={() => navigate("/mentoria")}>MENTORIAS</Lks>
//           <Lks onClick={() => navigate("/contato")}>CONTATO</Lks>
//         </>
//       )}
//     </div>
//   );
// }