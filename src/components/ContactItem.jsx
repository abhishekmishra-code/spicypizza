import React from "react";

export default function ContactItem({ icon, text, href, isLink = false }) {
  return (
    <li className="flex items-start space-x-3">
      <i className={`${icon} mt-1 shrink-0 text-orange-500`}></i>
      {isLink ? (
        <a
          href={href}
          className="text-gray-400 transition-colors hover:text-orange-500 focus:rounded-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
        >
          {text}
        </a>
      ) : (
        <span className="text-gray-400">{text}</span>
      )}
    </li>
  );
}
