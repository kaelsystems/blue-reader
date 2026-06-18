# Blue Reader

Uma plataforma premium de leitura digital com design moderno e profissional. Acesse documentos, livros e materiais de estudo através de uma interface elegante e de alta performance.

## 🎨 Design & Visual

**Filosofia de Design**: Modern Minimalist Premium

- **Paleta de Cores**: Azul profundo (`oklch(0.45 0.15 260)`) + Brancos limpos
- **Tipografia**: Plus Jakarta Sans (títulos) + Inter (corpo)
- **Layout**: Assimétrico e elegante com espaçamento generoso
- **Animações**: Transições suaves e fluidas (300ms ease-out)

## ✨ Recursos

- **Renderização Ultra-Rápida**: PDFs carregam instantaneamente com qualidade Retina
- **Controles Intuitivos**: Zoom, navegação e anotações otimizadas
- **Segurança Total**: Documentos protegidos com criptografia
- **Interface Responsiva**: Funciona perfeitamente em todos os dispositivos

## 📚 Documentos Disponíveis

- **Português** (7º ano) - Língua e Literatura
- **Ciências** (7º ano) - Vida e Natureza

## 🚀 Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **PDF Viewer**: PDF.js 3.11.174
- **Roteamento**: Wouter
- **Build Tool**: Vite 7

## 📦 Instalação

```bash
# Clonar repositório
git clone https://github.com/kaelsystems/blue-reader.git
cd blue-reader

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev

# Build para produção
pnpm run build
```

## 🎯 Páginas

### Home (`/`)
Landing page com:
- Hero section impactante
- Seção de recursos premium
- Biblioteca digital preview
- Estatísticas
- Call-to-action

### Reader (`/reader`)
Leitor de PDF com:
- Seleção de documentos
- Visualizador interativo
- Controles de zoom
- Navegação de páginas
- Download de documentos

## 📁 Estrutura do Projeto

```
blue-reader-pro/
├── client/
│   ├── public/
│   │   ├── ciencias.pdf
│   │   └── portugues.pdf
│   ├── src/
│   │   ├── components/
│   │   │   ├── PDFViewer.tsx
│   │   │   └── ui/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   └── Reader.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
├── package.json
└── README.md
```

## 🎨 Customização

### Cores
Edite as variáveis CSS em `client/src/index.css`:

```css
:root {
  --primary: oklch(0.45 0.15 260);
  --background: oklch(0.99 0 0);
  --foreground: oklch(0.2 0.02 260);
  /* ... mais cores */
}
```

### Fontes
As fontes são carregadas do Google Fonts em `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

### Documentos
Adicione novos PDFs em `client/public/` e registre-os em `client/src/pages/Reader.tsx`:

```typescript
const documents = [
  {
    id: 3,
    title: "Novo Documento",
    subtitle: "Descrição",
    year: "7º ano",
    path: "/novo-documento.pdf",
    color: "from-blue-600 to-cyan-500",
  },
  // ...
];
```

## 🔧 Desenvolvimento

```bash
# Verificar tipos TypeScript
pnpm run check

# Formatar código
pnpm run format

# Preview de produção
pnpm run preview
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Hospedagem

O projeto está hospedado em:
- **Plataforma**: Manus
- **Domínio**: bluereader-ajgu6idp.manus.space
- **Tipo**: Autoscale (serverless)

## 📄 Licença

MIT

## 👨‍💻 Autor

Blue Reader Development Team

---

**Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS**
