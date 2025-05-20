import React, { useState } from "react";
import SocialIcon from "./SocialIcon";
import ContactItem from "./ContactItem";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-900 pt-16 pb-8" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-[1536px] px-4">
        <h2 id="footer-heading" className="sr-only">
          Spicy Pizza Footer Navigation
        </h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          
          <section aria-labelledby="brand-heading">
            <div className="mb-6 flex items-center">
              <div className="mr-2 text-orange-500">
                <i className="ri-fire-fill text-3xl" aria-hidden="true"></i>
              </div>
              <h3 id="brand-heading" className="text-xl font-bold">
                <span>Spicy</span>
                <span className="text-orange-500">Pizza</span>
              </h3>
            </div>
            <p className="mb-6 text-gray-400">
              Turning up the heat on traditional pizza since 2010. Our passion is
              creating bold, flavorful experiences that challenge your taste buds.
            </p>
            <div className="flex space-x-3">
              <SocialIcon
                href="https://facebook.com/spicypizza"
                ariaLabel="Facebook"
                iconClass="ri-facebook-fill text-lg"
              />
              <SocialIcon
                href="https://instagram.com/spicypizza"
                ariaLabel="Instagram"
                iconClass="ri-instagram-line text-lg"
              />
              <SocialIcon
                href="https://twitter.com/spicypizza"
                ariaLabel="Twitter"
                iconClass="ri-twitter-x-line text-lg"
              />
              <SocialIcon
                href="https://tiktok.com/@spicypizza"
                ariaLabel="TikTok"
                iconClass="ri-tiktok-line text-lg"
              />
            </div>
          </section>


          <section aria-labelledby="quick-links-heading">
            <h3 id="quick-links-heading" className="mb-6 text-lg font-semibold">
              <i className="ri-links-line mr-2 text-orange-500" aria-hidden="true"></i>
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/menu"
                    className="flex items-center text-gray-400 transition-colors hover:text-orange-500 focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <i className="ri-arrow-right-s-line mr-2" aria-hidden="true"></i>
                    Our Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    className="flex items-center text-gray-400 transition-colors hover:text-orange-500 focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <i className="ri-arrow-right-s-line mr-2" aria-hidden="true"></i>
                    Locations
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="flex items-center text-gray-400 transition-colors hover:text-orange-500 focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <i className="ri-arrow-right-s-line mr-2" aria-hidden="true"></i>
                    Spice Challenge
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="flex items-center text-gray-400 transition-colors hover:text-orange-500 focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <i className="ri-arrow-right-s-line mr-2" aria-hidden="true"></i>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="flex items-center text-gray-400 transition-colors hover:text-orange-500 focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <i className="ri-arrow-right-s-line mr-2" aria-hidden="true"></i>
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/menu"
                    className="flex items-center text-gray-400 transition-colors hover:text-orange-500 focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <i className="ri-arrow-right-s-line mr-2" aria-hidden="true"></i>
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </section>


          <section aria-labelledby="contact-heading">
            <h3 id="contact-heading" className="mb-6 text-lg font-semibold">
              <i className="ri-customer-service-2-line mr-2 text-orange-500" aria-hidden="true"></i>
              Contact Us
            </h3>
            <address className="not-italic">
              <ul className="space-y-4">
                <ContactItem
                  icon="ri-map-pin-line"
                  text="123 Spice Avenue\nFlavortown, FT 98765"
                />
                <ContactItem icon="ri-phone-line" text="(555) 123-4567" />
                <ContactItem
                  icon="ri-mail-line"
                  text="info@spicypizza.com"
                  href="mailto:info@spicypizza.com"
                  isLink
                />
                <ContactItem icon="ri-time-line" text="Open daily: 11am - 11pm" />
              </ul>
            </address>
          </section>

          <section aria-labelledby="newsletter-heading">
            <h3 id="newsletter-heading" className="mb-6 text-lg font-semibold">
              <i className="ri-mail-send-line mr-2 text-orange-500" aria-hidden="true"></i>
              Stay Updated
            </h3>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address"
                  className="w-full rounded-lg bg-gray-800 px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-orange-500 px-4 py-2 font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Subscribe
                  <i className="ri-send-plane-fill ml-2"></i>
                </button>
              </div>
              {isSubscribed && (
                <p className="mt-2 text-sm text-green-500">
                  Thanks for subscribing!
                </p>
              )}
            </form>
            <p className="text-sm text-gray-400">
              <i className="ri-shield-check-line mr-2 text-orange-500" aria-hidden="true"></i>
              We respect your privacy.{" "}
              <a
                href="/privacy"
                className="underline transition-colors hover:text-orange-500 focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                No spam ever.
              </a>
            </p>
          </section>
        </div>


        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Spicy Pizza. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="/terms"
              className="text-sm text-gray-400 transition-colors hover:text-orange-500"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-sm text-gray-400 transition-colors hover:text-orange-500"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}