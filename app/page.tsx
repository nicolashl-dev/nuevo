"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section Center */}
      <section className="flex items-center justify-center min-h-screen px-6">
        <div
          className={`text-center transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="font-light tracking-[-0.015em] leading-[1.37] text-[47px] sm:text-[44px] md:text-[52px] lg:text-[64px]">
            The Regeneration Suite
          </h1>
        </div>
      </section>
    </main>
  );
}
