import React from "react";
import { Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1C1919] text-white px-6 py-12 md:py-20"> 
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"> 
          <h2 className="text-xl md:text-2xl font-bold font-inter mb-4 md:mb-0 text-center md:text-left">
            Subscribe Our Newsletter Get Update
          </h2>
          <div className="flex w-full md:w-auto mt-4 md:mt-0"> 
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-[#4B4E5A] text-white p-2 flex-grow md:w-64"
            />
            <button className="bg-[#FF5E18] text-white p-2 px-4">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="border-white mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-noto mb-4">LOGISTIC</h3>
            <p className="text-white md:w-80"> 
              Pellentesque non dolor vitae lacus fringilla consequat vel quis
              enim. Cras venenatis mollis neque in fringilla. In vitae
            </p>
            <div className="flex mt-6 space-x-4 justify-center md:justify-start"> 
              <a
                href="#"
                className="bg-black p-2 rounded-full hover:text-[#FF5E18]"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="bg-black p-2 rounded-full hover:text-[#FF5E18]"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-black p-2 rounded-full hover:text-[#FF5E18]"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-black p-2 rounded-full hover:text-[#FF5E18]"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold font-noto text-white underline decoration-[#FF5E18] underline-offset-8 decoration-4 mb-4">
              Office Address
            </h3>
            <p className="mt-4 hover:text-[#FF5E18]">
              3891 Ranchview Dr. Richardson,
            </p>
            <p className="mt-2 hover:text-[#FF5E18]">California 62639</p>
            <p className="mt-2 hover:text-[#FF5E18]">
              Mon-Fri : 09.00 am-05.00 pm
            </p>
            <p className="mt-2 hover:text-[#FF5E18]">+99 (456) 568 65</p>
            <a
              href="mailto:info.support@gmail.com"
              className="mt-2 block hover:text-[#FF5E18]"
            >
              info.support@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-xl font-bold font-noto text-white underline decoration-[#FF5E18] underline-offset-8 decoration-4 mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-[#FF5E18]">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FF5E18]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#FF5E18]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF5E18]">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

