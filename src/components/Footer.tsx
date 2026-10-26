import { type MouseEvent } from "react";

export default function Footer() {
  const waLink = "https://wa.me/5541920047176?text=Oi+Gabriel%2C+vim+pelo+site+da+Zaytek+e+gostaria+de+conversar.";

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const isSolutionPage =
      window.location.pathname.includes("/solucoes/") ||
      window.location.hash.includes("solucoes/");

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
        }, 100);
      }
    } else if (href.startsWith("/solucoes/")) {
      e.preventDefault();
      window.history.pushState({}, "", href);
      window.dispatchEvent(new Event("popstate"));
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-transparent border-t border-[rgba(255,255,255,0.08)] pt-12 pb-6 relative z-20 text-[#ECEEF0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-8 sm:mb-10 text-left">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="inline-block mb-4"
            >
              <img
                src="/logo.png"
                alt="Zaytek"
                className="h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-[#A0AEC0] max-w-sm text-[15px] leading-relaxed mb-6">
              Tecnologia para sua empresa vender, atender e operar melhor.
            </p>
          </div>

          {/* Column 2: Navegação */}
          <div className="lg:col-span-4">
            <h4 className="font-sans font-bold text-white mb-5 text-[15px] tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-3 text-[14px] text-[#A0AEC0]">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, "#hero")}
                  className="hover:text-[#4FD1C5] hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleNavClick(e, "#servicos")}
                  className="hover:text-[#4FD1C5] hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  onClick={(e) => handleNavClick(e, "#projetos")}
                  className="hover:text-[#4FD1C5] hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  onClick={(e) => handleNavClick(e, "#solucoes")}
                  className="hover:text-[#4FD1C5] hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Soluções
                </a>
              </li>
              <li>
                <a
                  href="#processo"
                  onClick={(e) => handleNavClick(e, "#processo")}
                  className="hover:text-[#4FD1C5] hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Como trabalhamos
                </a>
              </li>
              <li>
                <a
                  href="#por-que-zaytek"
                  onClick={(e) => handleNavClick(e, "#por-que-zaytek")}
                  className="hover:text-[#4FD1C5] hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Por que a Zaytek
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, "#faq")}
                  className="hover:text-[#4FD1C5] hover:translate-x-1 inline-block transition-transform duration-200"
                >
                  Perguntas frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contato */}
          <div className="lg:col-span-3">
            <h4 className="font-sans font-bold text-white mb-5 text-[15px] tracking-wide">
              Contato
            </h4>
            <ul className="space-y-3.5 text-[14px] text-[#A0AEC0]">
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4FD1C5] hover:translate-x-1 inline-flex items-center gap-2.5 transition-all duration-200 group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#4FD1C5] group-hover:bg-[#4FD1C5]/20 group-hover:border-[#4FD1C5]/40 transition-colors shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:zaytekdigital@gmail.com"
                  className="hover:text-[#4FD1C5] hover:translate-x-1 inline-flex items-center gap-2.5 transition-all duration-200 group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#4FD1C5] group-hover:bg-[#4FD1C5]/20 group-hover:border-[#4FD1C5]/40 transition-colors shrink-0">
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </span>
                  <span>zaytekdigital@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator & Centered Copyright */}
        <div className="pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[13px] text-[#7A9099] text-center w-full">
          <span>© 2026 Zaytek. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
