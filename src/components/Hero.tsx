import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import InteractiveHeroBackground from "./InteractiveHeroBackground";

export default function Hero() {
  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vim+pelo+site+da+Zaytek+e+gostaria+de+falar+com+a+equipe.";

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col justify-center bg-[#080E10] overflow-hidden min-h-[100svh] pt-28 pb-20 md:pt-36 md:pb-24"
    >
      {/* Three.js 3D undulating wave particle field background */}
      <InteractiveHeroBackground />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-start text-left">
        {/* Main Headline Left-Aligned with Gradient Emphasis */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[70px] font-extrabold text-white leading-[1.08] tracking-[-0.03em] max-w-4xl text-left font-sans mb-6"
          style={{ textWrap: "balance" }}
        >
          Tecnologia para sua empresa{" "}
          <span className="bg-gradient-to-r from-[#4FD1C5] via-[#38E0CF] to-[#7EFBEF] bg-clip-text text-transparent">
            vender, atender e operar melhor
          </span>
        </motion.h1>

        {/* Subtitle Left-Aligned with Refined Contrast and Spacing */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[17px] sm:text-[19px] md:text-[21px] text-[#A6BDC5] leading-[1.6] max-w-2xl text-left font-normal mb-10"
        >
          Desenvolvemos sites, lojas virtuais, sistemas, aplicativos e automações a partir das necessidades do seu negócio.
        </motion.p>

        {/* Action Buttons Left-Aligned with Elevated Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA Button */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#4FD1C5] via-[#38E0CF] to-[#2BA897] text-[#081519] px-9 py-4 rounded-xl font-bold text-[15px] tracking-wide shadow-[0_4px_24px_rgba(79,209,197,0.35)] hover:shadow-[0_8px_36px_rgba(79,209,197,0.55)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group cursor-pointer"
          >
            {/* Shimmer light sweep */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none" />
            <span className="relative z-10">Falar conosco</span>
            <ArrowRight
              size={18}
              className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300"
            />
          </a>

          {/* Secondary Button */}
          <a
            href="#projetos"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-[15px] font-semibold text-white bg-white/[0.05] hover:bg-white/[0.11] border border-white/15 hover:border-white/35 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group cursor-pointer"
          >
            <span>Ver projetos</span>
            <ArrowRight
              size={18}
              className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300"
            />
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-white/30 hover:text-white/60 transition-colors pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  );
}
