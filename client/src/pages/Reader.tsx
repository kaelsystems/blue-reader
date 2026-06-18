import { useState } from "react";
import { Link } from "wouter";
import { ChevronLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import PDFViewer from "@/components/PDFViewer";

/**
 * Blue Reader - PDF Reader Page
 * Design: Modern Minimalist Premium
 */

export default function Reader() {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);

  const documents = [
    {
      id: 1,
      title: "Português",
      subtitle: "Língua e Literatura",
      year: "7º ano",
      path: "/portugues.pdf",
      color: "from-purple-600 to-pink-500",
    },
    {
      id: 2,
      title: "Ciências",
      subtitle: "Vida e Natureza",
      year: "7º ano",
      path: "/ciencias.pdf",
      color: "from-green-600 to-emerald-500",
    },
  ];

  if (selectedPDF) {
    const doc = documents.find((d) => d.path === selectedPDF);
    return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* HEADER */}
        <header className="border-b border-border bg-card p-4">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div>
                <h1 className="font-bold text-foreground">{doc?.title}</h1>
                <p className="text-sm text-muted-foreground">{doc?.subtitle}</p>
              </div>
            </div>
          </div>
        </header>

        {/* VIEWER */}
        <div className="flex-1 container py-6">
          <PDFViewer pdfPath={selectedPDF} title={doc?.title || "Documento"} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663759811217/AjGU6idPGYFjruxwmEbJKL/bluereader-logo-gwaDuPCUaKPwUweQRZxFCn.webp"
                alt="Blue Reader"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-foreground">Blue Reader</span>
            </div>
          </Link>
        </div>
      </header>

      {/* CONTENT */}
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Minha Biblioteca</h1>
          <p className="text-lg text-muted-foreground">
            Selecione um documento para começar a ler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc) => (
            <div
              key={doc.id}
              onClick={() => setSelectedPDF(doc.path)}
              className="group cursor-pointer"
            >
              <div
                className={`bg-gradient-to-br ${doc.color} rounded-xl h-64 mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                <BookOpen className="w-20 h-20 text-white/80 relative z-10" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition">
                  {doc.title}
                </h3>
                <p className="text-sm text-muted-foreground">{doc.subtitle}</p>
                <p className="text-xs text-muted-foreground font-medium">{doc.year}</p>
                <Button
                  className="w-full mt-4 bg-primary hover:bg-primary/90"
                  onClick={() => setSelectedPDF(doc.path)}
                >
                  Abrir Documento
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
