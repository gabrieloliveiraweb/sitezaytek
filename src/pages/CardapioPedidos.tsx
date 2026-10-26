import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Plus,
  Minus,
  Smartphone,
  Percent,
  Send,
  SlidersHorizontal,
  Store,
  TrendingUp,
} from "lucide-react";
import Footer from "../components/Footer";
import InteractiveHeroBackground from "../components/InteractiveHeroBackground";

export default function CardapioPedidos() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+quero+implantar+o+canal+de+pedidos+com+site+e+card%C3%A1pio+da+Zaytek+no+meu+restaurante.";
  const demoLink = "https://brasaebrioche.vercel.app";

  const beneficios = [
    {
      title: "Zero comissão",
      text: "Venda pelo seu canal próprio sem pagar porcentagem por pedido.",
      icon: Percent,
    },
    {
      title: "Pedidos organizados",
      text: "Receba itens, adicionais e valores diretamente no WhatsApp.",
      icon: Send,
    },
    {
      title: "Sua marca em destaque",
      text: "Um site com a identidade do restaurante, fotos, informações e cardápio.",
      icon: Store,
    },
    {
      title: "Cardápio sob seu controle",
      text: "Altere preços e disponibilidade quando precisar, sem depender do suporte.",
      icon: SlidersHorizontal,
    },
  ];

  const steps = [
    {
      num: "01",
      title: "O cliente acessa seu site",
      text: "Pelo Instagram, link direto, código QR ou ícone na tela inicial do celular. Sem instalação obrigatória.",
      icon: Smartphone,
    },
    {
      num: "02",
      title: "Monta o próprio pedido",
      text: "Escolhe produtos, adicionais e opções de entrega ou retirada.",
      icon: SlidersHorizontal,
    },
    {
      num: "03",
      title: "Envia tudo pelo WhatsApp",
      text: "Seu estabelecimento recebe o pedido formatado para confirmar o atendimento e combinar o pagamento.",
      icon: Send,
    },
  ];

  const faqs = [
    {
      q: "O pagamento acontece pelo site?",
      a: "Não. O pedido é enviado ao WhatsApp, onde você confirma o pagamento. Integrações de pagamento online podem ser contratadas separadamente.",
    },
    {
      q: "Como faço para atualizar meu cardápio?",
      a: "Você poderá alterar preços e disponibilidade dos produtos por uma planilha simples, sem precisar solicitar cada atualização ao suporte.",
    },
    {
      q: "O cliente precisa baixar algum aplicativo?",
      a: "Não. O cardápio funciona diretamente no navegador. Se preferir, o cliente também pode adicioná-lo à tela inicial do celular, como um aplicativo, nos dispositivos compatíveis.",
    },
    {
      q: "O que acontece se eu cancelar a assinatura?",
      a: "Você pode cancelar sem fidelidade. Você deixa de receber nossos serviços de hospedagem, manutenção e suporte. Caso queira continuar com o site no ar, poderá transferi-lo para outra hospedagem, utilizando os arquivos fornecidos pela Zaytek. Caso precise de ajuda para migrar, oferecemos esse serviço separadamente.",
    },
  ];

  const garantias = [
    "Entrega em 3 a 5 dias úteis",
    "Sem fidelidade na manutenção mensal",
    "Suporte direto pelo WhatsApp",
  ];

  return (
    <div className="w-full font-sans text-text-primary bg-bg-primary overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92svh] pt-32 pb-28 md:pb-36 bg-[#080E10] text-[#ECEEF0] overflow-hidden flex items-center justify-center relative z-10">
        {/* Three.js 3D undulating wave particle field background */}
        <InteractiveHeroBackground />

        {/* Background Atmosphere */}
        <div
          className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #4FD1C5 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-10 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #23525F 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
          style={{
            background: `radial-gradient(circle, rgba(79,209,197,0.15) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-start text-left w-full">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] font-bold text-white tracking-tight leading-[1.08] mb-6 font-serif max-w-4xl text-left"
            style={{ textWrap: "balance" }}
          >
            Seu próprio site de pedidos, sem pagar comissão{" "}
            <span className="italic font-normal text-[#4FD1C5]">por venda</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[15px] sm:text-[17px] md:text-[19px] text-[#A0AEC0] max-w-3xl text-left leading-relaxed font-sans font-normal mb-8 sm:mb-10"
          >
            Cardápio interativo, pedidos organizados no WhatsApp e sua marca em destaque. Tudo em um canal próprio para seu negócio.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 bg-gradient-to-r from-[#4FD1C5] via-[#3ec5b9] to-[#38b2a5] hover:brightness-105 text-[#0D1E22] px-6 sm:px-8 py-3.5 sm:py-4 rounded-[8px] font-bold text-[14px] sm:text-[16px] transition-all duration-300 shadow-[0_0_24px_rgba(79,209,197,0.35)] hover:shadow-[0_0_36px_rgba(79,209,197,0.6)] hover:-translate-y-0.5 group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
              <span className="relative z-10 whitespace-nowrap">Quero meu canal de pedidos</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            <a
              href="#demo"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 border border-white/20 hover:border-[#4FD1C5]/50 text-white bg-white/[0.05] hover:bg-white/[0.1] rounded-[8px] px-6 sm:px-7 py-3.5 sm:py-4 font-semibold text-[14px] sm:text-[15px] transition-all duration-300 hover:-translate-y-0.5 shadow-xs whitespace-nowrap"
            >
              <span>Ver demonstração</span>
              <ArrowRight size={16} className="opacity-70 shrink-0" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. DEMO */}
      <section
        id="demo"
        className="relative z-20 -mt-10 sm:-mt-14 md:-mt-20 rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] bg-white text-[#0D1E22] py-20 sm:py-24 md:py-28 overflow-hidden border-t border-black/[0.05] shadow-[0_-20px_48px_rgba(0,0,0,0.12)]"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Copy & Action */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4">
                <span>DEMONSTRAÇÃO</span>
                <span className="h-[1px] w-12 bg-[#23525F]/30 inline-block" />
              </div>

              <h2
                className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[58px] font-bold text-[#112A32] tracking-tight leading-[1.12] mb-5 font-serif text-left"
                style={{ textWrap: "balance" }}
              >
                Veja como é fácil pedir{" "}
                <span className="italic font-normal text-[#23525F]">pelo seu site</span>
              </h2>

              <p className="text-[15px] sm:text-[17px] text-[#4A6068] leading-relaxed mb-8">
                Seu cliente escolhe os produtos, adiciona complementos e envia o pedido completo pelo WhatsApp, sem precisar instalar nada.
              </p>

              <div>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#23525F] to-[#2E8A9E] hover:brightness-110 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-[8px] font-bold text-[14px] sm:text-[15px] transition-all duration-300 shadow-[0_4px_20px_rgba(35,82,95,0.25)] hover:shadow-[0_8px_30px_rgba(35,82,95,0.35)] hover:-translate-y-0.5 active:scale-[0.98] group"
                >
                  <span>Testar o cardápio na prática</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Mockup image */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative group w-full max-w-full md:max-w-2xl lg:max-w-[560px] mx-auto flex flex-col items-center"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#4FD1C5]/20 via-[#23525F]/20 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full relative rounded-2xl md:rounded-3xl overflow-hidden border border-black/10 bg-[#091518] shadow-[0_24px_50px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:border-[#23525F]/40 group-hover:scale-[1.01]"
                >
                  <img
                    src="/hamb-mockup.webp"
                    alt="Demonstração interativa: Brasa & Brioche Hamburgueria"
                    className="w-full h-auto object-contain mx-auto transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                </a>

                {/* Link minimalista */}
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#4A6068] hover:text-[#23525F] transition-colors group/link"
                >
                  <span>Abrir demo</span>
                  <ExternalLink size={13} className="opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFÍCIOS */}
      <section className="py-20 sm:py-24 md:py-28 bg-[#F8FAFB] text-[#0D1E22] border-t border-[rgba(35,82,95,0.08)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-14 md:mb-16 text-left">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4">
              <span>BENEFÍCIOS</span>
              <span className="h-[1px] w-12 bg-[#23525F]/30 inline-block" />
            </div>

            <h2
              className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold text-[#112A32] tracking-tight leading-[1.14] mb-4 font-serif text-left"
              style={{ textWrap: "balance" }}
            >
              Mais autonomia para vender,{" "}
              <span className="italic font-normal text-[#23525F]">
                menos trabalho para atender
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficios.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[rgba(35,82,95,0.12)] shadow-[0_8px_30px_rgba(17,42,50,0.05)] hover:shadow-[0_18px_42px_rgba(17,42,50,0.1)] hover:border-[#23525F]/30 transition-all duration-300 flex flex-col justify-start h-full text-left cursor-default group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[rgba(35,82,95,0.08)] group-hover:bg-[#23525F]/15 group-hover:scale-105 flex items-center justify-center text-[#23525F] mb-6 transition-all duration-300">
                  <b.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#112A32] font-serif mb-3 group-hover:text-[#23525F] transition-colors">
                  {b.title}
                </h3>
                <p className="text-[14.5px] sm:text-[15px] text-[#4A6068] leading-relaxed">
                  {b.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
      <section className="py-20 sm:py-24 md:py-28 bg-white text-[#0D1E22] border-t border-[rgba(35,82,95,0.08)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-14 md:mb-16 text-left">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4">
              <span>COMO FUNCIONA</span>
              <span className="h-[1px] w-12 bg-[#23525F]/30 inline-block" />
            </div>

            <h2
              className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold text-[#112A32] tracking-tight leading-[1.14] mb-4 font-serif text-left"
              style={{ textWrap: "balance" }}
            >
              Do cardápio ao WhatsApp{" "}
              <span className="italic font-normal text-[#23525F]">
                em 3 passos
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: -24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                  className="bg-[#F8FAFB] rounded-2xl border border-[rgba(35,82,95,0.12)] p-6 sm:p-7 flex flex-col justify-between hover:border-[#23525F]/40 hover:shadow-[0_16px_40px_rgba(17,42,50,0.08)] transition-all duration-300 group text-left cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#23525F]/[0.06] text-[#23525F] flex items-center justify-center group-hover:bg-[#23525F] group-hover:text-white group-hover:shadow-[0_6px_20px_rgba(35,82,95,0.25)] transition-all duration-300 shrink-0">
                        <StepIcon size={22} strokeWidth={1.8} />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#23525F] bg-[rgba(35,82,95,0.06)] px-3 py-1 rounded-full border border-[rgba(35,82,95,0.1)] group-hover:bg-[#23525F] group-hover:text-white transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-[19px] sm:text-[20px] font-bold text-[#112A32] leading-snug mb-3 font-sans tracking-tight group-hover:text-[#23525F] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-[14px] text-[#4A6068] leading-relaxed font-normal font-sans">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INVESTIMENTO */}
      <section className="py-20 sm:py-24 md:py-28 bg-[#F8FAFB] text-[#0D1E22] border-t border-[rgba(35,82,95,0.08)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Headline, Card de Economia & Garantias */}
            <div className="lg:col-span-6 text-left flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4">
                  <span>INVESTIMENTO</span>
                  <span className="h-[1px] w-12 bg-[#23525F]/30 inline-block" />
                </div>

                <h2
                  className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold text-[#112A32] tracking-tight leading-[1.14] mb-5 font-serif text-left"
                  style={{ textWrap: "balance" }}
                >
                  Pare de pagar comissão para receber pedidos{" "}
                  <span className="italic font-normal text-[#23525F]">
                    dos seus clientes
                  </span>
                </h2>

                <p className="text-[15px] sm:text-[16px] text-[#4A6068] leading-relaxed mb-6 lg:mb-8">
                  Valorize sua marca com um site profissional, receba pedidos organizados no WhatsApp e preserve sua margem nas vendas diretas.
                </p>
              </div>

              {/* Card de Economia */}
              <motion.div
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                className="p-6 sm:p-7 md:p-8 rounded-2xl bg-white border border-[rgba(35,82,95,0.12)] shadow-[0_8px_24px_rgba(17,42,50,0.04)] hover:shadow-[0_16px_36px_rgba(17,42,50,0.08)] hover:border-[#23525F]/30 transition-all duration-300 mt-auto flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-[#112A32] font-serif mb-1">
                    Veja quanto você pode deixar de pagar em comissões
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#7A9099] mb-4">
                    Em um pedido de R$ 100:
                  </p>

                  <div className="space-y-3 mb-5">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FEF2F2] border border-red-100 text-xs sm:text-sm">
                      <span className="text-[#991B1B] font-medium">Pelo aplicativo (12%)</span>
                      <span className="font-bold text-[#991B1B]">R$ 12 de comissão</span>
                    </div>
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#ECFDF5] border border-emerald-200 text-xs sm:text-sm">
                      <span className="text-[#065F46] font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                        Pelo seu site
                      </span>
                      <span className="font-extrabold text-[#065F46]">R$ 0 de comissão</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-[#7A9099] italic leading-relaxed pt-3 border-t border-[rgba(35,82,95,0.08)]">
                  *Comparação ilustrativa com a comissão do plano Básico do iFood. Outros custos não estão incluídos.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Pricing Cards & CTA */}
            <div className="lg:col-span-6 flex flex-col h-full">
              <div className="bg-[#0D1E22] text-[#ECEEF0] rounded-3xl p-6 sm:p-8 md:p-9 border border-[#4FD1C5]/30 shadow-[0_24px_60px_rgba(0,0,0,0.35)] relative overflow-hidden text-left flex flex-col justify-between h-full">
                <div
                  className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-20"
                  style={{
                    background: "radial-gradient(circle, #4FD1C5 0%, transparent 70%)",
                  }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 relative z-10">
                  {/* CARD 1 — Desenvolvimento */}
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                    className="bg-white/[0.04] border border-white/10 hover:border-white/25 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#A0AEC0] uppercase tracking-wider block mb-1">
                        Desenvolvimento
                      </span>
                      <div className="flex items-baseline gap-1.5 my-2">
                        <span className="text-3xl sm:text-4xl font-bold font-serif text-white">R$ 497</span>
                      </div>
                      <span className="inline-block text-xs text-[#A0AEC0] font-medium mb-3">
                        Pagamento único
                      </span>
                      <p className="text-[13px] text-[#A0AEC0] leading-relaxed">
                        Seu site personalizado, configurado e pronto para receber pedidos.
                      </p>
                    </div>
                  </motion.div>

                  {/* CARD 2 — HOSPEDAGEM E MANUTENÇÃO */}
                  <motion.div
                    initial={{ opacity: 0, y: -24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                    className="bg-white/[0.04] border border-[#4FD1C5]/30 hover:border-[#4FD1C5]/60 rounded-2xl p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-300 group"
                  >
                    <div>
                      <div className="inline-block bg-[#4FD1C5]/20 text-[#4FD1C5] text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase mb-2">
                        HOSPEDAGEM E MANUTENÇÃO
                      </div>
                      <div className="flex items-baseline gap-1 my-2">
                        <span className="text-3xl sm:text-4xl font-bold font-serif text-[#4FD1C5]">R$ 49,90</span>
                        <span className="text-xs text-[#4FD1C5]">/mês</span>
                      </div>
                      <p className="text-[13px] text-[#A0AEC0] leading-relaxed mb-4">
                        Hospedagem rápida em nuvem, manutenção técnica e suporte para manter seu site funcionando.
                      </p>
                      <div className="pt-3 border-t border-white/10 text-xs text-[#ECEEF0] font-medium">
                        <span className="text-[#4FD1C5] font-bold">Ou R$ 499 à vista por ano.</span> Economize R$ 99,80
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* VOCÊ TAMBÉM CONTA COM */}
                <div className="pt-5 pb-2 border-t border-white/10 mb-6 relative z-10">
                  <span className="text-xs font-mono text-[#4FD1C5] uppercase tracking-wider block font-bold mb-3">
                    VOCÊ TAMBÉM CONTA COM:
                  </span>
                  <div className="space-y-2.5">
                    {garantias.map((g) => (
                      <div key={g} className="flex items-center gap-2.5 text-xs sm:text-[13.5px] text-[#ECEEF0]">
                        <CheckCircle2 size={16} className="text-[#4FD1C5] shrink-0" />
                        <span>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA PRINCIPAL */}
                <div className="relative z-10 flex flex-col items-center">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#4FD1C5] via-[#3ec5b9] to-[#38b2a5] hover:brightness-105 text-[#0D1E22] px-8 py-4 rounded-[8px] font-bold text-[15px] sm:text-[16px] transition-all duration-300 shadow-[0_0_24px_rgba(79,209,197,0.35)] hover:shadow-[0_0_36px_rgba(79,209,197,0.6)] hover:-translate-y-0.5 active:scale-[0.98] group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
                    <span className="relative z-10 whitespace-nowrap">Quero meu site de pedidos</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform shrink-0" />
                  </a>
                  <p className="text-[12px] text-[#7A9099] italic mt-3 text-center">
                    *Personalizações adicionais são orçadas separadamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PERGUNTAS FREQUENTES */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-32 sm:pb-36 md:pb-40 bg-white text-text-primary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="mb-14 md:mb-16 text-center flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4">
              <span className="h-[1px] w-8 md:w-12 bg-[#23525F]/30 inline-block" />
              <span>PERGUNTAS FREQUENTES</span>
              <span className="h-[1px] w-8 md:w-12 bg-[#23525F]/30 inline-block" />
            </div>

            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold text-[#112A32] tracking-tight leading-[1.14] font-serif mb-4 text-center">
              Ficou alguma dúvida?
            </h2>
          </div>

          <div className="border-t border-[rgba(35,82,95,0.12)]">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[rgba(35,82,95,0.1)] transition-colors duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span
                    className={`font-sans font-semibold text-[16px] sm:text-[17px] pr-6 transition-colors duration-300 ${
                      openFaq === index ? "text-[#23525F]" : "text-[#112A32] group-hover:text-[#23525F]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaq === index
                        ? "bg-[#23525F] text-white"
                        : "bg-[#F2F6F7] text-text-secondary group-hover:bg-[#23525F]/10 group-hover:text-[#23525F]"
                    }`}
                  >
                    {openFaq === index ? (
                      <Minus size={18} strokeWidth={2} />
                    ) : (
                      <Plus size={18} strokeWidth={2} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pt-1 text-[15px] sm:text-[16px] text-text-secondary leading-relaxed pr-6 sm:pr-12 font-sans font-normal text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA & FOOTER */}
      <div className="relative overflow-hidden bg-bg-dark rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] -mt-10 sm:-mt-14 md:-mt-20 z-20 shadow-[0_-24px_48px_rgba(0,0,0,0.35)] border-t border-white/[0.08]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-[#0D1E22]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E22] via-[#0D1E22]/80 to-transparent" />
        
        <div className="relative z-10 w-full">
          <section className="relative overflow-hidden py-24 sm:py-28 md:py-32 text-[#ECEEF0] text-center">
            {/* Radial subtle glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(79,209,197,0.18) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#4FD1C5] uppercase mb-6"
              >
                <span className="h-[1px] w-8 sm:w-12 bg-[#4FD1C5]/30 inline-block" />
                <span>VAMOS COMEÇAR?</span>
                <span className="h-[1px] w-8 sm:w-12 bg-[#4FD1C5]/30 inline-block" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[30px] sm:text-[38px] md:text-[46px] lg:text-[54px] font-bold text-white leading-[1.14] tracking-tight mb-5 sm:mb-6 font-serif max-w-2xl lg:max-w-3xl mx-auto text-center"
                style={{ textWrap: "balance" }}
              >
                Chegou a hora de colocar seu site de pedidos no ar
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14px] sm:text-[16px] text-[#A0AEC0] max-w-xl mx-auto mb-9 sm:mb-10 leading-relaxed font-sans font-normal text-center"
              >
                Fale diretamente com nossa equipe, conte sobre seu restaurante e deixe o desenvolvimento com a gente.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center"
              >
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-gradient-to-r from-[#4FD1C5] via-[#3ec5b9] to-[#38b2a5] hover:brightness-105 text-[#0D1E22] px-8 py-4 rounded-[8px] font-bold text-[15px] sm:text-[16px] transition-all duration-300 shadow-[0_0_24px_rgba(79,209,197,0.35)] hover:shadow-[0_0_36px_rgba(79,209,197,0.6)] hover:-translate-y-0.5 active:scale-[0.98] relative z-20 overflow-hidden text-center"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
                  <span className="relative z-10 whitespace-nowrap">Quero criar meu site agora</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform shrink-0" />
                </a>
              </motion.div>
            </div>
          </section>

          {/* Global Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
