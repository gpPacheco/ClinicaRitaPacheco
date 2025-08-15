"use client"

import { useState, useEffect, memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import BurgerButton from "./burgerButton"
import MenuItem from "./menuItem"
import DropdownItem from "./dropdownItem"
import LoginButton from "./loginButton"
import SocialMenu from "./socialMenu"

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/clinica/sobre", label: "Sobre" },
    { href: "/especialidades", label: "Especialidades" },
    { href: "/profissionais", label: "Profissionais" },
    { href: "/aprenda", label: "Aprenda" },
    { href: "/contato", label: "Contato" },
  ]

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  }

  const menuItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05
      }
    }
  }

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.header
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-clip">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div variants={logoVariants}>
            <Link href="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  src="/logo-site.png"
                  alt="Rita Pacheco Podologia"
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {menuItems.map((item, index) => (
              <motion.div key={item.href} variants={menuItemVariants}>
                <MenuItem
                  href={item.href}
                  label={item.label}
                  isActive={pathname === item.href}
                />
              </motion.div>
            ))}
            <motion.div variants={menuItemVariants}>
              <LoginButton />
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            variants={logoVariants}
          >
            <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                {menuItems.map((item, index) => (
                  <motion.div key={item.href} variants={mobileItemVariants}>
                    <DropdownItem
                      href={item.href}
                      label={item.label}
                      isActive={pathname === item.href}
                    />
                  </motion.div>
                ))}
                <motion.div variants={mobileItemVariants} className="pt-4 border-t border-gray-200">
                  <LoginButton />
                </motion.div>
                <motion.div variants={mobileItemVariants} className="pt-4">
                  <SocialMenu />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
})

Header.displayName = "Header"

export { Header }

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
