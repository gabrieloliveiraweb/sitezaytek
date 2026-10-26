import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const projects = [
    {
      id: 1,
      num: "01",
      tag: "Site Institucional",
      title: "WM Investimentos Imobiliários",
      image: "/mockup-wm.webp",
      type: "real_estate",
      description:
        "Site institucional desenvolvido para fortalecer a presença da marca e apresentar a empresa com uma identidade visual sofisticada de alto padrão e profissional.",
      highlight:
        "Uma presença digital própria para valorizar a marca e transmitir credibilidade",
      link: "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vi+o+projeto+da+WM+Investimentos+Imobili%C3%A1rios+e+quero+saber+mais.",
    },
    {
      id: 2,
      num: "02",
      tag: "Plataforma de Cibersegurança",
      title: "Spysec",
      image: "/mockup-spysec-dashboard.webp",
      type: "cybersecurity",
      description:
        "Plataforma gamificada de treinamento em cibersegurança, desenvolvida para conscientizar usuários e ajudar a reduzir riscos relacionados ao fator humano.",
      highlight:
        "Uma experiência de aprendizagem que une gamificação e conscientização em segurança digital",
      link: "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vi+a+plataforma+Spysec+de+Ciberseguran%C3%A7a+e+quero+conversar+sobre+um+projeto+similar.",
    },
    {
      id: 3,
      num: "03",
      tag: "Site Institucional",
      title: "Restaurante Ponto do Sabor",
      image: "/mockup-ponto-sabor.webp",
      type: "restaurant",
      description:
        "Site institucional com apresentação do estabelecimento e cardápio integrado, direcionando o cliente direto para o WhatsApp para fazer o pedido.",
      highlight:
        "Presença digital própria para valorizar o cardápio e agilizar o contato com o cliente",
      link: "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vi+o+projeto+do+Restaurante+Ponto+do+Sabor+e+quero+saber+mais.",
    },
    {
      id: 4,
      num: "04",
      tag: "Sistema Web",
      title: "FynanceHub",
      image: "/mockup-financehub.webp",
      type: "finance",
      description:
        "Aplicação web para centralização de fluxo de caixa, gestão e controle financeiro para aposentar de vez as planilhas manuais da operação.",
      highlight:
        "Ambiente centralizado para organizar dados financeiros e acompanhar a operação com clareza",
      link: "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vi+o+projeto+FynanceHub+e+quero+conversar+sobre+um+sistema+para+minha+empresa.",
    },
    {
      id: 5,
      num: "05",
      tag: "Site Institucional",
      title: "Academia Worldfit",
      image: "/mockup-worldfit.webp",
      type: "gym",
      description:
        "Site moderno desenvolvido para a Worldfit, com destaque para planos, modalidades, grade de treinos e captação de novos alunos.",
      highlight:
        "Presença digital dinâmica para valorizar a infraestrutura e converter visitantes em matrículas",
      link: "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vi+o+projeto+da+Academia+Worldfit+e+quero+saber+mais.",
    },
  ];

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];

  const renderVisual = (project: typeof projects[0]) => {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-in-out"
      />
    );
  };

  return (
    <section id="projetos" className="py-20 md:py-28 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4"
          >
            <span className="h-[1px] w-8 md:w-12 bg-[#23525F]/30 inline-block" />
            <span>PROJETOS</span>
            <span className="h-[1px] w-8 md:w-12 bg-[#23525F]/30 inline-block" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[32px] sm:text-[44px] md:text-[50px] font-display font-bold text-[#112A32] leading-[1.12] mb-5 max-w-3xl mx-auto"
            style={{ textWrap: "balance" }}
          >
            Conheça o que já desenvolvemos
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] sm:text-[18px] text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Uma seleção de projetos que mostra diferentes aplicações, de sites institucionais a plataformas e sistemas personalizados.
          </motion.p>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div
          className="max-w-[1100px] mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slide Card with Smooth Transition */}
          <div className="relative min-h-[460px] md:min-h-[440px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProject.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-white rounded-3xl border border-[rgba(35,82,95,0.12)] p-6 sm:p-9 lg:p-11 shadow-[0_16px_40px_rgba(17,42,50,0.08)] hover:shadow-[0_24px_55px_rgba(17,42,50,0.12)] transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
                  {/* Visual Mockup Column (Clickable to view modal) */}
                  <div
                    className="w-full lg:w-[50%] aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto rounded-2xl overflow-hidden border border-[rgba(35,82,95,0.12)] cursor-pointer group shrink-0 relative bg-[#0D1E22]"
                    onClick={() => setSelectedImage(currentProject.image)}
                    title="Clique para ampliar"
                  >
                    {renderVisual(currentProject)}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                      <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-mono px-3 py-1.5 rounded-full">
                        Clique para ampliar
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="w-full lg:w-[50%] flex flex-col justify-between text-left">
                    <div>
                      {/* Top Bar with Tag and Number */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="inline-flex bg-[rgba(35,82,95,0.08)] text-[#23525F] font-sans font-semibold text-[11px] uppercase tracking-wider rounded-full px-3.5 py-1">
                          {currentProject.tag}
                        </span>
                        <span className="font-mono text-sm font-bold text-[#23525F]/40">
                          {currentProject.num} / 0{projects.length}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-[24px] sm:text-[28px] text-[#0D1E22] leading-tight mb-3">
                        {currentProject.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-[15px] sm:text-[16px] text-[#4A6068] leading-relaxed mb-5 font-normal">
                        {currentProject.description}
                      </p>

                      {/* Highlight */}
                      <div className="border-l-[3px] border-[#23525F] pl-3.5 py-1 bg-[rgba(35,82,95,0.03)] rounded-r-lg">
                        <p className="font-sans font-semibold text-[14px] sm:text-[15px] text-[#23525F] leading-snug">
                          {currentProject.highlight}
                        </p>
                      </div>
                    </div>

                    {/* Bottom CTA & Link */}
                    <div className="pt-6 mt-6 border-t border-[rgba(35,82,95,0.08)] flex items-center justify-start">
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans font-semibold text-[14px] text-[#23525F] hover:text-[#1A3F49] hover:gap-2.5 transition-all duration-200 group/btn"
                      >
                        <span>Ver projeto</span>
                        <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CAROUSEL CONTROLS & PAGINATION */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Dots Pagination */}
            <div className="flex items-center gap-2">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-[#23525F]"
                      : "w-2.5 bg-[rgba(35,82,95,0.2)] hover:bg-[rgba(35,82,95,0.4)]"
                  }`}
                  aria-label={`Ir para projeto ${idx + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause indicator & Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="w-8 h-8 rounded-full border border-[rgba(35,82,95,0.15)] flex items-center justify-center text-[#4A6068] hover:text-[#23525F] hover:border-[#23525F] transition-colors cursor-pointer"
                title={isPaused ? "Retomar reprodução automática" : "Pausar carrossel"}
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? <Play size={13} className="ml-0.5" /> : <Pause size={13} />}
              </button>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border border-[rgba(35,82,95,0.15)] flex items-center justify-center text-[#112A32] hover:bg-[#23525F] hover:text-white hover:border-[#23525F] transition-all shadow-xs cursor-pointer"
                  aria-label="Projeto anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-[rgba(35,82,95,0.15)] flex items-center justify-center text-[#112A32] hover:bg-[#23525F] hover:text-white hover:border-[#23525F] transition-all shadow-xs cursor-pointer"
                  aria-label="Próximo projeto"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for viewing project image if clicked */}
        <AnimatePresence>
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-4xl w-full bg-bg-surface rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <X size={20} />
                </button>
                <img
                  src={selectedImage}
                  alt="Pré-visualização do projeto"
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
