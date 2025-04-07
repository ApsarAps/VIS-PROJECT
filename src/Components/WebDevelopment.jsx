import React from "react";
import { motion } from "framer-motion";

// Import your images here
import MonitorImage from "/src/assets/VIS New Layouts Images/VIS web development.png";
import StaticImg from "/src/assets/VIS New Layouts Images/Static web gif.png";
import DynamicImg from "/src/assets/VIS New Layouts Images/dyanamic gif.png";
import EcommerceImg from "/src/assets/VIS New Layouts Images/ecommerce gif.png";

const WebDevelopment = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="bg-white text-black px-6 md:px-20 py-20 mt-16">
      {/* Web Development Intro */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.2 }}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-[#0057FF]">Web</span> Development
          </h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            Give Better Visibility to your Business with the Dynamic & Responsive Websites to reach
            Millions of People and Boost your Business!!! Give a Try to launch your website within 2
            Days.. !!! Vetri IT Systems Provides a Website within 2 Days..!!! Connect with Us to
            Boost Your Business Today!!!
          </motion.p>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-800 text-lg leading-relaxed"
          >
            We provide end-to-end website development services, starting with intuitive web design
            layouts that ensure a seamless user experience. Our process includes responsive design,
            front-end and back-end development, rigorous testing, and optimization for speed and
            security. From concept to launch, we deliver high-quality websites tailored to your
            business needs.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <img src={MonitorImage} alt="monitor" className="w-[300px] md:w-[380px]" />
        </motion.div>
      </motion.div>

      {/* Static Website */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-10 mt-10 items-center"
      >
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.3 }}>
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            <span className="text-[#0057FF]">Static</span> Website
          </h3>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-800 text-lg leading-relaxed"
          >
            A static website is a simple and reliable solution for service-based projects. It
            delivers content quickly without relying on databases or dynamic processing. Ideal for
            portfolios, company profiles, or informational pages, it ensures fast performance and
            low maintenance costs.
          </motion.p>
        </motion.div>
        <motion.img
          src={StaticImg}
          alt="static"
          className="w-full max-w-md mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>

      {/* Dynamic Website */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-10 mt-20 items-center"
      >
        <motion.img
          src={DynamicImg}
          alt="dynamic"
          className="w-full max-w-md mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" transition={{ duration: 0.6, delay: 0.3 }}>
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            <span className="text-[#0057FF]">Dynamic</span> Website
          </h3>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-800 text-lg leading-relaxed"
          >
            A dynamic website is an interactive platform that updates content in real time based on
            user inputs or actions. It uses databases and server-side scripting to deliver
            personalized experiences, making it ideal for service projects like user portals,
            e-commerce sites, or dashboards. Dynamic websites enhance engagement and provide
            scalable, efficient solutions for modern businesses.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* E-Commerce Website */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-10 mt-5 items-center"
      >
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" transition={{ duration: 0.7, delay: 0.3 }}>
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            <span className="text-[#0057FF]">E-Commerce</span> Website
          </h3>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-800 text-lg leading-relaxed"
          >
            An e-commerce website serves as a digital storefront, enabling businesses to showcase
            and sell products or services online. With secure payment gateways, intuitive
            navigation, and a seamless user experience, it ensures efficient transactions and
            customer satisfaction. Tailored to your business needs, it drives sales and enhances
            brand visibility.
          </motion.p>
        </motion.div>
        <motion.img
          src={EcommerceImg}
          alt="ecommerce"
          className="w-full max-w-md mx-auto"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>
    </section>
  );
};

export default WebDevelopment;
