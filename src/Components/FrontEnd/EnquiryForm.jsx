// <--Enquiry Form-->
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComments,
  FaLaptopCode,
} from "react-icons/fa";

const containerVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.5 },
  }),
};

const EnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/enquiry-submit/",
        formData
      );
      if (response.status === 201) {
        alert("Enquiry submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "",
        });
        onClose();
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit enquiry.");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-brightness-50 bg-opacity-40 px-4"
      initial="hidden"
      animate="visible"
      variants={backdropVariants}
    >
      <motion.div
        className="relative bg-white px-4 py-6 sm:p-6 rounded-xl w-[95%] sm:w-full max-w-md shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[#0057FF] text-gray-600 hover:text-white transition-all duration-300"
        >
          <FaTimes size={16} />
        </button>

        <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800 mb-5">
          Quick <span className="text-[#0057FF]">Enquiry</span>
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {[
            {
              icon: <FaUser />,
              placeholder: "Enter Name",
              type: "text",
              name: "name",
              value: formData.name,
            },
            {
              icon: <FaEnvelope />,
              placeholder: "Enter Email Address ",
              type: "email",
              name: "email",
              value: formData.email,
            },
            {
              icon: <FaPhone />,
              placeholder: "Enter Mobile Number",
              type: "tel",
              name: "phone",
              value: formData.phone,
            },
          ].map((field, i) => (
            <motion.div
              className="relative"
              key={i}
              custom={i}
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="absolute top-3 left-3 text-[#0057FF]">
                {field.icon}
              </span>
              <input
                type={field.type}
                name={field.name}
                value={field.value}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 border-sky-300 focus:ring-sky-300"
              />
            </motion.div>
          ))}

          <motion.div
            className="relative"
            custom={3}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <FaComments className="absolute top-3 left-3 text-[#0057FF]" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Send a Message"
              className="w-full min-h-[100px] pl-10 pr-4 py-2 border border-sky-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-300"
            ></textarea>
          </motion.div>

          <motion.div
            className="relative"
            custom={4}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <FaLaptopCode className="absolute top-3 text-[#0057FF] left-3" />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-sky-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              <option value="">Select a Service</option>
              <option>Web Development</option>
              <option>App Development</option>
              <option>Marketing</option>
            </select>
          </motion.div>

          <motion.div
            className="flex justify-center"
            custom={5}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0057FF] hover:bg-[#004ae0] cursor-pointer text-white font-semibold px-6 py-2 rounded transition duration-300"
            >
              Get a Quote
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default EnquiryForm;
