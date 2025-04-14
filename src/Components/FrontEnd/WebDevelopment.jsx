import React from "react";
import { motion } from "framer-motion";
import MonitorImage from "/src/assets/VIS New Layouts Images/VIS web development.png";
import StaticImg from "/src/assets/VIS New Layouts Images/Static web gif.png";
import DynamicImg from "/src/assets/VIS New Layouts Images/dyanamic gif.png";
import EcommerceImg from "/src/assets/VIS New Layouts Images/ecommerce gif.png";
import Stage1 from "/src/assets/VIS New Layouts Images/project-management_1087927.png";
import Stage2 from "/src/assets/VIS New Layouts Images/curve_2939047.png";
import Stage3 from "/src/assets/VIS New Layouts Images/app-development_2335265.png";
import Stage4 from "/src/assets/VIS New Layouts Images/usability-testing_17636773.png";
import Stage5 from "/src/assets/VIS New Layouts Images/laptop_8083334.png";
import PricingSection from "./PricingSection";
import { webPlans } from "./PricingData";

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
    <section className="bg-white text-black px-6 py-20 mt-18  md:px-20 ">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4 tracking-tight  md:text-left"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.4,
              delay: 0.1,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-[#0057FF] inline-block drop-shadow-sm"
            >
              Web
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Development
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            Give Better Visibility to your Business with the Dynamic &
            Responsive Websites to reach Millions of People and Boost your
            Business!!! Give a Try to launch your website within 2 Days.. !!!
            Vetri IT Systems Provides a Website within 2 Days..!!! Connect with
            Us to Boost Your Business Today!!!
          </motion.p>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-800 text-lg leading-relaxed"
          >
            We provide end-to-end website development services, starting with
            intuitive web design layouts that ensure a seamless user experience.
            Our process includes responsive design, front-end and back-end
            development, rigorous testing, and optimization for speed and
            security. From concept to launch, we deliver high-quality websites
            tailored to your business needs.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={MonitorImage}
            alt="monitor"
            className="w-[300px] md:w-[380px]"
          />
        </motion.div>
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:flex-nowrap lg:justify-between lg:gap-12"
        >
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-fit flex flex-col items-center shadow-xl rounded-md justify-center px-6 py-6 bg-[#FDEDEC] transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src={Stage1}
              alt=""
              className="w-12 h-12 object-cover transition-all transform hover:rotate-12"
            />
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-center w-28 mt-3 text-lg font-semibold text-[#5D5D5D]"
            >
              Requirement <br /> Stage
            </motion.p>
          </div>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-fit flex flex-col items-center shadow-xl rounded-md justify-center px-6 py-6 bg-[#C8FADD] transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src={Stage2}
              alt=""
              className="w-12 h-12 object-cover transition-all transform hover:rotate-12"
            />
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-center w-28 mt-3 text-lg font-semibold text-[#5D5D5D]"
            >
              Design <br /> Stage
            </motion.p>
          </div>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-fit flex flex-col items-center shadow-xl rounded-md justify-center px-6 py-6 bg-[#E3EDFF] transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src={Stage3}
              alt=""
              className="w-12 h-12 object-cover transition-all transform hover:rotate-12"
            />
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-center w-28 mt-3 text-lg font-semibold text-[#5D5D5D]"
            >
              Development <br /> Stage
            </motion.p>
          </div>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-fit flex flex-col items-center shadow-xl rounded-md justify-center px-6 py-6 bg-[#FFF6D3] transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src={Stage4}
              alt=""
              className="w-12 h-12 object-cover transition-all transform hover:rotate-12"
            />
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-center w-28 mt-3 text-lg font-semibold text-[#5D5D5D]"
            >
              Testing <br /> Stage
            </motion.p>
          </div>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-fit flex flex-col items-center shadow-xl rounded-md justify-center px-6 py-6 bg-[#D5EAFF] transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src={Stage5}
              alt=""
              className="w-12 h-12 object-cover transition-all transform hover:rotate-12"
            />
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-center w-28 mt-3 text-lg font-semibold text-[#5D5D5D]"
            >
              Deployment <br /> Stage
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-10 mt-10 items-center"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h3
            className="text-xl md:text-2xl font-bold mb-2 tracking-tight  md:text-left"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
              delay: 0.1,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[#0057FF] inline-block drop-shadow-sm"
            >
              Static
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Website
            </motion.span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-800 text-lg leading-relaxed"
          >
            A static website is a simple and reliable solution for service-based
            projects. It delivers content quickly without relying on databases
            or dynamic processing. Ideal for portfolios, company profiles, or
            informational pages, it ensures fast performance and low maintenance
            costs.
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
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h3
            className="text-xl md:text-2xl font-bold mb-2 tracking-tight  md:text-left"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
              delay: 0.1,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[#0057FF] inline-block drop-shadow-sm"
            >
              Dynamic
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Website
            </motion.span>
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-gray-800 text-lg leading-relaxed"
          >
            A dynamic website is an interactive platform that updates content in
            real time based on user inputs or actions. It uses databases and
            server-side scripting to deliver personalized experiences, making it
            ideal for service projects like user portals, e-commerce sites, or
            dashboards. Dynamic websites enhance engagement and provide
            scalable, efficient solutions for modern businesses.
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-10 mt-5 items-center"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.h3
            className="text-xl md:text-2xl font-bold mb-2 tracking-tight  md:text-left"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
              delay: 0.1,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[#0057FF] inline-block drop-shadow-sm"
            >
              E-Commerce
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Website
            </motion.span>
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-800 text-lg leading-relaxed"
          >
            An e-commerce website serves as a digital storefront, enabling
            businesses to showcase and sell products or services online. With
            secure payment gateways, intuitive navigation, and a seamless user
            experience, it ensures efficient transactions and customer
            satisfaction. Tailored to your business needs, it drives sales and
            enhances brand visibility.
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
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <PricingSection title="Web Development Plans" plans={webPlans} />
      </motion.div>
    </section>
  );
};

export default WebDevelopment;
