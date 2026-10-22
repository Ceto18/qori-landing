import Image from "next/image";
import {
  Download,
  Globe,
  Link as LinkIcon,
  Mail,
  MessageCircle,
} from "lucide-react";

import { ContactItem } from "./ContactItem";

export function VCardPreview() {
  const handleDownloadContact = () => {
    console.log("Downloading demo contact...");
  };

  return (
    <div className="w-full max-w-sm glass-dark rounded-2xl overflow-hidden glow-gold-lg transform hover:scale-105 transition-transform duration-300">
      <div className="h-32 bg-gradient-to-br from-primary/30 to-primary/10 flex items-end justify-center pb-4 relative">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/qori-logo.png"
            alt="Qori ID background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="px-6 -mt-16 mb-4 relative z-10 flex justify-center">
        <div className="w-32 h-32 rounded-full border-4 border-background bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center shadow-lg">
          <span className="text-5xl">👤</span>
        </div>
      </div>

      <div className="px-6 space-y-1 text-center mb-6">
        <h2 className="text-2xl font-bold">
          Alejandro Torres
        </h2>

        <p className="text-primary font-semibold">
          Consultor de Tecnología
        </p>

        <p className="text-sm text-muted-foreground">
          Transformando ideas en soluciones digitales y conectando
          oportunidades profesionales.
        </p>
      </div>

      <div className="px-6 mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {[
            "Tecnología",
            "Innovación",
            "Consultoría",
            "Networking",
          ].map((skill) => (
            <span
              key={skill}
              className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 space-y-3 mb-6">
        <ContactItem
          icon={LinkIcon}
          label="LinkedIn"
          value="linkedin.com/in/alejandro-torres"
        />

        <ContactItem
          icon={MessageCircle}
          label="WhatsApp"
          value="+51 999 888 777"
        />

        <ContactItem
          icon={Mail}
          label="Email"
          value="alejandro@ejemplo.com"
        />

        <ContactItem
          icon={Globe}
          label="Web"
          value="www.alejandroejemplo.pe"
        />
      </div>

      <div className="px-6 pb-6">
        <button
          type="button"
          onClick={handleDownloadContact}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
        >
          <Download className="w-4 h-4" />
          Descargar contacto
        </button>
      </div>
    </div>
  );
}