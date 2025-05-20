import React from "react";

export default function Promise() {
  const featureItemClass =
    "flex hover:bg-gray-700 rounded-lg p-2 duration-150 ease-in-out";

  return (
    <section className="relative overflow-hidden bg-gray-900 py-16">
      <div className="absolute -top-24 -right-24 z-0 h-64 w-64 rounded-full bg-orange-600 opacity-10 md:-top-32 md:-right-32 md:h-96 md:w-96"></div>
      <div className="absolute -bottom-32 -left-32 z-0 h-96 w-96 rounded-full bg-orange-600 opacity-10 md:-bottom-48 md:-left-48"></div>
      <div className="z-10 container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-10 md:flex-nowrap">
          <div className="order-2 w-full md:order-1">
            <h2 className="text-4xl font-bold">Our Spice Promise</h2>
            <div className="mb-6 h-1 w-5 bg-orange-500"></div>
            <p className="mb-6 text-gray-200">
              At Spicy Pizza, we don't just make pizza hot – we craft an
              experience that celebrates the rich tapestry of global spices. Our
              chefs travel the world sourcing the finest chilies, spices, and
              ingredients to create signature flavor profiles you won't find
              anywhere else.
            </p>
            <p className="mb-8 text-gray-200">
              Every sauce is made in-house daily, ensuring the perfect balance
              of heat and flavor. We believe spice should enhance, not
              overwhelm, which is why we offer customizable heat levels for
              every palate – from mild warmth to adventurous fire.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className={featureItemClass}>
                <div className="mr-2 text-3xl text-orange-500">
                  <i className="ri-leaf-line" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">
                    Fresh Ingredients
                  </h3>
                  <p className="text-sm text-gray-300">
                    Locally sourced when possible, always fresh
                  </p>
                </div>
              </div>
              <div className={featureItemClass}>
                <div className="mr-2 text-3xl text-orange-500">
                  <i className="ri-fire-line" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">
                    House-Made Sauces
                  </h3>
                  <p className="text-sm text-gray-300">
                    Crafted daily for maximum flavor
                  </p>
                </div>
              </div>
              <div className={featureItemClass}>
                <div className="mr-2 text-3xl text-orange-500">
                  <i className="ri-heart-line" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">
                    Passion for Spice
                  </h3>
                  <p className="text-sm text-gray-300">
                    Expertise in global heat profiles
                  </p>
                </div>
              </div>
              <div className={featureItemClass}>
                <div className="mr-2 text-3xl text-orange-500">
                  <i className="ri-award-line" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium">
                    Quality Guarantee
                  </h3>
                  <div className="text-sm text-gray-300">
                    Not happy?{" "}
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1 font-medium text-orange-400 underline transition-colors duration-200 hover:text-orange-300"
                      aria-label="Contact us to resolve any issues"
                    >
                      We'll make it right
                      <i
                        className="ri-arrow-right-line text-base"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 w-full md:order-2">
            <div className="overflow-hidden rounded-lg border-2 border-orange-500">
              <img
                className="h-auto w-full object-cover"
                src="./images/Chef preparing spicy pizza.webp"
                alt="Chef preparing spicy pizza"
                loading="lazy"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <button
                type="button"
                aria-label="Play our spice journey video"
                className="group absolute inset-0 flex w-full items-center justify-center transition-all hover:bg-[#00000033] focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 duration-150 ease-in-out group-hover:scale-110 group-focus:scale-110 md:h-20 md:w-20 lg:w-auto lg:px-6">
                  <i
                    className="ri-play-fill text-2xl text-white md:text-3xl"
                    aria-hidden="true"
                  ></i>
                  <span className="ml-2 hidden text-lg font-medium text-white lg:inline">
                    Watch Video
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 rounded-lg bg-[#1e293980] p-6">
          <h3 className="mb-6 text-center text-2xl font-semibold md:text-3xl">
            Our Spice Scale
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {/* Mild */}
            <div className="group relative text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400">
                <i className="ri-emotion-happy-line text-2xl text-gray-900"></i>
              </div>
              <p className="text-sm">Mild</p>
              <p className="text-xs text-gray-400">Flavorful warmth</p>
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="rounded-md bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white">
                  Perfect for first-time spice explorers
                  <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1.5 rotate-45 bg-gray-800"></div>
                </div>
              </div>
            </div>

            {/* Medium */}
            <div className="group relative text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-400">
                <i className="ri-fire-line text-2xl text-gray-900"></i>
              </div>
              <p className="text-sm">Medium</p>
              <p className="text-xs text-gray-400">Pleasant tingle</p>
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="rounded-md bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white">
                  A gentle kick that enhances flavor
                  <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1.5 rotate-45 bg-gray-800"></div>
                </div>
              </div>
            </div>

            {/* Hot */}
            <div className="group relative text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
                <i className="ri-fire-fill text-2xl text-gray-900"></i>
              </div>
              <p className="text-sm">Hot</p>
              <p className="text-xs text-gray-400">Bold heat</p>
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="rounded-md bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white">
                  Fiery experience for heat lovers
                  <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1.5 rotate-45 bg-gray-800"></div>
                </div>
              </div>
            </div>

            {/* Extra Hot */}
            <div className="group relative text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-500">
                <i className="ri-skull-2-line text-2xl text-gray-900"></i>
              </div>
              <p className="text-sm">Extra Hot</p>
              <p className="text-xs text-gray-400">Serious spice</p>
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="rounded-md bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white">
                  Approach with caution!
                  <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1.5 rotate-45 bg-gray-800"></div>
                </div>
              </div>
            </div>

            {/* Inferno */}
            <div className="group relative text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-600">
                <i className="ri-skull-2-fill text-2xl text-gray-900"></i>
              </div>
              <p className="text-sm">Inferno</p>
              <p className="text-xs text-gray-400">For brave souls</p>
              <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="rounded-md bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white">
                  Only for true chili heads
                  <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1.5 rotate-45 bg-gray-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
