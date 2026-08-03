"use client";

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { getWhatsAppUrl } from '@/lib/utils';
import { professional, careCards, carePillars, faqs, clinicGallery, CareCard } from '@/data/config';
import {
  Sparkles,
  Clock,
  User,
  MapPin,
  Instagram,
  Check,
  ChevronDown,
  Award,
  ArrowRight,
  Activity,
  Heart,
  X,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function HomeClient() {
  const [selectedCare, setSelectedCare] = useState<CareCard | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const whatsappUrl = getWhatsAppUrl();

  // Accessibility: close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCare(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Listen to hash changes for deep links to treatments
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#care-')) {
        const careId = hash.replace('#care-', '');
        const found = careCards.find(c => c.id === careId);
        if (found) {
          setSelectedCare(found);
          const element = document.getElementById('tratamentos');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCare) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCare]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-transparent selection:bg-primary/20">
      <Header />
      {!selectedCare && <FloatingWhatsApp />}

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden py-16">
          {/* Detail charm watermark */}
          <div className="absolute top-10 left-4 w-56 h-56 md:w-72 md:h-72 opacity-[0.12] pointer-events-none -z-10 rotate-[-15deg] select-none">
            <img src="/detail.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            {/* DESKTOP HERO LAYOUT */}
            <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="hidden sm:inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {professional.name} • {professional.crm}
                  </span>
                </div>
                
                <h1 className="text-display text-foreground leading-[1.15]">
                  Excelência em dermatologia e <span className="text-logo-gradient italic">procedimentos estéticos personalizados</span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
                  Cuidado médico individualizado que une ciência, tecnologia e sensibilidade para promover saúde, equilíbrio e beleza natural. Cada tratamento é planejado com precisão, segurança e respeito às características de cada paciente.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 sm:h-14 px-6 sm:px-8 bg-logo-gradient text-[#2C2C2C] text-xs sm:text-base font-semibold rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  >
                    Agendar consulta
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </a>
                  <a
                    href="#tratamentos"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("tratamentos")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="h-11 sm:h-14 px-6 sm:px-8 bg-white border border-border text-foreground text-xs sm:text-base font-semibold rounded-full flex items-center justify-center transition-all hover:bg-secondary hover:-translate-y-0.5 cursor-pointer"
                  >
                    Conhecer os cuidados
                  </a>
                </div>
                
                <p className="text-xs text-muted-foreground/80 font-light mt-4">
                  Atendimento individualizado em Santo André.
                </p>
              </div>

              {/* Right Column - Premium portrait with floating widgets */}
              <div className="lg:col-span-5 relative flex justify-center items-center py-10 lg:py-6">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-logo-gradient opacity-15 blur-[60px] rounded-full scale-95 pointer-events-none" />

                <div className="relative">
                  {/* Image Frame */}
                  <div className="relative w-[220px] xs:w-[250px] sm:w-[320px] md:w-[360px] aspect-square rounded-full overflow-hidden [box-shadow:var(--clay-shadow-lg)] z-10 border-2 border-white/60">
                    <img
                      src="/hero.png"
                      alt="Dra. Ana Bassi, médica em Santo André"
                      className="w-full h-full object-cover"
                      width={360}
                      height={360}
                      fetchPriority="high"
                      decoding="sync"
                    />
                  </div>

                  {/* Widget 1: Medical Safety (Top Left) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, 8, 0]
                    }}
                    transition={{
                      opacity: { delay: 0.4 },
                      x: { delay: 0.4 },
                      y: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                    }}
                    className="absolute -top-6 -left-12 z-20 pointer-events-auto scale-[0.75] sm:scale-100 origin-top-left"
                  >
                    <div className="bg-secondary rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_12px_rgba(0,0,0,0.08),-2px_-2px_8px_rgba(255,255,255,0.8)] border border-white/50">
                      <div className="w-8 h-8 bg-logo-gradient rounded-full flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-[#2C2C2C]" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-foreground leading-tight">Precisão Científica</p>
                        <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">e segurança médica</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Widget 2: Natural Beauty (Right Middle) */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, -8, 0]
                    }}
                    transition={{
                      opacity: { delay: 0.6 },
                      x: { delay: 0.6 },
                      y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                    }}
                    className="absolute top-[42%] -left-6 sm:left-auto sm:-right-12 z-20 pointer-events-auto scale-[0.75] sm:scale-100 origin-left sm:origin-right"
                  >
                    <div className="bg-secondary rounded-2xl px-3 py-2.5 flex items-center gap-2.5 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.04),4px_4px_16px_rgba(0,0,0,0.06),-2px_-2px_8px_rgba(255,255,255,0.8)] border border-white/50">
                      <div className="w-8 h-8 bg-logo-gradient rounded-full flex items-center justify-center shrink-0">
                        <Heart className="w-4 h-4 text-[#2C2C2C] fill-[#2C2C2C]" />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-foreground leading-tight">Beleza Natural</p>
                        <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">com ciência</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Widget 3: Professional info (Bottom Center) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: [0, -7, 0]
                    }}
                    transition={{
                      opacity: { delay: 0.8 },
                      y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                    }}
                    className="absolute -bottom-10 -left-6 sm:-bottom-6 sm:-left-8 z-20 pointer-events-auto scale-[0.75] sm:scale-100 origin-bottom-left"
                  >
                    <div className="bg-secondary rounded-2xl px-4 py-3 flex items-center gap-3 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.04),4px_4px_16px_rgba(0,0,0,0.06),-2px_-2px_8px_rgba(255,255,255,0.8)] border border-white/50">
                      <div className="w-9 h-9 rounded-full bg-logo-gradient flex items-center justify-center text-[#2C2C2C] shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-heading text-xs font-semibold text-foreground leading-tight">{professional.name}</p>
                        <p className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">{professional.crm} • {professional.professionalTitle}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* MOBILE HERO LAYOUT */}
            <div className="lg:hidden flex flex-col space-y-6 text-left relative">
              {/* Badge */}
              <div className="inline-flex self-start items-center gap-2 bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {professional.name} • {professional.crm}
                </span>
              </div>

              {/* 1. Hero Title */}
              <h1 className="text-3xl sm:text-4xl font-heading font-light leading-[1.15] text-foreground">
                Excelência em dermatologia e <span className="text-logo-gradient italic">procedimentos estéticos personalizados</span>
              </h1>

              {/* 2. Photo with widgets - aligned to the left-hand side of the viewer */}
              <div className="flex justify-start w-full py-8 pl-8 pr-4 overflow-visible">
                <div className="relative">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-logo-gradient opacity-15 blur-[40px] rounded-full scale-95 pointer-events-none" />

                  {/* Image Frame */}
                  <div className="relative w-[210px] xs:w-[245px] sm:w-[280px] aspect-square rounded-full overflow-hidden [box-shadow:var(--clay-shadow-lg)] z-10 border border-white/60">
                    <img
                      src="/hero.png"
                      alt="Dra. Ana Bassi, médica em Santo André"
                      className="w-full h-full object-cover"
                      width={250}
                      height={250}
                      fetchPriority="high"
                      decoding="sync"
                    />
                  </div>

                  {/* Widget 1: Medical Safety (Top Left) */}
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, 6, 0]
                    }}
                    transition={{
                      opacity: { delay: 0.2 },
                      x: { delay: 0.2 },
                      y: { duration: 3.6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -top-4 -left-10 z-20 pointer-events-auto scale-[0.8] xs:scale-[0.85] origin-top-left"
                  >
                    <div className="bg-secondary rounded-2xl px-3 py-2 flex items-center gap-2 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.05),4px_4px_12px_rgba(0,0,0,0.08),-2px_-2px_8px_rgba(255,255,255,0.8)] border border-white/50">
                      <div className="w-7 h-7 bg-logo-gradient rounded-full flex items-center justify-center shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-[#2C2C2C]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[10px] text-foreground leading-tight">Precisão Científica</p>
                        <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">e segurança médica</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Widget 2: Natural Beauty (Right Middle) */}
                  <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, -6, 0]
                    }}
                    transition={{
                      opacity: { delay: 0.3 },
                      x: { delay: 0.3 },
                      y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-[45%] -right-8 z-20 pointer-events-auto scale-[0.8] xs:scale-[0.85] origin-right"
                  >
                    <div className="bg-secondary rounded-2xl px-3 py-2 flex items-center gap-2 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.04),4px_4px_16px_rgba(0,0,0,0.06),-2px_-2px_8px_rgba(255,255,255,0.8)] border border-white/50">
                      <div className="w-7 h-7 bg-logo-gradient rounded-full flex items-center justify-center shrink-0">
                        <Heart className="w-3.5 h-3.5 text-[#2C2C2C] fill-[#2C2C2C]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[10px] text-foreground leading-tight">Beleza Natural</p>
                        <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">com ciência</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Widget 3: Professional info (Bottom Left / Center) */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{
                      opacity: 1,
                      y: [0, -5, 0]
                    }}
                    transition={{
                      opacity: { delay: 0.4 },
                      y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -bottom-5 -left-4 z-20 pointer-events-auto scale-[0.8] xs:scale-[0.85] origin-bottom-left"
                  >
                    <div className="bg-secondary rounded-2xl px-3 py-2 flex items-center gap-2 [box-shadow:inset_2px_2px_4px_rgba(255,255,255,0.9),inset_-2px_-2px_4px_rgba(0,0,0,0.04),4px_4px_16px_rgba(0,0,0,0.06),-2px_-2px_8px_rgba(255,255,255,0.8)] border border-white/50">
                      <div className="w-7 h-7 bg-logo-gradient rounded-full flex items-center justify-center shrink-0">
                        <Award className="w-3.5 h-3.5 text-[#2C2C2C]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[10px] text-foreground leading-tight">{professional.name}</p>
                        <p className="text-[9px] text-muted-foreground leading-tight mt-0.5">{professional.crm} • {professional.professionalTitle}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* 3. Phrase (Description) */}
              <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                Cuidado médico individualizado que une ciência, tecnologia e sensibilidade para promover saúde, equilíbrio e beleza natural. Cada tratamento é planejado com precisão, segurança e respeito às características de cada paciente.
              </p>

              {/* 4. CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 px-6 bg-logo-gradient text-[#2C2C2C] text-sm font-semibold rounded-full flex items-center justify-center shadow-lg transition-transform active:translate-y-0.5 cursor-pointer"
                >
                  Agendar consulta
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="#tratamentos"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("tratamentos")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="h-12 px-6 bg-white border border-border text-foreground text-sm font-semibold rounded-full flex items-center justify-center transition-all hover:bg-secondary cursor-pointer"
                >
                  Conhecer os cuidados
                </a>
              </div>
              
              <p className="text-[10px] text-muted-foreground/80 font-light mt-2">
                Atendimento individualizado em Santo André.
              </p>
            </div>
          </div>
        </section>

        {/* INTRODUCTORY POSITIONING SECTION */}
        <section className="py-20 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Cuidado por inteiro</span>
              <h2 className="text-headline mt-2 mb-4">Pele, cabelos, saúde e bem-estar</h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto mb-6" />
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Cada pele tem uma história, uma rotina e necessidades próprias. A consulta médica permite compreender essas particularidades e construir um plano de cuidados individualizado, responsável e possível de manter.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Avaliação individualizada",
                  text: "Uma consulta atenta às suas necessidades, queixas, rotina e objetivos."
                },
                {
                  title: "Saúde da pele",
                  text: "Prevenção, diagnóstico, acompanhamento e tratamento de diferentes alterações da pele."
                },
                {
                  title: "Saúde dos cabelos",
                  text: "Investigação médica da queda, do couro cabeludo e da qualidade dos fios."
                },
                {
                  title: "Tecnologia com indicação",
                  text: "Recursos modernos utilizados de maneira responsável e de acordo com cada caso."
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-border/40 [box-shadow:var(--clay-shadow-sm)] hover:[box-shadow:var(--clay-shadow)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILARES DE CUIDADO */}
        <section className="py-24 bg-transparent">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Text Column */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">Pilares de Cuidado</span>
                <h2 className="text-headline mt-2">Áreas de Atendimento Médico</h2>
                <div className="w-16 h-0.5 bg-primary/40" />
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Oferecemos um atendimento completo focado na saúde e na beleza natural do seu rosto, corpo e cabelos, embasado na ciência médica.
                </p>
                <div className="space-y-4 pt-2">
                  {carePillars.map((pillar, idx) => (
                    <div key={idx} className="p-5 bg-white rounded-2xl border border-border/40 [box-shadow:var(--clay-shadow-sm)] flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                        <span className="text-xs font-bold font-sans">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-heading text-sm font-semibold text-foreground mb-1">{pillar.title}</h4>
                        <p className="text-xs text-muted-foreground font-light leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Logo Stamp Column */}
              <div className="lg:col-span-6 flex justify-center items-center py-8">
                <div className="relative w-full max-w-[360px] aspect-square flex items-center justify-center">
                  <img
                    src="/details.svg"
                    alt="Selo de Qualidade Dra. Ana Bassi"
                    className="w-full h-full object-contain filter drop-shadow-md select-none animate-float"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CARE CARDS SECTION */}
        <section id="tratamentos" className="py-24 bg-secondary/40 border-t border-border/30">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <div className="max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Acompanhamento e Tecnologias</span>
              <h2 className="text-headline mt-2 mb-4">Opções de Cuidado</h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
              <p className="text-muted-foreground mt-4 font-light text-sm leading-relaxed">
                Explore os cuidados voltados para a saúde da pele, dos cabelos e tratamentos estéticos. Clique em cada card para entender as indicações.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {careCards.map((care) => (
                <div
                  key={care.id}
                  onClick={() => setSelectedCare(care)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedCare(care); } }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver detalhes: ${care.name}`}
                  className="group cursor-pointer bg-white rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 border border-border/40 [box-shadow:var(--clay-shadow-sm)] hover:[box-shadow:var(--clay-shadow)] flex flex-col justify-between min-h-[300px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <div>
                    {/* Visual sketch image */}
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 relative bg-white border border-border/30 flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02]">
                      <img
                        src={care.image}
                        alt={care.altText}
                        className="w-full h-full object-cover mix-blend-multiply"
                        loading="lazy"
                        decoding="async"
                        width={340}
                        height={176}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                    </div>
                    <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-primary/70 bg-primary/5 px-2.5 py-1 rounded-md">
                      {care.category}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary transition-colors mt-3 mb-2">
                      {care.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light line-clamp-2 leading-relaxed">
                      {care.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-accent">Entender o cuidado</span>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARE DETAILS MODALS */}
        <AnimatePresence>
          {selectedCare && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCare(null)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-care-title"
                className="relative bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 max-h-[85vh] sm:max-h-[90vh] flex flex-col"
              >
                {/* Header background pattern */}
                <div className={`p-6 md:p-8 bg-gradient-to-br ${selectedCare.imageColor} relative shrink-0`}>
                  <button
                    onClick={() => setSelectedCare(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary bg-white/85 px-3 py-1 rounded-full">{selectedCare.category}</span>
                  <h3 id="modal-care-title" className="font-heading text-xl md:text-2xl font-bold text-foreground mt-4">{selectedCare.name}</h3>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {selectedCare.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-secondary/40 p-4 rounded-2xl flex items-center gap-3 border border-border/40">
                      <Clock className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Duração aproximada</p>
                        <p className="text-xs font-semibold text-foreground">{selectedCare.duration || "Varia conforme a indicação"}</p>
                      </div>
                    </div>
                    <div className="bg-secondary/40 p-4 rounded-2xl flex items-center gap-3 border border-border/40">
                      <Activity className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Tempo de recuperação</p>
                        <p className="text-xs font-semibold text-foreground">{selectedCare.recovery || "Imediato"}</p>
                      </div>
                    </div>
                  </div>

                  {selectedCare.benefits && (
                    <div className="space-y-3">
                      <h4 className="font-heading text-sm font-semibold text-foreground flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Benefícios Principais
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                        {selectedCare.benefits}
                      </p>
                    </div>
                  )}

                  {selectedCare.idealCandidates && (
                    <div className="space-y-3">
                      <h4 className="font-heading text-sm font-semibold text-foreground flex items-center gap-2">
                        <User className="w-4 h-4 text-accent" />
                        Indicado Para
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                        {selectedCare.idealCandidates}
                      </p>
                    </div>
                  )}

                  {/* Medical Disclaimer */}
                  <div className="pt-4 border-t border-border/40">
                    <p className="text-[10px] text-muted-foreground italic leading-relaxed">
                      {professional.disclaimer}
                    </p>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-4 sm:p-6 border-t border-border/60 bg-secondary/30 flex justify-center sm:justify-end shrink-0">
                  <a
                    href={getWhatsAppUrl(selectedCare.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-6 bg-logo-gradient text-white text-xs font-semibold rounded-full flex items-center justify-center gap-2 shadow-sm transition-all hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ABOUT SECTION (AUTHORITY) */}
        <section id="sobre" className="py-24 bg-transparent relative overflow-hidden">
          {/* Detail charm watermark */}
          <div className="absolute bottom-4 right-4 w-72 h-72 md:w-96 md:h-96 opacity-[0.08] pointer-events-none -z-10 rotate-[20deg] select-none">
            <img src="/detail.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Side: Timeline / Credentials */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Sobre a médica</span>
                  <h2 className="text-headline mt-2 mb-4">{professional.name}</h2>
                  <p className="text-sm font-semibold text-accent/80 tracking-wide">{professional.professionalTitle} • {professional.crm}</p>
                  <div className="w-16 h-0.5 bg-primary/40 mt-3" />
                </div>

                <div className="space-y-6 text-sm text-muted-foreground leading-relaxed font-light">
                  <p>
                    A Dra. Ana Bassi realiza um atendimento próximo e individualizado, dedicado à saúde da pele, dos cabelos, à prevenção e ao bem-estar. Sua proposta é tornar o cuidado médico mais claro, possível e conectado às necessidades reais de cada paciente.
                  </p>
                  <p>
                    Cada consulta começa pela escuta e por uma avaliação cuidadosa. A partir dela, são discutidas as opções de acompanhamento e tratamento mais adequadas para cada momento.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-2">
                  {["Saúde da Pele", "Saúde Capilar", "Prevenção e Diagnóstico", "Acompanhamento Individualizado"].map((tag, idx) => (
                    <span key={idx} className="bg-white border border-border/80 px-4 py-2 rounded-full text-xs font-medium text-foreground [box-shadow:var(--clay-shadow-sm)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Elegant CTA Card */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-border/40 [box-shadow:var(--clay-shadow-lg)] space-y-6 text-left">
                <h3 className="font-heading text-lg font-semibold text-foreground">Agende seu atendimento</h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Os atendimentos com a Dra. Ana Bassi são totalmente focados na sua individualidade, em um espaço planejado para o seu conforto.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-xs text-foreground/80">Avaliação médica minuciosa e atenta</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-xs text-foreground/80">Plano de cuidados simples e possível de seguir</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <p className="text-xs text-foreground/80">Suporte médico próximo no pós-consulta</p>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 bg-logo-gradient text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Falar no WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONSULTATION CTA SECTION */}
        <section className="py-24 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Atendimento individualizado</span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
              Um plano de cuidados pensado para você
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              A consulta é o primeiro passo para entender sua pele, seus cabelos e as possibilidades de cuidado mais adequadas para suas necessidades.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4">
              {[
                "Avaliação médica individual",
                "Orientações claras e responsáveis",
                "Plano de cuidados personalizado",
                "Acompanhamento próximo"
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-border/40 [box-shadow:var(--clay-shadow-sm)] flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-2.5 text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 px-8 bg-logo-gradient text-white font-semibold rounded-full items-center justify-center shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-transform cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* CLINIC GALLERY SECTION (EDITORIAL GRID) */}
        <section id="consultorio" className="py-24 bg-transparent">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">O consultório</span>
              <h2 className="text-headline mt-2 mb-4">Um espaço pensado para cuidar de você</h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto mb-6" />
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Um ambiente acolhedor, elegante e tranquilo, preparado para proporcionar conforto durante toda a experiência de atendimento.
              </p>
            </div>

            {/* Masonry Grid Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {clinicGallery.map((image, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid rounded-3xl overflow-hidden border border-border/40 [box-shadow:var(--clay-shadow)] group relative"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Dúvidas Frequentes</span>
              <h2 className="text-headline mt-2 mb-4">Perguntas Frequentes</h2>
              <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
            </div>

            <div className="space-y-4 text-left">
              {faqs.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-border/40 overflow-hidden [box-shadow:var(--clay-shadow-sm)]"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 flex items-center justify-between font-heading text-sm md:text-base font-semibold text-foreground hover:bg-secondary/20 transition-colors cursor-pointer"
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={`w-5 h-5 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-1 text-xs md:text-sm text-muted-foreground leading-relaxed font-light border-t border-border/10">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center space-y-4">
              <p className="text-xs text-muted-foreground font-light">Não encontrou a resposta para a sua dúvida?</p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 px-6 bg-logo-gradient text-white text-xs font-semibold uppercase tracking-wider rounded-full items-center justify-center shadow-md hover:scale-[1.02] cursor-pointer"
              >
                Falar com Dra. Ana Bassi
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contato" className="py-24 bg-transparent">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Info Column */}
              <div className="lg:col-span-5 space-y-8 text-left flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">Localização</span>
                  <h2 className="text-headline mt-2 mb-4">Consultório da Dra. Ana Bassi</h2>
                  <div className="w-16 h-0.5 bg-primary/40" />
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-accent shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">Endereço</h4>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed mt-1">
                        {professional.address.street}, {professional.address.number} — {professional.address.room}<br />
                        {professional.address.district} • {professional.address.city} - {professional.address.state}<br />
                        CEP {professional.address.postalCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-accent shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-foreground">Instagram</h4>
                      <a
                        href={professional.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:underline leading-relaxed mt-1 block"
                      >
                        {professional.instagramHandle}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-secondary/40 rounded-2xl border border-border/40">
                  <h4 className="font-heading text-xs font-bold text-foreground uppercase tracking-wider mb-2">Horário de Atendimento</h4>
                  <p className="text-xs text-muted-foreground font-light">Atendimento com hora marcada.</p>
                </div>
              </div>

              {/* Map & Location Description Column */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="relative rounded-[24px] overflow-hidden border border-border/40 [box-shadow:var(--clay-shadow)] bg-white/40 backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 flex-1 min-h-[300px]">
                  {/* Left Side: Image */}
                  <div className="relative h-48 md:h-full min-h-[220px]">
                    <img
                      src="/recepcao-consultorio-ana-bassi.webp"
                      alt="Recepção do consultório em Santo André"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                  </div>
                  {/* Right Side: Text & CTA */}
                  <div className="p-8 flex flex-col justify-center items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-logo-gradient flex items-center justify-center text-white mb-3">
                      <MapPin className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-2">Santo André, Jardim</h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6">
                      O consultório está localizado no bairro Jardim, em Santo André, em uma região de fácil acesso pela Avenida Industrial.
                    </p>
                    <a
                      href={professional.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver localização no Google Maps"
                      className="inline-flex h-10 px-5 bg-white border border-border text-foreground font-semibold rounded-full items-center justify-center text-xs uppercase tracking-wider transition-colors hover:bg-secondary cursor-pointer shadow-sm"
                    >
                      Ver no Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
