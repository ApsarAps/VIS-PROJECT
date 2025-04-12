import PlanCard from "./PlanCard";
import { motion } from "framer-motion";

const PricingSection = ({ heading = "Plans", plans = [] }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 sm:py-20"
    >
      <motion.h2
        className="text-center text-2xl sm:text-3xl font-bold mb-10 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        {heading} <span className="text-[#0057FF]">&</span> Pricing
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch gap-6 sm:gap-8 px-4 sm:px-6 md:px-10 lg:px-20">
        {plans?.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <PlanCard
              planName={plan.planName}
              price={plan.price}
              features={plan.features}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PricingSection;
