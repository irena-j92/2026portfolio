import { workData } from "../assets/assets";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[2%] scroll-mt-20 mt-40"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-2 uppercase font-[700]"
      >
        [Work]
      </motion.h2>

<div className="grid grid-cols-1 min-[700px]:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-2 mb-20">
        {workData.slice(0, 6).map((project, index) => {
          const position = index % 6;
          const hide = position === 4;
          const isBig = position === 2 || position === 3;
          const isSixth = index === 5;

          return (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
              className={`
                group
                cursor-pointer
                overflow-hidden
                {bg-[#333333]}
                ${isBig ? "md:col-span-1" : ''}
                ${hide ? "invisible" : ''}
              `}
            >
              {/* Image */}
              <Link href={project.link}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden ${
                    isBig ? "aspect-[3/4]" : "aspect-[2/2]"
                  }`}
                >
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    width={800}
                    height={800}
                    className="object-cover grayscale hover:grayscale-0 transition-transform duration-500 group-hover:scale-110"
                  />
                  {isSixth && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5, duration: 0.4 }}
                      className="absolute inset-0 left-4 top-4 flex items-center justify-center bg-white/30 w-26 h-8"
                    >
                      <p className="text-[#333333] uppercase font-[800] text-[12px]">Coming soon</p>
                    </motion.div>
                  )}
                </motion.div>
              </Link>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.15, duration: 0.5 }}
                className="flex items-start mt-2"
              >
                <div className="flex-1">
                  <Link href={project.link}>
                    <h2 className="font-semibold hover:text-[#c4c4c4] leading-snug">
                      {project.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-[#c4c4c4]">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Work;