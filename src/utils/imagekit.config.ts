/**
 * ImageKit CDN Configuration
 * Centralized config for all ImageKit-related constants and defaults.
 */

// ─── Base Endpoint ──────────────────────────────────────────────────────────
export const IMAGEKIT_BASE_URL = "https://ik.imagekit.io/akpxh7r76";

// ─── Folder Paths on ImageKit ───────────────────────────────────────────────
export const IK_FOLDERS = {
  concepts: "concepts",
  notes: "notes",
  books: "books/pdfs",
  gallery: "gallery",
  toppers: "gallery/toppers",
  events: "gallery/events",
} as const;

// ─── Default Transform Values ───────────────────────────────────────────────
export const IK_DEFAULTS = {
  quality: 75,
  format: "f-auto",           // auto-negotiates AVIF/WebP
  defaultWidth: 800,
} as const;

// ─── Responsive Breakpoints (px) ────────────────────────────────────────────
export const IK_BREAKPOINTS = [400, 800, 1200] as const;

// ─── LQIP (Low Quality Image Placeholder) Params ────────────────────────────
export const IK_LQIP = {
  width: 50,
  quality: 10,
  blur: 30,
} as const;

// ─── PDF Defaults ───────────────────────────────────────────────────────────
export const IK_PDF = {
  quality: 80,
} as const;

// ─── Fallback placeholder (used when CDN image fails) ───────────────────────
export const FALLBACK_PLACEHOLDER = "/gallery/placeholder.svg";
