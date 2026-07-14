import heroPortrait from "@/assets/hero-portrait.jpg";
import coverBranding from "@/assets/cover-branding.jpg";
import coverAudiovisual from "@/assets/cover-audiovisual.jpg";
import coverComunicacao from "@/assets/cover-comunicacao.jpg";
import coverLab from "@/assets/cover-lab.jpg";

export type CategorySlug = "branding" | "audiovisual" | "comunicacao" | "lab";

export type Project = {
  title: string;
  client: string;
  year: string;
  image: string;
  description?: string;
};

export type Category = {
  slug: CategorySlug;
  number: string;
  name: string;
  tagline: string;
  cover: string;
  projects: Project[];
};

export const site = {
  name: "Seu Nome",
  role: "Direção Criativa & Estratégia",
  tagline: "Branding, audiovisual e comunicação com uma estética vibrante e minimalista.",
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

export const categories: Category[] = [
  {
    slug: "branding",
    number: "01",
    name: "Branding",
    tagline: "Identidades visuais que carregam intenção.",
    cover: coverBranding,
    projects: [
      { title: "Projeto Cobalto", client: "Cliente A", year: "2024", image: coverBranding },
      { title: "Estúdio Norte", client: "Cliente B", year: "2024", image: coverBranding },
      { title: "Marca Ensaio", client: "Cliente C", year: "2023", image: coverBranding },
    ],
  },
  {
    slug: "audiovisual",
    number: "02",
    name: "Audiovisual",
    tagline: "Filmes, campanhas e narrativas em movimento.",
    cover: coverAudiovisual,
    projects: [
      { title: "Curta Azul", client: "Cliente D", year: "2024", image: coverAudiovisual },
      { title: "Campanha Verão", client: "Cliente E", year: "2024", image: coverAudiovisual },
      { title: "Documentário Rota", client: "Cliente F", year: "2023", image: coverAudiovisual },
    ],
  },
  {
    slug: "comunicacao",
    number: "03",
    name: "Comunicação",
    tagline: "Estratégia editorial e conteúdo com voz própria.",
    cover: coverComunicacao,
    projects: [
      { title: "Editorial Índigo", client: "Cliente G", year: "2024", image: coverComunicacao },
      { title: "Relatório Anual", client: "Cliente H", year: "2023", image: coverComunicacao },
    ],
  },
  {
    slug: "lab",
    number: "04",
    name: "Lab",
    tagline: "Experimentos, colaborações e pesquisa visual.",
    cover: coverLab,
    projects: [
      { title: "Estudo Tinta", client: "Autoral", year: "2024", image: coverLab },
      { title: "Poster Series", client: "Autoral", year: "2023", image: coverLab },
    ],
  },
];

export const categoryBySlug = (slug: CategorySlug) =>
  categories.find((c) => c.slug === slug)!;
