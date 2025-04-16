// <--Footer-->
import React from "react";
import { motion } from "framer-motion";
import Logo from "/src/assets/VIS New Layouts Images/logo1.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const columnVariants = {
  hidden: (i) => {
    if (i === 0) return { opacity: 0, x: -50 };
    if (i === 3) return { opacity: 0, x: 50 };
    return { opacity: 0, y: 50 };
  },
  visible: (i) =>
    i !== undefined
      ? {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            delay: 0.2 + i * 0.2,
            duration: 0.6,
            ease: "easeOut",
          },
        }
      : {},
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0057FF] text-white px-4 sm:px-6 md:px-10 py-10"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-sm md:text-base">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnVariants}
          className="flex flex-col items-center sm:items-start text-center sm:text-left"
        >
          <img
            src={Logo}
            alt="Vetri IT Systems Logo"
            className="w-20 sm:w-24 md:w-28 bg-white rounded-full  lg:w-22 h-auto mb-2 sm:mb-4"
          />
          <h2 className="text-white font-bold text-2xl leading-tight sm:leading-snug">
            Vetri
          </h2>
          <h2 className="text-white font-bold text-2xl">IT Systems</h2>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnVariants}
        >
          <h3 className="font-bold text-black text-lg mb-3 sm:mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-white">
            {[
              "About Us",
              "Web Development",
              "Software Development",
              "Digital Marketing",
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{
                  x: 6,
                  color: "#ffd700",
                  textShadow: "0 0 8px rgba(255, 215, 0, 0.7)",
                }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <a href="/">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnVariants}
        >
          <h3 className="text-black font-bold text-lg mb-3 sm:mb-4">
            Contact Details
          </h3>
          <ul className="space-y-4 text-white">
            <li className="flex items-center gap-3 flex-wrap">
              <FaPhoneAlt />
              <span>8438558627, 8438558527</span>
            </li>
            <li className="flex items-center gap-3 flex-wrap">
              <FaEnvelope />
              <span>business@vetriit.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <span className="leading-snug">
                VTS & VIS, April’s Complex,
                <br />
                Shanthi Complex, Surandai.
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnVariants}
        >
          <h3 className="text-black font-bold text-lg mb-3 sm:mb-4">
            Follow Us
          </h3>
          <div className="flex items-center gap-4 text-white text-xl">
            {[FaInstagram, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{
                  scale: 1.25,
                  rotate: 5,
                  boxShadow: "0 0 10px rgba(255,255,255,0.8)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-2 rounded-full hover:bg-white hover:text-[#0057FF] transition-all duration-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
