"use client";

import { Phone, ArrowRight, Instagram, MapPin } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';
import { professional, navigation, careCards } from '@/data/config';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Footer = () => {
  const whatsappUrl = getWhatsAppUrl();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#care-')) {
      e.preventDefault();
      window.location.hash = ''; // reset so it triggers hashchange even if clicked twice
      window.location.hash = href;
      return;
    }
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const topCares = careCards.slice(0, 5);

  const linkSections = [
    {
      title: "Menu",
      links: navigation.map(item => ({ label: item.label, href: item.href }))
    },
    {
      title: "Cuidados",
      links: topCares.map(card => ({ label: card.name, href: `#care-${card.id}` }))
    },
    {
      title: "Contato & Localização",
      links: [
        { label: `${professional.address.city} - ${professional.address.state}`, href: "" },
        { label: `${professional.address.street}, ${professional.address.number} - ${professional.address.room}`, href: professional.googleMapsLink },
        { label: `WhatsApp: ${professional.phoneDisplay}`, href: whatsappUrl },
      ]
    }
  ];

  return (
    <footer className="px-4 pb-8 pt-4">
      <div className="container mx-auto max-w-7xl">
        {/* Floating Card Footer - Military Green */}
        <div className="bg-primary text-white flex-shrink-0 rounded-3xl px-8 py-10 md:px-12 md:py-16 border border-accent/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
            {/* Left Column: Brand Info */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              {/* Circular Brand Logo Seal */}
              <img
                src="/ft.svg"
                alt="Selo Dra. Ana Lúcia Bassi"
                className="h-20 w-20 md:h-24 md:w-24 object-contain mb-6 opacity-95"
              />

              <div className="space-y-4 max-w-sm mb-8">
                <p className="text-sm font-sans font-semibold text-white leading-relaxed">
                  {professional.name} • {professional.professionalTitle} ({professional.crm}).
                </p>
                <address className="not-italic text-xs text-white/70 leading-relaxed">
                  Cuidados médicos para a saúde da pele e dos cabelos em Santo André.
                </address>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                <a
                  href={professional.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-semibold text-white/70 hover:text-accent uppercase tracking-widest transition-all"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  Instagram
                </a>
              </div>

              {/* WhatsApp Link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-logo-gradient flex items-center justify-center text-white shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider text-white/70 font-semibold leading-none mb-1">WhatsApp de Agendamento</span>
                  <span className="text-sm font-bold text-white group-hover:text-accent transition-colors leading-none">{professional.phoneDisplay}</span>
                </div>
              </a>
            </div>

            {/* Right Column: Links Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0">
              {linkSections.map((section) => (
                <div key={section.title} className="flex flex-col space-y-5">
                  <h3 className="font-heading text-base font-semibold text-white">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        {link.href ? (
                          link.href.startsWith("#") ? (
                            <a
                              href={link.href}
                              onClick={(e) => handleNavClick(e, link.href)}
                              className="text-xs text-white/70 hover:text-accent transition-colors cursor-pointer"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-white/70 hover:text-accent transition-colors"
                            >
                              {link.label}
                            </a>
                          )
                        ) : (
                          <span className="text-xs text-white/70">{link.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Disclaimer and Copyright */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <p className="text-[10px] text-white/60 max-w-xl font-light leading-relaxed">
              {professional.disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex flex-col items-center md:items-end gap-1.5 text-[10px] text-white/60">
                <span>© {new Date().getFullYear()} {professional.name}. Todos os direitos reservados.</span>
                <span className="opacity-80 font-semibold">CRM/SP 129.959 • Médica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
