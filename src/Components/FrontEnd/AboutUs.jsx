import React from "react";
import { motion } from "framer-motion";
import VisionIcon from "/src/assets/VIS New Layouts Images/VIS Vision.png";
import MissionIcon from "/src/assets/VIS New Layouts Images/VIS mission.png";
import AboutImage from "/src/assets/VIS New Layouts Images/VIS About us.png";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const iconPulse = {
  animate: {
    y: [0, -8, 0],
    scale: [1, 1.05, 1],
    transition: {
      repeat: Infinity,
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const AboutUs = () => {
  return (
    <section className="px-6 mt-20 py-20 md:px-20 bg-white text-black overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 xl:grid-cols-2 xl:gap-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInLeft}>
          <motion.h2
            className="text-[26px] md:text-[32px] xl:text-[36px] font-semibold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-[#0057FF] font-bold">About</span> Us
          </motion.h2>
          <motion.p
            className="text-[16px] md:text-[18px] xl:text-[20px] leading-[30px] text-[#000000] font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Vetri IT Systems is a dynamic IT solutions provider, specializing in
            cutting-edge technology services. We deliver innovative software
            development, IT consulting, and digital transformation solutions
            tailored to meet diverse business needs. Committed to excellence, we
            empower organizations with reliable, scalable, and cost-effective
            technology solutions.
          </motion.p>
        </motion.div>

        <motion.div className="flex justify-center" variants={fadeInRight}>
          <motion.img
            src={AboutImage}
            alt="About Illustration"
            className="max-w-[320px] w-full xl:max-w-[400px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-7xl py-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 xl:grid-cols-2 xl:gap-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-[#D5EAFF] p-8 pt-14 rounded-xl shadow-lg text-center relative"
          variants={fadeInUp}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <motion.div
            className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-[#0057FF] p-2 rounded-full shadow-xl"
            variants={iconPulse}
            animate="animate"
          >
            <img src={VisionIcon} alt="Vision" className="w-14 p-2 h-14" />
          </motion.div>
          <motion.h3
            className="text-lg xl:text-xl font-bold mb-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our <span className="text-[#0057FF]">Vision</span>
          </motion.h3>
          <motion.p
            className="text-[15px] xl:text-[16px] text-gray-800 leading-[28px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            To be a globally recognized leader in delivering innovative IT
            solutions that transform businesses and create a sustainable impact.
            We envision a future where technology seamlessly empowers
            organizations to achieve their goals, enhance customer experiences,
            and drive growth. By staying ahead of emerging trends and fostering
            creativity, we aim to set new benchmarks in the IT industry,
            contributing to a digitally connected and efficient world.
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-[#D5EAFF] p-8 pt-14 rounded-xl shadow-lg text-center relative"
          variants={fadeInUp}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <motion.div
            className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-[#0057FF] p-2 rounded-full shadow-xl"
            variants={iconPulse}
            animate="animate"
          >
            <img src={MissionIcon} alt="Mission" className="w-14 p-2 h-14" />
          </motion.div>
          <motion.h3
            className="text-lg xl:text-xl font-bold mb-4 mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our <span className="text-[#0057FF]">Mission</span>
          </motion.h3>
          <motion.p
            className="text-[15px] xl:text-[16px] text-gray-700 leading-[28px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            At Vetri IT Systems, our mission is to harness the power of
            technology to enable businesses to unlock their full potential. We
            are committed to providing tailored, cutting-edge solutions that
            address complex challenges, streamline operations, and enhance
            productivity. By prioritizing quality, collaboration, and customer
            satisfaction, we strive to build long-lasting partnerships based on
            trust and innovation. Our dedication extends to nurturing talent,
            embracing diversity, and fostering a culture of continuous learning
            and improvement to deliver excellence at every step.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
