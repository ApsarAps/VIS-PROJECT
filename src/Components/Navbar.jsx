import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "/src/assets/VIS New Layouts Images/logo1.png";

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: "About Us", to: "/about" },
    { label: "Web Development", to: "/web-development" },
    { label: "Software Development", to: "/software-development" },
    { label: "Digital Marketing", to: "/digital-marketing" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 12 }}
      className="w-full fixed top-0 left-0 bg-white shadow-lg z-50"
    >
      <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-4 md:mb-0 flex-grow"
        >
          <Link to="/">
            <motion.img
              src={Logo}
              alt="Logo"
              className="h-20 w-auto  cursor-pointer"
              whileHover={{ rotate: [0, 3, -3, 0], scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </Link>
        </motion.div>

        {/* Hamburger Menu (small screen - right) */}
        <div className="md:hidden flex items-center justify-end w-full">
          <button
            className="text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-gray-700"></span>
              <span className="block w-8 h-0.5 bg-gray-700"></span>
              <span className="block w-8 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center gap-4 lg:gap-12 font-medium text-lg text-gray-700 md:block`}
        >
          {navLinks.map((item, i) => (
            <motion.div
              key={item.to}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={linkVariants}
              className="group relative"
            >
              <Link
                to={item.to}
                className="hover:text-[#0057FF] transition-colors duration-300"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0057FF] group-hover:w-full transition-all duration-300 origin-left"></span>
              </Link>
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 md:mt-0 px-7 cursor-pointer py-1 bg-[#0057FF] text-white font-semibold rounded hover:bg-[#004ae0] transition"
            onClick={() => alert("Enquiry button clicked!")}
          >
            Enquiry
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
