"use client"

import { useState, useEffect, useCallback } from "react"

export function useCarousel(itemsLength: number, autoplayDelay = 4000) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToPrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev === 0 ? itemsLength - 1 : prev - 1))
  }, [isTransitioning, itemsLength])

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev === itemsLength - 1 ? 0 : prev + 1))
  }, [isTransitioning, itemsLength])

  const goToIndex = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentIndex(index)
    },
    [isTransitioning],
  )

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(false), 500)
      return () => clearTimeout(timeout)
    }
  }, [isTransitioning])

  useEffect(() => {
    const interval = setInterval(goToNext, autoplayDelay)
    return () => clearInterval(interval)
  }, [goToNext, autoplayDelay])

  return { currentIndex, isTransitioning, goToPrev, goToNext, goToIndex }
}
