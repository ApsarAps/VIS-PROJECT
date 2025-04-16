// <--PlanCard-->
import { motion } from "framer-motion";

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

const PlanCard = ({ planName, price, features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0px 12px 32px rgba(0, 87, 255, 0.25)",
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1],
        type: "spring",
        stiffness: 100,
      }}
      className="bg-[#E3EDFF] w-full max-w-[360px] md:max-w-sm rounded-b-full shadow-xl flex flex-col items-center overflow-hidden mx-auto min-h-[680px]"
    >
      <div className="relative w-full h-28 sm:h-32 bg-[#0057FF] rounded-b-full flex items-center justify-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-white text-lg sm:text-xl font-bold"
        >
          {planName}
        </motion.h3>
        <motion.div
          variants={iconPulse}
          animate="animate"
          className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-300 w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-full shadow-xl border-2 border-white z-10"
        >
          <p className="text-black text-base sm:text-lg font-bold text-center">
            ₹{price}
          </p>
        </motion.div>
      </div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delay: 0.7, staggerChildren: 0.1 },
          },
        }}
        className="mt-14 px-4 sm:px-6 py-6 sm:py-8 space-y-3 text-sm sm:text-base font-semibold text-black flex-grow"
      >
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-start gap-2"
          >
            <span className="text-[#0057FF] text-lg mt-1">✔</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>

      <div className="mb-8">
        <motion.button
          whileTap={{ scale: 0.96 }}
          whileHover={{ y: -3, backgroundColor: "#004bcc" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="bg-[#0057FF] text-white px-5 py-2 rounded-md font-semibold hover:shadow-md text-sm sm:text-base"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PlanCard;
