import React from "react";

export default function SlideCard({
  imgSrc,
  alt,
  price,
  children,
  heatLevel,
}) {
  const levels = Array.from(Array(heatLevel).keys());
  const emptyLevels = Array.from(Array((5 - heatLevel)).keys());
  return (
    <div className="w-full max-w-full cursor-grab overflow-hidden rounded-xl bg-gray-50 duration-100 ease-in-out hover:scale-102">
      <div className="relative h-[224px] w-full lg:h-[300px]">
        <img className="h-full w-full object-cover" src={imgSrc} alt={alt} />
        <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="p-6 text-[#4b5563]">
        <div className="mb-2 flex items-center justify-between text-xl font-bold">
          <h3 className="text-gray-900">{alt}</h3>
          <span className="text-orange-600">&#8377;{price}</span>
        </div>
        <div className="mb-4 flex items-center space-x-2">
          <p>Heat Level: </p>
          <div className="flex space-x-1">
            {levels.map((i) => (
              <span
                key={i}
                className="h-4 w-4 rounded-full bg-[#ff5714]"
              ></span>
            ))}
            {emptyLevels.map((i) => (
              <span
                key={i}
                className="h-4 w-4 rounded-full bg-[#d1d5db]"
              ></span>
            ))}
          </div>
        </div>
        <p className="mb-6">{children}</p>
        <button className="w-full cursor-pointer rounded-lg bg-gradient-to-r from-orange-500 to-red-600 py-2 text-white hover:from-red-600 hover:to-orange-500">
          <i className="ri-shopping-cart-2-line mr-2"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
