import React from 'react';

const Contact = () => {
  return (
    <div className="font-sans">
      {/* Header Image */}
      <div className="relative h-[700px] bg-cover bg-center" style={{backgroundImage: "url('src/assets/images/image2.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl text-white lg:text-7xl font-bold font-kumbh mb-4">Contact Us</h1>
            <p className="text-xl text-white font-kumbh">See Our Daily News & Updates</p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 px-4 lg:px-32 mb-8 h-auto">
            <div className="bg-[#4B4E5A] p-6 ">
              <h2 className="text-2xl font-bold text-white mb-6 text-center font-inter">Get in Touch</h2>
              <form>
                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                    <input type="text" placeholder="First Name" className="w-full px-3 py-2 bg-[#4B4E5A] border-2 border-white text-white rounded font-noto" />
                  </div>
                  <div className="w-full md:w-1/2 px-2">
                    <input type="text" placeholder="Last Name" className="w-full px-3 py-2 bg-[#4B4E5A] border-2 border-white text-white rounded font-noto" />
                  </div>
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Email" className="w-full px-3 py-2 bg-[#4B4E5A] border-2 border-white text-white rounded font-noto" />
                </div>
                <div className="mb-4">
                  <input type="text" placeholder="Subject" className="w-full px-3 py-2 bg-[#4B4E5A] border-2 border-white text-white rounded font-noto" />
                </div>
                <div className="mb-6">
                  <textarea placeholder="Message" rows="6" className="w-full px-3 py-2 bg-[#4B4E5A] border-2 border-white text-white rounded font-noto"></textarea>
                </div>
                <button type="submit" className="bg-[#FF5E18] text-white font-noto px-6 py-2 hover:bg-orange-600 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/4 px-4">
            <div className="mb-2">
              <h3 className="text-xl font-bold text-[#FF5E18] font-noto">Address</h3>
              <p>203 Fake St. Mountain View,<br />San Francisco, California, USA</p>
            </div>
            <div className="mb-2">
              <h3 className="text-xl font-bold text-[#FF5E18] font-noto">Phone</h3>
              <p>+1 232 3235 324</p>
            </div>
            <div className="mb-14">
              <h3 className="text-xl font-bold text-[#FF5E18] font-noto">Email Address</h3>
              <p>youremail@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 font-noto">More Info</h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui, libero neque sed nulla.
              </p>
              <button className="bg-[#FF5E18] font-noto text-white px-6 py-2 hover:bg-orange-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;