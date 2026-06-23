"use client";

import Image from "next/image";
import {
  Mail,
  Link,
  MessageCircle,
  Globe,
  Download,
  ArrowRight,
  CreditCard,
  UserX,
  TriangleAlert,
  FileText,
  Share2,
  Handshake,
  Sparkles,
  Repeat,
  Target,
  Shield,
  BarChart3,
} from "lucide-react";

export default function QoriIDLanding() {
  const handleDownloadContact = () => {
    console.log("Downloading contact...");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/qori-logo.png"
              alt="Qori ID"
              width={120}
              height={60}
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary">Qori ID</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#demo"
              className="text-sm hover:text-primary transition-colors"
            >
              Demo
            </a>
            <a
              href="#how"
              className="text-sm hover:text-primary transition-colors"
            >
              Cómo Funciona
            </a>
            <a
              href="#benefits"
              className="text-sm hover:text-primary transition-colors"
            >
              Beneficios
            </a>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all">
              Crear Cuenta
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with vCard Preview */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary">
                  Tu identidad
                </span>
                <br />
                <span className="text-white">vale oro</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Comparte tu perfil profesional de forma elegante, segura y con
                total control. Una tarjeta digital premium para profesionales
                que se destacan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 flex items-center justify-center gap-2">
                Crear mi Qori ID
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all font-semibold">
                Ver Demo
              </button>
            </div>

            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Encriptación End-to-End</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Disponible en Todo el Mundo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Sin tarjeta de crédito requerida</span>
              </div>
            </div>
          </div>

          {/* Right Side - vCard Preview */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm glass-dark rounded-2xl overflow-hidden glow-gold-lg transform hover:scale-105 transition-transform duration-300">
              {/* vCard Header */}
              <div className="h-32 bg-gradient-to-br from-primary/30 to-primary/10 flex items-end justify-center pb-4 relative">
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="/qori-logo.png"
                    alt="bg"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Profile Image */}
              <div className="px-6 -mt-16 mb-4 relative z-10 flex justify-center">
                <div className="w-32 h-32 rounded-full border-4 border-background bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center shadow-lg">
                  <span className="text-5xl">👤</span>
                </div>
              </div>

              {/* Profile Info */}
              {/* Profile Info */}
              <div className="px-6 space-y-1 text-center mb-6">
                <h2 className="text-2xl font-bold">Qori</h2>

                <p className="text-primary font-semibold">
                  Cargo Profesional | Empresa
                </p>

                <p className="text-sm text-muted-foreground">
                  Especialista en tecnología, innovación y desarrollo de soluciones digitales
                </p>
              </div>

              {/* Skills */}
              <div className="px-6 mb-6">
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "innovación digital",
                    "visión aiot",
                    "liderazgo estratégico",
                    "arquitectura tecnológica",
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

              {/* Contact Cards */}
              <div className="px-6 space-y-3 mb-6">
                <div className="glass-dark-hover p-4 rounded-lg border border-primary/20 flex items-center gap-3 cursor-pointer group">
                  <Link className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-medium truncate">
                      linkedin.com/in/usuario-demo
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="glass-dark-hover p-4 rounded-lg border border-primary/20 flex items-center gap-3 cursor-pointer group">
                  <MessageCircle className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="text-sm font-medium truncate">
                      +51 900 000 000
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="glass-dark-hover p-4 rounded-lg border border-primary/20 flex items-center gap-3 cursor-pointer group">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium truncate">
                      demo@qoriid.com
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="glass-dark-hover p-4 rounded-lg border border-primary/20 flex items-center gap-3 cursor-pointer group">
                  <Globe className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">Web</p>
                    <p className="text-sm font-medium truncate">
                      www.qoriid.com
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Download Button */}
              <div className="px-6 pb-6">
                <button
                  onClick={handleDownloadContact}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Descargar contacto
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              El Problema Real
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los métodos tradicionales no funcionan en 2026
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CreditCard,
                title: "Las Tarjetas se Pierden",
                desc: "Gastas dinero en tarjetas de papel que terminan en la basura o se pierden en una bolsa.",
              },
              {
                icon: UserX,
                title: "Los Contactos se Olvidan",
                desc: "Intercambias datos, pero luego nadie recuerda quién eres ni cómo contactarte.",
              },
              {
                icon: TriangleAlert,
                title: "No Impactas",
                desc: "Sin una presentación profesional y consistente, no dejas huella en tus conexiones.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="glass-dark glass-dark-hover p-8 rounded-lg"
                >
                  <div className="w-14 h-14 mb-5 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              La Solución: Qori ID
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tu perfil profesional premium que siempre está contigo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Identidad Digital Única",
                    desc: "Un perfil elegante que representa exactamente quién eres y qué haces",
                  },
                  {
                    icon: Shield,
                    title: "Control Total de Privacidad",
                    desc: "Decide exactamente qué información mostrar y con quién compartirla",
                  },
                  {
                    icon: Sparkles,
                    title: "Diseño Premium",
                    desc: "Plantillas profesionales que transmiten lujo y confianza",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics en Tiempo Real",
                    desc: "Descubre quién visitó tu perfil y cuándo se interesaron en ti",
                  },
                ].map((feature, idx) => {
                  const Icon = feature.icon;

                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon
                          className="w-6 h-6 text-primary"
                          strokeWidth={1.8}
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center">
              <div className="glass-dark rounded-2xl overflow-hidden glow-gold-lg p-8 w-full max-w-sm border border-primary/20">
                <div className="h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg mb-6 flex items-center justify-center">
                  <Image
                    src="/qori-logo.png"
                    alt="Qori ID"
                    width={60}
                    height={60}
                    className="w-16 h-16"
                  />
                </div>

                <h3 className="text-2xl font-bold text-center mb-2">
                  Qori ID Premium
                </h3>

                <p className="text-center text-muted-foreground mb-6">
                  Todos tus datos profesionales en un solo lugar
                </p>

                <div className="space-y-3 text-sm">
                  {[
                    "Perfil personalizable",
                    "QR único",
                    "Links directos",
                    "Actualizaciones en vivo",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(212,175,55,0.6)]"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Cómo Funciona
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tres pasos simples para tu identidad digital premium
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Crear Perfil",
                desc: "Registra tu información profesional en minutos",
                icon: FileText,
              },
              {
                number: "02",
                title: "Compartir",
                desc: "Envía tu link Qori ID o código QR a quien quieras",
                icon: Share2,
              },
              {
                number: "03",
                title: "Conectar",
                desc: "Recibe conexiones y descarga contactos directamente",
                icon: Handshake,
              },
            ].map((step, idx) => {
              const Icon = step.icon;

              return (
                <div key={idx} className="relative">
                  <div className="glass-dark glass-dark-hover p-8 rounded-lg text-center h-full">
                    <div className="w-16 h-16 mb-5 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon
                        className="w-8 h-8 text-primary"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="text-4xl font-bold text-primary mb-4">
                      {step.number}
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>

                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              ¿Por Qué Elegir Qori ID?
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Sparkles,
                title: "Causa Primera Impresión",
                desc: "Un perfil premium genera confianza instantánea. Impresiona desde el primer contacto con diseño elegante y profesional.",
              },
              {
                icon: Repeat,
                title: "Nunca Pierdas Contactos",
                desc: "Comparte un link digital que siempre funciona. Adiós a tarjetas perdidas o emails olvidados. Tus datos siempre accesibles.",
              },
              {
                icon: Target,
                title: "Sé Recordado y Conecta",
                desc: "Destácate con un diseño único que refleja tu verdadera esencia. Crea conexiones duraderas basadas en tu profesionalismo.",
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={idx}
                  className="glass-dark glass-dark-hover p-8 rounded-lg flex gap-6 items-start"
                >
                  <div className="w-14 h-14 flex-shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.8} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="demo"
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="glass-dark glow-gold-lg p-12 rounded-2xl border border-primary/20">
            {/* Título */}
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-primary">
                Empieza Hoy
              </span>
            </h2>

            {/* Descripción */}
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Crea tu perfil Qori ID en menos de 5 minutos y comienza a
              compartir tu identidad digital premium con el mundo.
            </p>

            {/* Botón principal */}
            <button className="group px-10 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] inline-flex items-center gap-3 mb-6">
              Crear mi Qori ID
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Subtexto */}
            <p className="text-muted-foreground text-sm">
              No se requiere tarjeta de crédito · Gratis los primeros 30 días ·
              Cancela cuando quieras
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm">
          <p>
            © 2026 Qori ID. Todos los derechos reservados. Diseñado para
            profesionales que se destacan.
          </p>
        </div>
      </footer>
    </div>
  );
}
