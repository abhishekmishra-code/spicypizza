import React from "react";

export default function SocialIcon({ href, ariaLabel, iconClass }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
    >
      <i className={iconClass}></i>
    </a>
  );
}
