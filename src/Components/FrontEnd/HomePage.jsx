// <--HomePage-->
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PersonImage from "/src/assets/VIS New Layouts Images/VIS Home page img.png";
import BestImg from "/src/assets/VIS New Layouts Images/VIS img 2.png";
import IconImg1 from "/src/assets/VIS New Layouts Images/VIS on time delivery.png";
import IconImg2 from "/src/assets/VIS New Layouts Images/VIS quality services.png";
import IconImg3 from "/src/assets/VIS New Layouts Images/VIS leads.png";
import IconImg4 from "/src/assets/VIS New Layouts Images/VIS Price.png";
import IconImg5 from "/src/assets/VIS New Layouts Images/VIS support.png";
import IconImg6 from "/src/assets/VIS New Layouts Images/VIS proven result.png";
import RiyaImg from "/src/assets/VIS New Layouts Images/riya.png";
import JohanImg from "/src/assets/VIS New Layouts Images/johan.png";
import DanishImg from "/src/assets/VIS New Layouts Images/danish.png";
import RitikaImg from "/src/assets/VIS New Layouts Images/ritika.png";
import workProcessImage from "/src/assets/VIS New Layouts Images/VIS Work Process.png";
import ProjectImg1 from "/src/assets/VIS New Layouts Images/VIS Nagercoil Builders.png";
import ProjectImg2 from "/src/assets/VIS New Layouts Images/VTS projects img.png";
import ProjectImg3 from "/src/assets/VIS New Layouts Images/VIS Rushi project.png";
import ProjectImg4 from "/src/assets/VIS New Layouts Images/VIS VDC Project.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const HomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  const faqData = [
    {
      question: "What services does Vetri IT Systems offer?",
      answer:
        "Vetri IT Systems provides software development, cloud solutions, IT consulting, and infrastructure management tailored to your business needs.",
    },
    {
      question: "How does Vetri IT ensure data security?",
      answer:
        "We implement advanced encryption, firewall systems, regular audits, and backup strategies to protect client data from unauthorized access and cyber threats.",
    },
    {
      question: "What industries does Vetri IT support?",
      answer:
        "Vetri IT Systems works with clients from healthcare, education, finance, and retail sectors, offering customized IT solutions to match their unique challenges.",
    },
    {
      question: "How can I contact Vetri IT for support?",
      answer:
        "You can reach our support team via email or phone. We also offer 24/7 ticket-based support for existing clients to ensure quick resolution of any IT issues.",
    },
  ];
  return (
    <motion.section
      className="w-full bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-20 mt-16 lg:py-15 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-snug"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#0057FF]">Technology</span> is best when{" "}
            <br />
            it brings people together.
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            At <span className="text-[#0057FF] text-lg">Vetri IT Systems</span>,
            we specialize in providing advanced technology solutions tailored to
            meet the unique needs of every business.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              { label: "Projects", value: "20+" },
              { label: "Clients", value: "20+" },
              { label: "Technologies", value: "30+" },
            ].map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <motion.div
                    className="border-l border-gray-400 h-6"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.value}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.label}</p>
                </motion.div>
              </React.Fragment>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/about"
              className="inline-block bg-[#0057FF] text-white font-semibold text-lg px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={PersonImage}
            alt="Team working"
            className="w-[85%] max-w-md md:max-w-lg lg:max-w-full"
          />
        </motion.div>
      </div>
      <div className="px-4 md:px-10 lg:px-10 mt-2">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={BestImg}
              alt="Best"
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-semibold mb-6 text-center lg:text-left"
              variants={fadeUp}
              custom={0}
            >
              Why We Are The <span className="text-[#0057FF]">Best</span>
              <br />
              From Others?
            </motion.h2>

            <ul className="space-y-4 text-base sm:text-lg">
              {[
                { icon: IconImg1, label: "On Time Delivery" },
                { icon: IconImg2, label: "Quality Services" },
                { icon: IconImg3, label: "Expertise that Leads" },
                { icon: IconImg4, label: "Affordable Price" },
                { icon: IconImg5, label: "Best Customer Support" },
                { icon: IconImg6, label: "Proven Results and happy clients" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-4"
                  custom={index + 1}
                  variants={fadeUp}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-10 h-10 p-2 bg-[#D5EAFF] rounded-full"
                  />
                  <span>{item.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="mt-10 px-4 text-center"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h3 className="text-xl sm:text-2xl font-semibold">
          Our <span className="text-[#0057FF]">Work Process</span>
        </h3>
        <p className="mt-4 text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
          Our innovative process combines cutting-edge technology with creative
          problem-solving, ensuring tailored solutions that drive efficiency and
          growth for our clients.
        </p>
      </motion.div>
      <motion.div
        className="mt-4 px-4 lg:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src={workProcessImage}
          alt="Work Process"
          className="w-full h-auto object-cover rounded-xl"
        />
      </motion.div>
      <motion.div
        className="mt-2 px-4 lg:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-2">
          Our <span className="text-[#0057FF]">Client Testimonial</span>
        </h3>
        <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          What Our Customers Are Saying. Hear from the people who trust us to
          deliver excellence every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {[
            {
              img: RiyaImg,
              name: "Riya",
              feedback:
                "Vetri IT Systems built a custom CRM for us that improved our team collaboration and tracking. The results were instant!",
            },
            {
              img: JohanImg,
              name: "Johan",
              feedback:
                "The cloud migration handled by Vetri IT was smooth and stress-free. Our operations are now faster and more secure.",
            },
            {
              img: DanishImg,
              name: "Danish",
              feedback:
                "Their support team is extremely responsive. Whenever we needed help, they were just a call away. Amazing service!",
            },
            {
              img: RitikaImg,
              name: "Ritika",
              feedback:
                "We approached Vetri IT for a mobile app solution, and they delivered a sleek, user-friendly app right on schedule!",
            },
          ].map(({ img, name, feedback }, i) => (
            <motion.div
              key={name}
              className="bg-[#EAF1FF] rounded-lg p-5 flex items-start gap-4 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute right-0 top-0 h-full w-[6px] bg-[#0057FF] rounded-tr-lg rounded-br-lg"></div>
              <img
                src={img}
                alt={name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg mb-1">{name}</h4>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "{feedback}"
                </p>
                <div className="text-yellow-400 mt-2 text-sm">★★★★★</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="mt-10 px-4 sm:px-6 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          Our <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {[ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4].map(
            (img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Project ${idx + 1}`}
                className="rounded-lg shadow-lg w-full"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            )
          )}
        </div>
      </motion.div>
      <motion.div
        className="py-16 px-4 sm:px-8 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently <span className="text-blue-600">Asked</span> Questions
        </h2>
        <p className="text-center text-gray-600 max-w-2xl text-lg mx-auto mb-10">
          We aim to provide clarity and transparency, ensuring you feel
          confident at every stage of your journey. If you have further
          questions, don’t hesitate to contact us directly!
        </p>

        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#E3EDFF] text-gray-800 px-4 py-3 mb-4 rounded-lg transition-all duration-300"
          >
            <div className="flex items-center g justify-between">
              <p className="text-sm sm:text-base font-medium">
                {item.question}
              </p>
              <button
                className="text-white bg-blue-600 w-8 h-8 min-w-[2rem] min-h-[2rem] flex items-center justify-center rounded-full text-base sm:text-lg shadow-md"
                onClick={() => toggleItem(index)}
              >
                {openIndex === index ? "-" : "+"}
              </button>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2 text-sm text-gray-700"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HomePage; 