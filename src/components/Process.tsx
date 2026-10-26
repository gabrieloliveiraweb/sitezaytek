import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 75%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.95], ["0%", "100%"]);
  const [activeStep, setActiveStep] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.8) setActiveStep(4);
    else if (latest > 0.52) setActiveStep(3);
    else if (latest > 0.25) setActiveStep(2);
    else setActiveStep(1);
  });

  const steps = [
    {
      num: "01",
      title: "Entendimento e escopo",
      text: "Entendemos o contexto do negócio, o que precisa ser resolvido e quais funcionalidades fazem sentido. A partir disso, definimos o escopo do projeto.",
      highlight: "Alinhamento estratégico & definição de entregáveis",
    },
    {
      num: "02",
      title: "Planejamento e estrutura",
      text: "Organizamos a solução, definimos as principais telas, fluxos e funcionalidades e alinhamos a direção antes de avançar para a construção.",
      highlight: "Wireframes, arquitetura de informação e direção",
    },
    {
      num: "03",
      title: "Desenvolvimento e validação",
      text: "Desenvolvemos as interfaces e funcionalidades, realizamos testes e apresentamos o andamento para validar os pontos importantes do projeto.",
      highlight: "Construção de código, testes e validações pontuais",
    },
    {
      num: "04",
      title: "Entrega e implantação",
      text: "Realizamos os ajustes finais, preparamos a publicação e colocamos a solução em funcionamento, conforme o escopo combinado.",
      highlight: "Homologação final, deploy e suporte no ar",
    },
  ];

  return (
    <section
      id="processo"
      className="py-20 md:py-24 bg-[#0D1E22] text-[#ECEEF0] relative rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] rounded-b-[36px] sm:rounded-b-[48px] md:rounded-b-[56px] overflow-hidden border-t border-b border-white/[0.08] shadow-[0_24px_48px_rgba(0,0,0,0.35)] relative z-20 -my-12 md:-my-16"
      ref={containerRef}
    >
      {/* Subtle atmospheric radial glow */}
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #3BB1CA 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 -left-40 w-[450px] h-[450px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #23525F 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-left">
        {/* Section Header */}
        <div className="mb-14 md:mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#4FD1C5] uppercase mb-6"
          >
            <span>NOSSO PROCESSO</span>
            <span className="h-[1px] w-20 md:w-32 bg-[#4FD1C5]/30 inline-block" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[36px] sm:text-[48px] md:text-[56px] font-bold text-white tracking-tight leading-[1.08] mb-5 font-serif text-left"
            style={{ textWrap: "balance" }}
          >
            Um processo claro,{" "}
            <span className="italic font-normal text-[#4FD1C5]">
              do início à entrega
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] sm:text-[18px] text-[#A0AEC0] max-w-2xl font-sans leading-relaxed text-left font-normal"
          >
            Da definição do escopo à implantação, cada etapa tem um objetivo. Alinhamos o que será desenvolvido, validamos as decisões importantes e construímos a solução conforme o que foi combinado.
          </motion.p>
        </div>

        {/* Vertical Animated Filling Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-16">
          {/* Timeline Vertical Track */}
          <div className="absolute left-[23px] sm:left-[27px] md:left-[31px] top-[24px] bottom-[28px] w-[2px]">
            {/* Base Line */}
            <div className="w-full h-full bg-white/[0.1] rounded-full" />
            {/* Animated Filling Active Line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-[#3BB1CA] origin-top shadow-[0_0_14px_rgba(59,177,202,0.85)] rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps List */}
          <div className="space-y-14 sm:space-y-16 md:space-y-20 relative z-10">
            {steps.map((step, index) => {
              const isActive = activeStep >= index + 1;
              const isCurrent = activeStep === index + 1;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative flex items-start gap-6 sm:gap-8 group"
                >
                  {/* Step Node Circle */}
                  <div className="relative shrink-0">
                    <div
                      className={`w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] rounded-full border-[1.5px] bg-[#0D1E22] flex items-center justify-center transition-all duration-500 select-none ${
                        isActive
                          ? "border-[#3BB1CA] bg-[rgba(59,177,202,0.12)] shadow-[0_0_20px_rgba(59,177,202,0.35)]"
                          : "border-white/[0.15] text-white/40 group-hover:border-white/30"
                      }`}
                    >
                      <span
                        className={`font-mono text-[14px] sm:text-[15px] font-bold transition-colors duration-500 ${
                          isActive
                            ? "text-[#3BB1CA]"
                            : "text-white/40 group-hover:text-white/70"
                        }`}
                      >
                        {step.num}
                      </span>
                    </div>

                    {/* Small pulsing radar dot on currently active step */}
                    {isCurrent && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#3BB1CA] animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Step Content Block strictly left-aligned */}
                  <div className="flex-1 pt-1 text-left">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-[11px] sm:text-[12px] font-mono uppercase tracking-widest font-semibold transition-colors duration-500 ${
                          isActive ? "text-[#4FD1C5]" : "text-white/40"
                        }`}
                      >
                        Etapa {parseFloat(step.num)}
                      </span>
                    </div>

                    <h3
                      className={`text-[22px] sm:text-[26px] md:text-[30px] font-bold leading-tight font-serif mb-3 transition-colors duration-300 text-left ${
                        isActive ? "text-white" : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#A0AEC0] leading-relaxed max-w-2xl font-sans font-normal mb-4 text-left">
                      {step.text}
                    </p>

                    <div className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] text-white/70 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-md">
                      <CheckCircle2
                        size={15}
                        className={`shrink-0 transition-colors duration-500 ${
                          isActive ? "text-[#3BB1CA]" : "text-white/40"
                        }`}
                      />
                      <span>{step.highlight}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
