'use client'

import { useState, useEffect } from "react";
import { ppEditorialNewUltralightItalic, inter } from "../app/fonts";
import Image from "next/image";
import Link from "next/link";
import DynamicFrameLayout from "../components/DynamicFrameLayout";
import translations from "../locales/translations.json";

// Liste des partenaires
const partners = [
  {
    name: "Cartier",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cartier-logo-Z0KBxSjE0eYbirVxbOfSayvVWgiWnT.svg",
    url: "https://www.cartier.com/",
  },
  {
    name: "Louvre",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/provisoire-louvre-logo-gsjNsePe6cfbFrqcGqnQptF0EljzBP.svg",
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
];

export default function Home() {
  // Gestion de la langue avec sauvegarde dans le localStorage
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang);
    }
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  // Raccourci pour accéder aux textes traduits
  const t = translations[lang];

  return (
    <div
      className={`min-h-screen bg-[#141414] ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
    >
      {/* Section Hero */}
      <section className="flex items-center justify-center p-8 lg:h-screen">
        <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8">
          {/* Contenu gauche */}
          <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-16">
              <h1
                className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%]`}
              >
                {t.hero.title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </h1>
              <div className={`${inter.className} flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]`}>
                <div className="space-y-6">
                  <div className="h-px bg-white/10 w-full" />
                  {t.hero.description.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                  <div className="h-px bg-white/10 w-full" />
                </div>
              </div>
              <div className="w-8 h-8 relative opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-04%20at%2019.43.28-cL9LjPagIWxtciIwDKhrH8A2uq6dwr.png"
                  alt="Le Comte de Baumont"
                  fill
                  className="object-cover rounded-full grayscale"
                />
              </div>
            </div>
            <Link
              href="/demo"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-16"
            >
              {t.hero.button}
            </Link>
          </div>

          {/* Contenu droit */}
          <div className="w-full md:flex-grow h-[60vh] md:h-[70vh]">
            <DynamicFrameLayout />
          </div>
        </div>
      </section>

      {/* Section Notre Vision */}
      <section id="vision" className="py-16 px-8 bg-white h-screen flex items-center justify-center flex-col">
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-black tracking-tighter mb-16 text-center`}
        >
          {t.vision.title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {t.vision.paragraphs.map((para, index) => (
            <p key={index} className={`${inter.className} text-black text-base md:text-lg leading-relaxed`}>
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Section Notre Technique */}
      <section id="technique" className="py-16 px-8 h-screen flex items-center justify-center flex-col">
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter mb-16 text-center`}
        >
          {t.technique.title}
        </h2>
        <div className="w-full max-w-4xl mx-auto">
          <video className="w-full h-auto" controls autoPlay loop muted playsInline>
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Statue%20video%20(2)-65trakXfBLsXkvEACaJ9mbglB5tbvS.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Section Partners */}
      <section id="partners" className="py-16 px-8 lg:h-screen bg-white flex items-center justify-center flex-col">
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-black tracking-tighter mb-16 text-center`}
        >
          {t.partners.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 mb-16 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <Link
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
            </Link>
          ))}
        </div>
        <p className={`${inter.className} text-black text-center max-w-3xl mx-auto text-sm md:text-base leading-relaxed`}>
          {t.partners.description}
        </p>
      </section>
    </div>
  );
}
