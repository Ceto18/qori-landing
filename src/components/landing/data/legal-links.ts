import { ROUTES } from "@/constants/routes";
import type { LegalLink } from "@/types/landing";

export const legalLinks: LegalLink[] = [
  {
    label: "Términos y condiciones",
    href: ROUTES.terms,
  },
  {
    label: "Política de privacidad",
    href: ROUTES.privacy,
  },
  {
    label: "Política de reembolsos",
    href: ROUTES.refunds,
  },
  {
    label: "Libro de reclamaciones",
    href: ROUTES.complaintsBook,
  },
  {
    label: "Contacto",
    href: ROUTES.contact,
  },
];