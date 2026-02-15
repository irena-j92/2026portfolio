"use client";
import React, { useState } from "react";
import { assets, serviceData } from "../assets/assets";
import Accordion from "./Accordion";
import { motion } from "framer-motion";

const Services = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full w-max-full scroll-mt-20 overflow-x-hidden"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-2 uppercase font-[800] mx-10 mt-20"
      >
        [Services]
      </motion.h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 mx-10 gap-20 overflow-x-hidden leading-relaxed">
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-[80%] text-[#c4c4c4]"
        >
          I combine visual storytelling, UX thinking, and digital design to craft experiences that are both meaningful and effective.
          With a background in graphic design and growing expertise in UX/UI, I bring both aesthetic sensitivity and structured problem-solving to every project. I design with clarity, purpose, and impact in mind.
        </motion.p>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {serviceData.map((data, index) => {
            return (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 + index * 0.15, duration: 0.5 }}
              >
                <Accordion
                  open={index === open}
                  title={data.title}
                  className="mx-10"
                  description={data.description}
                  toggle={() => toggle(index)}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Services;