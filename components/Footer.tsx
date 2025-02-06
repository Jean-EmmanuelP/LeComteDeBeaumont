import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { ppEditorialNewUltralightItalic } from "@/app/fonts"

export function Footer() {
  return (
    <footer className="w-full bg-[#141414] relative pt-[10vh]">
      {/* Video Background */}
      {/* <div className="w-full h-[300px] relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://d3phaj0sisr2ct.cloudfront.net/site/videos/footer-videos/Liquids.mp4"
        />
      </div> */}

      {/* Footer Content */}
      <div className="container mx-auto px-4 pt-48 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left Section - Navigation */}
          <div className="flex flex-col space-y-6">
            <Link href="/customers" className="text-white/70 hover:text-white text-sm transition-colors">
              Our Partners
            </Link>
            <Link href="/vision" className="text-white/70 hover:text-white text-sm transition-colors">
              Notre Vision
            </Link>
            <Link href="/technique" className="text-white/70 hover:text-white text-sm transition-colors">
              Notre Technique
            </Link>
          </div>

          {/* Middle Section - Contact */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-white/50" />
              <a
                href="mailto:contact@lecomtedebaumont.com"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                contact@lecomtedebaumont.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-white/50" />
              <a href="tel:+33123456789" className="text-white/70 hover:text-white text-sm transition-colors">
                +33 1 23 45 67 89
              </a>
            </div>
          </div>

          {/* Right Section - Empty for spacing */}
          <div></div>
        </div>

        {/* Bottom Section with Large Title and Links */}
        <div className="mt-24 flex flex-col md:flex-row justify-between items-end">
          <Link href="/">
            <h2
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-5xl text-white/80 font-light italic tracking-tighter mb-6 md:mb-0 cursor-pointer hover:text-white transition-colors`}
            >
              Le Comte de Baumont
            </h2>
          </Link>
          <div className="flex flex-wrap gap-x-4 text-xs text-white/30">
            <span>© 2025 LE COMTE DE BAUMONT</span>
            <span>/</span>
            <Link href="/terms" className="hover:text-white/50">
              TERMS OF USE
            </Link>
            <span>/</span>
            <Link href="/privacy" className="hover:text-white/50">
              PRIVACY POLICY
            </Link>
            <span>/</span>
            <Link href="/conduct" className="hover:text-white/50">
              CODE OF CONDUCT
            </Link>
            <span>/</span>
            <Link href="/status" className="hover:text-white/50">
              SYSTEM STATUS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

