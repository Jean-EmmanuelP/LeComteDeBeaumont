"use client";

import { useState, useEffect } from "react";
import { ppEditorialNewUltralightItalic, inter } from "../app/fonts";
import Image from "next/image";
import Link from "next/link";
import DynamicFrameLayout from "../components/DynamicFrameLayout";
import translationsData from "../locales/translations.json";

// Définition du type de langue accepté
type Language = "en" | "fr" | "ar";

// Définition de la structure des traductions (ajustez si nécessaire)
interface Translations {
  en: {
    hero: {
      title: string;
      description: string;
      button: string;
    };
    vision: {
      title: string;
      paragraphs: string[];
    };
    technique: {
      title: string;
    };
    partners: {
      title: string;
      description: string;
    };
    demo: {
      backButton: string;
      enterPrompt: string;
      generateButton: string;
    };
  };
  fr: Translations["en"];
  ar: Translations["en"];
}

// On force le typage du JSON importé
const translations = translationsData as Translations;

// Liste des partenaires
const partners = [
  {
    name: "Cartier",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/Cartier_logo.svg",
    url: "https://www.cartier.com/",
  },
  {
    name: "Louvre",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0bT74bfe1W2IZMqa3WjPOoQJDwoHa_TeYg&s",
    url: "https://www.louvre.fr/",
  },
  {
    name: "Kering",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Kering-logo.svg",
    url: "https://www.kering.com/",
  },
  {
    name: "Sotheby's",
    logo: "https://sothebys-com.brightspotcdn.com/d0/cb/b08c40e043e1a36d5730ce82144b/sothebys-logo-2.svg",
    url: "https://www.sothebys.com/",
  },
  {
    name: "Four Seasons",
    logo: "https://www.facmetiers91.fr/wp-content/uploads/2023/06/Four_Seasons_logo.svg_.png",
    url: "https://www.fourseasons.com/",
  },
  {
    name: "Foster + Partners",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Foster_and_partners.svg",
    url: "https://www.fourseasons.com/",
  },
  {
    name: "Shangri La",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/bd/Shangri-La_Hotels_and_Resorts_logo.svg",
    url: "https://www.fourseasons.com/",
  },
  {
    name: "The Ritz Carlton",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2017/04/ritz-carlton-logo.png",
    url: "https://www.fourseasons.com/",
  },
];

export default function Home() {
  // Gestion de la langue avec sauvegarde dans le localStorage, typée en Language
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "en" || storedLang === "fr" || storedLang === "ar") {
      setLang(storedLang);
    }
  }, []);

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
              <div
                className={`${inter.className} flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]`}
              >
                <div className="space-y-6">
                  <div className="h-px bg-white/10 w-full" />
                  {t.hero.description.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                  <div className="h-px bg-white/10 w-full" />
                </div>
              </div>
              <div className="w-12 h-12 sm:w-32 sm:h-32 relative opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-04%20at%2019.43.28-cL9LjPagIWxtciIwDKhrH8A2uq6dwr.png"
                  alt="Le Comte de Beaumont"
                  fill
                  className="object-cover rounded-full grayscale"
                />
              </div>
            </div>
            <Link
              href="/demo"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] visible sm:hidden text-sm mt-16"
            >
              {t.hero.button}
            </Link>
          </div>

          {/* Contenu droit */}
          <div className="w-full md:flex-grow h-[60vh] md:h-[70vh]">
            <DynamicFrameLayout />
            <div className="w-full flex items-center justify-end">
              <Link
                href="/demo"
                className="hidden sm:inline-block px-6 py-6 border self-end border-white/20 rounded-full font-normal bg-white text-black hover:text-black/70 transition-colors text-center w-[35%] text-2xl mt-16"
              >
                {t.hero.button}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Vision */}
      <section
        id="vision"
        className="py-16 px-8 bg-white h-screen flex items-center justify-center flex-col"
      >
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-black tracking-tighter mb-16 text-center`}
        >
          {t.vision.title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {t.vision.paragraphs.map((para, index) => (
            <p
              key={index}
              className={`${inter.className} text-black text-base md:text-lg leading-relaxed`}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Section Notre Technique */}
      <section
        id="technique"
        className="py-16 px-8 h-screen flex items-center justify-center flex-col"
      >
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter mb-16 text-center`}
        >
          {t.technique.title}
        </h2>
        <div className="w-full max-w-4xl mx-auto">
          <video
            className="w-full h-auto"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Statue%20video%20(2)-65trakXfBLsXkvEACaJ9mbglB5tbvS.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Section Partners */}
      <section
        id="partners"
        className="py-16 px-8 lg:h-screen bg-white flex items-center justify-center flex-col"
      >
        <h2
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-black tracking-tighter mb-16 text-center`}
        >
          {t.partners.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:space-x-10 md:space-y-2 mb-16 max-w-[80vw] mx-auto">
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
                  style={{
                    backgroundImage: `url(${
                      partner.logo || "/placeholder.svg"
                    })`,
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
        <p
          className={`${inter.className} text-black text-center max-w-3xl mx-auto text-sm md:text-base leading-relaxed`}
        >
          {t.partners.description}
        </p>
      </section>
    </div>
  );
}

// L'ajout de cette ligne garantit que le fichier est bien traité comme un module ES2015
export {};
