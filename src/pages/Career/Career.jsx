import React from "react";

const TeamMember = ({ name, position, description, imageUrl }) => (
  <div className="flex flex-col items-center text-left p-4">
    <img src={imageUrl} alt={name} className="w-60 h-60 rounded-full mb-4" />
    <h3 className="text-lg font-bold font-inter">{name}</h3>
    <p className="text-sm font-semibold text-[#1C1919] mb-2">{position}</p>
    <p className="text-sm text-[#4B4E5A]">{description}</p>
  </div>
);

const IndustryCard = ({ title, imageUrl }) => (
  <div className="relative group overflow-hidden">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
      <h3 className="text-white text-xl font-bold font-noto">{title}</h3>
    </div>
  </div>
);

const JobListing = ({ title, company, location }) => (
  <div className="border-b border-black py-4">
    <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
      {/* Use flex-grow for company name to occupy remaining space */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-4 flex-1">
        <h3 className="text-[#FF5E18] font-semibold font-kumbh md:mb-0 md:flex-shrink-0 md:w-1/3">
          {title}
        </h3>
        <p className="text-[#4B4E5A] md:flex-grow text-left md:text-left ">
          {company}
        </p>
        <p className="text-[#4B4E5A] text-sm md:flex-shrink-0 md:w-1/5 text-right">
          {location}
        </p>
      </div>
    </div>
  </div>
);

const Career = () => {
  const teamMembers = [
    {
      name: "Christine Rooster",
      position: "CO-FOUNDER, PRESIDENT",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.",
      imageUrl: "src/assets/images/image4.webp",
    },
    {
      name: "Christine Rooster",
      position: "CO-FOUNDER, COO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.",
      imageUrl: "src/assets/images/image5.webp",
    },
    {
      name: "Christine Rooster",
      position: "MARKETING",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt.",
      imageUrl: "src/assets/images/image6.jpg",
    },
  ];

  const industries = [
    { title: "Cargo Ship", imageUrl: "src/assets/images/image7.jpg" },
    { title: "Warehousing", imageUrl: "src/assets/images/image8.jpg" },
    { title: "Storage", imageUrl: "src/assets/images/image9.jpg" },
    { title: "Air Transport", imageUrl: "src/assets/images/image3.webp" },
  ];

  const jobListings = [
    {
      title: "Supervisor - Civil",
      company: "Agility Logistics Parks",
      location: "As Sulay, Riyadh Province, Saudi Arabia",
    },
    {
      title: "Assistant Manager - Contract Administration",
      company: "Agility Logistics Parks",
      location: "Al Sulaibiya industrial 1, Al Jahra Governorate Kuwait",
    },
    {
      title: "Welder",
      company: "Agility Logistics Parks",
      location: "As Sulay, Riyadh Province, Saudi Arabia",
    },
    {
      title: "Command Center Administrator",
      company: "Agility Logistics Parks",
      location: "Al Dajeej, Al Farawniya Governorate Kuwait",
    },
    {
      title: "Finance Executive",
      company: "Agility Logistics Parks",
      location: "Hyderabad, Telangana, India",
    },
  ];
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
              CAREER
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold font-kumbh mb-4">
              WE MAKE <br />
              SHIPPING
            </h1>
            <p className="text-xs md:text-base lg:text-xl max-w-xl mx-auto md:mx-0">
              Vivamus Magna justo, lacinia eget consectetur sed, convellis at
              tellus. Quisque velit nisi pretium ut lacinia in, elementum id
              enim. Nulla quis lorem ut libero.
            </p>
          </div>
        </div>
        {/* Our Team */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl flex font-bold font-inter text-center justify-center mb-8 underline decoration-[#FF5E18] underline-offset-8 decoration-4">
            <img
              src="src/assets/images/logo.png"
              alt="Icon"
              className="mr-2 w-10 h-auto"
            />{" "}
            <span className="text-[#FF5E18]">OUR TEAM</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
        {/* Industries */}
        <div className="w-full px-0 py-8">
          <h2 className="text-3xl flex font-bold font-inter text-center justify-center mb-8 underline decoration-[#FF5E18] underline-offset-8 decoration-4">
            <img
              src="src/assets/images/logo.png"
              alt="Icon"
              className="mr-2 w-10 h-auto"
            />{" "}
            <span className="text-[#FF5E18] font-inter">INDUSTRIES</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
        </div>
        {/* Remaining */}
        <div className="container mx-auto px-10 py-8 max-w-7xl">
          <h2 className="text-2xl font-bold mb-6 font-inter">
            Recent Job Openings
          </h2>
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search Jobs..."
              className="border border-gray-300 rounded-md px-4 py-2 flex-grow"
            />
            <select className="border border-gray-300 rounded-md px-4 py-2">
              <option>Nothing Selected</option>
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2">
              <option>Nothing Selected</option>
            </select>
          </div>
          <div className="mb-6">
            {jobListings.map((job, index) => (
              <JobListing key={index} {...job} />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#FF5E18] text-white px-6 py-2 font-bold font-noto hover:bg-orange-600 transition-colors">
              VIEW ALL JOBS OPENING
            </button>
            <button className="bg-[#1C1919] text-white px-6 py-2 font-bold font-noto hover:bg-gray-800 transition-colors">
              SUBMIT RESUME TO JOIN OUR TALENT WORK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
