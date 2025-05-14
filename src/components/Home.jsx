import React from "react";
import SpiceIndicator from "./SpiceIndicator";

export default function Home() {
  const spiceLevels = Array(5).fill(null); // Creates array for mapping fire icons

  return (
    <section
      id="home"
      className="relative mx-auto min-h-screen w-full px-4 pt-16 text-white"
      role="region"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover"
          src="./images/spicy-pizza-background.webp"
          alt="Freshly baked spicy pizza with melted cheese and chili peppers"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"
          aria-hidden="true"
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1536px] py-8 md:py-16 lg:py-32">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-0">
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
            TURN UP THE <span className="text-orange-600">HEAT</span> ON YOUR
            <span className="sr-only"> taste buds</span>
          </h1>

          <p className="mb-6 text-lg text-gray-100 md:mb-8 md:text-xl">
            Experience our handcrafted pizzas with bold flavors and premium
            spices that will ignite your senses. From mild warmth to fiery
            intensity, find your perfect spice level.
          </p>

          <div className="mb-6 flex items-center md:mb-8">
            <p className="mr-3 text-gray-100">Spice Levels:</p>
            <div
              className="flex text-orange-600"
              role="img"
              aria-label="Five chili peppers indicating maximum spice level"
            >
              <SpiceIndicator iconName={"ri-fire-fill"} />
            </div>
          </div>

          <div
            className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
            aria-label="Main navigation"
          >
            <a
              className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-center text-base font-medium transition-colors duration-200 hover:from-red-600 hover:to-orange-500 focus:ring-2 focus:ring-orange-400 active:scale-95 sm:w-auto"
              href="#order"
              role="button"
              aria-label="Order now (opens order section)"
            >
              <i className="ri-shopping-cart-2-line mr-2" aria-hidden="true" />
              ORDER NOW
              <span className="sr-only">Go to order section</span>
            </a>

            <a
              className="flex w-full items-center justify-center rounded-full bg-gray-100 px-6 py-3 text-center text-base font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 active:scale-95 sm:w-auto"
              href="#menu"
              role="button"
              aria-label="View full menu (opens menu section)"
            >
              <i className="ri-restaurant-line mr-2" aria-hidden="true" />
              VIEW MENU
              <span className="sr-only">View full menu</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
