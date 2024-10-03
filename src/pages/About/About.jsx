import React from "react";
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <div>
      {/* hero */}
      <section className="relative">
        <img
          src="src/assets/images/image2.jpg"
          alt="Transportation & Logistics"
          className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center text-white p-4 md:p-6 lg:p-10 xl:p-20 space-y-2 md:space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl uppercase font-semibold flex items-center">
            <img
              src="src/assets/images/logo.png"
              alt="Icon"
              className="mr-2 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
            />
            About Us
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold font-kumbh mb-4">
            TRANSPORTATION <br /> & LOGISTICS
          </h1>
          <p className="w-full md:w-3/4 lg:w-1/2 text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-3 lg:mt-4">
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Placeat velit voluptas perspiciatis ipsam nam.
          </p>
        </div>
      </section>

      {/* About Us Details */}
      <section className=" py-8 px-4 md:px-8 lg:px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-xl md:text-2xl text-[#FF5E18] underline decoration-[#FF5E18] underline-offset-8 decoration-4 font-noto font-bold flex items-center">
              <img
                src="src/assets/images/logo.png"
                alt="Icon"
                className="mr-2 w-10 h-auto"
              />{" "}
              About Us
            </h3>
            <p className="mt-4 text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi,
              asperiores nam amet doloribus, soluta ut reiciendis. Consequatur
              modi rem, vero eos ipsam voluptas.
            </p>

            <p className="mt-8 text-gray-600">
              Error minus sint nobis dolor laborum architecto, quaerat.
              Voluptatum porro expedita labore esse velit veniam laborum quo
              obcaecati similique iusto delectus quasi!
            </p>
            <button className="mt-4 text-[#FF5E18] underline font-semibold hover:underline">
              Read more
            </button>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <TiTick className="text-white mr-2 bg-[#FF5E18] rounded-full" />{" "}
                Error minus sint nobis dolor
              </li>
              <li className="flex items-center text-gray-600">
                <TiTick className="text-white mr-2 bg-[#FF5E18] rounded-full" />{" "}
                Voluptatum porro expedita labore esse
              </li>
              <li className="flex items-center text-gray-600">
                <TiTick className="text-white mr-2 bg-[#FF5E18] rounded-full" />{" "}
                Voluptas unde sit pariatur earum
              </li>
            </ul>
          </div>
          <div>
            <img
              src="src/assets/images/image6.jpg"
              alt="Worker"
              className=" object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16 lg:py-40 bg-[url('src/assets/images/image1.webp')] mb-10 bg-cover bg-center">
        <h3 className="text-xl md:text-2xl text-white underline decoration-white underline-offset-8 decoration-4 font-noto font-bold text-center mb-6 flex justify-center items-center">
          <img
            src="src/assets/images/logo.png"
            alt="Icon"
            className="mr-2 w-10 h-auto"
          />{" "}
          How It Works
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-[#FF5E18] border-8 border-white text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-lg md:text-xl font-bold">
                1
              </div>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-white">
              Make an order
            </h4>
            <p className="mt-2 text-white text-left">
              Error minus sint nobis dolor laborum architecto, quaerat.
              Voluptatum porro expedita labore esse velit veniam labor quo
              obcaecati similique iusto.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center  text-white">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Error minus sint nobis dolor
              </li>
              <li className="flex items-center  text-white">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Voluptatum porro expedita labore esse
              </li>
              <li className="flex items-center  text-white">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Voluptas unde sit pariatur earum
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-[#FF5E18] border-8 border-white text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-lg md:text-xl font-bold">
                2
              </div>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-white">
              Make a payment
            </h4>
            <p className="mt-2 text-white text-left">
              Error minus sint nobis dolor laborum architecto, quaerat.
              Voluptatum porro expedita labore esse velit veniam labor quo
              obcaecati similique iusto.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center  text-white">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Error minus sint nobis dolor
              </li>
              <li className="flex items-center  text-white">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Voluptatum porro expedita labore esse
              </li>
              <li className="flex items-center  text-white">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Voluptas unde sit pariatur earum
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-[#FF5E18] border-8 border-white text-white w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-lg md:text-xl font-bold">
                3
              </div>
            </div>
            <h4 className="text-lg md:text-xl font-bold text-white">
              Track Your Order
            </h4>
            <p className="mt-2 text-white text-left">
              Error minus sint nobis dolor laborum architecto, quaerat.
              Voluptatum porro expedita labore esse velit veniam labor quo
              obcaecati similique iusto.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center  text-white">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Error minus sint nobis dolor
              </li>
              <li className="flex items-center  text-white">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Voluptatum porro expedita labore esse
              </li>
              <li className="flex items-center  text-white">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Voluptas unde sit pariatur earum
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
