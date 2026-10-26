import { useState, useEffect, useRef, type MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e: globalThis.MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSolutionsDropdownOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setSolutionsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdownOpen(false);
    }, 150);
  };

  const waLink =
    "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vim+pelo+site+da+Zaytek+e+gostaria+de+entrar+em+contato.";

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Soluções", href: "#solucoes", hasDropdown: true },
    { label: "Processo", href: "#processo" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const isSolutionPage =
      window.location.pathname.includes("/solucoes/") ||
      window.location.hash.includes("solucoes/");

    setSolutionsDropdownOpen(false);
    setIsOpen(false);

    if (href.startsWith("/solucoes/")) {
      e.preventDefault();
      window.history.pushState({}, "", href);
      window.dispatchEvent(new Event("popstate"));
      window.scrollTo(0, 0);
      return;
    }

    if (href.startsWith("#")) {
      if (isSolutionPage) {
        e.preventDefault();
        window.history.pushState({}, "", "/" + href);
        window.dispatchEvent(new Event("popstate"));
        setTimeout(() => {
          const targetId = href.replace("#", "");
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo(0, 0);
          }
        }, 120);
      } else {
        const targetId = href.replace("#", "");
        const el = document.getElementById(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#23525F]/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] py-0"
          : "bg-transparent border-b border-transparent py-1 sm:py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-[60]">
        {/* Brand Logo - Inverted/crisp white on dark hero, natural colors on white navbar */}
        <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="shrink-0 group">
          <img
            src="/logo.png"
            alt="Zaytek"
            className={`h-7 md:h-8 w-auto object-contain transition-all duration-300 ${
              isOpen
                ? "brightness-0 invert drop-shadow-[0_2px_12px_rgba(79,209,197,0.35)] opacity-95"
                : scrolled
                ? "brightness-100 opacity-100"
                : "brightness-0 invert drop-shadow-[0_2px_12px_rgba(79,209,197,0.35)] opacity-95 group-hover:opacity-100"
            }`}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                    aria-expanded={solutionsDropdownOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 font-medium transition-all duration-200 text-[15px] px-3.5 py-2 rounded-lg cursor-pointer ${
                      scrolled
                        ? solutionsDropdownOpen
                          ? "text-[#23525F] bg-[rgba(35,82,95,0.08)]"
                          : "text-[#4A6068] hover:text-[#112A32] hover:bg-[rgba(35,82,95,0.07)]"
                        : solutionsDropdownOpen
                        ? "text-[#4FD1C5] bg-white/10"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        solutionsDropdownOpen
                          ? `rotate-180 ${scrolled ? "text-[#23525F]" : "text-[#4FD1C5]"}`
                          : scrolled
                          ? "text-[#4A6068]"
                          : "text-white/70"
                      }`}
                    />
                  </button>

                  {/* Desktop Solutions Dropdown Menu */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[270px] transition-all duration-200 transform origin-top ${
                      solutionsDropdownOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white/98 backdrop-blur-md rounded-xl p-1.5 border border-[rgba(35,82,95,0.12)] shadow-[0_16px_40px_rgba(0,0,0,0.12)]">
                      <div className="space-y-0.5">
                        <a
                          href="/solucoes/cardapio-pedidos"
                          onClick={(e) => handleNavClick(e, "/solucoes/cardapio-pedidos")}
                          className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-[rgba(35,82,95,0.05)] transition-colors text-left"
                        >
                          <span className="text-[14px] font-semibold text-[#112A32] group-hover:text-[#23525F] transition-colors leading-tight">
                            Cardápio & Pedidos
                          </span>
                          <span className="text-[12px] text-[#7A9099] font-normal mt-0.5">
                            Hamburguerias e restaurantes
                          </span>
                        </a>

                        <a
                          href="/solucoes/agendamento-online"
                          onClick={(e) => handleNavClick(e, "/solucoes/agendamento-online")}
                          className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-[rgba(35,82,95,0.05)] transition-colors text-left"
                        >
                          <span className="text-[14px] font-semibold text-[#112A32] group-hover:text-[#23525F] transition-colors leading-tight">
                            Agendamento Online
                          </span>
                          <span className="text-[12px] text-[#7A9099] font-normal mt-0.5">
                            Salões, clínicas e barbearias
                          </span>
                        </a>
                      </div>

                      <div className="h-[1px] bg-[rgba(35,82,95,0.08)] my-1" />

                      <a
                        href="#solucoes"
                        onClick={(e) => handleNavClick(e, "#solucoes")}
                        className="group flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-medium text-[#23525F] hover:bg-[rgba(35,82,95,0.05)] transition-colors"
                      >
                        <span>Todas as soluções</span>
                        <ArrowRight size={13} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-2 rounded-lg font-medium transition-all duration-200 text-[15px] ${
                  scrolled
                    ? "text-[#4A6068] hover:text-[#112A32] hover:bg-[rgba(35,82,95,0.07)]"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button: CONTATO */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:inline-flex px-5 py-2.5 rounded-md font-bold text-xs tracking-wider uppercase transition-all duration-300 ${
            scrolled
              ? "bg-accent text-white hover:bg-accent-light shadow-xs hover:-translate-y-0.5"
              : "bg-gradient-to-r from-[#4FD1C5] to-[#38b2a5] text-[#0D1E22] hover:brightness-110 shadow-[0_0_20px_rgba(79,209,197,0.35)] hover:-translate-y-0.5"
          }`}
        >
          CONTATO
        </a>

        {/* Mobile Menu Toggle Button with smooth rotation - stays on top of backdrop */}
        <button
          className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 cursor-pointer relative z-[60] ${
            isOpen
              ? "text-white bg-white/15 border border-white/20 shadow-md active:scale-95"
              : scrolled
              ? "text-[#0D1E22] hover:bg-black/5 active:scale-95"
              : "text-white hover:bg-white/10 active:scale-95"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Overlay with Smooth Fade Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 top-0 bg-[#071317]/65 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile & Tablet Sophisticated Menu Card with Smooth Spring/Ease In-Out */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu-card"
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-[74px] right-4 left-4 sm:left-auto sm:w-[350px] bg-white/95 backdrop-blur-2xl border border-[rgba(35,82,95,0.14)] shadow-[0_28px_65px_-12px_rgba(17,42,50,0.28),0_4px_20px_rgba(0,0,0,0.06)] rounded-3xl p-4 z-50 overflow-hidden text-left max-h-[calc(100vh-90px)] overflow-y-auto ring-1 ring-black/[0.04]"
          >

            {/* Nav Links List */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.label} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className="w-full flex items-center justify-between text-[#0D1E22] hover:text-[#23525F] font-semibold px-3.5 py-2.5 rounded-xl hover:bg-[rgba(35,82,95,0.04)] text-[15px] text-left transition-colors cursor-pointer"
                      >
                        <span className={mobileSolutionsOpen ? "text-[#23525F]" : ""}>
                          {link.label}
                        </span>
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-200 text-[#4A6068] ${
                            mobileSolutionsOpen ? "rotate-180 text-[#23525F]" : ""
                          }`}
                        />
                      </button>

                      {/* Smooth Submenu for Soluções */}
                      <AnimatePresence>
                        {mobileSolutionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                            className="overflow-hidden ml-3 pl-3.5 border-l-2 border-[#23525F]/20 my-1 space-y-1"
                          >
                            <a
                              href="/solucoes/cardapio-pedidos"
                              onClick={(e) => handleNavClick(e, "/solucoes/cardapio-pedidos")}
                              className="flex items-center gap-2.5 py-2 px-3 rounded-xl text-[14px] font-medium text-[#112A32] hover:text-[#23525F] hover:bg-[rgba(35,82,95,0.04)] transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#23525F]" />
                              <span>Cardápio & Pedidos</span>
                            </a>

                            <a
                              href="/solucoes/agendamento-online"
                              onClick={(e) => handleNavClick(e, "/solucoes/agendamento-online")}
                              className="flex items-center gap-2 py-2 px-3 rounded-xl text-[14px] font-medium text-[#112A32] hover:text-[#23525F] hover:bg-[rgba(35,82,95,0.04)] transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                              <span className="flex-1">Agendamento Online</span>
                              <span className="text-[10px] font-mono bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-bold">
                                EM BREVE
                              </span>
                            </a>

                            <a
                              href="#solucoes"
                              onClick={(e) => handleNavClick(e, "#solucoes")}
                              className="flex items-center justify-between py-1.5 px-3 text-[12px] font-semibold text-[#23525F] hover:bg-[rgba(35,82,95,0.04)] rounded-xl transition-colors"
                            >
                              <span>Ver todas as soluções</span>
                              <ArrowRight size={12} />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center justify-between text-[#0D1E22] hover:text-[#23525F] font-semibold transition-all px-3.5 py-2.5 rounded-xl hover:bg-[rgba(35,82,95,0.04)] text-[15px]"
                  >
                    <span>{link.label}</span>
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-70 group-hover:translate-x-0.5 transition-all text-[#23525F]"
                    />
                  </a>
                );
              })}
            </div>

            {/* Sophisticated Bottom CTA */}
            <div className="pt-3 mt-2 border-t border-[rgba(35,82,95,0.08)]">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#23525F] via-[#2d6878] to-[#23525F] hover:brightness-110 text-white font-bold text-xs tracking-wider uppercase py-3.5 px-4 rounded-xl text-center shadow-[0_8px_20px_rgba(35,82,95,0.22)] active:scale-[0.98] transition-all"
              >
                <span>FALAR NO WHATSAPP</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
