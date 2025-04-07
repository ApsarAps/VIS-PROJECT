import React from "react";
import { motion } from "framer-motion";
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
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0057FF] text-white px-6 py-10 relative z-0"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm sm:text-base">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnVariants}
        >
          <h2 className="text-white font-bold text-2xl mb-2">Vetri</h2>
          <h2 className="text-white font-bold text-2xl mb-4">IT Systems</h2>
          <p className="font-semibold text-black mb-2">Follow Us</p>
          <div className="flex items-center space-x-4 text-white text-xl">
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

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnVariants}
        >
          <h3 className="font-bold text-lg mb-4 text-black">Quick Links</h3>
          <ul className="space-y-2 text-white">
            {["Home", "About Us", "Services", "Contact Us", "Plans & Pricing", "Projects"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{
                    x: 6,
                    color: "#ffd700",
                    textShadow: "0 0 8px rgba(255, 215, 0, 0.7)",
                  }}
                  transition={{ type: "spring", stiffness: 250 }}
                >
                  <a href="#">{item}</a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnVariants}
        >
          <h3 className="text-black font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-white">
            {["Web Development", "Software Development", "Digital Marketing"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{
                  x: 6,
                  color: "#ffd700",
                  textShadow: "0 0 8px rgba(255, 215, 0, 0.7)",
                }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={columnVariants}
        >
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
              <span>
                VTS & VIS, April’s Complex,
                <br />
                Shanthi Complex, Surandai.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
