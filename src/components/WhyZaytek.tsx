import { motion } from "motion/react";
import { Sliders, Layers, MessagesSquare, Code2 } from "lucide-react";

export default function WhyZaytek() {
  const differentials = [
    {
      num: "01",
      icon: Sliders,
      title: "Solução para sua Realidade",
      text: "Em vez de forçar a sua empresa a se adaptar a ferramentas genéricas, construímos a solução de acordo com a necessidade exata da sua rotina. Cada recurso é pensado para resolver o seu problema com simplicidade e eficiência.",
    },
    {
      num: "02",
      icon: Layers,
      title: "Execução de Ponta a Ponta",
      text: "Do design e desenvolvimento web aos sistemas internos e automações, reunimos diferentes capacidades técnicas para construir soluções completas.",
    },
    {
      num: "03",
      icon: MessagesSquare,
      title: "Comunicação Direta com Quem Constrói",
      text: "Você participa das decisões falando direto com quem projeta e desenvolve a solução. Sem intermediários comerciais, o alinhamento é ágil e as decisões são tomadas com total transparência.",
    },
    {
      num: "04",
      icon: Code2,
      title: "Engenharia de Software",
      text: "Estruturamos cada solução com padrões técnicos que garantem estabilidade imediata e facilidade de manutenção. Seu sistema nasce seguro hoje e pronto para novos recursos amanhã, sem risco de retrabalho caro.",
    },
  ];

  return (
    <section
      id="por-que-zaytek"
      className="w-full pt-24 md:pt-32 pb-20 md:pb-24 bg-[#F8FAFB] text-[#112A32] relative overflow-hidden"
    >
      {/* Background Subtle Atmosphere */}
      <div
        className="absolute top-1/4 -right-40 w-[550px] h-[550px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #23525F 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, #3BB1CA 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 text-left">
        {/* Cabeçalho da Seção */}
        <header className="max-w-3xl mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4"
          >
            <span>POR QUE ZAYTEK</span>
            <span className="h-[1px] w-16 bg-[#23525F]/30 inline-block" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[34px] sm:text-[44px] md:text-[52px] font-bold text-[#112A32] tracking-tight leading-[1.1] mb-5 font-serif"
            style={{ textWrap: "balance" }}
          >
            Tecnologia sob medida para quem precisa de resultado,{" "}
            <span className="italic font-normal text-[#23525F]">
              não de complicação
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] sm:text-[18px] text-[#4A6068] leading-relaxed font-sans font-normal"
          >
            Unimos a visão estratégica de um parceiro de negócios à velocidade de um estúdio técnico enxuto. Sem burocracia, sem intermediários.
          </motion.p>
        </header>

        {/* Grid de Diferenciais (4 Cards em 2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="group relative bg-white border border-[rgba(35,82,95,0.14)] hover:border-[#23525F]/40 rounded-3xl p-8 sm:p-9 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(17,42,50,0.07)] hover:shadow-[0_20px_45px_rgba(17,42,50,0.13)] flex flex-col justify-between overflow-hidden"
              >
                {/* Top subtle hover accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#23525F] via-[#3BB1CA] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#23525F]/10 border border-[#23525F]/20 text-[#23525F] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#23525F]/15 transition-all duration-300">
                      <Icon size={24} strokeWidth={1.75} />
                    </div>

                    <span className="font-mono text-xs text-[#23525F]/50 group-hover:text-[#23525F] transition-colors duration-300 font-bold">
                      {item.num}
                    </span>
                  </div>

                  {/* Título do Card */}
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#112A32] font-serif leading-snug mb-3.5 group-hover:text-[#23525F] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Texto Descritivo */}
                  <p className="text-[14px] sm:text-[15px] text-[#4A6068] leading-relaxed font-sans font-normal">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
