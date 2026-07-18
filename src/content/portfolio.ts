// ============================================================
//  CONTEÚDO EDITÁVEL DO PORTFÓLIO
//  Todos os textos, links e imagens abaixo são editáveis.
//  Deixe `image: ""` (string vazia) para que apareça o placeholder
//  padrão — é possível trocar a imagem depois clicando no
//  placeholder pelo editor visual do Lovable.
// ============================================================

export const PLACEHOLDER_IMAGE = "/placeholder.svg";

export type ImageField = string; // caminho da imagem ou "" para placeholder
export type LinkField = string;  // URL absoluta

// -------------------- DADOS GERAIS DO SITE --------------------
export const site = {
  name: "JÚLIA 
    ROCHA",
  tagline: "Branding • Criação • Comunicação",
  headline: "JÚLIA ROCHA",
  subheadline: "Uma seleção de projetos que vêm construindo minha forma de pensar comunicação.",
  about: {
    eyebrow: "Sobre",
    title: "Júlia Rocha",
    banner: "" as ImageField, // banner horizontal editável
    body: [
      "Escreva aqui um parágrafo curto sobre você teste — sua trajetória, formação e áreas de interesse.",
      "Um segundo parágrafo pode aprofundar sua forma de pensar, referências e como você organiza os projetos.",
    ],
  },
  contact: {
    email: "ajuulrocha@email.com",
    location: "Diadema • São Paulo • Brasil",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/juulrocha?igsh=ZDVpZHFsdG9kZnl5&utm_source=qr" as LinkField },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ajuliarocha" as LinkField },
      { label: "Behance", href: "https://www.behance.net/juliarocha71" as LinkField },
      { label: "TikTok", href: "https://www.tiktok.com/@juulrocha?_r=1&_t=zs-94dnpjvznu4" as LinkField },
      { label: "YouTube", href: "https://youtube.com/@juulrocha?si=P3-l4MZSakzF6imQ" as LinkField },
    ],
  },
};

// -------------------- RESUMO DAS CATEGORIAS (usado no carrossel da home) --------------------
export type CategorySlug = "branding" | "audiovisual" | "criacao" | "estrategia";

export type CategorySummary = {
  slug: CategorySlug;
  number: string;
  name: string;
  cover: ImageField;
};

export const categories: CategorySummary[] = [
  { slug: "branding",    number: "01", name: "Branding",    cover: "" },
  { slug: "audiovisual", number: "02", name: "Audiovisual", cover: "" },
  { slug: "criacao",     number: "03", name: "Criação",     cover: "https://i.postimg.cc/3rGw0fsR/Whats-App-Image-2026-07-17-at-22-36-40.jpg" },
  { slug: "estrategia",  number: "04", name: "Estratégia",  cover: "" },
];

// ============================================================
//  LANDING 01 — BRANDING
// ============================================================
export const brandingContent = {
  slug: "branding" as const,
  number: "01",
  name: "Branding",
  intro:
    "Posicionamento, identidade e direção para marcas que precisam comunicar intenção.",
  brandBuild: {
    title: "Construção de Marca",
    projects: [
      {
        image: "" as ImageField,
        name: "Projeto 01",
        description:
          "Descrição curta do projeto — contexto, o que foi feito e o papel do seu trabalho.",
      },
      {
        image: "" as ImageField,
        name: "Projeto 02",
        description:
          "Descrição curta do projeto — contexto, o que foi feito e o papel do seu trabalho.",
      },
    ],
  },
  visualIdentity: {
    title: "Sistema de Marca",
    projects: [
      { image: "" as ImageField, name: "Projeto 01", description: "Pequena descrição." },
      { image: "" as ImageField, name: "Projeto 02", description: "Pequena descrição." },
      { image: "" as ImageField, name: "Projeto 03", description: "Pequena descrição." },
      { image: "" as ImageField, name: "Projeto 04", description: "Pequena descrição." },
    ],
  },
};

// ============================================================
//  LANDING 02 — AUDIOVISUAL
// ============================================================
export const audiovisualContent = {
  slug: "audiovisual" as const,
  number: "02",
  name: "Audiovisual",
  intro:
    "Curtas, filmes e vídeos para redes — direção e execução com atenção ao ritmo e à imagem.",
  shorts: {
    title: "Curtas",
    description:
      "Filmes curtos autorais e colaborativos. Clique na miniatura para assistir.",
    items: [
      {
        thumbnail: "" as ImageField,
        name: "Curta 01",
        description: "Pequena descrição.",
        href: "https://youtube.com" as LinkField,
      },
      {
        thumbnail: "" as ImageField,
        name: "Curta 02",
        description: "Pequena descrição.",
        href: "https://youtube.com" as LinkField,
      },
      {
        thumbnail: "" as ImageField,
        name: "Curta 03",
        description: "Pequena descrição.",
        href: "https://youtube.com" as LinkField,
      },
    ],
  },
  socialVideos: {
    title: "Vídeos para Redes",
    description:
      "Uma pilha de vídeos feitos para redes sociais. Clique para expandir.",
    items: [
      { thumbnail: "" as ImageField, username: "@usuario", platform: "Instagram", href: "https://instagram.com" as LinkField },
      { thumbnail: "" as ImageField, username: "@usuario", platform: "TikTok",    href: "https://tiktok.com"    as LinkField },
      { thumbnail: "" as ImageField, username: "@usuario", platform: "Instagram", href: "https://instagram.com" as LinkField },
      { thumbnail: "" as ImageField, username: "@usuario", platform: "YouTube",   href: "https://youtube.com"   as LinkField },
      { thumbnail: "" as ImageField, username: "@usuario", platform: "TikTok",    href: "https://tiktok.com"    as LinkField },
      { thumbnail: "" as ImageField, username: "@usuario", platform: "Instagram", href: "https://instagram.com" as LinkField },
    ],
  },
};

// ============================================================
//  LANDING 03 — CRIAÇÃO
// ============================================================
export const criacaoContent = {
  slug: "criacao" as const,
  number: "03",
  name: "Criação",
  intro:
    "Peças autorais, ensaios e projetos editoriais desenvolvidos ao longo da trajetória.",
  photobook: {
    title: "Photobook",
    description:
      "Um recorte visual — série de imagens organizadas como um pequeno livro.",
    image: "" as ImageField,
    href: "https://issuu.com" as LinkField,
  },
  editorial: {
    title: "Projetos Editoriais",
    projects: [
      { image: "" as ImageField, name: "Projeto 01", description: "Pequena descrição." },
      { image: "" as ImageField, name: "Projeto 02", description: "Pequena descrição." },
      { image: "" as ImageField, name: "Projeto 03", description: "Pequena descrição." },
      { image: "" as ImageField, name: "Projeto 04", description: "Pequena descrição." },
    ],
  },
};

// ============================================================
//  LANDING 04 — ESTRATÉGIA
// ============================================================
export type StrategyCase = {
  title: string;
  blocks: {
    contexto: string;
    objetivo: string;
    diagnostico: string;
    direcionamento: string;
    solucao: string;
    impacto: string;
  };
};

const emptyCase = (title: string): StrategyCase => ({
  title,
  blocks: {
    contexto: "Descreva aqui o contexto do case.",
    objetivo: "Descreva aqui o objetivo do projeto.",
    diagnostico: "Descreva aqui o diagnóstico.",
    direcionamento: "Descreva aqui o direcionamento estratégico.",
    solucao: "Descreva aqui a solução aplicada.",
    impacto: "Descreva aqui o impacto ou resultado.",
  },
});

export const estrategiaContent = {
  slug: "estrategia" as const,
  number: "04",
  name: "Estratégia",
  intro:
    "Estudos de caso — o processo por trás das decisões. Contexto, diagnóstico, solução e impacto.",
  cases: [
    emptyCase("Case 01"),
    emptyCase("Case 02"),
    emptyCase("Case 03"),
  ],
};
