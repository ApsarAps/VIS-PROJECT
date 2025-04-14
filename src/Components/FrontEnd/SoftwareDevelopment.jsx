import React from "react";
import { motion } from "framer-motion";
import SoftwareImg from "/src/assets/VIS New Layouts Images/sntsoftware..gif";
import NativeImg from "/src/assets/VIS New Layouts Images/android-app-development.gif";
import HybridImg from "/src/assets/VIS New Layouts Images/Hybrid -app-development gif.gif";
import PwaImg from "/src/assets/VIS New Layouts Images/Beneficios-PWA.gif";
import WearableImg from "/src/assets/VIS New Layouts Images/Wearable img.gif";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  },
});
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

const SoftwareDevelopment = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20 mt-18 text-black space-y-16">
      <motion.div
        variants={fadeIn(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-xl md:text-3xl font-extrabold mb-4 tracking-tight  md:text-left"
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
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "tween",
                ease: "easeOut",
              }}
              className="text-[#0057FF] inline-block drop-shadow-sm"
            >
              Software
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                type: "tween",
                ease: "easeOut",
              }}
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
            Software Development Services involve designing, creating,
            deploying, and maintaining software applications tailored to meet
            specific business needs. These services cover a range of offerings,
            including custom application development, software consulting,
            system integration, cloud solutions, and mobile or web app
            development.They enable businesses to optimize processes, improve
            efficiency, and deliver seamless user experiences by leveraging
            cutting-edge technologies and agile methodologies. A focus on
            scalability, security, and innovation ensures that the solutions
            align with evolving market demands and organizational goals.
          </motion.p>
        </motion.div>
        <motion.img
          src={SoftwareImg}
          alt="Software Development"
          className="w-full max-w-sm mx-auto"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
      <motion.div
        variants={fadeIn(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.img
          src={NativeImg}
          alt="Native App"
          className="w-full max-w-sm mx-auto"
          whileHover={{ scale: 1.05 }}
        />
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-xl md:text-3xl font-extrabold mb-4 tracking-tight  md:text-left"
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
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "tween",
                ease: "easeOut",
              }}
              className="text-[#0057FF] inline-block drop-shadow-sm"
            >
              Native App
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                type: "tween",
                ease: "easeOut",
              }}
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
            Our Native App Development services offer end-to-end solutions to
            bring your app ideas to life. From concept and design to development
            and deployment, we build high-performance, user-friendly apps for
            iOS, Android, and cross-platform environments. Whether you're
            launching a startup or enhancing an existing business, our team
            ensures seamless functionality, modern UI/UX, and scalable
            architecture tailored to your goals.
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-xl md:text-3xl font-extrabold mb-4 tracking-tight  md:text-left"
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
              Hybrid App
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
            Our hybrid app development services combine the power of web and
            native technologies to deliver high-performance mobile apps that
            work seamlessly across both Android and iOS platforms. We use modern
            frameworks like Flutter and React Native to create cost-effective,
            scalable, and feature-rich applications, helping businesses reach a
            wider audience with a single codebase.
          </motion.p>
        </motion.div>
        <motion.img
          src={HybridImg}
          alt="Hybrid App"
          className="w-full max-w-sm mx-auto"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
      <motion.div
        variants={fadeIn(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.img
          src={PwaImg}
          alt="PWA"
          className="w-full max-w-sm mx-auto"
          whileHover={{ scale: 1.05 }}
        />
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-xl md:text-3xl font-extrabold mb-4 tracking-tight  md:text-left"
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
              Progressive Web App
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
            Our Progressive Web App development services deliver fast, reliable,
            and engaging web experiences that work seamlessly across all
            devices. PWAs combine the best of web and mobile apps, offering
            offline access, push notifications, and app-like performance-without
            the need for an app store. We build PWAs that enhance user
            engagement and boost performance while reducing development costs.
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-xl md:text-3xl font-extrabold mb-4 tracking-tight  md:text-left"
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
              Wearable and Embedded
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Software
            </motion.span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            We specialize in developing smart, efficient software solutions for
            wearable devices and embedded systems. Our services cover everything
            from fitness trackers and smartwatches to loT devices and industrial
            controllers. With a focus on low power consumption, real-time
            performance, and seamless connectivity, we create custom firmware
            and applications that integrate perfectly with hardware to deliver
            intuitive, data-driven user experiences.
          </motion.p>
        </motion.div>
        <motion.img
          src={WearableImg}
          alt="Wearable App"
          className="w-full max-w-sm mx-auto"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </section>
  );
};

export default SoftwareDevelopment;
