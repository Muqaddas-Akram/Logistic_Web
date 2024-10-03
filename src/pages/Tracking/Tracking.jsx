import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const Tracking = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative mb-8 ">
          <img
            src="src/assets/images/image2.jpg"
            alt="Logistics background"
            className="w-full h-48 md:h-64 lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-6 text-white text-center md:text-left lg:px-40 ">
            <div className="text-white flex font-semibold mb-2 text-base md:text-lg lg:text-xl">
            <img
            src="src/assets/images/logo.png"
            alt="Icon"
            className="mr-2 w-8 h-auto"
          />{" "}
              Tracking
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold font-kumbh mb-4">
              LOGISTICS <br/>TRACKING
            </h1>
            <p className="text-xs md:text-base lg:text-xl max-w-xl mx-auto md:mx-0">
              Vivamus Magna justo, lacinia eget consectetur sed, convellis at
              tellus. Quisque velit nisi pretium ut lacinia in, elementum id
              enim. Nulla quis lorem ut libero.
            </p>
          </div>
        </div>

        {/* Tracking Form Section */}
        <div className="bg-white my-20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-inter font-bold mb-4 text-center md:text-left">
            Logistics Tracking
          </h2>
          <p className="text-red-500 text-lg mb-4 text-center md:text-left">
            Official website
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Tracking Number"
                className="w-full border-2 border-[#4B4E5A] rounded-md py-2 px-4 pr-10 placeholder-black"
              />
              <MdOutlineSearch
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-7 w-7 bg-gray-100 border text-gray-400 border-gray-400 rounded"
                size={20}
              />
            </div>
            <button className="bg-[#FF5E18] text-white py-2 px-4 md:py-2 md:px-6 text-sm md:text-base rounded-md hover:bg-orange-600 transition-colors max-w-xs mx-auto">
              Track a Parcel
            </button>
          </div>

          <h3 className="text-xl font-semibold text-[#4B4E5A] font-noto mb-2 text-center md:text-left">
            Track your parcel from logistics in one click
          </h3>
          <p className="text-gray-600 mb-4 text-center md:text-left">
            Enter a Logistics tracking number to track your package
          </p>
          <a
            href="#"
            className="text-[#1C1919] hover:underline flex items-center justify-center md:justify-start"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
            Back to courier list
          </a>

          {/* Info Section */}
          <h3 className="text-xl font-semibold font-noto mt-8 mb-4 text-center md:text-left">
            How to track my Logistics package?
          </h3>
          <p className="text-gray-600 text-center md:text-left">
            Logistics package tracking is easy with Ordertracker. All you have
            to do is paste your tracking number in the above field to track a
            package. We provide you with the most powerful parcel tracking
            system for any post office. Ordertracker accepts any international
            tracking number. It is a universal tracking website to track a
            parcel globally with accurate information about your shipment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tracking;
