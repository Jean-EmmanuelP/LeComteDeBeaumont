"use client"

import { useState, useEffect } from "react"
import { MaterialCard } from "./MaterialCard"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"

interface GranitElement {
  granit_id: number
  granit_title: string
  granit_description: string
  granit_image: string
}

export function GranitElements() {
  const [granitElements, setGranitElements] = useState<GranitElement[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGranitElements = async () => {
      try {
        const { data, error } = await supabase.rpc("get_granit_elements")
        if (error) {
          console.error("Error fetching granit elements:", error)
          setError("Failed to fetch granit elements")
        } else {
          console.log("Granit elements data:", data)
          setGranitElements(data)
        }
      } catch (err) {
        console.error("Unexpected error:", err)
        setError("An unexpected error occurred")
      }
    }

    fetchGranitElements()
  }, [])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (!granitElements) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-white/5 animate-pulse border border-white/10" />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h3 className="text-xl sm:text-2xl text-white/90 font-light">Select Your Material</h3>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {granitElements.map((element) => (
          <MaterialCard
            key={element.granit_id}
            title={element.granit_title}
            description={element.granit_description}
            image={element.granit_image}
          />
        ))}
      </motion.div>
    </div>
  )
}

