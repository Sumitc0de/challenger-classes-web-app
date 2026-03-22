"use client";

import { useState, useEffect } from "react";
import MediaAsset from "./MediaAsset";

const images = [
  { src: "/hero_img.png", alt: "Challenger Classes Hero 1" },
  { src: "/hero_img_1.jpg", alt: "Challenger Classes Hero 2" },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
      {images.map((img, index) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-out-expo rounded-[2.5rem] ${
            index === currentIndex 
              ? "opacity-100 z-10 scale-100" 
              : "opacity-0 z-0 scale-110"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <MediaAsset
            src={img.src}
            alt={img.alt}
            fill
            priority={index === 0}
            className="w-full h-full object-cover rounded-[2.5rem]"
          />
        </div>
      ))}
      
      {/* Optional: Slider Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentIndex 
                ? "bg-white w-8" 
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
