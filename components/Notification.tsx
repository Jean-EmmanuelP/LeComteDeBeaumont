import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface NotificationProps {
  isVisible: boolean
  onClose: () => void
}

export function Notification({ isVisible, onClose }: NotificationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "100%" }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 50, x: "100%" }}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
          className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg p-4 w-80 z-50"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-2">Coming Soon</h4>
              <p className="text-white/80 text-sm">
                This feature is coming very soon. We&apos;re currently awaiting funding to bring it to life.
              </p>
            </div>
            <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

