# Challenger Classes — Best Coaching in Nalasopara East

Challenger Classes is a premium academic institute dedicated to empowering students through conceptual clarity and results-driven coaching. This platform serves as a digital hub for students to access study materials, track their progress, and explore academic pathways.

---

## 🚀 Key Features

- **Digital Study Hub**: Visual [Concept Maps](file:///g:/CODING/Client/challenger-classes/src/app/concepts) and [Formula Hub](file:///g:/CODING/Client/challenger-classes/src/app/formulas) for quick revision.
- **Premium Courses**: Specialized programs for Class 10 (Board Exam focus), Class 12 Science/Commerce, and competitive entrance exams (JEE/NEET/CET).
- **Results Gallery**: Interactive hall of fame showcasing our [toppers and achievements](file:///g:/CODING/Client/challenger-classes/src/app/results).
- **Responsive UI**: A modern, vibrant, and interactive interface built for all devices.
- **Dynamic Resources**: Integrated PDF downloads for books and personalized notes.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Image/PDF CDN**: [ImageKit](https://imagekit.io/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/) (via custom SVG wrappers)

---

## 📂 Project Structure

```bash
/src
  /app           # Next.js App Router (Pages & Layouts)
  /assets        # Local static assets (Icons, small images)
  /components    # Reusable UI components (Cards, Sliders, Layout)
  /utils         # Utility functions (ImageKit transforms, helpers)
/public          # Publicly accessible assets (Gallery, Toppers)
```

For a detailed guide on how assets are handled, see [ASSET_UPLOADS.md](file:///g:/CODING/Client/challenger-classes/ASSET_UPLOADS.md).

---

## 🚦 Getting Started

### 1. Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### 2. Environment Variables
Create a `.env.local` file in the root directory and add your ImageKit credentials:

```env
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_endpoint
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
```

### 3. Installation
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the project locally.

---

## 📈 SEO & Performance

The project is optimized for high visibility and speed:
- **Semantic HTML**: Proper heading hierarchy and semantic tags for crawlers.
- **JSON-LD**: Structured data for local business discovery.
- **Asset Optimization**: Hybrid CDN approach for large files.
- **Static Site Generation**: Near-instant load times for core pages.

For more details, see [seo.md](file:///g:/CODING/Client/challenger-classes/seo.md).

---

## 📜 License
This project is private and intended for Challenger Classes.
