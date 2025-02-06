"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useState } from "react"

interface MaterialCardProps {
  title: string
  description: string
  image: string
  onSelect?: () => void
}

export function MaterialCard({ title, description, image, onSelect }: MaterialCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative aspect-square cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Base Image */}
      <div className="absolute inset-0 overflow-hidden border border-white/10">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-light text-white mb-2">{title}</h3>
          <p className="text-sm text-white/70 line-clamp-3">{description}</p>
        </div>
      </motion.div>

      {/* Like Button */}
      <motion.button
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <Heart className="w-6 h-6" />
      </motion.button>
    </motion.div>
  )
}

