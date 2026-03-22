# Asset Uploads and Management Guide

This document explains the hybrid approach to image/PDF management in the Challenger Classes website.

---

## Architecture: Hybrid Local + CDN

```
Small assets (icons, logos):  Local → /src/assets/ (webpack imports)
Page images (concepts, formulas): Local → /src/assets/ (webpack imports via Next.js Image)
Gallery/public images:         Local → /public/gallery/ (plain img tags)
Heavy PDFs (books):            CDN  → ImageKit (https://ik.imagekit.io/akpxh7r76/)
Future heavy images:           CDN  → ImageKit (via <MediaAsset isCDN />)
```

**Rule of thumb:** Only upload *important, heavy, frequently-accessed* files to ImageKit. Keep everything else local.

---

## When to Use ImageKit CDN

| Upload to ImageKit ✅ | Keep Local ❌ |
|---|---|
| Large PDFs (textbooks, notes) | Small icons & logos (use SVG) |
| High-traffic gallery photos | UI placeholders |
| Heavy concept/formula images (if needed) | Low-traffic decorative images |

---

## Component: `<MediaAsset />`

A single reusable component for both images and PDFs, both local and CDN.

**Location:** `src/components/MediaAsset.tsx`

### Image Examples

```tsx
import MediaAsset from "@/components/MediaAsset";

// 1. CDN image (ImageKit optimized — auto format, srcset, blur placeholder)
<MediaAsset src="/gallery/event.jpg" alt="Event photo" isCDN />

// 2. Local image (from /public — no CDN transforms, plain img)
<MediaAsset src="/gallery/toppers/vinayak.png" alt="Topper" />

// 3. CDN image with custom quality & fill mode
<MediaAsset src="/gallery/hero.jpg" alt="Hero" isCDN fill quality={85} priority />
```

### PDF Examples

```tsx
// CDN PDF (with ?tr=q-80 optimization)
<MediaAsset
  src="https://ik.imagekit.io/akpxh7r76/books/pdfs/10th_maths_1.pdf"
  alt="Maths Book"
  type="pdf"
  isCDN
  title="10th Mathematics Part I"
  fileSize="5.2 MB"
/>

// Local PDF
<MediaAsset src="/docs/syllabus.pdf" alt="Syllabus" type="pdf" title="Syllabus 2025" />
```

### Props Reference

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | string | — | Image/PDF path (CDN path or local URL) |
| `alt` | string | — | SEO alt text |
| `type` | "image" \| "pdf" | "image" | Asset type |
| `isCDN` | boolean | false | Use ImageKit CDN transforms |
| `width` / `height` | number | — | Intrinsic dimensions |
| `className` | string | "" | CSS classes |
| `fill` | boolean | false | Fill parent container |
| `priority` | boolean | false | Eager load (above-the-fold) |
| `quality` | number | 75 | CDN quality override |
| `title` | string | — | PDF display title |
| `fileSize` | string | — | PDF size label |

---

## Utility Functions

In `src/utils/imagekit.ts`:

| Function | Description |
|---|---|
| `getImageKitUrl(path, transforms?)` | CDN URL with `?tr=w-800,q-75,f-auto` |
| `getSrcSet(path, widths?)` | Responsive srcset (400w, 800w, 1200w) |
| `getLqipUrl(path)` | Tiny blurred placeholder (`w-50,q-10,bl-30`) |
| `getPdfUrl(path)` | PDF URL with `?tr=q-80` |

---

## Current Page → Asset Mapping

| Page | Asset Source | Method |
|---|---|---|
| `/concepts` | `src/assets/concepts/*.png` | Local webpack imports + Next.js `<Image>` |
| `/formulas` | `src/assets/notes/*.png` | Local webpack imports + Next.js `<Image>` |
| `/books` | ImageKit CDN PDFs | Direct `<a>` links to `ik.imagekit.io` |
| `/gallery` | `/public/gallery/` + Unsplash | Plain `<img>` tags |

### To migrate a page to CDN:
1. Upload the assets to ImageKit under the right folder
2. Replace the local `import` with a CDN path string
3. Use `<MediaAsset src="/path/on/imagekit" isCDN />` instead of `<Image>`
