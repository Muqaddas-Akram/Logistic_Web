import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Globe, Users, Building2, CheckCircle } from "lucide-react";
import { TbTruckDelivery, TbPlane, TbShip, TbRoad } from "react-icons/tb";
import { FaBicycle } from "react-icons/fa6";
import { RiMotorbikeFill, RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Home() {
  const moreservices = [
    {
      name: "Air Freight",
      description:
        " Air freight offers several advantagesover others modes of transportation.",
      image: "src/assets/images/image10.jpg",
      logo: <TbPlane />,
    },

    {
      name: "Cargo Freight",
      description:
        " cargo freight is the transportation of goods through the sea.",
      image: "src/assets/images/image12.jpg",
      logo: <TbShip />,
    },
    {
      name: "Road Freight",
      description:
        "  road freight can be carried out of by various of vehicles flatbed trucks",
      image: "src/assets/images/image14.png",
      logo: <TbRoad />,
    },
    {
      name: "Bicycle Freight",
      description:
        "  Bicycle freight also known as bicycle logistics, refers of goods or cargo.",
      image: "src/assets/images/image13.png",
      logo: <FaBicycle />,
    },
    {
      name: "Bike Freight",
      description:
        "  Bike freight also known as bicycle logistics, refers of goods or cargo.",
      image: "src/assets/images/image15.jpg",
      logo: <RiMotorbikeFill />,
    },
    {
      name: "Truck Freight",
      description:
        "  Trucks with a Gross Vehicle Weight Rating (GVWR) greater than 33,000 lbs.",
      image: "src/assets/images/image11.png",
      logo: <TbTruckDelivery />,
    },
  ];

  const portfolioItems = [
    {
      title: "Packaging",
      image: "src/assets/images/image7.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    },
    {
      title: "Ocean Freight",
      image: "src/assets/images/image12.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    },
    {
      title: "Air Freight",
      image: "src/assets/images/image10.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed",
    },
  ];
  const [activeTab, setActiveTab] = useState("quote");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    weight: "",
    distance: "",
    freight: "",
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <>
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
            WE’RE PROVIDE BEST SERVICES
          </h3>
          <h1 className="text-xl md:text-2xl font-kumbh lg:text-3xl xl:text-4xl font-bold mt-2 md:mt-3 lg:mt-4">
            TRANSPORT
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold font-kumbh mb-4">
            FOR EVERYTHING
          </h1>
          <p className="w-full md:w-3/4 lg:w-1/2 text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-3 lg:mt-4">
            Vivamus Mangna justo, lacinia eget consectetur sed, convellis at
            tellus, Quisque velit nisi pretium ut lacinia in, elementum id enim.
            nulla quis lorem ut libero
          </p>
        </div>
      </section>

      {/* about */}
      <div className="bg-white p-4 md:p-8 max-w-6xl mx-auto mt-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side with images */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex-1 flex flex-col gap-5">
              <img
                src="src/assets/images/image12.jpg"
                alt="Shipping containers"
                className="w-full h-auto object-cover lg:w-60 lg:h-56"
              />
              <img
                src="src/assets/images/image11.png"
                alt="Delivery truck"
                className="w-full h-auto object-cover lg:w-60 lg:h-96"
              />
            </div>

            <div className="flex-1 relative">
              <img
                src="src/assets/images/image6.jpg"
                alt="Delivery person"
                className="w-full h-auto object-cover lg:h-full lg:w-full lg:-ml-16"
              />
              <div className="absolute bg-[#FF5E18] text-white rounded-full p-5 text-center lg:top-44 lg:-left-24 lg:-translate-x-1/2 lg:w-32 lg:h-32 hidden lg:grid">
                <div className="text-xl font-bold lg:text-2xl">25+</div>
                <div className="text-xs lg:text-sm">
                  Years Working <br />
                  Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right side with text content */}
          <div className="md:w-1/2">
            <h2 className="text-2xl flex font-bold font-inter">
              <img
                src="src/assets/images/logo.png"
                alt="Icon"
                className="mr-2 w-10 h-auto"
              />{" "}
              <span className="text-[#FF5E18] uppercase">about us</span>
            </h2>
            <h1 className="text-4xl flex font-bold font-kumbh mb-2">
              Provide Transportation Services Since 1995
            </h1>
            <p className="mb-10">
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae;
            </p>
            <button className="underline text-[#FF5E18]">Read More</button>

            <div className="mt-20 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center flex-1 gap-2 relative lg:-ml-14 ">
                <div className="bg-green-100 p-3 rounded-full ">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold font-noto">Affordable Cost</h3>
                  <p className="text-sm text-gray-600">
                    Mauris blandit aliquet eget Tincidunt nibh pulvinar
                  </p>
                </div>
                <div className="hidden sm:block absolute top-0 bottom-0 right-0 border-r border-black"></div>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <div className="bg-blue-100 p-3 rounded-full ">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold font-noto">Short Time Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Incidunt nibh pulvinar. Sed Porttitor lectus nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="bg-gray-100 py-10 mt-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8">
          <h2 className="text-2xl flex font-bold font-inter text-center justify-center mb-5">
            <img
              src="src/assets/images/logo.png"
              alt="Icon"
              className="mr-2 w-10 h-auto"
            />{" "}
            <span className="text-[#FF5E18] uppercase">Our Services</span>
          </h2>
          <h1 className="text-4xl flex font-bold font-kumbh text-center justify-center mb-8">
            Specialist Logistics Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-32 mb-12">
            {moreservices.map((service, index) => (
              <div key={index} className="relative shadow-md">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute -bottom-20 left-0 right-0 bg-white  mx-4 sm:mx-8 lg:mx-14 p-4">
                  <p className="text-xl font-semibold">{service.name}</p>
                  <p className="text-sm mb-3">{service.description}</p>
                  <hr />
                  <button className="flex items-center underline mt-3 hover:text-[#FF5E18] transition">
                    <span className="mr-2">Read More</span>
                    <FaArrowRightLong className="text-xs" />
                  </button>
                  <div className="absolute bg-[#FF5E18] text-white rounded-full p-5 lg:-top-6 lg:right-4 lg:w-16 lg:h-16 hidden lg:flex items-center justify-center">
                    <div className="text-5xl">{service.logo}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* request */}
      <div className="relative bg-cover bg-center mt-16">
        <div className="relative w-full h-[600px] md:h-[500px] lg:h-[700px] flex flex-col md:flex-row">
          {/* Text Side */}
          <div className="w-full md:w-1/2 bg-[#1C1919] text-white flex flex-col items-start justify-start p-4 md:p-8 lg:p-16">
            <div className="max-w-3xl">
              <div className="flex items-center mb-2">
                <h2 className="text-[#FF5E18] font-bold flex text-sm md:text-2xl uppercase">
                  <img
                    src="src/assets/images/logo.png"
                    alt="Icon"
                    className="mr-2 w-10 h-auto"
                  />
                  REQUEST A QUOTE
                </h2>
              </div>
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold font-kumbh leading-tight">
                We Create Opportunity
                <br />
                to Reach Potential
              </h1>
            </div>
          </div>
          {/* Image Side */}
          <div
            className="w-full md:w-1/2 bg-cover bg-center h-40 md:h-auto"
            style={{ backgroundImage: "url('src/assets/images/image8.jpg')" }}
          ></div>
        </div>
        {/* Form */}
        <div className="absolute -bottom-20 md:-bottom-14 left-0 right-0  md:right-60 mx-auto py-10 px-4 sm:px-6 md:px-8 lg:mx-20  ">
          <div className="max-w-4xl mx-auto p-4">
            <div className="flex flex-col md:flex-row">
              <button
                className={`flex-1 py-2 md:py-4 px-4 font-bold font-noto text-center ${
                  activeTab === "quote"
                    ? "bg-[#FF5E18] text-white"
                    : "bg-white text-[#1C1919]"
                }`}
                onClick={() => handleTabClick("quote")}
                style={{ borderRight: "2px solid black" }}
              >
                Request a Quote
              </button>
              <button
                className={`flex-1 py-2 md:py-4 px-4 font-bold font-noto text-center ${
                  activeTab === "tracking"
                    ? "bg-[#FF5E18] text-white"
                    : "bg-white text-[#1C1919]"
                }`}
                onClick={() => handleTabClick("tracking")}
                style={{ borderRight: "2px solid black" }}
              >
                Real Time Tracking
              </button>
              <button
                className={`flex-1 py-2 md:py-4 px-4 font-bold font-noto text-center ${
                  activeTab === "support"
                    ? "bg-[#FF5E18] text-white"
                    : "bg-white text-[#1C1919]"
                }`}
                onClick={() => handleTabClick("support")}
              >
                24/7 Hours Support
              </button>
            </div>

            {activeTab === "quote" && (
              <form
                onSubmit={handleSubmit}
                className="bg-[#2e2e2e] p-6 md:p-8 lg:p-12"
                style={{ minHeight: "200px" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full p-3 bg-[#1C1919] text-white border-2 border-[#4B4E5A] font-bold font-noto"
                    onChange={handleInputChange}
                    value={formData.fullName}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-[#1C1919] text-white border-2 border-[#4B4E5A] font-bold font-noto"
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                  <input
                    type="text"
                    name="weight"
                    placeholder="Weight, kg"
                    className="w-full p-3 bg-[#1C1919] text-white border-2 border-[#4B4E5A] font-bold font-noto"
                    onChange={handleInputChange}
                    value={formData.weight}
                  />
                  <input
                    type="text"
                    name="distance"
                    placeholder="Distance, km"
                    className="w-full p-3 bg-[#1C1919] text-white border-2 border-[#4B4E5A] font-bold font-noto"
                    onChange={handleInputChange}
                    value={formData.distance}
                  />
                </div>
                <div className="relative">
                  <select
                    name="freight"
                    className="w-full p-3 mb-4 md:mb-6 bg-[#1C1919] font-bold font-noto text-white border-2 border-[#4B4E5A] appearance-none pr-10" // Add padding to the right
                    onChange={handleInputChange}
                    value={formData.freight}
                  >
                    <option value="">Select Freight</option>
                    <option value="air">Air Freight</option>
                    <option value="sea">Sea Freight</option>
                    <option value="land">Land Freight</option>
                  </select>
                  <RiArrowDropDownLine
                    className="absolute right-3 top-6 transform -translate-y-1/2 text-white pointer-events-none"
                    size={40}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#FF5E18] font-bold font-noto text-white py-3 px-6 hover:bg-orange-600 transition duration-300"
                >
                  Send Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* portfolio */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl flex font-bold font-inter text-center justify-center ">
            <img
              src="src/assets/images/logo.png"
              alt="Icon"
              className="mr-2 w-10 h-auto"
            />{" "}
            <span className="text-[#FF5E18] uppercase">portfolio</span>
          </h2>
          <h1 className="text-3xl md:text-4xl font-kumbh font-bold mt-2">
            Our Recent Work Showcase
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative overflow-hidden shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-center">
                <h3 className="text-2xl font-bold font-noto text-[#FF5E18] mb-2">
                  {item.title}
                </h3>
                <p className="text-white mb-4">{item.description}</p>
                <div className="flex justify-center">
                  <button className="flex items-center underline mt-3 text-[#FF5E18] transition">
                    <span className="mr-2">Read More</span>
                    <FaArrowRightLong className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* bannar */}
      <div
        className="relative w-full h-screen mb-40 bg-cover bg-center"
        style={{ backgroundImage: "url('src/assets/images/image16.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold font-kumbh text-center mb-6">
              24/7 customer support any time
              <br className="hidden lg:block" />
              of the day or night
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-[#03103D] text-white px-4 py-2 sm:px-6 sm:py-3  font-semibold hover:bg-[#FF5E18] transition">
                Free Quote
              </button>
              <Link to="/contact">
                <button className="bg-[#FF5E18] text-white px-4 py-2 sm:px-6 sm:py-3 font-semibold hover:bg-[#03103D] transition">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-16 left-0 right-0 bg-[#03103D] py-10 sm:px-10 lg:mx-20">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-white">
            {[
              { icon: Globe, value: "15K", label: "Worldwide client" },
              { icon: Building2, value: "189+", label: "Worldwide Branches" },
              { icon: Users, value: "950+", label: "Expert Company Staff" },
              { icon: CheckCircle, value: "15K", label: "Successful Deliver" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  index < 3 ? "border-r-2 border-white border-dotted" : ""
                } pr-4 sm:pr-6`}
              >
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 mb-2" />
                <p className="text-lg sm:text-2xl font-bold">{item.value}</p>
                <p className="text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
