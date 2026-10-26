import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Não sei exatamente qual solução preciso. Posso entrar em contato mesmo assim?",
      a: "Claro. Você não precisa chegar com tudo definido. Basta nos contar o que deseja construir, melhorar ou resolver. A partir disso, podemos entender sua necessidade e identificar qual tipo de solução faz mais sentido.",
    },
    {
      q: "Os projetos são personalizados?",
      a: "Sim. Desenvolvemos projetos sob medida, de acordo com as necessidades de cada negócio. Também oferecemos soluções Zaytek, que partem de uma estrutura já desenvolvida e podem ser configuradas e personalizadas para cada estabelecimento.",
    },
    {
      q: "Quanto custa desenvolver um projeto?",
      a: "O investimento depende do tipo de projeto, das funcionalidades e da complexidade do desenvolvimento. Por isso, precisamos compreender sua necessidade antes de apresentar uma proposta adequada ao que será construído.",
    },
    {
      q: "Quanto tempo leva para desenvolver um projeto?",
      a: "O prazo varia conforme o escopo e a complexidade da solução. Um site institucional, por exemplo, possui necessidades diferentes de uma plataforma ou sistema personalizado. O cronograma é definido de acordo com as etapas e entregas de cada projeto.",
    },
    {
      q: "A Zaytek atende empresas de qualquer segmento?",
      a: "Atuamos com diferentes tipos de negócios, sem nos limitar a um segmento específico. O mais importante é entender a necessidade e avaliar se ela está dentro das soluções que conseguimos desenvolver.",
    },
    {
      q: "Domínio, hospedagem e outros serviços estão incluídos?",
      a: "Isso depende das necessidades e da proposta de cada projeto. Os recursos necessários para colocar a solução em funcionamento, assim como eventuais custos recorrentes, são apresentados durante a definição do escopo.",
    },
    {
      q: "Como funciona o suporte após a entrega?",
      a: "As condições de suporte, manutenção e futuras atualizações são definidas conforme o tipo de projeto. Antes da contratação, alinhamos o que está incluído na entrega e quais serviços adicionais poderão ser necessários.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-20 md:pt-24 pb-32 sm:pb-36 md:pb-40 bg-[#F2F6F7] text-text-primary">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Centered Section Header */}
        <div className="mb-14 md:mb-16 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4">
            <span className="h-[1px] w-8 md:w-12 bg-[#23525F]/30 inline-block" />
            <span>PERGUNTAS FREQUENTES</span>
            <span className="h-[1px] w-8 md:w-12 bg-[#23525F]/30 inline-block" />
          </div>

          <h2 className="text-[36px] sm:text-[46px] md:text-[52px] font-bold text-[#112A32] leading-[1.1] font-serif mb-4 text-center">
            Ficou alguma dúvida?
          </h2>

          <p className="text-[16px] sm:text-[17px] text-text-secondary max-w-xl text-center">
            Principais respostas sobre escopo, prazos, investimento e formato de trabalho da Zaytek.
          </p>
        </div>

        {/* Accordion List without item numbering */}
        <div className="border-t border-[rgba(35,82,95,0.12)]">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-[rgba(35,82,95,0.1)] transition-colors duration-300">
      <button
        onClick={onClick}
        className="w-full py-6 sm:py-7 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
      >
        <span
          className={`font-sans font-semibold text-[16px] sm:text-[17px] pr-6 transition-colors duration-300 ${
            isOpen ? "text-[#23525F]" : "text-[#112A32] group-hover:text-[#23525F]"
          }`}
        >
          {question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-[#23525F] text-white"
              : "bg-white/80 text-text-secondary group-hover:bg-[#23525F]/10 group-hover:text-[#23525F]"
          }`}
        >
          {isOpen ? (
            <Minus size={18} strokeWidth={2} />
          ) : (
            <Plus size={18} strokeWidth={2} />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pt-1 text-[15px] sm:text-[16px] text-text-secondary leading-relaxed pr-6 sm:pr-12 font-sans font-normal">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
