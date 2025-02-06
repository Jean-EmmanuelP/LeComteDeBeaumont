import { ppEditorialNewUltralightItalic, inter } from "../fonts"

export default function TechniquePage() {
  return (
    <div
      className={`min-h-screen bg-[#141414] flex flex-col items-center justify-center p-8 ${ppEditorialNewUltralightItalic.variable} ${inter.className}`}
    >
      <h1
        className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter mb-16`}
      >
        Notre Technique
      </h1>
      <div className="w-full max-w-4xl mx-auto">
        <video className="w-full h-auto" controls autoPlay loop muted playsInline>
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Statue%20video%20(2)-65trakXfBLsXkvEACaJ9mbglB5tbvS.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

