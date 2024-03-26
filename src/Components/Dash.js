import React from "react";

const Dash = () => {
  return (
    <div>
      <div className="">
        <section
          id="features"
          className="relative block px-6 py-10 md:py-20 md:px-10  "
              >
                  <div class="relative mx-auto max-w-5xl text-center">
                      
          <h2 className="block w-full bg-clip-text font-bold text-3xl sm:text-4xl">
            Our Services
          </h2>
                  </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-neutral-800 bg-gray-800 p-8 text-center shadow">
              {/* <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
        // style={{ backgroundImage: 'linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)', borderColor: 'rgb(93, 79, 240)' }}>
        
      </div> */}
              <h3 className="mt-6 text-white text-2xl font-semibold">Healthcare</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                Ensure access to healthcare services, including medical
                check-ups, vaccinations, and medication, to improve the overall
                well-being and quality of life for those in need.
              </p>
            </div>

            <div className="rounded-md bg-gray-800 p-8 text-center shadow">
              <h3 className="mt-6 text-white text-2xl font-semibold">Basic Needs</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                Offer essential services such as food, clothing, and shelter to
                meet the immediate needs of the impoverished.
              </p>
            </div>

            <div className="rounded-md bg-gray-800 p-8 text-center shadow">
              <h3 className="mt-6 text-white text-2xl font-semibold">
                Education
              </h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                Provide educational opportunities and vocational training to
                empower individuals with the skills and knowledge needed to
                break the cycle of poverty.
              </p>
            </div>
          </div>

          
          
        </section>
      </div>
    </div>
  );
};

export default Dash;
