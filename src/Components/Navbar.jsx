import React from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/VIS New Layouts Images/logo1.png";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:justify-between text-center">
        <div className="mb-4 md:mb-0">
          <Link  to="/">
          <img
            src={Logo}
            alt="Logo"
            className="h-20 w-auto hover:scale-105 transition duration-300 ease-in-out mx-auto"
          />
          </Link>
          
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center lg:gap-12 gap-2 text-gray-600 font-medium text-lg">
          <Link to="/about" className="hover:text-[#0057FF] transition">
            About Us
          </Link>
          <Link to="/web-development" className="hover:text-[#0057FF] transition">
            Web Development
          </Link>
          <Link to="/software-development" className="hover:text-[#0057FF] transition">
            Software Development
          </Link>
          <Link to="/digital-marketing" className="hover:text-[#0057FF] transition">
            Digital Marketing
          </Link>
          <button
            onClick={() => alert("Enquiry button clicked!")}
            className="mt-2 md:mt-0 px-7 py-1 bg-[#0057FF] text-white font-semibold rounded hover:bg-[#0057FF] transition"
          >
            Enquiry
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
