import { assets } from "../assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { icons, Download, ArrowDown } from "lucide-react";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="top"
      className="w-full px-1 py-10 scroll-mt-20 bg-transparent dark:bg-darkTheme"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-[44px] sm:text-[44px] md:text-8xl lg:text-8xl uppercase text-center mx-4 sm:mx-0 mt-40 md:mt-40 lg:mt-40 sm:mt-30 font-bold text-[#fafafa]"
      >
        [Made*in*1992]
      </motion.h2>

      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2">
        <div className="flex justify-center">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-4xl sm:text-5xl mt-12 sm:mt-12 text-center leading-tight"
          >
            <motion.span
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-[#c4c4c4] font-[600] font-manrope inline-block"
            >
              Hi, I'm Irena.&nbsp;
            </motion.span>
            <motion.span
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="font-[600] inline-block"
            >
              I design intuitive,
            </motion.span>
            <br />
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="font-[600] inline-block"
            >
              meaningful digital experiences.
            </motion.span>
          </motion.h3>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center mt-20 mb-20"
        >
          <a
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            href="/irenajurisic_resume.pdf"
            download
            className="px-5 py-4 w-32 bg-[#333333] text-[#fafafa] flex items-center gap-2 hover:bg-[#c4c4c4] hover:text-[#1c1c1c] duration-300"
          >
            Resume <Download className="w-6 h-6" />
          </a>
        </motion.div>

        {/* <div className="flex justify-center mt-20 mb-12">
          <motion.a
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            href="/#projects"
            className="w-16 h-16 flex justify-center bg-[#333333] text-[#c4c4c4] hover:bg-[#c4c4c4] hover:text-[#1c1c1c] duration-300"
          >
            <ArrowDown className="flex justify-center items-center w-6 h-6 mt-5" />
          </motion.a>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Header;