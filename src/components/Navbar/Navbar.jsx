import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MapPin, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white relative">
      <div className="mx-auto flex flex-col md:flex-row">
        <div
          className="w-full md:w-1/4 lg:w-1/3 bg-[#FF5E18] font-kumbh font-bold text-5xl px-4 py-6 md:px-16 md:py-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
        >
          LOGISTIC
        </div>

        <div className="w-full md:w-3/4">
          {/* Top bar */}
          <div className="py-2 px-4 md:px-8 bg-[#03103D] lg:-ml-11 lg:pl-20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-4 md:space-y-0">
                <span className="flex items-center text-sm md:text-base text-white hover:text-[#FF5E18]">
                  <FaPhoneAlt size={20} className="mr-2 text-white" /> +44 20 7930
                  8205
                </span>
                <span className="flex items-center text-sm md:text-base text-white hover:text-[#FF5E18]">
                  <MapPin size={20} className="mr-2 text-white" /> 450 Strand,
                  Charing Cross, PK
                </span>
              </div>
              {/* Social icons */}
              <div className="flex space-x-4 mt-2 md:mt-0">
                <a className="text-xl">|</a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-xl hover:text-[#FF5E18]"
                >
                  <FaFacebookF size={25} />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-xl hover:text-[#FF5E18]"
                >
                  <FaTwitter size={25} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-xl hover:text-[#FF5E18]"
                >
                  <FaLinkedinIn size={25} />
                </a>
              </div>
            </div>
          </div>

          {/* Main navbar */}
          <nav className="bg-white text-black py-4 px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Navigation Links */}
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="hover:text-[#FF5E18] font-bold text-lg">
                  HOME
                </Link>
                <Link
                  to="/services"
                  className="hover:text-[#FF5E18] font-bold text-lg"
                >
                  SERVICES
                </Link>
                <Link
                  to="/career"
                  className="hover:text-[#FF5E18] font-bold text-lg"
                >
                  CAREER
                </Link>
                <Link
                  to="/tracking"
                  className="hover:text-[#FF5E18] font-bold text-lg"
                >
                  TRACKING
                </Link>
                <Link
                  to="/about"
                  className="hover:text-[#FF5E18] font-bold text-lg"
                >
                  ABOUT
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-[#FF5E18] font-bold text-lg"
                >
                  CONTACT US
                </Link>
              </div>
              {/* Search and Menu Toggle */}
              <div className="flex items-center space-x-4">
                <button aria-label="Search">
                  <Search size={25} className="hover:text-[#FF5E18]" />
                </button>
                <button
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1C1919] text-[#FF5E18] py-4 px-4 text-center">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-[#03103D] font-bold text-lg">
              HOME
            </Link>
            <Link
              to="/services"
              className="hover:text-[#03103D] font-bold text-lg"
            >
              SERVICES
            </Link>
            <Link
              to="/carrer"
              className="hover:text-[#03103D] font-bold text-lg"
            >
              CAREER
            </Link>
            <Link
              to="/tracking"
              className="hover:text-[#03103D] font-bold text-lg"
            >
              TRACKING
            </Link>
            <Link 
              to="/about" className="hover:text-[#03103D] font-bold text-lg">
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#03103D] font-bold text-lg"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
