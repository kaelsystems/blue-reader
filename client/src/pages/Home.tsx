import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Zap, Shield, BarChart3, Users } from "lucide-react";
import { useState } from "react";

/**
 * BlueReader Pro - Home Page
 * Design: Modern Minimalist Premium
 * Color Scheme: Deep Professional Blue + Clean Whites
 * Typography: Plus Jakarta Sans (display) + Inter (body)
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const documents = [
    {
      id: 1,
      title: "Português",
      category: "Língua e Literatura",
      year: "6º ano",
      color: "from-purple-600 to-pink-500",
      progress: 35,
    },
    {
      id: 2,
      title: "Ciências",
      category: "Vida e Natureza",
      year: "6º ano",
      color: "from-green-600 to-emerald-500",
      progress: 42,
    },
    {
      id: 3,
      title: "História",
      category: "Sociedade e Cidadania",
      year: "6º ano",
      color: "from-orange-600 to-red-500",
      progress: 28,
    },
    {
      id: 4,
      title: "Matemática",
      category: "Ideias e Desafios",
      year: "6º ano",
      color: "from-blue-600 to-cyan-500",
      progress: 60,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Renderização Ultra-Rápida",
      description: "PDFs carregam instantaneamente com qualidade Retina e suporte a High DPI.",
    },
    {
      icon: BookOpen,
      title: "Controles Intuitivos",
      description: "Zoom, navegação e anotações otimizadas para uma experiência fluida.",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Seus documentos são protegidos com criptografia de ponta a ponta.",
    },
  ];

  const stats = [
    { number: "2.5M+", label: "Documentos Processados" },
    { number: "98%", label: "Satisfação de Usuários" },
    { number: "24/7", label: "Disponibilidade Garantida" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663759811217/AjGU6idPGYFjruxwmEbJKL/bluereader-logo-gwaDuPCUaKPwUweQRZxFCn.webp"
              alt="BlueReader Pro"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-foreground">BlueReader Pro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Recursos
            </a>
            <a href="#library" className="text-sm text-muted-foreground hover:text-foreground transition">
              Biblioteca
            </a>
            <a href="#stats" className="text-sm text-muted-foreground hover:text-foreground transition">
              Estatísticas
            </a>
            <Button className="bg-primary hover:bg-primary/90">Começar Agora</Button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663759811217/AjGU6idPGYFjruxwmEbJKL/hero-background-4Q4QMVWYBsEgfzNDTttPFS.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Leia com <span className="text-primary">Propósito</span>.<br />
                Organize com <span className="text-primary">Inteligência</span>.
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                BlueReader Pro é a plataforma premium para gerenciar sua biblioteca digital. Acesse documentos, livros e materiais de estudo através de uma interface elegante e de alta performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                  Explorar Biblioteca <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Saiba Mais
                </Button>
              </div>
            </div>
            <div className="hidden md:block animate-fade-in-down">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663759811217/AjGU6idPGYFjruxwmEbJKL/library-preview-A6bEVoAtyuUHyt5RQYqxkq.webp"
                alt="Library Interface"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Recursos Premium
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experiência de leitura de classe mundial com tecnologia de ponta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIBRARY SECTION */}
      <section id="library" className="py-20 md:py-32">
        <div className="container">
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sua Biblioteca Digital
            </h2>
            <p className="text-lg text-muted-foreground">
              Acesse todos os seus documentos em um único lugar, organizados e prontos para leitura.
            </p>
          </div>

          {/* TABS */}
          <div className="flex gap-2 mb-8 border-b border-border pb-4">
            {["all", "recent", "favorites"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "all" && "Todos"}
                {tab === "recent" && "Recentes"}
                {tab === "favorites" && "Favoritos"}
              </button>
            ))}
          </div>

          {/* DOCUMENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="group cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${doc.color} rounded-xl h-48 mb-4 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center`}
                >
                  <BookOpen className="w-16 h-16 text-white/80" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground">{doc.category}</p>
                  <p className="text-xs text-muted-foreground">{doc.year}</p>
                  <div className="w-full bg-border rounded-full h-1.5 mt-3">
                    <div
                      className="bg-primary h-1.5 rounded-full transition-all"
                      style={{ width: `${doc.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{doc.progress}% lido</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section id="stats" className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Junte-se a milhares de leitores que já transformaram sua experiência de aprendizado com BlueReader Pro.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
              Comece Sua Biblioteca <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Contato
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663759811217/AjGU6idPGYFjruxwmEbJKL/bluereader-logo-gwaDuPCUaKPwUweQRZxFCn.webp"
                  alt="BlueReader Pro"
                  className="h-6 w-6"
                />
                <span className="font-bold text-foreground">BlueReader Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A plataforma premium de leitura digital.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Recursos</a></li>
                <li><a href="#" className="hover:text-foreground transition">Preços</a></li>
                <li><a href="#" className="hover:text-foreground transition">Segurança</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Sobre</a></li>
                <li><a href="#" className="hover:text-foreground transition">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contato</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-foreground transition">Termos</a></li>
                <li><a href="#" className="hover:text-foreground transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 BlueReader Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
