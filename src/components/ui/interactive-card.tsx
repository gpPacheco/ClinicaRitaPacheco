"use client"

import { memo, ReactNode, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "hover" | "elevated"
  clickable?: boolean
  onClick?: () => void
}

const InteractiveCard = memo(({ 
  children, 
  className = "", 
  variant = "default",
  clickable = false,
  onClick 
}: InteractiveCardProps) => {
  const baseClasses = "rounded-xl transition-all duration-300"
  
  const variantClasses = {
    default: "bg-white shadow-md hover:shadow-lg",
    hover: "bg-white shadow-lg hover:shadow-xl hover:-translate-y-1",
    elevated: "bg-white shadow-xl hover:shadow-2xl hover:-translate-y-2"
  }

  const cursorClass = clickable ? "cursor-pointer" : ""
  
  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${cursorClass} ${className}`

  if (clickable && onClick) {
    return (
      <motion.button
        className={finalClassName}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <motion.div
      className={finalClassName}
      whileHover={{ scale: clickable ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
})

InteractiveCard.displayName = "InteractiveCard"

// Componente auxiliar para seções com animação de entrada
interface ComfortSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade" | "slide" | "scale"
}

const ComfortSection = memo(({ 
  children, 
  className = "", 
  delay = 0, 
  animation = "fade"
}: ComfortSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClasses = () => {
    const baseClass = "transition-all duration-1000 ease-out"
    
    if (animation === "slide") {
      return `${baseClass} transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
    }
    
    if (animation === "scale") {
      return `${baseClass} transform ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`
    }
    
    // fade (default)
    return `${baseClass} ${isVisible ? "opacity-100" : "opacity-0"}`
  }

  const finalClassName = `${getAnimationClasses()} ${className}`.trim()

  return (
    <section
      ref={sectionRef}
      className={finalClassName}
    >
      {children}
    </section>
  )
})

ComfortSection.displayName = "ComfortSection"

export { InteractiveCard, ComfortSection }

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
