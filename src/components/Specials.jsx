import React from "react";
import EmblaCarousel from "./EmblaCarousel";

export default function Specials() {
  const OPTIONS = { loop: true };
  return (
    <section id="specials" className="bg-[#111827]">
      <div className="relative z-10 mx-auto max-w-[1536px] py-16 md:py-20">
        <div className="mx-auto mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Featured <span className="text-[#f97316]">Specials</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Our master chefs have crafted these signature spicy pizzas to
            tantalize your taste buds. Find your perfect heat level!
          </p>
        </div>
        <div>
          <EmblaCarousel options={OPTIONS} />
        </div>
      </div>
    </section>
  );
}
