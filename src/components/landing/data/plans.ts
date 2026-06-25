import type { Plan } from "@/types/landing";

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Plan Básico",
    price: "S/ 19.90",
    amount: 19.9,
    description: "Ideal para profesionales que desean compartir su perfil digital.",
    features: [
      "Tarjeta digital personalizada",
      "Link público Qori ID",
      "Botón de WhatsApp",
      "Botón de correo",
      "Diseño profesional",
    ],
  },
  {
    id: "premium",
    name: "Plan Premium",
    price: "S/ 29.90",
    amount: 29.9,
    description: "Para profesionales y negocios que desean una presencia premium.",
    features: [
      "Todo lo del Plan Básico",
      "Diseños premium",
      "QR personalizado",
      "Enlaces ilimitados",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    id: "business",
    name: "Plan Empresas",
    price: "S/ 59.90",
    amount: 59.9,
    description: "Para equipos que necesitan gestionar varias tarjetas digitales.",
    features: [
      "Hasta 5 perfiles digitales",
      "Gestión centralizada",
      "Diseños corporativos",
      "Datos empresariales",
      "Soporte comercial",
    ],
  },
];