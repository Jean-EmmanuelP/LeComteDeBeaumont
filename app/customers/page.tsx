import { ppEditorialNewUltralightItalic, inter } from "../fonts"

const partners = [
  {
    name: "Cartier",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cartier-logo-Z0KBxSjE0eYbirVxbOfSayvVWgiWnT.svg",
    url: "https://www.cartier.com/",
  },
  {
    name: "Louvre",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-muse%CC%81e-du-Louvre-X1SmfPtDWYl4kktZaBtiGqRWxHVwIq.svg",
    url: "https://www.louvre.fr/",
  },
  {
    name: "Kering",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kering-PM76xQEY603nhfIjeB5GACqb0lnC8p.svg",
    url: "https://www.kering.com/",
  },
  {
    name: "Sotheby's",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SOTHEBYS-logo-1-O5cSjSIZYXRaO5rPxhKAVu4ocYnJS9.svg",
    url: "https://www.sothebys.com/",
  },
  {
    name: "Four Seasons",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/four_seasons-TIxYqYrwBF83tK3wxnXidEPnydjbHH.svg",
    url: "https://www.fourseasons.com/",
  },
  {
    name: "Louvre Provisoire",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/provisoire-louvre-logo-gsjNsePe6cfbFrqcGqnQptF0EljzBP.svg",
    url: "https://www.louvre.fr/",
  },
]

export default function PartnersPage() {
  return (
    <div
      className={`min-h-screen bg-[#141414] flex flex-col items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.className}`}
    >
      <h1
        className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter mb-16`}
      >
        Our Partners
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 mb-16">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-opacity duration-300 hover:opacity-80"
          >
            <div className="w-32 h-32 md:w-48 md:h-48">
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${partner.logo || "/placeholder.svg"})` }}
              />
            </div>
          </a>
        ))}
      </div>
      <p className={`${inter.className} text-white/70 text-center max-w-3xl text-sm md:text-base leading-relaxed`}>
        Notre clientèle d'exception, comprenant des maisons de luxe, des hôtels prestigieux, des domaines privés, des
        collectionneurs avisés, des institutions gouvernementales et culturelles, ainsi que des promoteurs immobiliers
        de renom, nous confie la réalisation de châteaux contemporains, de reproductions exquises et d'œuvres d'art
        novatrices. Ces créations, destinées à embellir leurs demeures historiques, s'inscrivent dans une démarche
        d'enrichissement culturel, de préservation du patrimoine ou d'agrément personnel.
      </p>
    </div>
  )
}

