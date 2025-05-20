import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router";

export default function Header() {
  // * State management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    // Scroll to the element with the ID from the hash
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Prevent Body Scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  // * Close menu on ESC press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-black shadow-lg">
      <div className="mx-auto w-full max-w-[1536px] px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="mr-2 text-orange-500">
              <i className="ri-fire-fill text-3xl" aria-hidden="true"></i>
            </div>
            <h1 className="text-xl font-bold md:text-2xl">
              Spicy
              <span className="text-orange-500">Pizza</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" role="navigation">
            <ul className="flex gap-8">
              {["Home", "Menu", "Specials", "Location", "About"].map((item) => (
                <li key={item}>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "border-b-2 border-orange-500 text-orange-500"
                          : "text-white"
                      } transition-colors hover:text-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none`
                    }
                    to={`${item.toLowerCase()}#${item.toLowerCase()}`}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="relative z-[60] md:hidden" ref={menuRef}>
            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="relative z-[60] -mr-2 cursor-pointer p-2 text-2xl text-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i
                className={`${isMenuOpen ? "ri-close-line" : "ri-menu-line"} align-middle`}
              ></i>
            </button>

            {/* Backdrop Overlay */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              ></div>
            )}

            {/* Mobile Menu */}
            <nav
              role="navigation"
              className={`absolute top-full right-0 z-50 mt-2 w-48 max-w-[calc(100vw-2rem)] min-w-[12rem] origin-top rounded-md bg-gray-900 p-4 transition-all duration-300 ${
                isMenuOpen
                  ? "pointer-events-auto scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0"
              }`}
              aria-label="Main navigation"
              aria-hidden={!isMenuOpen}
            >
              <ul className="space-y-4">
                {["Home", "Menu", "Specials", "Location", "About"].map(
                  (item) => (
                    <li key={item}>
                      
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive
                            ? "text-orange-500 underline"
                            : "text-white"
                          } block transition-colors hover:text-orange-500 focus:ring-2 focus:ring-orange-500 focus:outline-none`
                        }
                        to={`${item.toLowerCase()}#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
