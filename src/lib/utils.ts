import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { professional } from "@/data/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppUrl(treatmentName?: string) {
  const baseUrl = professional.whatsappUrl;
  if (treatmentName) {
    const text = `Olá, Dra. Ana Bassi. Gostaria de agendar uma consulta e entender mais sobre o cuidado: ${treatmentName}.`;
    return `${baseUrl}?text=${encodeURIComponent(text)}`;
  }
  const text = "Olá, Dra. Ana Bassi. Gostaria de agendar uma consulta.";
  return `${baseUrl}?text=${encodeURIComponent(text)}`;
}
