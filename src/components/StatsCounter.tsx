"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 90, suffix: "%+", label: "Pass Rate" },
  { value: 1000, suffix: "+", label: "Students Taught" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 25, suffix: "+", label: "Expert Faculty" },
];

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-r from-accent-orange via-orange-500 to-orange-600 py-10"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center text-white">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
              {visible ? <AnimatedNumber value={stat.value} /> : "0"}
              {stat.suffix}
            </p>
            <p className="text-sm text-white/80 font-medium uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
}
