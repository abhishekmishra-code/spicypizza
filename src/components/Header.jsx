import React, { useState } from "react";
import("https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css");

export default function Header() {
  const [menuVisibility, setMenuVisibility] = useState("");

  return (
    <header className="fixed top-0 z-20 w-full bg-black">
      <div className="mx-auto w-full max-w-[1536px] px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 text-orange-500">
              <i className="ri-fire-fill text-3xl"></i>
            </div>
            <div>
              <span className="text-xl font-bold md:text-2xl">
                Spicy
                <span className="text-orange-500">Pizza</span>
              </span>
            </div>
          </div>
          <div
            className={`font-[500] md:block ${menuVisibility === "" ? "hidden" : ""}`}
          >
            <ul
              className="absolute top-5 right-4 flex w-58 flex-col gap-4 rounded-md bg-[#030712ee] py-4 pl-2 md:static md:w-full md:flex-row md:bg-black md:py-0 md:pt-0"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <li
                className={`absolute top-2 right-2 ${menuVisibility === "" ? "hidden" : ""}`}
              >
                <button
                  id="menu-toggle"
                  className="cursor-pointer text-white focus:outline-none"
                  onClick={() => {
                    setMenuVisibility("");
                    console.log(menuVisibility);
                  }}
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </li>
              <li className="navigation">
                <a href="#home">Home</a>
              </li>
              <li className="navigation">
                <a href="#menu">Menu</a>
              </li>
              <li className="navigation">
                <a href="#specials">Specials</a>
              </li>
              <li className="navigation">
                <a href="#location">Location</a>
              </li>
              <li className="navigation">
                <a href="#about">About Us</a>
              </li>
            </ul>
          </div>
          <div className={`${menuVisibility} md:hidden`}>
            <button
              className="cursor-pointer"
              onClick={() => {
                setMenuVisibility("hidden");
                console.log(menuVisibility);
              }}
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
