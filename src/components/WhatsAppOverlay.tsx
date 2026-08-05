"use client";

import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5511921488886&text&type=phone_number&app_absent=0";

export function WhatsAppOverlay() {
  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/30 backdrop-blur-xs select-none"
      onClick={(e) => {
        // Unclosable overlay — prevent background click dismiss
        e.stopPropagation();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-md overflow-hidden rounded-3xl border-2 border-[#DBC392] bg-gradient-to-b from-[#FAF8F5] via-[#F4F1EA] to-[#ECE7DC] p-8 text-center text-stone-800 shadow-[0_20px_50px_-10px_rgba(203,175,123,0.35),0_10px_25px_-5px_rgba(0,0,0,0.1)]"
      >
        {/* Soft Ambient Gold & Sage Background Glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full bg-[#DBC392]/30 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full bg-[#586953]/20 blur-2xl" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Gold & Sage Glowing Badge */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-[#DBC392] via-[#CBAF7B] to-[#586953] p-1 shadow-lg shadow-[#CBAF7B]/25"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#F4F1EA] text-[#586953]">
              <MessageCircleHeart className="h-10 w-10 stroke-[1.7]" />
            </div>
          </motion.div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl font-normal tracking-tight bg-gradient-to-r from-[#A88F5E] via-[#8C7443] to-[#5E4E35] bg-clip-text text-transparent mb-3">
            O que achou?
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-7 max-w-xs">
            Sua opinião é muito importante para nós. Clique abaixo para conversar diretamente via WhatsApp.
          </p>

          {/* Main Gold & Sage CTA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#DBC392] via-[#CBAF7B] to-[#5E4E35] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(203,175,123,0.45)] active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Clique aqui para conversar
            </span>

            {/* Shimmer Light Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
