import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // This effect will run on route changes
    setIsTransitioning(true)

    // Simulate the transition delay
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 300) // Adjust this value to match your transition duration

    return () => clearTimeout(timer)
  }, [pathname])

  const triggerTransition = (href: string) => {
    setIsTransitioning(true)
    // Use window.location for client-side navigation
    setTimeout(() => {
      window.location.href = href
    }, 200)
  }

  return { isTransitioning, triggerTransition }
}

