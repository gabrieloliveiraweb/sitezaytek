/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyZaytek from './components/WhyZaytek';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CardapioPedidos from './pages/CardapioPedidos';
import AgendamentoOnline from './pages/AgendamentoOnline';

type RouteType = 'home' | 'cardapio-pedidos' | 'agendamento-online';

function getActiveRoute(): RouteType {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname;
  const hash = window.location.hash;

  if (
    path.includes('/solucoes/agendamento-online') ||
    hash.includes('solucoes/agendamento-online') ||
    hash === '#agendamento-online'
  ) {
    return 'agendamento-online';
  }

  if (
    path.includes('/solucoes/cardapio-pedidos') ||
    hash.includes('solucoes/cardapio-pedidos') ||
    hash === '#cardapio-pedidos'
  ) {
    return 'cardapio-pedidos';
  }

  return 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteType>(getActiveRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      const route = getActiveRoute();
      setCurrentRoute(route);
      if (route !== 'home') {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  if (currentRoute === 'cardapio-pedidos') {
    return (
      <div className="relative min-h-screen font-sans bg-bg-primary text-text-primary overflow-x-hidden w-full">
        <Navbar />
        <CardapioPedidos />
      </div>
    );
  }

  if (currentRoute === 'agendamento-online') {
    return (
      <div className="relative min-h-screen font-sans bg-bg-primary text-text-primary overflow-x-hidden w-full">
        <Navbar />
        <AgendamentoOnline />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen font-sans bg-bg-primary text-text-primary overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Products />
      <Process />
      <WhyZaytek />
      <FAQ />
      
      <div className="relative overflow-hidden bg-bg-dark rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] -mt-10 sm:-mt-14 md:-mt-20 z-20 shadow-[0_-24px_48px_rgba(0,0,0,0.35)] border-t border-white/[0.08]">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-[#0D1E22]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1E22] via-[#0D1E22]/80 to-transparent" />
        
        <div className="relative z-10 w-full">
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
