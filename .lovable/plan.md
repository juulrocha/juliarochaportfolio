# Portfólio pessoal — direção "Cobalt minimalist" com carrossel infinito

Vamos construir o portfólio na estética da opção 1 (minimalista + cobalto vibrante), substituindo a grade estática de 4 quadradinhos por um **carrossel infinito** de capas de categoria que passam automaticamente. Cada capa é clicável e abre a página da categoria correspondente.

## Estrutura de páginas

- `/` — Home single-page
  - Nav fixa no topo: logo à esquerda, "Sobre" e "Contato" à direita
  - Hero central: sua foto/retrato + nome + tagline curta
  - **Faixa de carrossel infinito** com as 4 capas (Branding, Audiovisual, Comunicação, Lab) rolando em loop contínuo; pausa no hover; cada card é clicável
  - Rodapé discreto com redes sociais
- `/branding`, `/audiovisual`, `/comunicacao`, `/lab` — página de cada frente
  - Cabeçalho com nome da categoria + descrição curta
  - Grade de projetos (card com capa, título, cliente/ano)
  - Botão "voltar" para a home
- `/sobre` — sua bio, foto, o que você faz
- `/contato` — e-mail, redes, formulário simples (ou apenas links)

Todas as páginas compartilham a nav fixa e o rodapé.

## Carrossel infinito — como funciona

- Faixa horizontal com os 4 cards duplicados em sequência (`[A B C D A B C D]`) para permitir loop visualmente contínuo
- Animação CSS `@keyframes` deslocando `translateX` de `0` até `-50%` em loop linear (~40s por volta)
- `hover` pausa a animação (`animation-play-state: paused`) para o usuário conseguir clicar com calma
- Cada card:
  - Aspecto quadrado, cantos arredondados
  - Imagem de capa em fundo
  - Overlay gradiente cobalto que intensifica no hover
  - Número (01–04) + nome da categoria no canto inferior
  - Cursor pointer, navega para a rota da categoria ao clicar

## Identidade visual

- Cor principal: **#004AAD** (cobalto), como único acento vibrante
- Base: branco / off-white, tipografia bold com tracking apertado (estilo Apple)
- Uma tag CSS `--color-cobalt` registrada nos tokens em `src/styles.css` para uso via `bg-cobalt`, `text-cobalt`, etc.
- Fonte: Inter (peso 300/400/600/800) carregada via `<link>` no `__root.tsx`

## Conteúdo editável

Todo o conteúdo (nome, tagline, textos do Sobre, projetos de cada categoria, contatos) fica em um único arquivo `src/content/portfolio.ts` como objeto TypeScript. Assim você edita nomes, adiciona/remove projetos e troca imagens sem precisar mexer nos componentes.

## Imagens

Geramos 5 imagens iniciais (1 retrato para o hero + 4 capas de categoria) no estilo minimalista com pinceladas de cobalto. Ficam em `src/assets/` e você pode trocá-las depois pelas suas fotos reais.

## Detalhes técnicos

- Rotas TanStack em `src/routes/`: `index.tsx`, `sobre.tsx`, `contato.tsx`, `branding.tsx`, `audiovisual.tsx`, `comunicacao.tsx`, `lab.tsx`
- Componentes reutilizáveis em `src/components/`: `SiteNav.tsx`, `SiteFooter.tsx`, `CategoryMarquee.tsx` (o carrossel), `CategoryPage.tsx` (template compartilhado das 4 páginas de categoria)
- Metadata `head()` própria em cada rota (title, description, og:title, og:description)
- Registro da cor cobalto em `@theme` no `src/styles.css`
- Animação do carrossel via `@keyframes marquee` em `src/styles.css`, sem dependência extra
- Atualiza `__root.tsx` para trocar o título placeholder "Lovable App" pelo seu nome

## O que você poderá editar depois sem código

- Nome, tagline e bio em `src/content/portfolio.ts`
- Lista de projetos por categoria (título, cliente, ano, imagem)
- Links de contato e redes sociais
- Trocar as imagens de capa colocando novos arquivos em `src/assets/`
