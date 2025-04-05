import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0057FF] text-white px-6 py-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm sm:text-base">
        <div>
          <h2 className="text-white font-bold text-2xl mb-2">Vetri</h2>
          <h2 className="text-white font-bold text-2xl mb-4">IT Systems</h2>
          <p className="font-semibold text-black mb-2">Follow Us</p>
          <div className="flex items-center space-x-4 text-white text-xl">
            <a href="#"><FaInstagram className="hover:scale-110 transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:scale-110 transition" /></a>
            <a href="#"><FaFacebookF className="hover:scale-110 transition" /></a>
          </div>
        </div>
        <div>
          <h3 className=" font-bold text-lg mb-4 text-black">Quick Links</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Plans & Pricing</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-white">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Software Development</a></li>
            <li><a href="#">Digital Marketing</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-bold text-lg mb-4">Contact Details</h3>
          <ul className="space-y-4 text-white">
            <li className="flex items-center space-x-3">
              <FaPhoneAlt />
              <span>8438558627, 8438558527</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope />
              <span>business@vetriit.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>VTS & VIS, April’s Complex,<br /> Shanthi Complex, Surandai.</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
