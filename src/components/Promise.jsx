import React from "react";

export default function Promise() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-16">
      <div className="absolute -top-24 -right-24 z-0 h-64 w-64 rounded-full bg-orange-600 opacity-10"></div>
      <div className="absolute -bottom-32 -left-32 z-0 h-96 w-96 rounded-full bg-orange-600 opacity-10"></div>
      <div className="z-10 container mx-auto px-4">
        <div className="flex items-center gap-10 flex-wrap md:flex-nowrap">
          <div className="w-full order-2 md:order-1">
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
              <div className="flex hover:bg-gray-700 rounded-lg p-2 duration-150 ease-in-out">
                <div className="text-orange-500 mr-2"><i className="ri-leaf-line text-2xl"></i></div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Fresh Ingredients</h3>
                  <p className="text-gray-300 text-sm">Locally sourced when possible, always fresh</p>
                </div>
              </div>
              <div className="flex hover:bg-gray-700 rounded-lg p-2 duration-150 ease-in-out">
                <div className="text-orange-500 mr-2"><i className="ri-fire-line text-2xl"></i></div>
                <div>
                  <h3 className="font-medium text-lg mb-1">House-Made Sauces</h3>
                  <p className="text-gray-300 text-sm">Crafted daily for maximum flavor</p>
                </div>
              </div>
              <div className="flex hover:bg-gray-700 rounded-lg p-2 duration-150 ease-in-out">
                <div className="text-orange-500 mr-2"><i className="ri-heart-line text-2xl"></i></div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Passion for Spice</h3>
                  <p className="text-gray-300 text-sm">Expertise in global heat profiles</p>
                </div>
              </div>
              <div className="flex hover:bg-gray-700 rounded-lg p-2 duration-150 ease-in-out">
                <div className="text-orange-500 mr-2"><i className="ri-award-line text-2xl"></i></div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Quality Guarantee</h3>
                  <p className="text-gray-300 text-sm">Not happy? We'll make it right</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full order-1 md:order-2">
            <div className="overflow-hidden rounded-lg border-2 border-orange-500">
              <img
                className="h-auto w-full object-cover"
                src="./images/Chef preparing spicy pizza.webp"
                alt="Chef preparing spicy pizza"
              />
              <div className="absolute inset-0 bg-[#0000004d] hover:bg-[#00000033] transition-all cursor-pointer group group flex items-center justify-center">
                <div className="duration-150 ease-in-out flex h-16 w-16 items-center rounded-full bg-orange-500 md:h-20 md:w-20 justify-center group-hover:scale-110">
                  <i className="ri-play-fill text-2xl text-white md:text-3xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1e293980] rounded-lg p-6 mt-16">
          <h3 className="text-xl font-medium mb-4 text-center">Our Spice Scale</h3>
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-center">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-emotion-happy-line text-gray-900 text-xl"></i>
              </div>
              <p className="text-sm">Mild</p>
              <p className="text-gray-400 text-xs">Flavorful warmth</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-fire-line text-gray-900 text-xl"></i>
              </div>
              <p className="text-sm">Medium</p>
              <p className="text-gray-400 text-xs">Pleasant tingle</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-fire-fill text-gray-900 text-xl"></i>
              </div>
              <p className="text-sm">Hot</p>
              <p className="text-gray-400 text-xs">Bold heat</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-skull-2-line text-gray-900 text-xl"></i>
              </div>
              <p className="text-sm">Extra Hot</p>
              <p className="text-gray-400 text-xs">Serious spice</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-skull-2-fill text-gray-900 text-xl"></i>
              </div>
              <p className="text-sm">Inferno</p>
              <p className="text-gray-400 text-xs">For brave souls</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
