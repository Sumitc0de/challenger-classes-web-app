"use client";

import { useState, useCallback, useMemo } from "react";
import { getImageKitUrl, getSrcSet, getLqipUrl, getPdfUrl } from "@/utils/imagekit";
import { FALLBACK_PLACEHOLDER } from "@/utils/imagekit.config";

// ─── Types ──────────────────────────────────────────────────────────────────

export interface MediaAssetProps {
  /** Image path on ImageKit (e.g. "/gallery/photo.jpg") or local src */
  src: string;
  /** SEO-friendly alt text */
  alt: string;
  /** Asset type: "image" for images, "pdf" for PDF files */
  type?: "image" | "pdf";
  /**
   * If true  → src is an ImageKit CDN path, auto-applies transforms/srcset/LQIP
   * If false → src is a local path (from /public or external URL), rendered as-is
   */
  isCDN?: boolean;
  /** Intrinsic width in px */
  width?: number;
  /** Intrinsic height in px */
  height?: number;
  /** Additional CSS classes */
  className?: string;
  /** Responsive sizes attr (default: "100vw") */
  sizes?: string;
  /** Skip lazy loading for above-the-fold images */
  priority?: boolean;
  /** Fill parent container (object-fit: cover) */
  fill?: boolean;
  /** Override default CDN quality (default: 75) */
  quality?: number;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional inline styles */
  style?: React.CSSProperties;
  /** PDF: display title */
  title?: string;
  /** PDF: file size label */
  fileSize?: string;
}

// ─── IMAGE MODE ─────────────────────────────────────────────────────────────

function CDNImage({
  src, alt, width, height, className = "", sizes, priority, fill, quality, onClick, style,
}: MediaAssetProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const mainSrc = useMemo(() => {
    if (errored) return FALLBACK_PLACEHOLDER;
    return getImageKitUrl(src, { width: width ?? 800, quality });
  }, [src, errored, width, quality]);

  const srcSet = useMemo(() => {
    if (errored) return undefined;
    return getSrcSet(src, undefined, quality);
  }, [src, errored, quality]);

  const lqipSrc = useMemo(() => {
    if (errored) return undefined;
    return getLqipUrl(src);
  }, [src, errored]);

  const handleLoad = useCallback(() => setLoaded(true), []);
  const handleError = useCallback(() => { if (!errored) setErrored(true); }, [errored]);

  const wrapperCls = fill ? "relative w-full h-full" : "relative inline-block overflow-hidden";
  const imgCls = [
    "transition-opacity duration-500 ease-out",
    loaded ? "opacity-100" : "opacity-0",
    fill ? "absolute inset-0 w-full h-full object-cover" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div className={wrapperCls} style={fill ? undefined : { width: width ? `${width}px` : undefined, ...style }} onClick={onClick}>
      {/* Shimmer / LQIP placeholder */}
      {!loaded && !errored && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {lqipSrc && <img src={lqipSrc} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg" />}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
        </div>
      )}
      <img
        src={mainSrc} srcSet={srcSet} sizes={srcSet ? sizes : undefined}
        alt={alt} width={fill ? undefined : width} height={fill ? undefined : height}
        loading={priority ? "eager" : "lazy"} decoding={priority ? "sync" : "async"}
        onLoad={handleLoad} onError={handleError} className={imgCls}
        style={fill ? undefined : style}
      />
    </div>
  );
}

function LocalImage({
  src, alt, width, height, className = "", sizes, priority, fill, onClick, style,
}: MediaAssetProps) {
  const wrapperCls = fill ? "relative w-full h-full" : "relative inline-block overflow-hidden";
  const imgCls = [
    fill ? "absolute inset-0 w-full h-full object-cover" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div className={wrapperCls} style={fill ? undefined : { width: width ? `${width}px` : undefined, ...style }} onClick={onClick}>
      <img
        src={src} alt={alt} width={fill ? undefined : width} height={fill ? undefined : height}
        loading={priority ? "eager" : "lazy"} decoding="async" className={imgCls}
        sizes={sizes} style={fill ? undefined : style}
      />
    </div>
  );
}

// ─── PDF MODE ───────────────────────────────────────────────────────────────

function PDFAsset({ src, title, alt, fileSize, isCDN, className = "" }: MediaAssetProps) {
  const optimizedUrl = isCDN ? getPdfUrl(src) : src;

  return (
    <div className={`group bg-white rounded-2xl p-5 border-2 border-border hover:border-blue-600 hover:shadow-2xl hover:shadow-[#192F6B]/10 transition-all duration-500 flex flex-col ${className}`}>
      {/* PDF Icon Header */}
      <div className="w-full aspect-[3/1] rounded-xl mb-4 bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center gap-2 shadow-inner">
        <span className="text-4xl drop-shadow-lg">📄</span>
        {isCDN && (
          <span className="text-[8px] font-black text-white/80 uppercase tracking-widest px-2 py-0.5 bg-black/20 rounded-full backdrop-blur-sm">CDN</span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-base font-black text-primary uppercase leading-tight group-hover:text-[#192F6B] transition-colors tracking-tight mb-1">
        {title || alt}
      </h3>
      {fileSize && (
        <p className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-4">{fileSize}</p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 pt-4 border-t border-dashed border-border mt-auto">
        <a
          href={optimizedUrl} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 text-gray-600 text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-gray-200 transition-all active:scale-95"
        >
          View <span className="text-xs">↗</span>
        </a>
        <a
          href={optimizedUrl} download target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-[#192F6B] transition-all active:scale-95 shadow-md shadow-primary/20"
        >
          Download <span className="text-xs">⬇️</span>
        </a>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

/**
 * <MediaAsset /> — Unified component for images and PDFs.
 *
 * @example
 * // CDN image (ImageKit optimized)
 * <MediaAsset src="/gallery/event.jpg" alt="Event photo" isCDN />
 *
 * // Local image (from /public or external URL)
 * <MediaAsset src="/gallery/toppers/vinayak.png" alt="Topper" />
 *
 * // CDN PDF
 * <MediaAsset src="/books/pdfs/10th_maths.pdf" alt="Maths Book" type="pdf" isCDN title="10th Mathematics" fileSize="5.2 MB" />
 *
 * // Local PDF
 * <MediaAsset src="/docs/syllabus.pdf" alt="Syllabus" type="pdf" title="Syllabus 2025" />
 */
export default function MediaAsset(props: MediaAssetProps) {
  const { type = "image", isCDN = false } = props;

  if (type === "pdf") {
    return <PDFAsset {...props} />;
  }

  return isCDN ? <CDNImage {...props} /> : <LocalImage {...props} />;
}
