// ============================================================
//  CONTEÚDO EDITÁVEL DO PORTFÓLIO
//  Edite este arquivo para trocar textos, projetos e contatos.
//  Nenhum outro arquivo precisa ser alterado.
// ============================================================

import heroPortrait from "@/assets/hero-portrait.jpg";
import coverBranding from "@/assets/cover-branding.jpg";
import coverAudiovisual from "@/assets/cover-audiovisual.jpg";
import coverComunicacao from "@/assets/cover-comunicacao.jpg";
import coverLab from "@/assets/cover-lab.jpg";

export type CategorySlug = "branding" | "audiovisual" | "comunicacao" | "lab";

// "image" = projeto visual (mostra a imagem grande)
// "case"  = case escrito (só texto, sem imagem)
export type ProjectKind = "image" | "case";

export type Project = {
  kind: ProjectKind;
  title: string;
  client: string;
  year: string;
  /** Resumo curto, estilo jornal (2–4 linhas). */
  description: string;
  /** Usado apenas quando kind === "image". */
  image?: string;
  /** Opcional: destaque/resultado exibido em cases. */
  result?: string;
};

export type Category = {
  slug: CategorySlug;
  number: string;
  name: string;
  tagline: string;
  /** Texto de abertura da landing page da categoria. */
  intro: string;
  cover: string;
  projects: Project[];
};

// -------------------- DADOS GERAIS DO SITE --------------------
export const site = {
  name: "JÚLIA ROCHA",
  role: " ",
  tagline: "Branding • Criação • Comunicação",
  heroImage: heroPortrait,
  about: {
    title: "Sobre",
    body: [
      "Sou um profissional criativo com atuação em branding, audiovisual, comunicação e laboratório de experimentação visual.",
      "Trabalho na interseção entre estratégia e estética, criando identidades e narrativas que carregam personalidade — sem abrir mão de rigor e clareza.",
    ],
  },
  contact: {
    email: "ola@seudominio.com",
    location: "Brasil — atuando globalmente",
    socials: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Behance", href: "https://behance.net" },
    ],
  },
};

// -------------------- CATEGORIAS E PROJETOS --------------------
// Ordem = prioridade. O primeiro item aparece no topo da landing.
export const categories: Category[] = [
  {
    slug: "branding",
    number: "01",
    name: "Branding",
    tagline: "Identidades visuais que carregam intenção.",
    intro:
      "Posicionamento, identidade e direção para marcas que precisam comunicar intenção.",
    cover: coverBranding,
    projects: [
      {
        kind: "case",
        title: "CONSTRUÇÃO DE MARCA",
        client: "EUNIA COMUNICAÇÃO",
        year: "2025",
        description:
          "Reposicionamento de marca para uma startup de tecnologia. Definição de propósito, arquitetura verbal e sistema visual.",
        result: "+180% de reconhecimento espontâneo em 6 meses.",
      },
      {
        kind: "case",
        title: "IDENTIDADE VISUAL",
        client: "Cliente B",
        year: "2024",
        description:
          "Rebranding completo de um estúdio criativo consolidado. Nova identidade, tom de voz e diretrizes de aplicação.",
        result: "Prêmio de melhor rebrand independente do ano.",
      },
      {
        kind: "image",
        title: "Marca Ensaio",
        client: "Cliente C",
        year: "2023",
        description:
          "Identidade autoral para uma marca de moda experimental — tipografia condensada e paleta reduzida.",
        image: coverBranding,
      },
    ],
  },
  {
    slug: "audiovisual",
    number: "02",
    name: "Audiovisual",
    tagline: "Filmes, campanhas e narrativas em movimento.",
    intro:
      "Direção e produção de peças em vídeo — do conceito à finalização. Filmes de marca, campanhas e conteúdo editorial.",
    cover: coverAudiovisual,
    projects: [
      {
        kind: "image",
        title: "Curta Azul",
        client: "Cliente D",
        year: "2024",
        description:
          "Curta-metragem de 4 minutos explorando movimento e cor. Direção, roteiro e edição.",
        image: coverAudiovisual,
      },
      {
        kind: "image",
        title: "Campanha Verão",
        client: "Cliente E",
        year: "2024",
        description:
          "Série de 3 filmes para lançamento sazonal. Direção criativa e supervisão de pós-produção.",
        image: coverAudiovisual,
      },
      {
        kind: "image",
        title: "Documentário Rota",
        client: "Cliente F",
        year: "2023",
        description:
          "Documentário longa sobre trajetos urbanos. Direção e edição.",
        image: coverAudiovisual,
      },
    ],
  },
  {
    slug: "comunicacao",
    number: "03",
    name: "Comunicação",
    tagline: "Estratégia editorial e conteúdo com voz própria.",
    intro:
      "Consultoria editorial, arquitetura de conteúdo e materiais de comunicação para marcas que querem soar como gente.",
    cover: coverComunicacao,
    projects: [
      {
        kind: "image",
        title: "Editorial Índigo",
        client: "Cliente G",
        year: "2024",
        description:
          "Redesign completo do editorial digital. Nova grid, tipografia e fluxo de leitura.",
        image: coverComunicacao,
      },
      {
        kind: "case",
        title: "Relatório Anual",
        client: "Cliente H",
        year: "2023",
        description:
          "Concepção, redação e diagramação do relatório anual. Um objeto editorial que sintetiza um ano de operações.",
        result: "Distribuído para 12 mil stakeholders em três idiomas.",
      },
    ],
  },
  {
    slug: "lab",
    number: "04",
    name: "Lab",
    tagline: "Experimentos, colaborações e pesquisa visual.",
    intro:
      "Território livre — testes tipográficos, pôsteres autorais, colaborações e projetos que ainda estão virando algo.",
    cover: coverLab,
    projects: [
      {
        kind: "image",
        title: "Estudo Tinta",
        client: "Autoral",
        year: "2024",
        description:
          "Série de estudos em tinta sobre papel — exploração de gestos e densidade cromática.",
        image: coverLab,
      },
      {
        kind: "image",
        title: "Poster Series",
        client: "Autoral",
        year: "2023",
        description:
          "Coleção de dez pôsteres experimentais sobre linguagem, forma e ruído.",
        image: coverLab,
      },
    ],
  },
];

export const categoryBySlug = (slug: CategorySlug) =>
  categories.find((c) => c.slug === slug)!;
