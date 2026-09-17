import { useEffect, useRef, useState } from "react";
import { CategoryLayout, BlockTitle } from "@/components/CategoryLayout";
import { EditableImage } from "@/components/Placeholder";
import { audiovisualContent } from "@/content/portfolio";

/**
 * Landing 02 — Audiovisual
 * Curtas em grade tipo YouTube + Pilha expansível de vídeos para redes.
 *
 * Miniaturas automáticas:
 * - YouTube: gerada direto pela URL do vídeo.
 * - TikTok: buscada via oEmbed público do TikTok (pode falhar às vezes).
 * - Instagram: NÃO é possível puxar automaticamente (Meta bloqueou esse
 *   acesso público) — preencher `thumbnail` manualmente no portfolio.ts.
 * Se `thumbnail` já vier preenchido no conteúdo, ele sempre tem prioridade.
 *
 * Reprodução ao clicar:
 * - YouTube: toca automaticamente mudo, com um botão de som visível para
 *   ativar o áudio sem recarregar o vídeo (via postMessage do player).
 * - TikTok: tenta autoplay; o próprio player do TikTok controla o som.
 * - Instagram: não permite autoplay nem controle de som via iframe — a
 *   pessoa precisa clicar dentro do card do Instagram para iniciar,
 *   sempre com som. Essa é uma restrição da própria plataforma.
 */

// -------------------- Helpers de embed --------------------

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

function getYouTubeEmbedUrl(url: string): string | null {
  const id = getYouTubeId(url);
  return id
    ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&enablejsapi=1&rel=0`
    : null;
}

function getInstagramEmbedUrl(url: string): string | null {
  const match = url.match(/instagram\.com\/(p|reel|tv)\/([a-zA-Z0-9_-]+)/);
  return match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed` : null;
}

function getTikTokEmbedUrl(url: string): string | null {
  const match = url.match(/tiktok\.com\/.+\/video\/(\d+)/);
  return match ? `https://www.tiktok.com/embed/v2/${match[1]}?autoplay=1` : null;
}

function isYouTubeUrl(href: string, platform?: string) {
  return (platform || "").toLowerCase() === "youtube" || href.includes("youtu");
}

function getEmbedUrl(href: string, platform?: string): string | null {
  if (!href) return null;
  const p = (platform || "").toLowerCase();
  if (p === "youtube" || href.includes("youtu")) return getYouTubeEmbedUrl(href);
  if (p === "instagram" || href.includes("instagram.com")) return getInstagramEmbedUrl(href);
  if (p === "tiktok" || href.includes("tiktok.com")) return getTikTokEmbedUrl(href);
  return null;
}

/** Busca a thumbnail de um vídeo do TikTok via oEmbed público. */
function useTikTokThumbnail(url: string, enabled: boolean): string | null {
  const [thumb, setThumb] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !url) return;
    let cancelled = false;

    fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data?.thumbnail_url) setThumb(data.thumbnail_url);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [url, enabled]);

  return thumb;
}

function useResolvedThumbnail(manualThumbnail: string, href: string, platform: string): string {
  const p = (platform || "").toLowerCase();
  const isTikTok = p === "tiktok" || href.includes("tiktok.com");
  const tiktokThumb = useTikTokThumbnail(href, isTikTok && !manualThumbnail);

  if (manualThumbnail) return manualThumbnail;
  if (p === "youtube" || href.includes("youtu")) return getYouTubeThumbnail(href) || "";
  if (isTikTok) return tiktokThumb || "";
  return "";
}

function PlayIcon() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
      <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 text-black sm:h-6 sm:w-6" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function SoundButton({ muted, onClick }: { muted: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={muted ? "Ativar som" : "Silenciar"}
      className="absolute bottom-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/75"
    >
      {muted ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23 9l-6 6M17 9l6 6" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}

export function AudiovisualLanding() {
  const c = audiovisualContent;
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <CategoryLayout number={c.number} name={c.name} intro={c.intro}>
      {/* Bloco 1 — Curtas */}
      <section className="border-t border-black/10 pt-16 md:pt-24">
        <BlockTitle>{c.shorts.title}</BlockTitle>
        <p className="mb-10 max-w-2xl font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/60">
          {c.shorts.description}
        </p>

        <ShortsGrid items={c.shorts.items} />
      </section>

      {/* Bloco 2 — Vídeos para Redes (pilha expansível) */}
      <section className="mt-24 border-t border-black/10 pt-16 md:mt-32 md:pt-24">
        <BlockTitle>{c.socialVideos.title}</BlockTitle>
        {/* Só mostra "clique para expandir" enquanto a pilha está fechada */}
        {!socialOpen && (
          <p className="mb-10 max-w-2xl font-[family-name:var(--font-editorial)] text-sm leading-relaxed text-black/60">
            {c.socialVideos.description}
          </p>
        )}
        <SocialStack items={c.socialVideos.items} open={socialOpen} setOpen={setSocialOpen} />
      </section>
    </CategoryLayout>
  );
}

// -------------------- Curtas --------------------

type ShortItem = {
  thumbnail: string;
  name: string;
  description: string;
  href: string;
};

function ShortCard({ v }: { v: ShortItem }) {
  const [playing, setPlaying] = useState(false);
  const resolvedThumb = useResolvedThumbnail(v.thumbnail, v.href, "YouTube");
  const embedUrl = playing ? getEmbedUrl(v.href, "YouTube") : null;

  return (
    <div className="group block">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/5">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            className="absolute inset-0 h-full w-full rounded-2xl"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            title={v.name}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Reproduzir ${v.name}`}
            className="absolute inset-0 h-full w-full"
          >
            <EditableImage
              src={resolvedThumb}
              alt={v.name}
              className="h-full w-full rounded-2xl object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>

      <h3 className="mt-3 font-[family-name:var(--font-display)] text-xs uppercase leading-tight tracking-tight transition-colors group-hover:text-[color:var(--cobalt)] sm:text-base">
        {v.name}
      </h3>
      <p className="mt-1 font-[family-name:var(--font-editorial)] text-[11px] leading-snug text-black/60 sm:text-sm sm:leading-relaxed">
        {v.description}
      </p>
    </div>
  );
}

function ShortsGrid({ items }: { items: ShortItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12">
      {items.map((v, i) => (
        <ShortCard key={i} v={v} />
      ))}
    </div>
  );
}

// -------------------- Vídeos para Redes --------------------

type SocialItem = {
  thumbnail: string;
  username: string;
  platform: string;
  ano?: string;
  href: string;
};

function SocialPreviewThumb({ v }: { v: SocialItem }) {
  const resolvedThumb = useResolvedThumbnail(v.thumbnail, v.href, v.platform);
  return (
    <EditableImage
      src={resolvedThumb}
      alt={v.username}
      className="h-full w-full rounded-2xl object-cover"
    />
  );
}

function SocialCard({ v }: { v: SocialItem }) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const resolvedThumb = useResolvedThumbnail(v.thumbnail, v.href, v.platform);
  const embedUrl = playing ? getEmbedUrl(v.href, v.platform) : null;
  const isYouTube = isYouTubeUrl(v.href, v.platform);

  const toggleSound = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(
      JSON.stringify({ event: "command", func: muted ? "unMute" : "mute", args: "" }),
      "*"
    );
    setMuted(!muted);
  };

  return (
    <div className="group block">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-xl">
        {embedUrl ? (
          <>
            <iframe
              ref={iframeRef}
              src={embedUrl}
              className="absolute inset-0 h-full w-full rounded-2xl"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title={v.username}
            />
            {isYouTube && <SoundButton muted={muted} onClick={toggleSound} />}
          </>
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Reproduzir vídeo de ${v.username}`}
            className="absolute inset-0 h-full w-full"
          >
            <EditableImage
              src={resolvedThumb}
              alt={v.username}
              className="h-full w-full rounded-2xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
      <div className="mt-3">
        <div className="font-[family-name:var(--font-display)] text-xs uppercase leading-tight tracking-tight transition-colors group-hover:text-[color:var(--cobalt)] sm:text-sm">
          {v.username}
        </div>
        <div className="mt-0.5 text-[10px] uppercase tracking-widest text-black/50 sm:text-xs">
          {v.platform}
          {v.ano ? ` · ${v.ano}` : ""}
        </div>
      </div>
    </div>
  );
}

function SocialStack({
  items,
  open,
  setOpen,
}: {
  items: SocialItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Expandir vídeos"
        className="group relative mx-auto block h-[420px] w-full max-w-sm sm:h-[450px]"
      >
        {items.slice(0, 4).map((v, i) => {
          const offset = i * 10;
          const rot = (i - 1.5) * 3;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-0 aspect-[9/16] w-[200px] -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 transition-all duration-700 ease-out group-hover:shadow-2xl sm:w-[220px]"
              style={{
                transform: `translate(-50%, ${offset}px) rotate(${rot}deg)`,
                zIndex: items.length - i,
              }}
            >
              <SocialPreviewThumb v={v} />
            </div>
          );
        })}
        <span className="absolute bottom-0 left-0 w-full text-center text-xs uppercase tracking-widest text-[color:var(--cobalt)]">
          Clique para expandir
        </span>
      </button>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        {items.map((v, i) => (
          <div
            key={i}
            className="animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-500 ease-out"
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: "backwards" }}
          >
            <SocialCard v={v} />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-xs uppercase tracking-widest text-black/60 transition-colors hover:text-[color:var(--cobalt)]"
        >
          — Recolher —
        </button>
      </div>
    </div>
  );
}
