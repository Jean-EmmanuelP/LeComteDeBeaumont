"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePageTransition } from "@/hooks/usePageTransition"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const { isTransitioning } = usePageTransition()

  return (
    <>
      {children}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{ opacity: 1, filter: "blur(1px)" }}
            exit={{ opacity: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/5"
          />
        )}
      </AnimatePresence>
    </>
  )
}

