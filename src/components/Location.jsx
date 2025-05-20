import HoursRow from "./HoursRow";

export default function Location() {
  // Get current day for highlighting
  const currentDay = new Date().getDay(); // 0 (Sun) - 6 (Sat)
  const daysMapping = [ 0, 1, 2, 3, 4, 5, 6]; // Adjust index to match our data order

  return (
    <section 
      id="location" 
      className="bg-gray-900" 
      aria-label="Location and contact information"
    >
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center pt-24">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl text-gray-100">
            Find <span className="text-orange-500">Our Heat</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-300 text-balance">
            Visit us to experience our fiery creations in person or check when
            we can deliver spice to your doorstep.
          </p>
        </div>


        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">

          <div className="flex-1">
            <article className="rounded-xl bg-gray-800 p-4 h-full">
              <div className="mb-4 overflow-hidden rounded-lg aspect-video">
                <iframe
                  title="Honey Spice Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d218.57906599465676!2d77.2633580103904!3d28.77135235200114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747129361006!5m2!1sen!2sin"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-start p-2">
                <div aria-hidden="true" className="mr-3 mt-1 text-orange-500">
                  <i className="ri-map-pin-fill text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-100 mb-1">Honey Spice</h3>
                  <a
                    href="https://tinyurl.com/2vvxkjtr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    Haqiqatpur Urf Khudawas, Uttar Pradesh
                    <span className="sr-only">(Opens in new window)</span>
                  </a>
                </div>
              </div>
            </article>
          </div>


          <div className="flex-1 space-y-8">
            
            <article className="rounded-xl bg-gray-800 p-6 shadow-lg">
              <div className="mb-6 flex items-center">
                <i 
                  className="ri-time-line mr-3 text-2xl text-orange-500"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-gray-100">Hours of Operation</h3>
              </div>
              <div className="space-y-2">
                <HoursRow 
                  day="Monday - Thursday" 
                  time="11:00 AM - 10:00 PM"
                  isToday={daysMapping[currentDay] >= 1 && daysMapping[currentDay] <= 4}
                />
                <HoursRow 
                  day="Friday - Saturday" 
                  time="11:00 AM - 12:00 AM"
                  isToday={daysMapping[currentDay] === 5 || daysMapping[currentDay] === 6}
                />
                <HoursRow 
                  day="Sunday" 
                  time="12:00 PM - 9:00 PM"
                  isToday={daysMapping[currentDay] === 0}
                />
                <div className="mt-4 pt-3 border-t border-gray-700">
                  <div className="flex items-center text-orange-400">
                    <i 
                      className="ri-fire-fill mr-2"
                      aria-hidden="true"
                    />
                    <span className="font-medium">Happy Hour: 3-6 PM Daily</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="rounded-xl bg-gray-800 p-6 shadow-lg">
              <div className="mb-6 flex items-center">
                <i 
                  className="ri-bike-line mr-3 text-2xl text-orange-500"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-gray-100">Delivery Information</h3>
              </div>
              <div className="space-y-6">
                
                <div className="flex items-start">
                  <div 
                    className="mr-3 mt-1 rounded-full bg-gray-700 p-2"
                    aria-hidden="true"
                  >
                    <i className="ri-road-map-line text-lg text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">Delivery Radius</h4>
                    <p className="text-gray-300 mt-1">
                      We deliver within 8 kilometers (5 miles) of each location
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div 
                    className="mr-3 mt-1 rounded-full bg-gray-700 p-2"
                    aria-hidden="true"
                  >
                    <i className="ri-timer-line text-lg text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">Delivery Times</h4>
                    <p className="text-gray-300 mt-1">
                      30-45 minutes average (real-time updates provided after ordering)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div 
                    className="mr-3 mt-1 rounded-full bg-gray-700 p-2"
                    aria-hidden="true"
                  >
                    <i className="ri-money-dollar-circle-line text-lg text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">Delivery Fee</h4>
                    <p className="text-gray-300 mt-1">
                      $3.99 standard fee <br className="sm:hidden" />
                      <span className="text-orange-400">Free</span> for orders over $100
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="tel:+917827763633"
                  className="group flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3.5 transition-all duration-300 hover:from-red-600 hover:to-orange-500 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <i 
                    className="ri-phone-line mr-2 transition-transform group-hover:animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="font-medium">
                    Call Now: +91 78277 63633
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}