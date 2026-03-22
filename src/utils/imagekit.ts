/**
 * ImageKit URL Utilities
 * Build optimized CDN URLs with transformation chains, srcsets, and LQIP.
 */

import {
  IMAGEKIT_BASE_URL,
  IK_DEFAULTS,
  IK_BREAKPOINTS,
  IK_LQIP,
  IK_PDF,
} from "./imagekit.config";

// ─── Types ──────────────────────────────────────────────────────────────────
export interface ImageTransform {
  width?: number;
  height?: number;
  quality?: number;
  format?: string;       // e.g. "f-auto", "f-webp", "f-avif"
  blur?: number;         // blur radius
  custom?: string;       // any raw transform string like "e-grayscale"
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Returns true if a URL is already an absolute URL (starts with http(s)).
 */
function isAbsoluteUrl(url: string): boolean {
  return /^https?:\/\//.test(url);
}

/**
 * Builds a transform query string from an ImageTransform object.
 * Example output: "tr=w-800,q-75,f-auto"
 */
function buildTransformString(t: ImageTransform): string {
  const parts: string[] = [];
  if (t.width) parts.push(`w-${t.width}`);
  if (t.height) parts.push(`h-${t.height}`);
  parts.push(`q-${t.quality ?? IK_DEFAULTS.quality}`);
  parts.push(t.format ?? IK_DEFAULTS.format);
  if (t.blur) parts.push(`bl-${t.blur}`);
  if (t.custom) parts.push(t.custom);
  return `tr=${parts.join(",")}`;
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Build a full ImageKit CDN URL for an image path.
 *
 * @param path    - Relative path on ImageKit (e.g. "/concepts/12th_rotational_concepts.png")
 *                  OR an already-absolute ImageKit URL.
 * @param transforms - Optional transform overrides.
 * @returns Fully-qualified CDN URL with transforms.
 *
 * @example
 *   getImageKitUrl("/concepts/photo.png")
 *   // => "https://ik.imagekit.io/akpxh7r76/concepts/photo.png?tr=w-800,q-75,f-auto"
 *
 *   getImageKitUrl("/concepts/photo.png", { width: 400, quality: 60 })
 *   // => "https://ik.imagekit.io/akpxh7r76/concepts/photo.png?tr=w-400,q-60,f-auto"
 */
export function getImageKitUrl(
  path: string,
  transforms?: Partial<ImageTransform>
): string {
  const tr: ImageTransform = {
    width: transforms?.width ?? IK_DEFAULTS.defaultWidth,
    quality: transforms?.quality ?? IK_DEFAULTS.quality,
    format: transforms?.format ?? IK_DEFAULTS.format,
    height: transforms?.height,
    blur: transforms?.blur,
    custom: transforms?.custom,
  };

  const base = isAbsoluteUrl(path)
    ? path.split("?")[0]                         // strip existing query params
    : `${IMAGEKIT_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

  return `${base}?${buildTransformString(tr)}`;
}

/**
 * Generate a responsive `srcset` string for an image path.
 *
 * @param path   - Relative ImageKit path.
 * @param widths - Array of widths (defaults to IK_BREAKPOINTS: 400, 800, 1200).
 * @returns srcset string ready for <img srcset="...">.
 *
 * @example
 *   getSrcSet("/gallery/photo.jpg")
 *   // => "https://...?tr=w-400,q-75,f-auto 400w, https://...?tr=w-800,q-75,f-auto 800w, ..."
 */
export function getSrcSet(
  path: string,
  widths: readonly number[] = IK_BREAKPOINTS,
  quality?: number
): string {
  return widths
    .map(w => `${getImageKitUrl(path, { width: w, quality })} ${w}w`)
    .join(", ");
}

/**
 * Get a tiny blurred placeholder (LQIP) URL for an image.
 * Intended for use as a CSS background while the real image loads.
 *
 * @param path - Relative ImageKit path.
 * @returns LQIP URL (~1-2 KB).
 */
export function getLqipUrl(path: string): string {
  return getImageKitUrl(path, {
    width: IK_LQIP.width,
    quality: IK_LQIP.quality,
    blur: IK_LQIP.blur,
  });
}

/**
 * Build an optimized PDF CDN URL.
 *
 * @param path - Relative path or full ImageKit URL to the PDF.
 * @returns URL with quality optimization applied.
 */
export function getPdfUrl(path: string): string {
  const base = isAbsoluteUrl(path)
    ? path.split("?")[0]
    : `${IMAGEKIT_BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;

  return `${base}?tr=q-${IK_PDF.quality}`;
}
