import React from "react";
import { Plane, Tv, Globe } from "lucide-react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";


const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-left p-4 border-r-2 border-[#4B4E5A] border-dashed last:border-r-0">
    <Icon className="text-red-700 w-10 h-10 mb-4" />
    <h3 className="text-xl font-bold font-kumbh mb-2">{title}</h3>
    <p className="text-black">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Transportation",
      description:
        "Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.",
    },
    {
      icon: Tv,
      title: "Live Monitoring",
      description:
        "Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.",
    },
    {
      icon: Globe,
      title: "Worldwide Service",
      description:
        "Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing drawing.",
    },
  ];

  const moreservices = [
    { name: "Air Freight", image: "src/assets/images/image10.jpg" },
    { name: "Truck Freight", image: "src/assets/images/image11.png" },
    { name: "Cargo Freight", image: "src/assets/images/image12.jpg" },
    { name: "Bicycle Freight", image: "src/assets/images/image13.png" },
    { name: "Bike Freight", image: "src/assets/images/image15.jpg" },
    { name: "Road Freight", image: "src/assets/images/image14.png" },
  ];

  const stats = [
    { value: "42+", label: "Countries Covered" },
    { value: "97+", label: "Business Success" },
    { value: "2342", label: "Happy Clients" },
    { value: "3245", label: "Business Done" },
  ];

  return (
    <>
      <div>
        {/* hero */}
        <section className="relative">
          <img
            src="src/assets/images/image2.jpg"
            alt="Transportation & Logistics"
            className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center text-white p-4 md:p-6 lg:p-10 xl:p-20 space-y-2 md:space-y-4">
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-noto uppercase font-semibold flex items-center">
              <img
                src="src/assets/images/logo.png"
                alt="Icon"
                className="mr-2 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
              WE'RE PROVIDE BEST SERVICES
            </h3>
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold font-kumbh mb-4">
              WORLD WIDE
              <br /> BEST SHIPPING
            </h1>
            <p className="w-full md:w-3/4 lg:w-1/2 text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-3 lg:mt-4">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Placeat velit voluptas perspiciatis ipsam nam.
            </p>
          </div>
        </section>
        {/* Services */}
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl flex font-bold font-kumbh text-center justify-center mb-5">
            <img
              src="src/assets/images/logo.png"
              alt="Icon"
              className="mr-2 w-10 h-auto"
            />{" "}
            <span className="text-[#FF5E18] uppercase">Our Services</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        {/* moreservices */}
        <div className="bg-gray-100 py-10 mt-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8">
            <h1 className="text-3xl font-bold font-kumbh text-center mb-8">
              Services We Offer
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 mb-12">
              {moreservices.map((service, index) => (
                <div key={index} className="relative shadow-md">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute -bottom-10 left-0 right-0 bg-white text-center mx-4 sm:mx-8 lg:mx-14 p-4">
                    <p className="text-lg font-semibold">{service.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Banner */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mb-10">
          <img
            src="src/assets/images/image1.webp"
            alt="Shipping containers and cargo ship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-inter mb-4">
              100% Secure and Safe
            </h2>
            <p className="text-white font-inter text-lg md:text-xl lg:text-2xl max-w-3xl mb-8">
              Esteem spirit temper too say adieus who direct esteem. It look
              estee luckily or picture placing drawing.
            </p>
            <Link to='/contact'><button className="bg-[#FF5E18] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full font-inter text-lg transition duration-300">
              Contact us
            </button></Link>
          </div>
        </div>
      </div>
      {/* choose us */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="relative mb-6 md:mb-0 md:w-1/2 lg:ml-20 md:mr-10">
            <img
              src="src/assets/images/image4.webp"
              alt="Worker"
              className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 relative z-10"
            />
            <div className="absolute bg-[#f44519] h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:top-8 lg:left-10 top-6 left-6 z-0 md:left-2 md:top-10"></div>
          </div>

          <div className="md:w-1/2 md:pl-6 mt-10">
            <h1 className="text-4xl font-bold font-kumbh mb-4">
              Why Choose Us?
            </h1>
            <p className="mb-4">
              Esteem spirit temper too say adieus who direct esteem. It look
              estee luckily or picture placing drawing.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center  text-black">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Apartments frequently or motionless.
              </li>
              <li className="flex items-center  text-black">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Duis aute irure dolor in reprehenderit in voluptate.
              </li>
              <li className="flex items-center  text-black">
                <TiTick className="text-white mr-2 h-7  w-7 bg-[#f44519] rounded-full" />{" "}
                Voluptatem quia voluptas sit aspernatur.
              </li>
            </ul>
            <Link to='/about'><button className="bg-white font-noto mt-10 border-[#FF5E18] border-2 text-[#FF5E18] hover:text-white px-6 py-2 hover:bg-[#FF5E18] transition duration-300">
              About Us
            </button></Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-10 my-16 mx-4 md:mx-10 lg:mx-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-14 justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF5E18] font-noto">
                {stat.value}
              </h3>
              <p className="font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
