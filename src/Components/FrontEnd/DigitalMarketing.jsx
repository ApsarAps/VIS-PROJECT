import React from "react";
import { motion } from "framer-motion";
import digital from "/src/assets/VIS New Layouts Images/Digital marketing gif.gif";
import seo from "/src/assets/VIS New Layouts Images/SEO GIF.gif";
import smm from "/src/assets/VIS New Layouts Images/Social media gif.gif";
import content from "/src/assets/VIS New Layouts Images/Content-Writer.gif";
import strategy from "/src/assets/VIS New Layouts Images/Digital-Marketing plan.gif";
import analytics from "/src/assets/VIS New Layouts Images/Google Analytics1.gif";
import email from "/src/assets/VIS New Layouts Images/Email-Marketing gif.gif";
import video from "/src/assets/VIS New Layouts Images/Video Marketing gif.gif";
import GoogleAd from "/src/assets/VIS New Layouts Images/Google ad gif.gif";
import PricingSection from "./PricingSection";
import { DigitalPlans } from "./PricingData";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
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

const DigitalMarketing = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20 mt-18 text-black space-y-16">
      <motion.div
        variants={fadeIn}
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
            className="text-xl md:text-2xl font-bold mb-4 tracking-tight  md:text-left"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
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
              Digital
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Marketing
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            Vetri It Systems excels in providing all types of digital marketing
            services. As a leading company in this field, we focus on enhancing
            the online presence of businesses and brands. We offer the best
            digital marketing services in Tirunelveli/Tenkasi, covering areas
            such as SEO, SMO, SMM, PPC, Google ads, and more. Our expert team is
            skilled in digital marketing strategies and knows how to improve
            your brand's visibility and value.
          </motion.p>
        </motion.div>
        <img
          src={digital}
          alt="Digital Marketing"
          className="w-full max-w-sm mx-auto"
        />
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <img src={seo} alt="SEO" className="w-full max-w-sm mx-auto" />
        <div>
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-4 tracking-tight  md:text-left"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
              delay: 0.1,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[#0057FF] inline-block drop-shadow-sm"
            >
              Search Engine Optimization
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              (SEO)
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            Search Engine Optimization (SEO) services help improve a website's
            visibility on search engines like Google, driving more organic
            traffic. These services include keyword research, on-page and
            off-page optimization, content creation, technical SEO, and
            link-building strategies. By aligning your website with search
            engine algorithms, SEO enhances rankings, boosts brand credibility,
            and attracts targeted audiences, ultimately increasing conversions
            and business growth.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-4 tracking-tight  md:text-left"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
              delay: 0.1,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[#0057FF] inline-block drop-shadow-sm"
            >
              Social Media
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Marketing
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            Social media management involves creating, scheduling, analyzing,
            and engaging with content across platforms like Facebook, Instagram,
            Linkedin, and Twitter to build a strong online presence. These
            services help businesses connect with their audience, drive
            engagement, and achieve marketing goals. From crafting compelling
            posts to running targeted ad campaigns, expert social media managers
            ensure your brand stays relevant, visible, and impactful in the
            digital space.
          </motion.p>
        </div>
        <img src={smm} alt="SMM" className="w-full max-w-sm mx-auto" />
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <img
          src={content}
          alt="Content Creation"
          className="w-full max-w-sm mx-auto"
        />
        <div>
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-4 tracking-tight md:text-left"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
              delay: 0.1,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-[#0057FF] inline-block drop-shadow-sm"
            >
              Content
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Creation
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            These services include blog writing, social media posts, website
            copy, video production, graphic design, and more. By aligning
            content with brand goals and audience preferences, they help drive
            traffic, boost engagement, and establish a strong online presence.
            Whether for marketing campaigns, educational materials, or
            storytelling, professional content creation ensures impactful and
            consistent messaging across platforms.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-4 tracking-tight md:text-left"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1,
              bounce: 0.3,
              delay: 0.1,
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="text-gray-900 inline-block"
            >
              Digital Media
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-[#0057FF] inline-block drop-shadow-sm"
            >
              Strategy
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              className="text-gray-900 inline-block"
            >
              & Plan
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            Digital media strategy and planning services focus on creating a
            roadmap to effectively utilize online channels and platforms to
            achieve business goals. These services include audience research,
            platform selection, content strategy, paid media planning, and
            performance analytics.
          </motion.p>
        </div>
        <img
          src={strategy}
          alt="Digital Strategy"
          className="w-full max-w-sm mx-auto"
        />
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <img
          src={analytics}
          alt="Analytics"
          className="w-full max-w-sm mx-auto"
        />
        <div>
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-4 tracking-tight md:text-left"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
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
              Google
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              className="text-gray-900 inline-block"
            >
              Analytics
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            It offers insights into visitor demographics, sources, behavior, and
            conversions, helping businesses optimize their online presence and
            marketing strategies. With features like real-time reporting,
            customizable dashboards, and integration with other Google tools
            like Ads and Search Console, Google Analytics enables data-driven
            decision-making for better audience engagement and ROl.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-4 tracking-tight  md:text-left"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
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
              Email
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Marketing
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            These platforms offer tools for designing professional emails,
            automating messages, managing subscriber lists, and tracking
            performance metrics like open and click-through rates. They enable
            businesses to nurture leads. promote products, and build lasting
            customer relationships efficiently. Popular email marketing services
            include features like A/B testing, segmentation, and integrations
            with other tools, ensuring campaigns are effective and scalable.
            Video Marketing
          </motion.p>
        </div>
        <img
          src={email}
          alt="Email Marketing"
          className="w-full max-w-sm mx-auto"
        />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <img
          src={video}
          alt="Video Marketing"
          className="w-full max-w-sm mx-auto"
        />
        <div>
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-4 tracking-tight  md:text-left"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
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
              Video
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Marketing
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            Video marketing services help businesses create engaging,
            high-quality video content to promote their brand, products, or
            services. From concept development and scriptwriting to production
            and distribution, these services leverage storytelling visual
            appeal, and targeted strategies to captivate audiences. Whether
            through social media, websites, or email campaigns, video marketing
            boosts engagement, drives conversions, and builds stronger
            connections with customers.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-4 tracking-tight  md:text-left"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
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
              Google Ad
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-gray-900"
            >
              Grant
            </motion.span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-4 text-gray-800 text-lg leading-relaxed"
          >
            Google Ad Grants is a program designed to help nonprofit
            organizations amplify their impact by providing free advertising on
            Google Search. This service enables nonprofits to raise awareness,
            attract donors, and recruit volunteers by utilizing Google Ads'
            powerful tools and targeting capabilities.
          </motion.p>
        </div>
        <img
          src={GoogleAd}
          alt="Email Marketing"
          className="w-full max-w-sm mx-auto"
        />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <PricingSection title="Digital Marketing Plans" plans={DigitalPlans} />
      </motion.div>
    </section>
  );
};

export default DigitalMarketing;
