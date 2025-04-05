import React from "react";
import PersonImage from "/src/assets/VIS New Layouts Images/VIS Home page img.png"; 
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="w-full px-4 md:px-12 lg:px-20 py-30 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#0057FF]">Technology</span> is best when
            <br /> it brings people together.
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            At <span className="text-[#0057FF] font-medium">Vetri IT Systems</span>, we specialize in providing
            advanced technology solutions tailored to meet the unique needs of every business.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">20+</h3>
              <p className="text-gray-600">Projects</p>
            </div>
            <div className="border-l border-gray-400 h-full mx-2" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">20+</h3>
              <p className="text-gray-600">Clients</p>
            </div>
            <div className="border-l border-gray-400 h-full mx-2" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">30+</h3>
              <p className="text-gray-600">Technologies</p>
            </div>
          </div>
          <Link
            to="/get-started"
            className="inline-block bg-[#0057FF] text-white font-semibold text-lg px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={PersonImage}
            alt="People working"
            className="w-[85%] max-w-md md:max-w-lg lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
