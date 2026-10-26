import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Clock,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Laptop,
  Smartphone,
  Sliders,
  CalendarCheck,
  Lock,
  Plus,
  Minus,
  ChevronDown,
  Sparkles,
  MapPin,
  Check,
  Flame,
  UserCheck,
  Bell,
  RefreshCw,
  TrendingUp,
  Percent,
} from "lucide-react";
import Footer from "../components/Footer";
import InteractiveHeroBackground from "../components/InteractiveHeroBackground";

export default function AgendamentoOnline() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+quero+implantar+o+site+com+agendamento+online+e+painel+administrativo+da+Zaytek+no+meu+neg%C3%B3cio.";
  const demoLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+gostaria+de+acessar+a+demonstra%C3%A7%C3%A3o+do+Studio+%26+Navalha+(Site+%2B+Painel).";

  const faqs = [
    {
      q: "Consigo gerenciar tudo pelo celular?",
      a: "Sim. O painel funciona como um PWA (aplicativo web progressivo). Você pode acessá-lo pelo navegador ou adicioná-lo à tela inicial do celular, como um aplicativo, sem precisar baixá-lo na Play Store ou App Store. Também funciona pelo computador.",
    },
    {
      q: "Como acesso o painel administrativo?",
      a: "100% via navegador no celular, tablet ou computador. Você recebe um link exclusivo e login com senha segura, sem precisar baixar ou instalar nenhum aplicativo nas lojas.",
    },
    {
      q: "O que está incluído na mensalidade?",
      a: "Domínio, hospedagem, segurança, backups, monitoramento básico e suporte técnico. Novas funcionalidades e mudanças estruturais são orçadas separadamente.",
    },
    {
      q: "O sistema impede que dois clientes marquem no mesmo horário?",
      a: "Sim, o bloqueio é instantâneo em tempo real. Assim que um cliente confirma um horário no site, aquela vaga é trancada automaticamente na grade de todos os dispositivos.",
    },
    {
      q: "Consigo agendar clientes que chegam direto no balcão?",
      a: "Sim! O painel possui um botão rápido para inclusão manual de agendamentos em poucos segundos, garantindo que atendimentos presenciais ou por telefone também fiquem organizados no mesmo lugar.",
    },
    {
      q: "Cobram taxa por cliente que agenda ou porcentagem dos serviços?",
      a: "Não. Diferente de plataformas de marketplace que cobram taxas mensais por profissional ou porcentagens sobre cada atendimento, com a Zaytek 100% do seu faturamento fica no seu caixa.",
    },
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
            className="text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-6 font-serif max-w-4xl text-left"
            style={{ textWrap: "balance" }}
          >
            Um site à altura do seu negócio. E pronto para receber{" "}
            <span className="italic font-normal text-[#4FD1C5]">seus próximos agendamentos.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-[15px] sm:text-[17px] md:text-[19px] text-[#A0AEC0] max-w-3xl text-left leading-relaxed font-sans font-normal mb-8 sm:mb-10"
          >
            <p>
              Apresente seus serviços e profissionais em um site exclusivo, onde o cliente escolhe o horário e confirma o agendamento. Você acompanha tudo por um painel de gestão simples e prático.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full sm:w-auto"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2.5 bg-gradient-to-r from-[#4FD1C5] via-[#3ec5b9] to-[#38b2a5] hover:brightness-105 text-[#0D1E22] px-8 py-4 rounded-[8px] font-bold text-[15px] sm:text-[16px] transition-all duration-300 shadow-[0_0_24px_rgba(79,209,197,0.35)] hover:shadow-[0_0_36px_rgba(79,209,197,0.6)] hover:-translate-y-0.5 group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
              <span className="relative z-10">Quero meu site com agendamento</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#demonstracao"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] font-semibold text-[15px] sm:text-[16px] text-white hover:text-[#4FD1C5] border border-white/20 hover:border-[#4FD1C5]/50 bg-white/[0.05] hover:bg-white/[0.1] transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5 shadow-xs"
            >
              <span>Ver demonstração →</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. DIFERENCIAL DE MARCA (PRESENÇA DIGITAL) */}
      <section className="relative z-20 -mt-10 sm:-mt-14 md:-mt-20 rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] bg-bg-primary text-text-primary py-28 md:py-36 overflow-hidden border-t border-black/[0.05] shadow-[0_-20px_48px_rgba(0,0,0,0.12)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-16 md:mb-20 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4"
            >
              <span>AUTORIDADE DE MARCA</span>
              <span className="h-[1px] w-20 bg-[#23525F]/30 inline-block" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold text-[#112A32] tracking-tight leading-[1.14] mb-5 font-serif text-left max-w-2xl sm:max-w-3xl"
              style={{ textWrap: "balance" }}
            >
              Mais do que uma agenda: a presença digital{" "}
              <span className="italic font-normal text-[#23525F]">
                do seu negócio
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[16px] sm:text-[18px] text-[#4A6068] leading-relaxed text-left"
            >
              Aplicativos genéricos colocam todos os concorrentes juntos. Com um site próprio, você constrói autoridade, fideliza clientes e controla sua operação.
            </motion.p>
          </div>

          {/* Cards Grid de 3 Colunas - Responsivo: 1 coluna no mobile e tablet, 3 colunas no desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-8 border border-[rgba(35,82,95,0.12)] shadow-[0_10px_30px_rgba(35,82,95,0.04)] hover:shadow-[0_16px_40px_rgba(35,82,95,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[rgba(35,82,95,0.08)] flex items-center justify-center text-[#23525F] mb-6">
                  <Laptop size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#112A32] font-serif mb-3">
                  Apresentação Profissional
                </h3>
                <p className="text-[14.5px] sm:text-[15px] text-[#4A6068] leading-relaxed mb-6">
                  Mostre seu espaço, seus serviços, sua equipe e sua localização em um site com a identidade do seu negócio.
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(35,82,95,0.08)] text-xs font-mono text-[#23525F] flex items-center gap-1.5 font-bold">
                <Check size={14} className="text-[#3BB1CA]" />
                <span>Fixe na bio e em cartões</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-8 border border-[rgba(35,82,95,0.12)] shadow-[0_10px_30px_rgba(35,82,95,0.04)] hover:shadow-[0_16px_40px_rgba(35,82,95,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[rgba(35,82,95,0.08)] flex items-center justify-center text-[#23525F] mb-6">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#112A32] font-serif mb-3">
                  Atendimento 24/7
                </h3>
                <p className="text-[14.5px] sm:text-[15px] text-[#4A6068] leading-relaxed mb-6">
                  Seus clientes consultam os horários disponíveis e fazem reservas mesmo quando seu estabelecimento está fechado.
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(35,82,95,0.08)] text-xs font-mono text-[#23525F] flex items-center gap-1.5 font-bold">
                <Check size={14} className="text-[#3BB1CA]" />
                <span>Zero perda de clientes por demora</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-8 border border-[rgba(35,82,95,0.12)] shadow-[0_10px_30px_rgba(35,82,95,0.04)] hover:shadow-[0_16px_40px_rgba(35,82,95,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[rgba(35,82,95,0.08)] flex items-center justify-center text-[#23525F] mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#112A32] font-serif mb-3">
                  Zero Concorrentes na Tela
                </h3>
                <p className="text-[14.5px] sm:text-[15px] text-[#4A6068] leading-relaxed mb-6">
                  Ao contrário de aplicativos de terceiros, nenhum outro salão ou barbearia aparece ao lado do seu nome. A atenção do cliente é 100% da sua marca.
                </p>
              </div>
              <div className="pt-4 border-t border-[rgba(35,82,95,0.08)] text-xs font-mono text-[#23525F] flex items-center gap-1.5 font-bold">
                <Check size={14} className="text-[#3BB1CA]" />
                <span>Fidelização exclusiva</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO EM DESTAQUE: PAINEL ADMINISTRATIVO (O LADO DO GESTOR) */}
      <section className="w-full py-28 md:py-36 bg-[#0D1E22] text-[#ECEEF0] relative overflow-hidden border-t border-b border-white/[0.08] shadow-[0_24px_48px_rgba(0,0,0,0.35)] relative z-20">
        {/* Background glow */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #4FD1C5 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 text-left">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#4FD1C5] uppercase mb-4"
            >
              <span>PAINEL DE GESTÃO</span>
              <span className="h-[1px] w-16 bg-[#4FD1C5]/30 inline-block" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[52px] font-bold text-white tracking-tight leading-[1.12] mb-5 font-serif"
              style={{ textWrap: "balance" }}
            >
              O fim das anotações em papel e{" "}
              <span className="italic font-normal text-[#4FD1C5]">
                planilhas confusas
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[16px] sm:text-[18px] text-[#A0AEC0] leading-relaxed font-sans font-normal"
            >
              Um painel administrativo moderno, feito para você acessar direto do celular ou do balcão sem perder tempo.
            </motion.p>
          </div>

          {/* 4 Cards com Ícones: Grid de Recursos do Painel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#4FD1C5]/40 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2)] flex flex-col justify-start text-left group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#4FD1C5]/10 text-[#4FD1C5] flex items-center justify-center mb-5 group-hover:bg-[#4FD1C5]/20 group-hover:scale-105 transition-all">
                <CalendarCheck size={22} />
              </div>
              <h4 className="text-[17px] font-bold text-white font-serif mb-2.5 group-hover:text-[#4FD1C5] transition-colors">
                Grade Diária e Semanal
              </h4>
              <p className="text-[13.5px] text-[#A0AEC0] leading-relaxed">
                Visualize atendimentos confirmados, intervalos e status de cada profissional em uma linha do tempo clara.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#4FD1C5]/40 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2)] flex flex-col justify-start text-left group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#4FD1C5]/10 text-[#4FD1C5] flex items-center justify-center mb-5 group-hover:bg-[#4FD1C5]/20 group-hover:scale-105 transition-all">
                <Lock size={22} />
              </div>
              <h4 className="text-[17px] font-bold text-white font-serif mb-2.5 group-hover:text-[#4FD1C5] transition-colors">
                Bloqueio Rápido de Horários
              </h4>
              <p className="text-[13.5px] text-[#A0AEC0] leading-relaxed">
                Bloqueie folgas, almoço ou feriados com dois cliques para fechar vagas instantaneamente no site.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#4FD1C5]/40 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2)] flex flex-col justify-start text-left group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#4FD1C5]/10 text-[#4FD1C5] flex items-center justify-center mb-5 group-hover:bg-[#4FD1C5]/20 group-hover:scale-105 transition-all">
                <Sliders size={22} />
              </div>
              <h4 className="text-[17px] font-bold text-white font-serif mb-2.5 group-hover:text-[#4FD1C5] transition-colors">
                Gestão de Serviços e Preços
              </h4>
              <p className="text-[13.5px] text-[#A0AEC0] leading-relaxed">
                Altere valores, tempo de corte e crie novos procedimentos sem mexer em código ou depender de programadores.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#4FD1C5]/40 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.2)] flex flex-col justify-start text-left group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#4FD1C5]/10 text-[#4FD1C5] flex items-center justify-center mb-5 group-hover:bg-[#4FD1C5]/20 group-hover:scale-105 transition-all">
                <Users size={22} />
              </div>
              <h4 className="text-[17px] font-bold text-white font-serif mb-2.5 group-hover:text-[#4FD1C5] transition-colors">
                Multi-Profissional
              </h4>
              <p className="text-[13.5px] text-[#A0AEC0] leading-relaxed">
                Grade individual para cada membro da equipe, com horários, comissões e serviços específicos de cada um.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. VISÃO DUPLA (CLIENTE vs. GESTOR) */}
      <section className="py-28 md:py-36 bg-white text-[#0D1E22]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4"
            >
              <span className="h-[1px] w-8 md:w-12 bg-[#23525F]/30 inline-block" />
              <span>COMO FUNCIONA</span>
              <span className="h-[1px] w-8 md:w-12 bg-[#23525F]/30 inline-block" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold text-[#112A32] tracking-tight leading-[1.14] mb-5 font-serif"
              style={{ textWrap: "balance" }}
            >
              Conexão instantânea entre quem pede e{" "}
              <span className="italic font-normal text-[#23525F]">
                quem atende
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[16px] sm:text-[18px] text-[#4A6068] leading-relaxed"
            >
              O agendamento automático elimina o vai-e-volta de mensagens e organiza o dia a dia da sua equipe sem atrito.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Visão do Cliente */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F8FAFB] rounded-3xl p-8 sm:p-10 border border-[rgba(35,82,95,0.12)] relative shadow-[0_12px_36px_rgba(17,42,50,0.06)] hover:shadow-[0_20px_48px_rgba(17,42,50,0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[rgba(35,82,95,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(35,82,95,0.1)] text-[#23525F] flex items-center justify-center font-bold shadow-xs">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#112A32] font-serif">
                      Visão do Cliente
                    </h3>
                    <span className="text-xs font-mono text-[#4A6068]">
                      Experiência leve e rápida no celular
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold">
                  4 passos
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#23525F] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-xs">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-[#112A32] text-sm">
                      Acessa o site oficial
                    </h4>
                    <p className="text-xs text-[#4A6068] mt-0.5 leading-relaxed">
                      Clica no link da bio do Instagram ou QR Code sem precisar instalar nenhum aplicativo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#23525F] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-xs">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-[#112A32] text-sm">
                      Escolhe o serviço e o profissional
                    </h4>
                    <p className="text-xs text-[#4A6068] mt-0.5 leading-relaxed">
                      Vê fotos, duração estimada e valores transparentes com a equipe que preferir.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#23525F] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-xs">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-[#112A32] text-sm">
                      Seleciona a data e o horário vago
                    </h4>
                    <p className="text-xs text-[#4A6068] mt-0.5 leading-relaxed">
                      Enxerga apenas as vagas reais disponíveis, sem risco de conflito de agenda.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#23525F] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-xs">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-[#112A32] text-sm">
                      Confirmação rápida
                    </h4>
                    <p className="text-xs text-[#4A6068] mt-0.5 leading-relaxed">
                      Horário reservado com envio de confirmação imediata.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Visão do Painel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0D1E22] text-[#ECEEF0] rounded-3xl p-8 sm:p-10 border border-white/10 relative shadow-[0_16px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4FD1C5]/10 text-[#4FD1C5] flex items-center justify-center font-bold shadow-xs">
                    <Laptop size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-serif">
                      Visão do Painel
                    </h3>
                    <span className="text-xs font-mono text-[#A0AEC0]">
                      Operação e equipe sob controle total
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#4FD1C5]/20 text-[#4FD1C5] text-[11px] font-mono font-bold">
                  Automático
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#4FD1C5] text-[#0D1E22] flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-xs">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Notificação em tempo real
                    </h4>
                    <p className="text-xs text-[#A0AEC0] mt-0.5 leading-relaxed">
                      O painel atualiza instantaneamente informando o novo agendamento e o profissional escolhido.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#4FD1C5] text-[#0D1E22] flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-xs">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Dados do cliente registrados
                    </h4>
                    <p className="text-xs text-[#A0AEC0] mt-0.5 leading-relaxed">
                      Nome e telefone arquivados com histórico de agendamentos e preferências.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#4FD1C5] text-[#0D1E22] flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-xs">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Horário bloqueado contra overbooking
                    </h4>
                    <p className="text-xs text-[#A0AEC0] mt-0.5 leading-relaxed">
                      Nenhum outro cliente consegue marcar no mesmo período para aquele barbeiro ou terapeuta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-[#4FD1C5] text-[#0D1E22] flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-xs">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Agenda 100% organizada
                    </h4>
                    <p className="text-xs text-[#A0AEC0] mt-0.5 leading-relaxed">
                      Sua equipe sabe exatamente quem vai atender a cada hora do dia.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE DEMONSTRAÇÃO */}
      <section
        id="demonstracao"
        className="w-full py-28 md:py-36 bg-[#0D1E22] text-[#ECEEF0] relative overflow-hidden border-t border-b border-white/[0.08] shadow-[0_24px_48px_rgba(0,0,0,0.35)] relative z-20"
      >
        {/* Background glow */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #4FD1C5 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-left flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-[#4FD1C5] uppercase mb-4">
                <span>DEMONSTRAÇÃO</span>
                <span className="h-[1px] w-16 bg-[#4FD1C5]/30 inline-block" />
              </div>

              <h2
                className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold text-white tracking-tight leading-[1.12] mb-5 font-serif"
                style={{ textWrap: "balance" }}
              >
                Experimente o agendamento e conheça{" "}
                <span className="italic font-normal text-[#4FD1C5]">
                  o painel
                </span>
              </h2>

              <p className="text-[16px] sm:text-[18px] text-[#A0AEC0] leading-relaxed mb-8 font-normal font-sans">
                Simule a marcação de um horário como cliente e teste a facilidade de gerenciar a grade no painel administrativo.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3 text-sm text-[#ECEEF0]">
                  <CheckCircle2 size={18} className="text-[#4FD1C5] shrink-0" />
                  <span>Painel administrativo descomplicado e seguro</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#ECEEF0]">
                  <CheckCircle2 size={18} className="text-[#4FD1C5] shrink-0" />
                  <span>Interface intuitiva adaptada para todas as telas</span>
                </div>
              </div>

              <div>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#4FD1C5] via-[#3ec5b9] to-[#38b2a5] hover:brightness-105 text-[#0D1E22] px-8 py-4 rounded-[8px] font-bold text-[15px] sm:text-[16px] transition-all duration-300 shadow-[0_0_24px_rgba(79,209,197,0.35)] hover:shadow-[0_0_36px_rgba(79,209,197,0.6)] hover:-translate-y-0.5 active:scale-[0.98] group w-full sm:w-auto justify-center relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
                  <span className="relative z-10">Acessar demonstração</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Device / Interface Showcase */}
            <div className="w-full flex flex-col items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: -24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative group w-full max-w-full md:max-w-2xl lg:max-w-[540px] mx-auto flex flex-col items-center"
              >
                {/* Glow */}
                <div
                  className="absolute -inset-3 bg-gradient-to-r from-[#4FD1C5]/25 via-[#23525F]/25 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
                />

                <div className="w-full relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-br from-[#0D1E22] via-[#091518] to-[#070E10] shadow-[0_24px_50px_rgba(0,0,0,0.5)] p-5 sm:p-7 text-left space-y-4">
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#4FD1C5]/20 text-[#4FD1C5] flex items-center justify-center font-bold text-lg shadow-xs">
                        ✂️
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">
                          Studio & Navalha Barbearia
                        </div>
                        <div className="text-xs text-[#4FD1C5] font-mono">
                          studionavalha.com.br
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Agenda Aberta 24h
                    </span>
                  </div>

                  {/* Calendar Days Row */}
                  <div className="grid grid-cols-6 gap-1.5">
                    <div className="py-1.5 text-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      <div>Seg</div>
                      <div className="font-bold text-white text-xs">18</div>
                    </div>
                    <div className="py-1.5 text-center rounded-lg bg-[#4FD1C5]/20 border border-[#4FD1C5]/40 text-[10px] font-mono text-[#4FD1C5]">
                      <div>Ter</div>
                      <div className="font-bold text-white text-xs">19</div>
                    </div>
                    <div className="py-1.5 text-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      <div>Qua</div>
                      <div className="font-bold text-white text-xs">20</div>
                    </div>
                    <div className="py-1.5 text-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      <div>Qui</div>
                      <div className="font-bold text-white text-xs">21</div>
                    </div>
                    <div className="py-1.5 text-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      <div>Sex</div>
                      <div className="font-bold text-white text-xs">22</div>
                    </div>
                    <div className="py-1.5 text-center rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      <div>Sáb</div>
                      <div className="font-bold text-white text-xs">23</div>
                    </div>
                  </div>

                  {/* Booking Step Simulation Preview */}
                  <div className="bg-[#112328] rounded-xl p-3.5 sm:p-4 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#A0AEC0]">
                      <span>SERVIÇO SELECIONADO:</span>
                      <span className="text-[#4FD1C5] font-bold">R$ 75,00</span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#0D1E22] border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white mb-0.5">
                          Corte Tradicional + Barboterapia
                        </div>
                        <div className="flex items-center gap-3 text-xs text-white/50">
                          <span className="flex items-center gap-1">
                            <Clock size={12} className="text-[#4FD1C5]" /> 50 min
                          </span>
                          <span>Profissional: <strong className="text-white/80">Gabriel S.</strong></span>
                        </div>
                      </div>
                    </div>

                    {/* Time Slots Preview */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-white/70 mb-2">
                        <span className="flex items-center gap-1.5 text-white text-xs">
                          <Calendar size={13} className="text-[#4FD1C5]" /> Horários Livres (Hoje)
                        </span>
                        <span className="text-[11px] text-[#4FD1C5]">Auto-confirmação</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="py-2 text-center text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-white/70">
                          14:00
                        </div>
                        <div className="py-2 text-center text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-white/70">
                          14:45
                        </div>
                        <div className="py-2 text-center text-xs font-mono rounded-lg bg-[#4FD1C5] text-[#0D1E22] font-bold shadow-xs">
                          15:30
                        </div>
                        <div className="py-2 text-center text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-white/70">
                          16:15
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Notification Status */}
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#ECEEF0] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Horário bloqueado automaticamente na agenda
                    </span>
                    <span className="font-mono text-[#4FD1C5] font-bold text-[11px]">Sem atrito</span>
                  </div>
                </div>

                {/* Minimalist Demo Link below mockup */}
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#A0AEC0] hover:text-[#4FD1C5] transition-colors group/link"
                >
                  <span>Abrir demonstração</span>
                  <ExternalLink size={13} className="opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INVESTIMENTO TRANSPARENTE (LAYOUT 2 COLUNAS EQUILIBRADO) */}
      <section className="py-24 md:py-32 bg-[#F8FAFB] text-[#0D1E22] relative overflow-hidden border-t border-[rgba(35,82,95,0.08)]">
        {/* Subtle background glow */}
        <div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #23525F 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full pointer-events-none opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #4FD1C5 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (6 of 12 cols): Editorial & Checklist de Itens Inclusos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 text-left flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4">
                <span>INVESTIMENTO</span>
                <span className="h-[1px] w-12 bg-[#23525F]/30 inline-block" />
              </div>

              <h2
                className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold text-[#112A32] tracking-tight leading-[1.14] mb-4 font-serif"
                style={{ textWrap: "balance" }}
              >
                Quanto custa ter seu próprio site com agendamento?
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#4A6068] leading-relaxed mb-6">
                Site personalizado, agendamentos online e painel de gestão, com implantação e suporte da Zaytek.
              </p>

              {/* Checklist de Itens Inclusos (normal, sem container de card) */}
              <div className="pt-2">
                <span className="text-xs font-mono text-[#23525F] uppercase tracking-wider block mb-4 font-bold">
                  Tudo o que você recebe:
                </span>
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3 text-[14px] text-[#112A32]">
                    <CheckCircle2 size={18} className="text-[#23525F] shrink-0" />
                    <span>Site profissional personalizado</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] text-[#112A32]">
                    <CheckCircle2 size={18} className="text-[#23525F] shrink-0" />
                    <span>Agendamento online 24 horas</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] text-[#112A32]">
                    <CheckCircle2 size={18} className="text-[#23525F] shrink-0" />
                    <span>Painel administrativo pelo celular ou computador</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] text-[#112A32]">
                    <CheckCircle2 size={18} className="text-[#23525F] shrink-0" />
                    <span>Agenda individual para cada profissional</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] text-[#112A32]">
                    <CheckCircle2 size={18} className="text-[#23525F] shrink-0" />
                    <span>Confirmações via WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-3 text-[14px] text-[#112A32]">
                    <CheckCircle2 size={18} className="text-[#23525F] shrink-0" />
                    <span>Agendamentos sem comissão por reserva</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column (6 of 12 cols): The Main Pricing Card */}
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-6"
            >
              <div className="bg-[#0D1E22] text-[#ECEEF0] rounded-3xl p-7 sm:p-9 border border-[#4FD1C5]/30 shadow-[0_24px_60px_rgba(0,0,0,0.35)] relative overflow-hidden text-left flex flex-col justify-between">
                {/* Background ambient radial highlight */}
                <div
                  className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-20"
                  style={{
                    background: "radial-gradient(circle, #4FD1C5 0%, transparent 70%)",
                  }}
                />

                {/* Dual Pricing Boxes */}
                <div className="space-y-4 mb-6 relative z-10">
                  {/* Setup Inicial - Desenvolvimento */}
                  <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono text-[#A0AEC0] uppercase tracking-wider block">
                        desenvolvimento
                      </span>
                      <span className="text-xs text-white/60 font-mono">Pagamento único</span>
                    </div>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="text-3xl sm:text-4xl font-bold font-serif text-white">R$ 497</span>
                    </div>
                    <p className="text-[12.5px] text-[#A0AEC0] leading-relaxed">
                      Criamos seu site com a identidade do estabelecimento e configuramos o sistema de agendamento, os profissionais, os serviços e os horários.
                    </p>
                  </div>

                  {/* Mensalidade - Manutenção */}
                  <div className="bg-white/[0.04] border border-[#4FD1C5]/30 rounded-2xl p-5 relative overflow-hidden">
                    <div className="flex items-baseline justify-between gap-2 mb-1.5">
                      <span className="text-xs font-mono text-[#4FD1C5] uppercase tracking-wider block">
                        Manutenção
                      </span>
                      <span className="text-xs text-[#4FD1C5] font-mono">Mensalidade</span>
                    </div>
                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="text-3xl sm:text-4xl font-bold font-serif text-[#4FD1C5]">R$ 54,90</span>
                      <span className="text-xs text-[#4FD1C5]">/mês</span>
                    </div>
                    <p className="text-[12.5px] text-[#A0AEC0] leading-relaxed">
                      Hospedagem, domínio, segurança, backups, manutenção técnica e suporte para o funcionamento da solução.
                    </p>
                  </div>
                </div>

                {/* Micro Guarantee Note */}
                <div className="py-2.5 px-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-6 text-xs text-[#A0AEC0] flex items-center justify-between font-mono relative z-10">
                  <span>Taxa por reserva realizada:</span>
                  <span className="font-bold text-emerald-400">R$ 0,00</span>
                </div>

                {/* Action Button */}
                <div className="relative z-10">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2.5 bg-gradient-to-r from-[#4FD1C5] via-[#3ec5b9] to-[#38b2a5] hover:brightness-105 text-[#0D1E22] py-4 px-8 rounded-xl font-bold text-base transition-all duration-300 shadow-[0_0_24px_rgba(79,209,197,0.35)] hover:shadow-[0_0_36px_rgba(79,209,197,0.6)] hover:-translate-y-0.5 active:scale-[0.98] group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 animate-shimmer-sweep pointer-events-none" />
                    <span className="relative z-10">Quero meu site com agendamento</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FAQ (ACORDEÃO COM MESMO LAYOUT DA HOME) */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-36 sm:pb-40 md:pb-48 bg-[#F2F6F7] text-text-primary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="mb-14 md:mb-16 text-center flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 text-xs font-mono tracking-widest text-[#23525F] uppercase mb-4">
              <span className="h-[1px] w-8 md:w-12 bg-[#23525F]/30 inline-block" />
              <span>PERGUNTAS FREQUENTES</span>
              <span className="h-[1px] w-8 md:w-12 bg-[#23525F]/30 inline-block" />
            </div>

            <h2
              className="text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-bold text-[#112A32] leading-[1.14] font-serif mb-4 text-center"
              style={{ textWrap: "balance" }}
            >
              Ficou alguma dúvida?
            </h2>

            <p className="text-[16px] sm:text-[17px] text-text-secondary max-w-xl text-center">
              Tudo o que você precisa saber sobre o site institucional, o agendamento online e o painel administrativo.
            </p>
          </div>

          {/* Accordion List with Home layout */}
          <div className="border-t border-[rgba(35,82,95,0.12)]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[rgba(35,82,95,0.1)] transition-colors duration-300"
              >
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
                        : "bg-white/80 text-text-secondary group-hover:bg-[#23525F]/10 group-hover:text-[#23525F]"
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
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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

      {/* 8. CTA FINAL & FOOTER COM O MESMO ESQUEMA DE BACKGROUND */}
      <div className="relative overflow-hidden bg-bg-dark rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] -mt-10 sm:-mt-14 md:-mt-20 z-20 shadow-[0_-24px_48px_rgba(0,0,0,0.35)] border-t border-white/[0.08]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-[#0D1E22]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E22] via-[#0D1E22]/80 to-transparent" />
        
        <div className="relative z-10 w-full">
          {/* Section 8: CTA Final */}
          <section className="relative overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-14 sm:pb-16 md:pb-18 text-[#ECEEF0] text-center">
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
                <span>PRÓXIMO PASSO</span>
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
                Vamos preparar essa estrutura para{" "}
                <span className="italic font-normal text-[#4FD1C5]">
                  sua barbearia ou salão?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14px] sm:text-[16px] text-[#A0AEC0] max-w-xl mx-auto mb-9 sm:mb-10 leading-relaxed font-sans font-normal text-center"
              >
                Fale com nossa equipe para alinhar os serviços, os profissionais e o que será necessário para colocar seu site no ar.
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
                  <span className="relative z-10 whitespace-nowrap">Entrar em contato</span>
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
