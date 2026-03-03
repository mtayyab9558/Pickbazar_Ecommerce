import React from "react";

const HeroSection = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      ></div>
      <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-28">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Groceries Delivered in 90 Minute
          </h1>

          <p className="mt-8 text-4xl font-medium text-pretty text-gray-500 sm:text-sm">
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </p>
          <div>
            <div className="mt-8">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                  $
                </div>
                <input
                  id="price"
                  type="text"
                  name="price"
                  placeholder="0.00"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  >
                    <path
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      ></div>
    </div>
  );
};

export default HeroSection;
