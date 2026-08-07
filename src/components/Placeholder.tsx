import { PLACEHOLDER_IMAGE } from "@/content/portfolio";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
};

/**
 * Imagem editável com fallback para placeholder.
 * Sempre renderiza um <img>, para que o editor visual do Lovable
 * permita substituir a imagem sem tocar em código.
 * O arredondamento padrão é o mesmo em todo o site.
 */
export function EditableImage({ src, alt = "", className, width, height }: Props) {
  const source = src && src.length > 0 ? src : PLACEHOLDER_IMAGE;
  return (
    <img
      src={source}
      alt={alt}
      loading="lazy"
      width={width}
      height={height}
      className={cn("rounded-2xl", className)}
    />
  );
}

