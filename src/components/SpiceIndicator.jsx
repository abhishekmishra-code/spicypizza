import React from "react";

export default function SpiceIndicator({ iconName }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`${iconName} text-2xl transition-transform duration-200 ease-in-out hover:scale-110 focus:ring-2 focus:ring-orange-500 focus:outline-none`}
          title="Spice Level Indicator"
          aria-hidden="true"
        />
      ))}
    </>
  );
}
