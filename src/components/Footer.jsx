import React from "react";

export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 pt-16 pb-8">
      <div className="mx-auto max-w-[1536px] px-4">
        <div className="flex md:justify-between mx-6 md:gap-10 gap-4 flex-wrap md:flex-nowrap">
          <div className="md:max-w-1/5 p-2">
            <div className="mb-6 flex items-center">
              <div className="mr-2 text-orange-500">
                <i className="ri-fire-fill text-3xl"></i>
              </div>
              <div className="text-xl font-bold">
                <span>Spicy</span>
                <span className="text-orange-500">Pizza</span>
              </div>
            </div>
            <p className="mb-6 text-gray-400">
              Turning up the heat on traditional pizza since 2010. Our passion
              is creating bold, flavorful experiences that challenge your taste
              buds.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-orange-500"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-orange-500"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-orange-500"
              >
                <i className="ri-twitter-x-line"></i>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-orange-500"
              >
                <i className="ri-tiktok-line"></i>
              </a>
            </div>
          </div>
          <div className="md:max-w-1/5 p-2">
            <h3 className="mb-6 flex items-center text-lg font-semibold">
              <i className="ri-links-line mr-2 text-orange-500"></i>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-400 transition-colors hover:text-orange-500"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i> Our Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-400 transition-colors hover:text-orange-500"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i> Locations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-400 transition-colors hover:text-orange-500"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i> Spice Challenge
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-400 transition-colors hover:text-orange-500"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i> About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-400 transition-colors hover:text-orange-500"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i> Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-400 transition-colors hover:text-orange-500"
                >
                  <i className="ri-arrow-right-s-line mr-2"></i> Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="md:max-w-1/5 p-2">
            <h3 className="mb-6 flex items-center text-lg font-semibold">
              <i className="ri-customer-service-2-line mr-2 text-orange-500"></i>
              Contact Us
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="ri-map-pin-line mt-1 mr-3 text-orange-500"></i>
                <span className="text-gray-400">123 Spice Avenue <br /> Flavortown, FT 98765</span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line mr-3 text-orange-500"></i>
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-3 text-orange-500"></i>
                <a href="mailto:info@spicypizza.com" className="text-gray-400 hover:text-orange-500 transition-colors">info@spicypizza.com</a>
              </li>
              <li className="flex items-center">
                <i className="ri-time-line mr-3 text-orange-500"></i>
                <span className="text-gray-400">Open daily: 11am - 11pm</span>
              </li>
            </ul>

          </div>
          <div className="md:max-w-1/5 p-2">
            <h3 className="mb-6 flex items-center text-lg font-semibold">
              <i className="ri-mail-send-line mr-2 text-orange-500"></i>
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4 w-full text-wrap">Subscribe to get special offers, free giveaways, and new flavor announcements.</p>
            <form action="" className="mb-4">
              <div className="flex flex-row">
                <input className="bg-gray-800 w-full px-4 py-2 rounded-l-lg focus:ring-2 focus:ring-orange-500 outline-none" type="text" placeholder="Your email address"/>
                <button type="submit" className="bg-orange-500 px-4 py-2 rounded-r-lg hover:bg-orange-600 cursor-pointer">
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </form>
            <div>
              <i className="ri-shield-check-line text-orange-500 mr-2"></i>
              <span className="text-gray-400 text-sm">We respect your privacy. No spam ever.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
