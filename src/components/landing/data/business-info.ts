import {
  Building2,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";

import { BUSINESS_INFO } from "@/constants/business";
import type { BusinessInfoItem } from "@/types/landing";

export const businessInfoItems: BusinessInfoItem[] = [
  {
    icon: Building2,
    title: "Razón social",
    description: BUSINESS_INFO.legalName,
    detail: "Servicio digital de tarjetas profesionales.",
  },
  {
    icon: Mail,
    title: "Correo de contacto",
    description: BUSINESS_INFO.email,
    detail: "Atención de consultas comerciales y soporte.",
  },
  {
    icon: Phone,
    title: "Teléfono",
    description: BUSINESS_INFO.phone,
    detail: "Atención por WhatsApp en horario comercial.",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    description: BUSINESS_INFO.address,
    detail: "Servicio digital disponible para usuarios en Perú.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidad",
    description: "Protección de datos",
    detail: "Tratamos la información de acuerdo con nuestra política de privacidad.",
  },
  {
    icon: ReceiptText,
    title: "Reembolsos",
    description: "Política de devolución",
    detail: "Los reembolsos aplican según las condiciones publicadas.",
  },
];