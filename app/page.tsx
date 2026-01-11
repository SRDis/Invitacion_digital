/* ARCHIVO ÚNICO – app/page.tsx 
   Invitación Premium: Boda Iraira & Marcos + Bautizo Aranza
   Estilo: Hacienda Mexicana Elegante & Mobile First - VERSIÓN OPTIMIZADA
*/

"use client";

import { useEffect, useState } from "react";
import { Playfair_Display, Great_Vibes, Montserrat, Cormorant_Garamond } from "next/font/google";
import { FaChurch, FaGlassCheers, FaCalendarPlus } from "react-icons/fa";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "600"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function Page() {
  const target = new Date("2026-05-09T13:00:00").getTime();
  const [time, setTime] = useState({ días: 0, horas: 0, min: 0, seg: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [cardPulledOut, setCardPulledOut] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      const diff = target - Date.now();
      if (diff <= 0) return clearInterval(i);
      setTime({
        días: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
        min: Math.floor((diff / (1000 * 60)) % 60),
        seg: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const handleOpenEnvelope = () => {
    if (envelopeOpen) return;
    
    // 1. Abrir la solapa del sobre
    setEnvelopeOpen(true);
    
    // 2. Esperar a que la solapa se abra completamente, luego sacar la tarjeta
    setTimeout(() => {
      setCardPulledOut(true);
    }, 1200);
    
    // 3. Esperar a que la tarjeta salga completamente, luego hacer transición a la invitación
    setTimeout(() => {
      setShowInvitation(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 600);
    }, 3000);
  };

  const handleCopyDate = () => {
    navigator.clipboard.writeText("9 de Mayo de 2026");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const googleCalendarUrl = "https://www.google.com/calendar/render?action=TEMPLATE&text=Boda+Iraira+y+Marcos+%2B+Bautizo+Aranza&dates=20260509T130000/20260510T020000&details=Acompáñanos+a+celebrar+nuestro+gran+día+en+Valle+de+Bravo.&location=Parroquia+de+la+Inmaculada+Concepción,+Valle+de+Bravo&sf=true&output=xml";

  return (
    <>
{/* SOBRE ELEGANTE MEXICANO */}
{/* SOBRE REALISTA ARTESANAL */}
{!showInvitation && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#EFE6D8] p-4 overflow-hidden">

    {/* Textura de papel */}
    <div
      className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
      style={{
        backgroundImage:
          'url(https://www.transparenttextures.com/patterns/cream-paper.png)',
      }}
    />

    {/* Luz ambiental */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-[#D4AF37]/10 pointer-events-none" />

    <div className="relative w-full max-w-[420px]" style={{ perspective: "1600px" }}>
      <div
        onClick={handleOpenEnvelope}
        className={`relative w-full h-[300px] transition-all ${
          envelopeOpen
            ? "duration-[900ms]"
            : "duration-[400ms] hover:scale-[1.02] cursor-pointer"
        }`}
        style={{
          transformStyle: "preserve-3d",
          filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.35))",
          transform: envelopeOpen ? "scale(0.98)" : "scale(1)",
        }}
      >

        {/* CUERPO DEL SOBRE */}
        <div
          className="absolute inset-0 rounded-[2px]"
          style={{
            background:
              "linear-gradient(145deg, #FAF4EA 0%, #E6D9C5 100%)",
            boxShadow:
              "inset 0 1px 3px rgba(255,255,255,0.8), inset 0 -4px 6px rgba(139,107,71,0.15)",
          }}
        />

        {/* TARJETA */}
        <div
          className={`absolute inset-x-6 top-4 z-10 transition-all ${
            cardPulledOut
              ? "duration-[1200ms] -translate-y-[140%] opacity-0 scale-95"
              : envelopeOpen
              ? "duration-[600ms] translate-y-4"
              : "duration-[400ms] translate-y-8"
          }`}
        >
          <div className="bg-[#FFFCF7] border border-[#D4AF37]/30 shadow-[0_12px_30px_rgba(0,0,0,0.2)] rounded-[2px] min-h-[220px] flex flex-col items-center justify-center text-center p-8">
            <div className="w-14 h-14 rounded-full border border-[#D4AF37] flex items-center justify-center mb-4">
              <span className={`${greatVibes.className} text-[#D4AF37] text-2xl`}>
                I&M
              </span>
            </div>
            <h2
              className={`${greatVibes.className} text-4xl text-[#8B6B47]`}
            >
              Nuestra Boda
            </h2>
            <p
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.35em] text-[#8B6B47] mt-2`}
            >
              9 de Mayo · 2026
            </p>
          </div>
        </div>

        {/* SOLAPAS */}
        <div className="absolute inset-0 z-20 pointer-events-none">

          {/* Izquierda */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 50% 52%, 0 100%)",
              background:
                "linear-gradient(to right, #F3EBDD, #E4D6C0)",
            }}
          />

          {/* Derecha */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(100% 0, 50% 52%, 100% 100%)",
              background:
                "linear-gradient(to left, #F3EBDD, #E4D6C0)",
            }}
          />

          {/* Inferior */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 100%, 50% 52%, 100% 100%)",
              background:
                "linear-gradient(to top, #E6D9C5, #F5EEE3)",
            }}
          />
        </div>

        {/* SOLAPA SUPERIOR */}
        <div
          className={`absolute top-0 left-0 w-full origin-top z-30 transition-transform ${
            envelopeOpen
              ? "duration-[1000ms]"
              : "duration-[400ms]"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: envelopeOpen ? "rotateX(-180deg)" : "rotateX(0deg)",
            height: "55%",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background:
                "linear-gradient(to bottom, #FBF6EE, #E8DCC8)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
              backfaceVisibility: "hidden",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background:
                "linear-gradient(to bottom, #E3D4BE, #D6C7AE)",
              transform: "rotateX(180deg)",
              backfaceVisibility: "hidden",
            }}
          />
        </div>

        {/* SELLO DE CERA */}
        <div
          className={`absolute top-[50%] left-1/2 -translate-x-1/2 z-40 transition-all ${
            envelopeOpen
              ? "opacity-0 scale-150 blur-sm"
              : "scale-100"
          }`}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #C87D5F, #8B4C3B)",
              boxShadow:
                "0 12px 30px rgba(0,0,0,0.6), inset 0 -4px 8px rgba(0,0,0,0.4)",
            }}
          >
            <span
              className={`${greatVibes.className} text-white text-4xl`}
            >
              I&M
            </span>
          </div>
        </div>
      </div>

      {!envelopeOpen && (
        <p
          className={`${greatVibes.className} text-[#8B6B47] text-2xl text-center mt-16 animate-pulse`}
        >
          Ábrelo
        </p>
      )}
    </div>
  </div>
)}

      {/* INVITACIÓN PRINCIPAL */}
      <main
        className={`min-h-screen bg-gradient-to-br from-[#FFFBF5] via-[#FFF9F0] to-[#FFFBF5] text-[#3B2F2F] selection:bg-[#D4AF37]/30 ${cormorant.className} overflow-x-hidden relative transition-all duration-1000 ${
          showInvitation ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <img src="./69db5074c409ad2d52f871d449e8f902-_1_.svg" alt="Decorative Corner" className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 z-10 opacity-15 rotate-90 mt-6 ml-6" />
        <img src="./69db5074c409ad2d52f871d449e8f902-_1_.svg" alt="Decorative Corner" className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 z-10 opacity-15 rotate-180 mt-6 mr-6" />
        
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-0 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
        <div className="fixed inset-3 md:inset-6 border-2 border-[#D4AF37]/15 pointer-events-none z-50 rounded-[40px] md:rounded-none animate-[fadeIn_2s_ease-in-out]" />

        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 md:px-8">
          <div className={`w-full max-w-4xl relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <div className="bg-white/70 backdrop-blur-md px-8 py-12 md:px-16 md:py-32 shadow-[0_20px_60px_rgba(139,107,71,0.15)] rounded-t-[12rem] md:rounded-t-[24rem] rounded-b-2xl border-b-[6px] border-[#D4AF37]/30 mt-12 md:mt-0 hover:shadow-[0_30px_80px_rgba(139,107,71,0.2)] transition-all duration-700 relative">
              
              {/* Ornamento superior */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8923A] rounded-full flex items-center justify-center shadow-xl ring-4 ring-white">
                <span className={`${greatVibes.className} text-white text-xl`}>❀</span>
              </div>

              <p className={`${montserrat.className} uppercase tracking-[0.4em] text-[10px] md:text-xs mb-10 text-[#8B6B47] font-semibold flex items-center justify-center gap-3 animate-[fadeIn_1s_ease-in-out_0.5s_both]`}>
                <span className="w-6 h-[1.5px] bg-gradient-to-r from-transparent to-[#D4AF37] animate-[expandWidth_1s_ease-in-out_0.5s_both]"></span>
                NUESTRA BODA
                <span className="w-6 h-[1.5px] bg-gradient-to-l from-transparent to-[#D4AF37] animate-[expandWidth_1s_ease-in-out_0.5s_both]"></span>
              </p>

              <div className="space-y-3 relative px-2 md:px-0">
                <h1
  className={`${greatVibes.className}
  text-7xl sm:text-10xl md:text-[9rem] lg:text-[11rem]
  bg-clip-text text-transparent
  leading-[1.3] md:leading-[1.3]
  animate-[slideInUp_1s_ease-out_0.7s_both]
  transition-transform duration-700 hover:scale-[1.035]
  cursor-default z-[100]
`}
  style={{
    backgroundImage: `
      linear-gradient(
        135deg,
        #FFF4C2 0%,
        #F3DC8B 18%,
        #E6C965 38%,
        #D4AF37 52%,
        #C9A43A 65%,
        #EAD07E 82%,
        #FFF7D6 100%
      )
    `,
    textShadow: '0 1px 2px rgba(120, 90, 20, 0.18)',
  }}
>
  Iraira <br className="md:hidden" />{" "}
  <span className="text-5xl md:text-8xl inline-block transition-transform duration-500 hover:rotate-6">
    &
  </span>{" "}
  Marcos
</h1>

                
                <div className="py-6 animate-[fadeIn_1s_ease-in-out_0.9s_both]">
                  <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#9B8B6B] to-transparent mx-auto mb-4"></div>
                  <p className={`${cormorant.className} italic text-xl md:text-3xl text-[#5B7D6E] relative z-10 font-light tracking-wide`}>
                    y el Bautizo de
                  </p>
                  <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#9B8B6B] to-transparent mx-auto mt-4"></div>
                </div>
                
                <h2 className={`${greatVibes.className} leading-[1.3]  text-6xl sm:text-7xl md:text-9xl bg-gradient-to-r from-[#7B6B8B] via-[#6B5B7B] to-[#7B6B8B] bg-clip-text text-transparent mt-5 animate-[slideInUp_1s_ease-out_1.1s_both] hover:scale-105 transition-transform duration-700 cursor-default`}>
                  Aranza
                </h2>
              </div>

              <div className="w-24 md:w-40 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-10 md:my-14 flex items-center justify-center animate-[expandWidth_1s_ease-in-out_1.3s_both] group relative">
                <div className="absolute w-3 h-3 rotate-45 bg-[#D4AF37] group-hover:rotate-[225deg] group-hover:scale-125 transition-all duration-700 shadow-md"></div>
              </div>

              <div className="space-y-5 md:space-y-6 animate-[fadeIn_1s_ease-in-out_1.5s_both]">
                <p onClick={handleCopyDate} className={`${montserrat.className} tracking-[0.35em] md:tracking-[0.55em] uppercase text-xl md:text-2xl font-light border-y-2 border-[#D4AF37]/30 py-3 inline-block cursor-pointer hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-500 px-6 relative group shadow-sm`}>
                  9 Mayo 2026
                  <span className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] bg-[#8B6B47] text-white px-4 py-1.5 rounded-full transition-all duration-300 shadow-lg ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                    ¡Copiado!
                  </span>
                </p>
                
                <div className="overflow-hidden rounded-2xl shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all duration-700 transform hover:scale-[1.02] border-4 border-white">
                  <img src="./att.5UC-t7OIW9SbAPooGRfpezxXRI9zwBzbI67soY9RaHo.JPG" alt="Iraira y Marcos" className="w-full h-auto transition-transform duration-1000 hover:scale-110" />
                </div>
                
                <p className={`${montserrat.className} text-[11px] md:text-sm uppercase tracking-[0.3em] text-[#5B7D6E] font-light`}>
                  Valle de Bravo, Estado de México
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CUENTA REGRESIVA */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#F5EFE7] to-[#EDE7DC] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,_#D4AF37_1px,_transparent_1px)] bg-[size:30px_30px]"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h3 className={`${montserrat.className} uppercase tracking-[0.3em] text-[11px] md:text-sm text-[#8B6B47] mb-10 font-semibold flex flex-col items-center gap-3`}>
              <span className="w-32">
               <img src="./image-removebg-preview.png" alt="Decoración" className="w-full h-auto transition-transform duration-700 hover:scale-110 opacity-60" />
              </span>
              Estamos a punto de celebrar
            </h3>
            
            <div className="grid grid-cols-4 gap-3 md:gap-8 max-w-4xl mx-auto">
              {Object.entries(time).map(([k, v], index) => (
                <div 
                  key={k} 
                  className="flex flex-col items-center bg-white/80 backdrop-blur-sm p-4 md:p-8 rounded-xl shadow-lg border-2 border-[#D4AF37]/20 hover:bg-white hover:shadow-2xl hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-3 cursor-default group"
                  style={{ animation: `fadeIn 0.6s ease-in-out ${index * 0.15}s both` }}
                >
                  <span className={`${playfair.className} text-3xl sm:text-4xl md:text-7xl font-light text-[#3B2F2F] tabular-nums transition-all duration-500 group-hover:scale-110 group-hover:text-[#8B6B47]`}>
                    {String(v).padStart(2, "0")}
                  </span>
                  <span className={`${montserrat.className} text-[8px] md:text-[10px] uppercase tracking-[0.25em] text-[#8B6B47] mt-2 md:mt-3 font-semibold`}>
                    {k}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GOOGLE CALENDAR */}
        <section className="py-12 bg-gradient-to-b from-[#EDE7DC] to-[#FFFBF5] text-center border-b border-[#D4AF37]/10">
          <div className="container mx-auto px-4">
            <a href={googleCalendarUrl} target="_blank" className={`${montserrat.className} inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-white via-[#FFFBF5] to-white text-[#8B6B47] border-2 border-[#D4AF37]/40 rounded-full uppercase tracking-[0.25em] font-semibold text-[10px] md:text-xs shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-500 transform hover:scale-105 active:scale-95 group`}>
              <FaCalendarPlus className="text-xl text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
              <span className="group-hover:text-[#7D5A3B] transition-colors duration-300">Agregar a Google Calendar</span>
            </a>
            <p className={`${montserrat.className} text-[9px] uppercase tracking-[0.3em] text-gray-400 mt-5 italic font-light`}>
              Agenda la fecha para que no lo olvides
            </p>
          </div>
        </section>

        {/* GALERÍA */}
        <section className="py-20 md:py-28 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch">
            <div className="md:col-span-7 h-[400px] md:h-[650px] bg-[#F5F5F5] border-[10px] md:border-[16px] border-white shadow-[0_25px_60px_rgba(0,0,0,0.15)] flex items-center justify-center relative transform rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-700 overflow-hidden group cursor-pointer">
               <div className="absolute -inset-6 border-2 border-[#D4AF37]/25 pointer-events-none group-hover:border-[#D4AF37]/50 transition-colors duration-500 rounded-sm"></div>
              <img src="./att.Q479-gijA-4pg7V92WbKhKPsulraAMdzSqzKrmbrwoo.JPG" alt="Iraira y Marcos" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <div className="md:col-span-5 grid grid-rows-2 gap-8">
              <div className="h-[280px] md:h-auto bg-[#F5F5F5] border-[10px] md:border-[16px] border-white shadow-xl flex items-center justify-center transform -rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-700 overflow-hidden group cursor-pointer">
                <img src="./att.KL8BIiotIPpsAsfBp6HFgO4mPpjgyQBYCQCjf_6_TCE 4.JPG" alt="Aranza" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B7D6E]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              <div className="h-[280px] md:h-auto bg-[#F5F5F5] border-[10px] md:border-[16px] border-white shadow-xl flex items-center justify-center transform rotate-1 hover:rotate-0 hover:scale-[1.02] transition-all duration-700 overflow-hidden group cursor-pointer">
                <img src="./att.Kx8zIpp8kw9iPDuLI3s133CGdvYNz7TkHjmoQqSWwaI 5.jpg" alt="Foto Familiar" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7B6B8B]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </div>
        </section>

        {/* DETALLES */}
        <section className="py-20 md:py-28 px-4 text-center bg-gradient-to-b from-white to-[#FFFBF5] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 border-t-[3px] border-l-[3px] border-[#D4AF37]/30 rounded-tl-[60px] m-6 animate-[drawBorder_2s_ease-in-out]"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-[3px] border-r-[3px] border-[#D4AF37]/30 rounded-br-[60px] m-6 animate-[drawBorder_2s_ease-in-out_0.3s_both]"></div>

          <div className="max-w-5xl mx-auto border-4 border-double border-[#D4AF37]/20 p-8 md:p-24 relative bg-white/50 backdrop-blur-sm hover:border-[#D4AF37]/30 hover:shadow-2xl transition-all duration-700 rounded-lg">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white px-8 border-2 border-[#D4AF37]/30 rounded-full py-2 hover:border-[#D4AF37]/50 hover:shadow-xl transition-all duration-500 shadow-lg">
              <span className={`${greatVibes.className} text-[#D4AF37] text-4xl md:text-5xl hover:scale-110 inline-block transition-transform duration-500`}>Lo Nuestro</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mt-10 md:mt-0">
              <div className="flex flex-col items-center space-y-5 md:space-y-7 group hover:transform hover:-translate-y-3 transition-all duration-700">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5B7D6E] to-[#4A6B5C] text-white text-3xl md:text-4xl shadow-2xl border-[5px] border-white outline outline-2 outline-[#5B7D6E]/40 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(91,125,110,0.5)] group-hover:outline-[3px] transition-all duration-500">
                  <FaChurch className="group-hover:rotate-12 transition-transform duration-500" />
                </div>
                
                <div className="w-full">
                  <h4 className={`${montserrat.className} font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-3 text-[#8B6B47] group-hover:text-[#5B7D6E] transition-colors duration-500`}>
                    Ceremonia Religiosa
                  </h4>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-5 group-hover:w-24 transition-all duration-700"></div>
                  
                  <p className={`${playfair.className} text-2xl md:text-3xl text-[#3B2F2F] mb-2 group-hover:scale-105 transition-transform duration-500 font-semibold`}>13:00 HRS</p>
                  
                  <p className={`${cormorant.className} text-sm md:text-base text-gray-600 leading-relaxed mb-7 font-light`}>
                    Parroquia de la Inmaculada Concepción
                    <br />
                    <span className="italic text-[#8B6B47]">Cerro Colorado, Valle de Bravo</span>
                  </p>
                  
                  <a href="https://maps.app.goo.gl/DBazTHaFdB8U2HLe9" target="_blank" className={`${montserrat.className} inline-block text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold py-3 px-10 border-2 border-[#3B2F2F] hover:bg-[#3B2F2F] hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 rounded-md`}>
                    Ver Ubicación
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-5 md:space-y-7 group hover:transform hover:-translate-y-3 transition-all duration-700">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8923A] text-white text-3xl md:text-4xl shadow-2xl border-[5px] border-white outline outline-2 outline-[#D4AF37]/40 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.5)] group-hover:outline-[3px] transition-all duration-500">
                  <FaGlassCheers className="group-hover:-rotate-12 transition-transform duration-500" />
                </div>
                
                <div className="w-full">
                  <h4 className={`${montserrat.className} font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-3 text-[#8B6B47] group-hover:text-[#D4AF37] transition-colors duration-500`}>
                    Recepción
                  </h4>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-5 group-hover:w-24 transition-all duration-700"></div>
                  
                  <p className={`${playfair.className} text-2xl md:text-3xl text-[#3B2F2F] mb-2 group-hover:scale-105 transition-transform duration-500 font-semibold`}>Enseguida</p>
                  
                  <p className={`${cormorant.className} text-sm md:text-base text-gray-600 leading-relaxed mb-7 font-light`}>
                    Salón El Olimpo
                    <br />
                    <span className="italic text-[#8B6B47]">Valle de Bravo, México</span>
                  </p>
                  
                  <a href="https://maps.app.goo.gl/p2PFejhgKJi1w8hC8" target="_blank" className={`${montserrat.className} inline-block text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold py-3 px-10 border-2 border-[#3B2F2F] hover:bg-[#3B2F2F] hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 rounded-md`}>
                    Ver Ubicación
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DRESS CODE */}
        <section className="py-16 md:py-24 bg-[#2F6B5A] text-[#FAF7F2] text-center px-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 opacity-4 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
          
          <h3 className={`${greatVibes.className} text-5xl md:text-7xl mb-4 md:mb-8 relative z-10 hover:scale-105 transition-transform duration-500 cursor-default`}>
            Código de Vestimenta
          </h3>
          <p className={`${montserrat.className} uppercase tracking-[0.2em] md:tracking-[0.4em] text-sm md:text-lg font-light mb-8 hover:tracking-[0.6em] transition-all duration-300`}>
            Formal · Bright Colors
          </p>

          <div className="max-w-md mx-auto space-y-6 border border-white/20 p-6 md:p-8 rounded-t-[50px] md:rounded-t-full bg-[#265749] relative z-10 shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] hover:border-white/40 transition-all duration-500 hover:-translate-y-2">
            <div className="pt-4">
              <p className={`${montserrat.className} text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-70 mb-2`}>
                Hombres
              </p>
              <p className="text-xl md:text-2xl italic font-serif hover:scale-105 transition-transform duration-300 cursor-default">Traje Formal</p>
            </div>

            <div className="w-10 h-[1px] bg-white/30 mx-auto group-hover:w-20 transition-all duration-500" />

            <div>
              <p className={`${montserrat.className} text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-70 mb-4`}>
                Sugerencia de Colores
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {[
                  { color: "#FF5733", name: "Rojo Coral" },
                  { color: "#FFC300", name: "Dorado" },
                  { color: "#C70039", name: "Carmesí" },
                  { color: "#2ECC71", name: "Verde Esmeralda" },
                  { color: "#3498DB", name: "Azul Cielo" }
                ].map(({ color, name }) => (
                  <div
                    key={color}
                    onMouseEnter={() => setHoveredColor(name)}
                    onMouseLeave={() => setHoveredColor(null)}
                    className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/50 shadow-lg transform hover:scale-125 hover:border-white transition-all duration-300 cursor-pointer hover:shadow-2xl"
                    style={{ backgroundColor: color }}
                  >
                    {hoveredColor === name && (
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[9px] bg-white text-[#2F6B5A] px-2 py-1 rounded whitespace-nowrap animate-[fadeIn_0.3s_ease-in-out]">
                        {name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10 max-w-xs mx-auto">
               <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#E89B3E] font-semibold bg-[#214b3f] py-2 px-4 rounded-full border border-[#E89B3E]/30 hover:bg-[#1a3d33] hover:border-[#E89B3E]/50 hover:shadow-lg transition-all duration-300 cursor-default hover:scale-105">
              🚫 Prohibido: Negro, Blanco, Beige, Perla o Rojo
              </p>
          </div>
        </section>

        {/* RSVP */}
        <section className="py-24 md:py-36 text-center bg-gradient-to-b from-white to-[#FFFBF5] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center overflow-hidden">
            <span className={`${greatVibes.className} text-[12rem] md:text-[24rem] whitespace-nowrap animate-[float_8s_ease-in-out_infinite] text-[#8B6B47]`}>
              Confirmar
            </span>
          </div>

          <div className="relative z-10 px-6 md:px-8">
            <h3 className={`${playfair.className} text-4xl md:text-6xl mb-5 md:mb-8 text-[#3B2F2F] hover:scale-105 transition-transform duration-500 cursor-default font-light px-4`}>
              ¿Nos acompañas?
            </h3>
            
            <div className="w-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8 md:mb-10 rounded-full hover:w-32 transition-all duration-700 shadow-sm"></div>
            
            <p className={`${cormorant.className} mb-12 md:mb-14 text-gray-600 max-w-lg mx-auto text-base md:text-lg leading-relaxed hover:text-gray-800 transition-colors duration-500 font-light`}>
              Tu presencia es nuestro mejor regalo. Por favor confirma tu
              asistencia antes del evento.
            </p>
            
            <a
              href="https://wa.me/5210000000000?text=Hola!%20Confirmo%20mi%20asistencia%20con%20mucha%20alegría%20para%20la%20Boda%20de%20Iraira%20y%20Marcos%20y%20el%20Bautizo%20de%20Aranza."
              target="_blank"
              className={`${montserrat.className} inline-flex items-center gap-3 px-10 py-5 md:px-14 md:py-6 bg-gradient-to-r from-[#8B6B47] to-[#7D5A3B] text-white uppercase tracking-[0.25em] font-bold text-[11px] md:text-xs shadow-[0_15px_35px_rgba(139,107,71,0.4)] hover:shadow-[0_25px_50px_rgba(139,107,71,0.6)] transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-lg group border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/40`}
            >
              <span className="group-hover:animate-[pulse_0.5s_ease-in-out_infinite]">Confirmar por WhatsApp</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
<footer className="py-16 text-center bg-[#F9F4EC] border-t border-[#D4AF37]/25 overflow-visible">
<div className="mb-6 overflow-visible px-6 md:px-10">
  <h2
    className={`${greatVibes.className}
      text-6xl md:text-7xl
      leading-[1.35]
      inline-block
      overflow-visible
      whitespace-nowrap
    `}
    style={{
      backgroundImage: `
        linear-gradient(
          120deg,
          #FFF8DC 0%,
          #F6E27A 18%,
          #E6C453 32%,
          #D4AF37 48%,
          #B8962E 58%,
          #EAD27F 72%,
          #FFF4CC 100%
        )
      `,
      backgroundSize: '200% 200%',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      textShadow: '0 1px 1.5px rgba(120, 90, 25, 0.18)',
    }}
  >
    J<span className="mx-1 align-middle">&</span>M
  </h2>
</div>


  {/* divisor */}
  <div className="flex justify-center mb-6">
    <span
      className="block h-[1.5px] w-24"
      style={{
        background:
          'linear-gradient(to right, transparent, #D4AF37, transparent)',
      }}
    />
  </div>

  <p
    className={`${montserrat.className}
      text-[10px]
      uppercase
      tracking-[0.35em]
    `}
    style={{ color: '#8B7A5A' }}
  >
    9 de Mayo de 2026 · Valle de Bravo
  </p>
</footer>



        {/* ANIMACIONES */}
        <style jsx global>{`
          .rotate-x-[180deg] {
            transform: rotateX(180deg);
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideInUp {
            from { 
              opacity: 0; 
              transform: translateY(40px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
          
          @keyframes expandWidth {
            from { width: 0; }
            to { width: inherit; }
          }
          
          @keyframes drawBorder {
            from { 
              width: 0; 
              height: 0; 
            }
            to { 
              width: 8rem; 
              height: 8rem; 
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
          }
          
          @keyframes pulse {
            0%, 100% { 
              transform: scale(1); 
              opacity: 1;
            }
            50% { 
              transform: scale(1.05); 
              opacity: 0.9;
            }
          }
          
          @keyframes bounce {
            0%, 100% { 
              transform: translateY(0px);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% { 
              transform: translateY(-10px);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }
        `}</style>
      </main>
    </>
  );
}