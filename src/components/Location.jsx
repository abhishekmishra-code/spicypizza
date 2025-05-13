import React from "react";

export default function Location() {
  return (
    <section id="location" className="bg-gray-900">
      <div className="mx-auto max-w-[1536px] px-4">
        <div className="mb-12 text-center pt-24 ">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Find <span className="text-orange-500">Our Heat</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Visit us to experience our fiery creations in person or check when
            we can deliver spice to your doorstep.
          </p>
        </div>
        <div className="flex w-full items-start justify-center gap-10 flex-wrap md:flex-nowrap">
          <div className="mx-auto w-full rounded-xl bg-gray-800 p-4">
            <div className="mb-4 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d218.57906599465676!2d77.2633580103904!3d28.77135235200114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747129361006!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex">
              <div className="mr-2 text-orange-500">
                <i className="ri-map-pin-fill text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold">Honey Spice</h3>
                <p className="text-gray-300">
                  Haqiqatpur Urf Khudawas, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-xl bg-gray-800 p-6 shadow-lg">
              <div className="mb-4 flex items-center">
                <i className="ri-time-line mr-3 text-2xl text-orange-500"></i>
                <h3 className="text-xl font-bold">Hours of Operation</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Monday - Thursday</span>
                  <span className="font-medium">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Friday - Saturday</span>
                  <span className="font-medium">11:00 AM - 12:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Sunday</span>
                  <span className="font-medium">12:00 PM - 9:00 PM</span>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="text-orange-400">
                    <i className="ri-fire-fill mr-2"></i>
                    <span className="font-medium">
                      Happy Hour: 3-6 PM Daily
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 w-full rounded-xl bg-gray-800 p-6 shadow-lg">
              <div className="mb-4 flex items-center">
                <i className="ri-bike-line mr-3 text-2xl text-orange-500"></i>
                <h3 className="text-xl font-bold">Delivery Information</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-gray-700 p-2 text-center">
                    <i className="ri-road-map-line text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Delivery Radius</h4>
                    <p className="text-gray-300">
                      We deliver within 5 miles of each location
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-gray-700 p-2 text-center">
                    <i className="ri-timer-line text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Delivery Times</h4>
                    <p className="text-gray-300">
                      30-45 minutes, depending on distance and order volume
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 rounded-full bg-gray-700 p-2 text-center">
                    <i className="ri-money-dollar-circle-line text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Delivery Fee</h4>
                    <p className="text-gray-300">
                      $3.99 standard fee, free for orders over 100
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 w-full">
                <a
                  href="#"
                  className="group flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-4 py-3 duration-300 ease-in-out hover:from-red-600 hover:to-orange-500"
                >
                  <i className="ri-phone-line mr-2 group-hover:animate-pulse"></i>
                  Contact Us for More Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
