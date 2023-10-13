import React from 'react';
import bgImg from "../../assets/image/background.png";
import logo from "../../assets/image/logo.png";
import { motion } from "framer-motion";

const Slide1 = (props) => {
  const { showSlide } = props;
  return (
    <div className="w-full h-full flex flex-col justify-center items-center z-10 absolute text-white">
      <motion.p
        className="text-[20px] sm:text-[40px] tracking-widest z-10 opacity-0"
        animate={!showSlide ? {} : { opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
          },
        }}
      >
        Content Marketing Agency for Impactful Brands
      </motion.p>
      <motion.p
        className="text-[16px] sm:text-[32px] italic tracking-wide z-10 opacity-0"
        initial={{ opacity: 0, scale: 0 }}
        animate={!showSlide ? {} : { opacity: 1, scale: 1 }}
        transition={{
          delay: 0.8,
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
          },
        }}
      >
        Genuine Conversations Cash
      </motion.p>
      <img src={bgImg} alt="background" className="w-full h-full absolute object-cover" />
      <img
        src={logo}
        alt="logo"
        className="w-12 h-12 sm:w-[220px] sm:h-[260px] absolute bottom-[30px] right-[30px]"
      />
    </div>
  );
};

export default Slide1;
