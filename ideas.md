# BlueReader Pro — Design Strategy

## Abordagem de Design Escolhida: **Modern Minimalist Premium**

### Design Movement
**Contemporary Minimalism com Influências de Design Corporativo Europeu** — inspirado em plataformas como Notion, Figma e Apple. Foco em clareza, elegância e funcionalidade.

### Core Principles
1. **Claridade Radical**: Cada elemento tem propósito. Sem decoração desnecessária.
2. **Hierarquia Tipográfica Forte**: Contraste claro entre títulos, subtítulos e corpo de texto.
3. **Espaçamento Generoso**: Whitespace como ferramenta de design, não como vazio.
4. **Profundidade Sutil**: Sombras suaves e transições fluidas criam dimensão sem ruído visual.

### Color Philosophy
- **Primária**: Azul profundo (`oklch(0.45 0.15 260)` - azul corporativo confiável)
- **Secundária**: Cinza neutro (`oklch(0.95 0.002 0)` - fundo limpo)
- **Acentos**: Azul claro (`oklch(0.7 0.12 260)` - CTA e interações)
- **Texto**: Cinza escuro (`oklch(0.2 0.02 260)` - legibilidade máxima)

**Intenção Emocional**: Profissionalismo, confiança, sofisticação. Sensação de plataforma premium sem ser pretenciosa.

### Layout Paradigm
- **Hero Section**: Assimétrico com conteúdo à esquerda, elemento visual à direita
- **Seções Alternadas**: Conteúdo + Imagem intercalados para ritmo visual
- **Grid Flexível**: 3 colunas em desktop, 1 em mobile, com gaps generosos
- **Navegação Fixa**: Header minimalista que evolui ao scroll

### Signature Elements
1. **Cartões com Sombra Elevada**: Profundidade através de sombras suaves (não bordas)
2. **Ícones Customizados**: Símbolos geométricos simples em azul primário
3. **Tipografia em Camadas**: Fonte display para títulos (Geist/Plus Jakarta Sans), sans-serif para corpo

### Interaction Philosophy
- **Hover States Sutis**: Elevação de cartões, mudança de cor suave
- **Transições Fluidas**: 300ms ease-out para todas as animações
- **Feedback Imediato**: Botões respondem instantaneamente ao clique
- **Micro-interações**: Ícones animados, carregamento elegante

### Animation Guidelines
- Entrada de elementos: `fadeInUp` com stagger de 80ms
- Hover em cards: `translateY(-4px)` com sombra aumentada
- Transições de página: suave, não disruptiva
- Respeitar `prefers-reduced-motion`

### Typography System
- **Display Font**: "Geist" (ou "Plus Jakarta Sans" como fallback) — bold, 2.5rem-5rem
- **Heading Font**: "Geist" medium — 1.5rem-2.5rem
- **Body Font**: "Inter" regular — 1rem
- **Accent Font**: "Geist" semibold para CTAs

### Brand Essence
**Uma plataforma premium de leitura digital que transforma documentos em experiências elegantes.**
- Profissional
- Sofisticado
- Intuitivo

### Brand Voice
- **Headlines**: Diretos, inspiradores, sem clichês. Ex: "Leia com Propósito. Organize com Inteligência."
- **CTAs**: Ação clara e confiante. Ex: "Comece Sua Biblioteca" (não "Get Started")
- **Microcopy**: Tom conversacional mas profissional. Ex: "Nenhum documento carregado ainda" (não "No data")

### Wordmark & Logo
- **Símbolo**: Livro aberto com linhas de leitura — geométrico, azul primário
- **Tipografia**: "BlueReader" em Geist Bold, azul escuro
- **Variação**: Símbolo isolado para favicon e header

### Signature Brand Color
**Azul Profundo** (`oklch(0.45 0.15 260)`) — cor que evoca confiança, inteligência e sofisticação. Imediatamente reconhecível.

---

## Estrutura de Páginas

### Home (Landing)
- Hero com CTA principal
- Seção de Recursos (3 colunas)
- Seção de Estatísticas
- Seção de Biblioteca Preview
- CTA Final
- Footer

### Biblioteca (Reader)
- Sidebar com lista de documentos
- Visualizador de PDF em destaque
- Controles de zoom e navegação
- Metadados do documento

---

## Decisões Técnicas
- **Framework**: React 19 + Tailwind 4
- **PDF Viewer**: PDF.js (mantido do original)
- **Componentes**: shadcn/ui para consistência
- **Animações**: Tailwind + CSS transitions
- **Tipografia**: Google Fonts (Geist + Inter)
