import React from "react";
import Nav from "../../components/Nav";
import Clock from "../../components/Clock";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export const metadata = {
  title: "About",
};

const About = () => {
  return (
    <div className="bg-[#c4c4c4] w-full max-w-full box-border text-[#1c1c1c] pb-40 overflow-x-hidden">

{/* Information */}
<motion.section
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full max-w-full px-[4%] md:px-[4%] lg:px-[2%] flex justify-between items-center text-[12px] sm:text-[14px] mt-2"
>
  {/* Left group: Coordinates + Clock */}
  <div className="flex items-center gap-3 sm:gap-4">
    <motion.p
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      50.9333° N, 6.9500° E
    </motion.p>
    
    <motion.span
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <Clock />
    </motion.span>
  </div>
  
  {/* Right: Close button */}
  <motion.a
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.4, duration: 0.5 }}
    href="/#top"
    className="relative group inline-flex items-center text-[#1c1c1c] dark:text-[#1c1c1c] gap-1"
  >
    <span className="text-[#1c1c1c] font-[700]">[CLOSE]</span>
    <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
  </motion.a>
</motion.section>

      {/* Quote */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-40 mx-10"
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl w-fit sm:w-200 md:text-4xl sm:text-3xl lg:text-5xl leading-snug mt-20 sm:mt-6 text-left text-[#333333] font-[700]"
        >
          Emotions are not just feelings,
          they are physical events that
          influence behavior.
        </motion.h2>

        <motion.h3
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-4 font-[800] uppercase"
        >
          [Candace B. Pert]
        </motion.h3>
      </motion.section>

     {/* About me */}
<section className="grid grid-cols-1 sm:grid-cols-2 mx-2 gap-12 lg:gap-60">
  <p></p>
  <motion.div
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="mx-4 sm:mx-10 dark:text-[#1c1c1c]"
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Image
        src={assets.about_irena}
        alt="Irena"
        className="hover:brightness-120"
        width={300}
        height={500}
      />
    </motion.div>
    <motion.h3
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="mt-4 font-[800] uppercase"
    >
      [About Me]
    </motion.h3>
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="text-md mt-2 leading-relaxed text-[#333333] w-full sm:w-[76%] sm:mr-4"
    >
      Hi, I'm Irena – part designer, part problem-solver, part magician. /* {" "}I specialize in simplifying complex systems and shaping them
      into intuitive digital experiences that feel natural and empowering.
      From consumer apps to mission-driven platforms, I design with
      empathy, precision, and a deep respect for the people on the other
      side of the screen.
    </motion.p>
  </motion.div>
</section> 

      <br />

      {/* Timeline */}
      <motion.hr
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-20 mb-10 mx-10 text-[#333333] origin-left"
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 mx-10"
      >
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-[800] uppercase"
        >
          [Experience]
        </motion.h2>

        <section>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-2 mb-4"
          >
            <p className="text-md text-[#333333]">2019–2023</p>
            <p className="text-md">Digital Designer</p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="grid grid-cols-2"
          >
            <p className="text-md text-[#333333]">2016–2019</p>
            <p className="text-md">Media Designer Digital/Print</p>
          </motion.div>
        </section>
      </motion.section>

      <motion.hr
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 mb-10 mx-10 text-[#333333] origin-left"
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 mx-10 mt-12"
      >
        <motion.h2
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-[800] uppercase"
        >
          [Education]
        </motion.h2>

        <section>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-2 mb-4"
          >
            <p className="text-md text-[#333333]">2024–2025</p>
            <p className="text-md">Front-End Development Specialization</p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="grid grid-cols-2 mb-4"
          >
            <p className="text-md text-[#333333]">2024</p>
            <p className="text-md">UX/UI Designer Certification</p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="grid grid-cols-2"
          >
            <p className="text-md text-[#333333]">2010–2015</p>
            <p className="text-md">Academy of Fine Arts</p>
          </motion.div>
        </section>
      </motion.section>

      <motion.hr
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 mb-10 mx-10 text-[#333333] origin-left"
      />

      {/* <section className="grid grid-cols-1 sm:grid-cols-2 mx-2 gap-60 mt-60 mx-10">
        <p className="font-[800] text-8xl text-[#333333]">᧖(• ᦢ •)ᦣ</p>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-10 dark:text-[#1c1c1c] w-[80%]"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="uppercase font-[800]"
          >
            [What does it mean?]
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-md mt-2 mr-4 leading-relaxed text-[#333333]"
          >
            This symbol represents the Year of the Water Monkey (1992), my birth
            year. Known for intelligence, adaptability, and curiosity, the Water
            Monkey reflects my mindset as a designer: I enjoy dissecting complex
            problems, exploring multiple perspectives, and iterating until I
            create solutions that are clear, thoughtful, and impactful. It's a
            reminder to be flexible, stay curious, and approach every project
            as an opportunity to learn and grow.
          </motion.p>
        </motion.div>
      </section> */}

                  <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center font-[700] text-[#333333] text-4xl sm:text-3xl md:text-4xl lg:text-6xl mt-40"
      >
        hello@madein92.xyz
      </motion.h2>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center uppercase font-[800] text-white/50 text-4xl sm:text-3xl md:text-4xl lg:text-6xl mt-40"
      >
        [Thank you.]
      </motion.h2>
    </div>
  );
};

export default About;
