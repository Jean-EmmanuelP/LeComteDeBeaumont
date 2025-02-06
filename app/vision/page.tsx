import { ppEditorialNewUltralightItalic, inter } from "../fonts"

export default function VisionPage() {
  return (
    <div
      className={`min-h-screen bg-[#141414] flex flex-col items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.className}`}
    >
      <h1
        className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter mb-16`}
      >
        Notre Vision
      </h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <p className={`${inter.className} text-white/70 text-base md:text-lg leading-relaxed`}>
          Chez Le Comte de Beaumont, nous sélectionnons des matériaux d'exception avec une sensibilité extrême, donnant
          naissance à des créations uniques et porteuses de sens. La pierre, à la fois solide et élégante, est au cœur
          de notre savoir-faire.
        </p>
        <p className={`${inter.className} text-white/70 text-base md:text-lg leading-relaxed`}>
          Le marbre, roche d'une grande dureté et aux multiples nuances, incarne à la fois raffinement et durabilité.
          Provenant des carrières les plus prestigieuses à travers le monde, il est un symbole intemporel d'excellence,
          utilisé depuis l'Antiquité en sculpture et en architecture.
        </p>
        <p className={`${inter.className} text-white/70 text-base md:text-lg leading-relaxed`}>
          Chaque pierre que nous proposons est issue d'une sélection rigoureuse et transformée avec exigence, révélant
          ainsi son caractère unique et sa beauté naturelle.
        </p>
      </div>
    </div>
  )
}

