'use client';

import { useState, useEffect, useRef } from "react";
import { ppEditorialNewUltralightItalic, inter } from "../fonts";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import translations from "../../locales/translations.json";
import { supabase } from "@/lib/supabase";
import { MaterialCard } from "@/components/MaterialCard";
import { Notification } from "@/components/Notification";
import { Button } from "@/components/ui/button";

// Définition des étapes
const steps = [
  { id: 0, title: "Input" },
  { id: 1, title: "Processing" },
  { id: 2, title: "Result" }
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// On définit ici le type de langue accepté
type Language = "en" | "fr" | "ar";

const ModelViewer = ({ src, alt }: { src: string; alt: string }) => {
  // Utilisation d'un composant custom qui pointe vers le tag HTML "model-viewer"
  const ModelViewerTag = "model-viewer" as unknown as React.ElementType;
  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 bg-gray-100 backdrop-filter backdrop-blur-md"></div>
      <ModelViewerTag
        src={src}
        alt={alt}
        camera-controls
        auto-rotate
        ar
        shadow-intensity="1"
        camera-orbit="0deg 75deg 2m"
        style={{ width: "100%", height: "100%", position: "relative", zIndex: 10 }}
      />
    </div>
  );
};

const AIProcessingStep = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 500);
    return () => clearTimeout(timer);
  }, [onComplete]);
  return (
    <div className="flex items-center justify-center h-64">
      <motion.div
        className="w-16 h-16 border-t-2 border-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5, ease: "linear", repeat: Infinity }}
      />
    </div>
  );
};

// --- Définition de l'interface pour typer les éléments granit ---
interface GranitElement {
  granit_id: number | string;
  granit_title: string;
  granit_description: string;
  granit_image: string;
}

interface GranitElementsProps {
  onMaterialSelect: (material: string) => void;
  lang: Language;
}

const GranitElements = ({ onMaterialSelect, lang }: GranitElementsProps) => {
  const [granitElements, setGranitElements] = useState<GranitElement[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const fetchGranitElements = async () => {
      try {
        const { data, error } = await supabase.rpc("get_granit_elements");
        if (error) {
          console.error("Error fetching granit elements:", error);
          setError("Failed to fetch granit elements");
        } else {
          setGranitElements(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred");
      }
    };
    fetchGranitElements();
  }, []);

  const handleMaterialSelect = (material: string) => {
    setSelectedMaterial(material);
    onMaterialSelect(material);
    setShowNotification(true);
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!granitElements) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-white/5 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl text-white/90 font-light">
          {translations[lang].demo.selectMaterial}
        </h3>
        {selectedMaterial && (
          <button onClick={() => handleMaterialSelect("")} className="text-sm text-black border border-black rounded px-2 py-1">
            {translations[lang].demo.resetSelection}
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {granitElements.map((element) => (
            <div key={element.granit_id}>
              <MaterialCard
                title={element.granit_title}
                description={element.granit_description}
                image={element.granit_image}
                onSelect={() =>
                  handleMaterialSelect(
                    element.granit_title.toLowerCase().replace(/ /g, "_")
                  )
                }
              />
              {selectedMaterial === element.granit_title.toLowerCase().replace(/ /g, "_") && (
                <Notification
                  isVisible={showNotification}
                  onClose={() => setShowNotification(false)}
                  message={`You've selected ${element.granit_title}. The 3D model has been updated.`}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const modelMap: { [key: string]: string } = {
  default:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Dying%20Tecumseh%20150k-XOzqIRAEdYYiX0CP6yvuC1ScqAXATs.glb",
  granit_amazonite:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/granit_amazonit-dheUleFjLBTl5pFA1OTR02lAq9QCyC.glb",
  granit_rosa_porrino:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/king_neutral_grey-SmXOKb1K9hk10qaAKb3zHALkyhlwPW.glb",
  king_neutral:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/king_neutral-z48tUkgjSyVB6F80maAz7wpBumqYPX.glb",
  onyx_arco_iris:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/granit_amazonit-dheUleFjLBTl5pFA1OTR02lAq9QCyC.glb",
  onyx_blanc:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/king_neutral_grey-SmXOKb1K9hk10qaAKb3zHALkyhlwPW.glb",
  onyx_ivoire:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/king_neutral-z48tUkgjSyVB6F80maAz7wpBumqYPX.glb",
  onyx_miel:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/granit_amazonit-dheUleFjLBTl5pFA1OTR02lAq9QCyC.glb",
  quartz_taj_mahal:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/king_neutral_grey-SmXOKb1K9hk10qaAKb3zHALkyhlwPW.glb"
};

export default function Page() {
  // Typage de la langue en tant que littéral
  const [lang, setLang] = useState<Language>("en");
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang === "en" || storedLang === "fr" || storedLang === "ar") {
      setLang(storedLang);
    }
  }, []);

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  // Récupération des traductions pour la page demo depuis le JSON
  const tDemo = translations[lang].demo;

  const [currentStep, setCurrentStep] = useState(0);
  // Comme le prompt ne change pas, nous n'avons plus besoin de récupérer setPrompt.
  const [prompt] = useState(
    "A fallen Native American chief, his body lying on the battlefield. His elaborate headdress is askew, and his face shows a mix of determination and peace. His hand still grips a traditional weapon, symbolizing his fight to the very end. The scene captures the tragedy and nobility of a leader who died defending his people and land."
  );
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [isModelViewerLoaded, setIsModelViewerLoaded] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isAudioSupported, setIsAudioSupported] = useState(true);
  const [selectedMaterial, setSelectedMaterial] = useState("granit_amazonite");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  useEffect(() => {
    if (!isModelViewerLoaded) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
      script.type = "module";
      script.onload = () => setIsModelViewerLoaded(true);
      document.body.appendChild(script);
      return () => document.body.removeChild(script);
    }
  }, [isModelViewerLoaded]);

  useEffect(() => {
    if (isPromptVisible && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
        setIsAudioSupported(false);
      });
    }
  }, [isPromptVisible]);

  const handleMaterialSelect = (material: string) => {
    setSelectedMaterial(material);
    console.log("Selected material:", material);
    console.log("Corresponding 3D model URL:", modelMap[material]);
  };

  return (
    <div className={`min-h-screen bg-[#141414] flex flex-col p-4 sm:p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.className}`}>
      {/* Sélecteur de langue */}
      <div className="flex justify-end p-4">
        <button onClick={() => changeLanguage("en")} className="mx-2">
          <Image src="/flags/en.png" alt="English" width={32} height={32} />
        </button>
        <button onClick={() => changeLanguage("fr")} className="mx-2">
          <Image src="/flags/fr.png" alt="Français" width={32} height={32} />
        </button>
        <button onClick={() => changeLanguage("ar")} className="mx-2">
          <Image src="/flags/ar.png" alt="العربية" width={32} height={32} />
        </button>
      </div>

      <Link href="/" className="absolute top-4 left-4 text-white/70 hover:text-white text-sm sm:text-base">
        {tDemo.backButton}
      </Link>

      {/* Steps Progress */}
      <motion.div
        className="w-full max-w-6xl mx-auto mb-8 sm:mb-16 mt-12 sm:mt-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex items-center justify-between relative">
          <div className="absolute h-px bg-white/10 w-full top-1/2 -translate-y-1/2 z-0" />
          <motion.div
            className="absolute h-px bg-white/40 top-1/2 -translate-y-1/2 z-0"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.div
            className="relative z-10 text-white/70 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {currentStep}/{steps.length - 1}
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex-1 w-full max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="step1"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
              className="space-y-8"
            >
              <motion.h2 className="text-2xl sm:text-3xl text-white/90 font-light" variants={fadeInVariants}>
                {tDemo.enterPrompt}
              </motion.h2>
              <motion.div
                className="w-full bg-white/[0.02] border border-white/10 p-4 sm:p-6 relative overflow-hidden"
                variants={fadeInVariants}
                onAnimationComplete={() => {
                  setIsPromptVisible(true);
                  setIsTypingComplete(true);
                  if (isAudioSupported && audioRef.current) {
                    audioRef.current.pause();
                  }
                }}
              >
                <motion.div
                  className="text-white text-xs sm:text-sm font-mono"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }}>
                    {prompt}
                  </motion.span>
                </motion.div>
              </motion.div>
              <audio ref={audioRef} src="/keyboard-typing.mp3" loop onError={() => setIsAudioSupported(false)} />
              <AnimatePresence>
                {isTypingComplete && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-end"
                  >
                    <Button
                      onClick={nextStep}
                      className="px-4 py-2 h-10 bg-black hover:bg-white text-white hover:text-black rounded-full font-medium text-sm transition-colors duration-300"
                    >
                      {tDemo.generateButton}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AIProcessingStep onComplete={nextStep} />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl text-white/90 font-light">
                {tDemo.visualization}
              </h2>
              <div className="relative w-full h-[400px] border border-white/10 backdrop-blur-sm bg-white/5">
                {isModelViewerLoaded && (
                  <ModelViewer
                    key={selectedMaterial}
                    src={modelMap[selectedMaterial] || modelMap["default"]}
                    alt={`3D model of ${selectedMaterial}`}
                  />
                )}
              </div>
              <GranitElements onMaterialSelect={handleMaterialSelect} lang={lang} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
