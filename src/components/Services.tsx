import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Sites e Landing Pages",
      description:
        "Sites institucionais e páginas personalizadas para apresentar sua empresa, valorizar seus serviços e facilitar contatos, orçamentos e outras ações importantes.",
      tags: ["Presença digital", "Captação de contatos", "Apresentação profissional"],
    },
    {
      num: "02",
      title: "Lojas Virtuais",
      description:
        "Canais próprios de venda online, com catálogo de produtos e uma experiência de compra organizada para facilitar a jornada dos seus clientes.",
      tags: ["Vendas online", "Catálogo de produtos", "Experiência de compra"],
    },
    {
      num: "03",
      title: "Sistemas",
      description:
        "Sistemas personalizados para centralizar informações, organizar processos e atender necessidades que planilhas ou ferramentas prontas não resolvem bem.",
      tags: ["Gestão centralizada", "Processos organizados", "Soluções sob medida"],
    },
    {
      num: "04",
      title: "Automações",
      description:
        "Integrações e fluxos automatizados para conectar ferramentas, reduzir tarefas manuais e evitar retrabalho nas operações do dia a dia.",
      tags: ["Integração de ferramentas", "Tarefas automatizadas", "Menos retrabalho"],
    },
    {
      num: "05",
      title: "Aplicativos",
      description:
        "Aplicativos personalizados para produtos e serviços que precisam de uma experiência própria no celular, com funcionalidades pensadas para seus usuários.",
      tags: ["Experiência mobile", "Funcionalidades próprias", "Desenvolvimento personalizado"],
    },
  ];

  const getWaLinkForService = (serviceName: string) => {
    const text = encodeURIComponent(
      `Oi Gabriel, vim pelo site da Zaytek e quero conversar sobre o desenvolvimento de ${serviceName} para o meu negócio.`
    );
    return `https://wa.me/5541920047176?text=${text}`;
  };

  return (
    <section
      id="servicos"
      className="relative z-20 -mt-10 sm:-mt-14 md:-mt-20 rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] bg-[#F8FAFB] text-[#112A32] py-24 md:py-32 overflow-hidden border-t border-black/[0.05] shadow-[0_-20px_48px_rgba(0,0,0,0.12)]"
    >
      {/* Background subtle atmospheric radial glow */}
      <div
        className="absolute top-1/4 -right-40 w-[550px] h-[550px] rounded-full pointer-events-none opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #23525F 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #2E8A9E 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-left">
        {/* Section Header with Left-Aligned Editorial Hierarchy */}
        <div className="mb-14 md:mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-6"
          >
            <span className="font-semibold">SERVIÇOS</span>
            <span className="h-[1px] w-20 md:w-32 bg-[#23525F]/25 inline-block" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[56px] font-bold text-[#112A32] tracking-tight leading-[1.1] mb-4 font-serif text-left"
            style={{ textWrap: "balance" }}
          >
            O que desenvolvemos{" "}
            <span className="italic font-normal text-[#23525F]">
              para sua empresa
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] sm:text-[16px] md:text-[16px] lg:text-[17px] text-[#4A646C] max-w-2xl font-sans leading-relaxed text-left font-normal"
          >
            De uma presença digital profissional a ferramentas para organizar sua operação. Desenvolvemos projetos sob medida para diferentes necessidades do seu negócio.
          </motion.p>
        </div>

        {/* Editorial Services List with Interactive Hover State */}
        <div className="relative">
          {services.map((item, index) => {
            const waLink = getWaLinkForService(item.title);

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group relative text-left"
              >
                {/* Top Border Line that smoothly walks/fills from left to right on hover with opacity gradient */}
                <div className="relative w-full h-[1.5px] bg-[#112A32]/[0.08] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#23525F] via-[#2E8A9E] to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-8 sm:py-10 md:py-10 lg:py-14 transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-4 sm:gap-7 md:gap-9">
                    {/* Index Number */}
                    <span className="text-[13px] sm:text-[14px] font-mono tracking-wider text-[#112A32]/40 group-hover:text-[#23525F] transition-colors duration-300 pt-1.5 shrink-0 select-none">
                      {item.num}
                    </span>

                    {/* Content Block */}
                    <div className="flex-1 text-left">
                      {/* Title & Top-Right Arrow */}
                      <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
                        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[42px] font-bold text-[#112A32] tracking-tight leading-[1.14] font-serif group-hover:text-[#23525F] transition-colors duration-300 text-left">
                          {item.title}
                        </h3>

                        {/* Top-Right Arrow identical to reference */}
                        <div className="text-[#112A32]/30 group-hover:text-[#23525F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 pr-2">
                          <ArrowUpRight size={24} strokeWidth={1.75} />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] text-[#4A646C] max-w-2xl leading-relaxed mb-5 font-sans font-normal text-left">
                        {item.description}
                      </p>

                      {/* Pill Tags that turn accent on hover (menores no mobile) */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 text-left">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center rounded-full px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-[10.5px] sm:text-[12px] font-sans font-medium bg-white border border-[#E2E8F0] text-[#4A646C] shadow-xs group-hover:border-[#23525F]/40 group-hover:text-[#23525F] group-hover:bg-[#23525F]/[0.05] transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
          {/* Closing bottom border line for the last item */}
          <div className="relative w-full h-[1.5px] bg-[#112A32]/[0.08]" />
        </div>
      </div>
    </section>
  );
}
