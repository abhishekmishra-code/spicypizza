import React from "react";

export default function Home() {
  return (
    <section id="home" className="relative mx-auto min-h-screen w-full px-4 pt-16 text-white">
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover"
          src="./src/assets/images/Spicy Pizza Background.webp"
          alt="Spicy Pizza Background "
        />
        <div className="absolute inset-0 bg-linear-[90deg,#000000cc_0%,#00000066_100%]"></div>
      </div>
      <div className="relative z-10 py-16 md:py-32 max-w-[1536px] mx-auto">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            TURN UP THE <span className="text-orange-600">HEAT</span> ON YOUR
            TASTE BUDS
          </h1>
          <p className="mb-8 text-xl text-gray-200">
            Experience our handcrafted pizzas with bold flavors and premium
            spices that will ignite your senses. From mild warmth to fiery
            intensity, find your perfect spice level.
          </p>
          <div className="mb-8 flex items-center">
            <p className="mr-3">Spice Levels:</p>
            <div className="text-[#ff6b35]">
              <i className="ri-fire-fill text-2xl"></i>
              <i className="ri-fire-fill text-2xl"></i>
              <i className="ri-fire-fill text-2xl"></i>
              <i className="ri-fire-fill text-2xl"></i>
              <i className="ri-fire-fill text-2xl"></i>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-center text-lg font-medium transition-all hover:from-red-600 hover:to-orange-500"
              href="#"
            >
              <i className="ri-shopping-cart-2-line mr-2"></i>
              ORDER NOW
            </a>
            <a
              className="flex items-center justify-center rounded-full bg-gray-50 text-gray-950 px-8 py-3 text-center text-lg font-medium"
              href="#"
            >
              <i className="ri-restaurant-line mr-2"></i>
              VIEW MENU
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
