"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ComfortSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  delay?: number
  animation?: "fade" | "slide" | "scale"
}

export function ComfortSection({ 
  children, 
  className = "", 
  delay = 0, 
  animation = "fade", 
  ...props 
}: ComfortSectionProps) {
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
      {...props}
    >
      {children}
    </section>
  )
}
