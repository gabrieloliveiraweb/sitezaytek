import { type MouseEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar,
  Clock,
  Check,
  Sparkles,
  Utensils,
  Smartphone,
  Construction,
  Layers,
  CheckCircle2,
  BellRing,
  Lock,
} from "lucide-react";

export default function Products() {
  const handleNavigate = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/solucoes/")) {
      e.preventDefault();
      window.history.pushState({}, "", href);
      window.dispatchEvent(new Event("popstate"));
      window.scrollTo(0, 0);
    }
  };

  const waWaitlistLink =
    "https://wa.me/5541920047176?text=" +
    encodeURIComponent(
      "Oi Gabriel! Vi a solução de Agendamento Online em desenvolvimento no site da Zaytek e gostaria de saber mais e entrar na lista de lançamento."
    );

  return (
    <section
      id="solucoes"
      className="w-full pt-20 md:pt-28 pb-36 sm:pb-44 md:pb-52 lg:pb-60 bg-[#F8FAFB] text-[#112A32] relative overflow-hidden"
    >
      <div id="produtos" className="absolute -top-20 pointer-events-none" />

      {/* Background Subtle Atmospheric Accents */}
      <div
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.04]"
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-left">
        {/* 1. CABEÇALHO DA SEÇÃO */}
        <header className="max-w-3xl mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4"
          >
            <span>SOLUÇÕES</span>
            <span className="h-[1px] w-16 bg-[#23525F]/30 inline-block" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[32px] sm:text-[44px] md:text-[50px] font-bold text-[#112A32] tracking-tight leading-[1.12] mb-5 font-serif"
            style={{ textWrap: "balance" }}
          >
            Tecnologia desenhada para a rotina do seu negócio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] sm:text-[18px] text-[#4A6068] leading-relaxed font-sans font-normal"
          >
            Além dos projetos sob medida, desenvolvemos soluções para necessidades recorrentes. Elas são configuradas e personalizadas para diferentes estabelecimentos.
          </motion.p>
        </header>

        {/* 2. SOLUÇÕES NO FORMATO ALTERNADO ENTRE TEXTO E MOCKUP AO LADO */}
        <div className="max-w-[1100px] mx-auto flex flex-col w-full space-y-16 md:space-y-24">
          {/* ======================================================== */}
          {/* ITEM 1 (PRIMEIRO): Website com Cardápio e Pedidos        */}
          {/* Mobile & Tablet: Empilhado [ Texto ] [ Mockup ]          */}
          {/* Desktop (lg): Lado a lado [ Texto ] [ Mockup ]           */}
          {/* ======================================================== */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-14">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 flex flex-col justify-center text-left"
            >
              <div>
                {/* Tag / Segmento */}
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#23525F]/10 text-[#23525F] border border-[#23525F]/20 mb-4">
                  <Utensils size={12} className="text-[#23525F]" />
                  PARA HAMBURGUERIAS E RESTAURANTES
                </span>

                {/* Título Principal */}
                <h3 className="font-display font-bold text-[26px] sm:text-[30px] lg:text-[32px] text-[#0D1E22] leading-tight mb-4">
                  Website com Cardápio e Pedidos
                </h3>

                {/* Destaque / Subtítulo */}
                <div className="border-l-[3px] border-[#23525F] pl-3.5 py-1 bg-[rgba(35,82,95,0.04)] rounded-r-lg mb-5">
                  <p className="font-sans font-semibold text-[15px] sm:text-[16px] text-[#23525F] leading-snug">
                    Cardápio Digital e Pedidos via WhatsApp
                  </p>
                </div>

                {/* Texto Descritivo */}
                <p className="font-sans text-[15px] sm:text-[16px] text-[#4A6068] leading-relaxed mb-6 font-normal">
                  Receba pedidos organizados direto no seu WhatsApp, sem taxas por venda e sem filas de mensagens no horário de pico.
                </p>

                {/* CTA Link */}
                <div className="w-full sm:w-auto">
                  <a
                    href="/solucoes/cardapio-pedidos"
                    onClick={(e) => handleNavigate(e, "/solucoes/cardapio-pedidos")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#23525F] via-[#2d6878] to-[#23525F] hover:brightness-110 text-white px-6 py-3.5 rounded-xl font-bold text-[14px] transition-all duration-300 shadow-[0_8px_24px_rgba(35,82,95,0.25)] hover:shadow-[0_12px_28px_rgba(35,82,95,0.4)] hover:-translate-y-0.5 active:scale-[0.98] group relative overflow-hidden text-center"
                  >
                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
                    <span className="relative z-10">Conhecer solução</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform relative z-10" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Mockup Column - Ocupa a largura harmoniosamente no tablet e mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 flex items-center justify-center shrink-0"
            >
              <div className="w-full max-w-full md:max-w-2xl lg:max-w-[560px] relative flex items-center justify-center group">
                {/* Soft ambient aura behind mockup */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#23525F]/15 via-[#3BB1CA]/10 to-transparent rounded-3xl blur-2xl -z-10 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

                {/* Clean, unconstrained mockup display preserving natural perspective */}
                <img
                  src="/hamb-mockup.webp"
                  alt="Mockup Cardápio e Pedidos Zaytek"
                  className="w-full h-auto object-contain rounded-2xl sm:rounded-3xl shadow-[0_20px_50px_rgba(17,42,50,0.13)] group-hover:shadow-[0_28px_65px_rgba(17,42,50,0.22)] transition-all duration-500 group-hover:-translate-y-1"
                />
              </div>
            </motion.div>
          </div>

          {/* ======================================================== */}
          {/* ITEM 2 (SEGUNDO): Sistema de Agendamento Online & Website */}
          {/* Mobile & Tablet: Empilhado [ Texto ] [ Mockup ]          */}
          {/* Desktop (lg): Lado a lado alternado [ Mockup ] [ Texto ] */}
          {/* ======================================================== */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-14">
            {/* Visual Mockup da Solução em Desenvolvimento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 flex items-center justify-center shrink-0 order-2 lg:order-1"
            >
              <div className="w-full max-w-full md:max-w-2xl lg:max-w-[560px] aspect-[4/3] relative flex items-center justify-center group">
                {/* Soft ambient aura behind mockup */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#23525F]/15 via-amber-500/10 to-transparent rounded-3xl blur-2xl -z-10 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

                {/* Base Realistic Dark Booking Platform Interface Mockup */}
                <div className="w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0D1E22] via-[#091518] to-[#070E10] border border-white/15 shadow-[0_20px_50px_rgba(17,42,50,0.13)] group-hover:shadow-[0_28px_65px_rgba(17,42,50,0.22)] transition-all duration-500 group-hover:-translate-y-1 p-5 sm:p-7 relative overflow-hidden text-left select-none flex flex-col justify-between">
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/10 opacity-70">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4FD1C5]/20 text-[#4FD1C5] flex items-center justify-center font-bold text-sm shadow-xs">
                        ✂️
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">
                          Studio & Navalha Barbearia
                        </div>
                        <div className="text-[11px] font-mono text-[#4FD1C5]">
                          studionavalha.com.br
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                      Agenda 24h
                    </span>
                  </div>

                  {/* Calendar Days Row */}
                  <div className="grid grid-cols-6 gap-1.5 opacity-60">
                    <div className="py-1 text-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      <div>Seg</div>
                      <div className="font-bold text-white text-xs">18</div>
                    </div>
                    <div className="py-1 text-center rounded-lg bg-[#4FD1C5]/20 border border-[#4FD1C5]/40 text-[10px] font-mono text-[#4FD1C5]">
                      <div>Ter</div>
                      <div className="font-bold text-white text-xs">19</div>
                    </div>
                    <div className="py-1 text-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      <div>Qua</div>
                      <div className="font-bold text-white text-xs">20</div>
                    </div>
                    <div className="py-1 text-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      <div>Qui</div>
                      <div className="font-bold text-white text-xs">21</div>
                    </div>
                    <div className="py-1 text-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      <div>Sex</div>
                      <div className="font-bold text-white text-xs">22</div>
                    </div>
                    <div className="py-1 text-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      <div>Sáb</div>
                      <div className="font-bold text-white text-xs">23</div>
                    </div>
                  </div>

                  {/* Service Selection Card */}
                  <div className="bg-white/[0.04] rounded-xl p-3.5 border border-white/10 opacity-60">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#A0AEC0] mb-1">
                      <span>SERVIÇO SELECIONADO</span>
                      <span className="text-[#4FD1C5] font-bold">R$ 75,00</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-1">
                      Corte Tradicional + Barboterapia
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-[#A0AEC0]">
                      <span className="flex items-center gap-1">
                        <Clock size={11} className="text-[#4FD1C5]" /> 50 min
                      </span>
                      <span>Profissional: <strong>Gabriel S.</strong></span>
                    </div>
                  </div>

                  {/* Time Slots Preview */}
                  <div className="opacity-60">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#A0AEC0] mb-2">
                      <span className="flex items-center gap-1 text-white">
                        <Calendar size={12} className="text-[#4FD1C5]" /> Horários Livres (Hoje)
                      </span>
                      <span className="text-[10px] text-[#4FD1C5]">Auto-confirmação</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="py-1.5 text-center text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-white/70">
                        14:00
                      </div>
                      <div className="py-1.5 text-center text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-white/70">
                        14:45
                      </div>
                      <div className="py-1.5 text-center text-xs font-mono rounded-lg bg-[#4FD1C5] text-[#0D1E22] font-bold shadow-xs">
                        15:30
                      </div>
                      <div className="py-1.5 text-center text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-white/70">
                        16:15
                      </div>
                    </div>
                  </div>

                  {/* Notification Mockup */}
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-[11px] opacity-60">
                    <span className="text-[#ECEEF0]">✓ Horário bloqueado automaticamente na agenda</span>
                    <span className="font-mono text-[#4FD1C5] font-bold">Sem atrito</span>
                  </div>

                  {/* Prominent "Ainda Não Disponível / Em Desenvolvimento" Frosted Glass Overlay */}
                  <div className="absolute inset-0 bg-[#071317]/82 backdrop-blur-[3.5px] rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center p-6 sm:p-8 text-center z-20 border border-white/10">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/35 text-amber-400 flex items-center justify-center shadow-[0_0_28px_rgba(245,158,11,0.3)] mb-3.5">
                      <Lock size={24} />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/30 mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      EM DESENVOLVIMENTO
                    </span>

                    <h4 className="text-white font-bold text-[18px] sm:text-[20px] font-sans tracking-tight mb-1.5">
                      Ainda não disponível
                    </h4>

                    <p className="text-[#9DB0B7] text-[13px] sm:text-[14px] max-w-[320px] leading-relaxed mb-5">
                      Solução em fase final de testes. Em breve aberta para novos agendamentos e estabelecimentos.
                    </p>

                    {/* Progress indicator bar */}
                    <div className="w-52 bg-white/10 rounded-full h-2 overflow-hidden mb-2">
                      <div className="bg-gradient-to-r from-amber-400 via-[#3BB1CA] to-[#4FD1C5] h-full w-[85%] rounded-full shadow-[0_0_12px_rgba(79,209,197,0.5)]" />
                    </div>
                    <span className="text-[11px] font-mono text-white/60">
                      Versão 1.0 · 85% Concluído
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Texto Informativo do Sistema em Desenvolvimento (Empilhado no Tablet, Alternado no Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-1/2 flex flex-col justify-center text-left order-1 lg:order-2"
            >
              <div>
                {/* Tag com aviso de Em Desenvolvimento */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    EM DESENVOLVIMENTO
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-[#23525F]/10 text-[#23525F] border border-[#23525F]/20">
                    PARA SALÕES E CLÍNICAS
                  </span>
                </div>

                {/* Título Principal */}
                <h3 className="font-display font-bold text-[26px] sm:text-[30px] lg:text-[32px] text-[#0D1E22] leading-tight mb-4">
                  Sistema de Agendamento Online & Website
                </h3>

                {/* Destaque / Subtítulo */}
                <div className="border-l-[3px] border-[#23525F] pl-3.5 py-1 bg-[rgba(35,82,95,0.04)] rounded-r-lg mb-5">
                  <p className="font-sans font-semibold text-[15px] sm:text-[16px] text-[#23525F] leading-snug">
                    Agendamento 24h e Apresentação do Espaço
                  </p>
                </div>

                {/* Texto Descritivo */}
                <p className="font-sans text-[15px] sm:text-[16px] text-[#4A6068] leading-relaxed mb-6 font-normal">
                  Apresente seus serviços e profissionais com um sistema onde o cliente escolhe dia e horário sem você precisar parar o atendimento para responder.
                </p>

                {/* Status Notice */}
                <div className="bg-[#F2F6F7] border border-[rgba(35,82,95,0.12)] rounded-xl p-3.5 mb-7 text-left">
                  <p className="text-[13px] text-[#4A6068] leading-relaxed">
                    <strong className="text-[#112A32]">Em fase final de desenvolvimento:</strong> estamos finalizando os testes de sincronização de agenda e automação de lembretes.
                  </p>
                </div>

                {/* CTAs - Perfeitamente alinhados e equalizados no mobile */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <a
                    href={waWaitlistLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#23525F] via-[#2d6878] to-[#23525F] hover:brightness-110 text-white px-6 py-3.5 rounded-xl font-bold text-[14px] transition-all duration-300 shadow-[0_8px_24px_rgba(35,82,95,0.25)] hover:shadow-[0_12px_28px_rgba(35,82,95,0.4)] hover:-translate-y-0.5 active:scale-[0.98] group relative overflow-hidden text-center"
                  >
                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
                    <span className="relative z-10">Quero ser avisado no lançamento</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform relative z-10" />
                  </a>

                  <a
                    href="/solucoes/agendamento-online"
                    onClick={(e) => handleNavigate(e, "/solucoes/agendamento-online")}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[rgba(35,82,95,0.2)] hover:border-[#23525F]/40 text-[#23525F] bg-white hover:bg-[rgba(35,82,95,0.05)] px-6 py-3.5 rounded-xl font-semibold text-[14px] transition-all duration-200 text-center"
                  >
                    Ver prévia da solução
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
