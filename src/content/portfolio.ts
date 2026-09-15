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
  name: "JÚLIA ROCHA",
  tagline: "Branding • Criação • Comunicação",
  headline: "JÚLIA ROCHA",
  subheadline: "Uma seleção de projetos que vêm construindo a minha forma de pensar comunicação.",
  about: {
    eyebrow: "Sobre",
    title: "Júlia Rocha",
    banner: "" as ImageField, // banner horizontal editável
       body: [
      "É difícil me colocar em uma área só, e sinceramente, eu gosto disso!",
      "Publicidade acabou virando o lugar onde consigo juntar algumas das coisas que mais me interessam: criar, observar, pesquisar, organizar ideias e entender por que certas coisas fazem sentido para as pessoas. No meio disso, fui construindo experiência em branding, direção criativa, design, audiovisual e estratégia, de projetos acadêmicos a trabalhos desenvolvidos para marcas e clientes reais.",
      "Gosto especialmente da parte em que uma ideia ainda não está pronta. Pensar o conceito, encontrar a direção, testar possibilidades e transformar tudo isso em alguma coisa que funcione de verdade.",
      "Hoje, estudo Publicidade e Propaganda e sigo construindo meu repertório entre projetos, referências e muita curiosidade. Também comecei a levar essa vontade de criar para o conteúdo, compartilhando um pouco dos meus interesses, experiências, hobbies e, vez ou outra, alguma ideia que achei boa demais para ficar só na minha cabeça.",
      "Esse espaço reúne um pouco disso tudo.",
      "Quer conhecer um pouco mais do que faço? Vamos conversar!",
    ],
    // ÚNICO local para trocar o link do currículo:
    resumeUrl: "#" as LinkField,
    resumeLabel: "Currículo",
    // Logos das ferramentas — cada `logo` é editável/substituível.
    tools: [
      { name: "Adobe Photoshop", logo: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/adobephotoshop.svg" as ImageField },
      { name: "Adobe Illustrator", logo: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/adobeillustrator.svg" as ImageField },
      { name: "Adobe Premiere Pro", logo: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/adobepremierepro.svg" as ImageField },
      { name: "Canva", logo: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/canva.svg" as ImageField },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/figma.svg" as ImageField },
      { name: "CapCut", logo: "/logos/capcut.svg" as ImageField },
      { name: "Adobe Creative Cloud", logo: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/adobecreativecloud.svg" as ImageField },
      { name: "Claude", logo: "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/claude.svg" as ImageField },
      { name: "ChatGPT", logo: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/openai.svg" as ImageField },
      { name: "Microsoft Office", logo: "https://cdn.jsdelivr.net/npm/simple-icons@9/icons/microsoftoffice.svg" as ImageField },
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
  { slug: "branding",    number: "01", name: "Branding",    cover: "https://i.postimg.cc/ZYcyqKX5/EUNIA-BRANDING.png" },
  { slug: "audiovisual", number: "02", name: "Audiovisual", cover: "https://i.postimg.cc/1znj9dt5/watermarked-img-7930982687483462691.jpg" },
  { slug: "criacao",     number: "03", name: "Design & Conteúdo",     cover: "https://i.postimg.cc/3rGw0fsR/Whats-App-Image-2026-07-17-at-22-36-40.jpg" },
  { slug: "estrategia",  number: "04", name: "Estratégia",  cover: "https://i.postimg.cc/tC86KvLh/112d9922-4c98-4ecb-88d6-47568b1690b7.jpg" },
];

// ============================================================
//  LANDING 01 — BRANDING
// ============================================================

// Projeto usado tanto em "Construção de Marca" quanto em "Sistema de Marca".
// `href` é opcional: quando presente, a imagem do card vira um link clicável
// (abre em nova aba). Quando ausente, o card fica só decorativo.
export type BrandProject = {
  image: ImageField;
  name: string;
  description: string;
  href?: LinkField;
};

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
        image: "https://i.postimg.cc/MTf6rzpn/Eunianas.png",
        name: "EUNIA™",
        description:
          "Da agência experimental criada por estudantes de Publicidade à construção de uma marca de comunicação especializada em Geração Z. O processo passou por diagnóstico, posicionamento, território cultural, personalidade e sistema verbal, sustentando uma identidade pensada para deixar de ser projeto acadêmico e operar como empresa. O nome carrega a ideia de reunião: identidades, culturas e pessoas que se reconhecem umas nas outras. O amarelo reforça essa energia com otimismo, inteligência e um toque de urgência, quase um aviso para prestar atenção. O ícone de movimento contínuo lembra que identidade não é estática, ela vive em transformação.",
        href: "https://linktr.ee/agenciaeunia",
      },
      {
        image: "https://i.postimg.cc/9fMZ0wJG/Agen-PRO.png",
        name: "AgenPRO®",
        description:
          "Reposicionamento de uma agência de marketing digital, migrando de um discurso genérico para uma proposta voltada a negócios que querem crescer com propósito. O estudo de público mapeou diferentes perfis, do empresário em expansão ao head de marketing, sustentando um tom de voz humano, visionário e direto. O teal entra como cor de tecnologia e movimento, e o ícone circular ao lado do nome reforça a ideia de conexão contínua entre estratégia e execução.",
        href: "https://heyzine.com/flip-book/1439b4177b.html",
      },
    ] as BrandProject[],
  },
  visualIdentity: {
    title: "Sistema de Marca",
    projects: [
      {
        image: "https://i.postimg.cc/fRhhMxW8/BELA-SOLUCOES.png",
        name: "Bela Soluções®",
        description:
          "A letra “a” aberta rompe a rigidez do restante da marca, um gesto de atualização sem abrir mão da solidez que a empresa já tinha construído. O verde entra como ponte entre os materiais naturais do catálogo e a ideia de recomeço que costuma vir com uma reforma.",
        href: "https://i.postimg.cc/pVZWGc2x/BS.png",
      },
      {
        image: "https://i.postimg.cc/Ls9K121Y/DEMAQ.png",
        name: "Demaq",
        description:
          "A marca já existia, então o caminho foi de atualização, não de reinvenção. Vermelho e azul, herdados da identidade anterior, ganham mais vibração para equilibrar dois lados do negócio: a criatividade de quem costura e a precisão técnica de quem conserta a máquina.",
        href: "https://i.postimg.cc/Z5YVPRwv/DEMAQ.png",
      },
      {
        image: "https://i.postimg.cc/GpLwydy5/MIDWAY.png",
        name: "Midway Corretora",
        description:
          "O símbolo nasce da ideia de proteção que acompanha, não que domina: um leão de postura serena, não agressiva, para comunicar cuidado constante em vez de força. O nome integrado à estrutura, e não apenas ao lado dela, reforça que a marca é parte desse cuidado, não um selo aplicado por cima.",
        href: "https://heyzine.com/flip-book/84d0a12655.html",
      },
      {
        image: "https://i.postimg.cc/1zvx020n/DOURADO-3.png",
        name: "Donato Imóveis",
        description:
          "O cliente queria fugir do padrão visual das corretoras tradicionais sem virar algo complexo. A casa ocupando o “o” resolve isso com economia, um símbolo só, sem elementos soltos, pensado para funcionar igual em fachada, ícone de rede social ou favicon. O gradiente dourado entrega o toque de modernidade que ele pedia, sem depender de composição elaborada para se sustentar.",
      },
    ] as BrandProject[],
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
//  LANDING 03 — DESIGN & CONTEÚDO
// ============================================================
export const criacaoContent = {
  slug: "criacao" as const,
  number: "03",
  name: "Design & Conteúdo",
  intro:
    "Peças autorais, ensaios e projetos editoriais desenvolvidos ao longo da trajetória.",
  photobook: {
    title: "Narrativa Editorial",
    description:
      "Um recorte visual — série de imagens organizadas como um pequeno livro.",
    image: "https://postimg.cc/7bx4p9Y8" as ImageField,
    href: "https://online.fliphtml5.com/fxjcb/rine/#p=1" as LinkField,
  },
  editorial: {
    title: "Conteúdo para Redes",
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
