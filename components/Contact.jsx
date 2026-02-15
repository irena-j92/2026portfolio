import Image from "next/image";
import { assets } from "../assets/assets";
import React, { useState } from "react";
import { motion } from "motion/react";
import { MoveRight } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending your message into the void... ✨");
    const formData = new FormData(event.target);

    formData.append("access_key", "af81119f-f8db-4480-b826-0394e1474302");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Voilà! Message sent! 🚀");
      event.target.reset();
    } else {
      console.log("Uh-oh! 🛑 Something went wrong.", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] scroll-mt-20 py-10"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center font-[600] leading-tight text-5xl sm:text-7xl mt-20 sm:mt-40"
      >
        Don't be a stranger. <span className="text-[#c4c4c4] font-[600]">Say hi!</span>
      </motion.h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-4xl mx-auto mt-10 sm:mt-20"
      >
        <div className="grid grid-cols-auto gap-4 mt-10 mb-4">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Your name"
            required
            className="flex-1 px-4 py-4 outline-none text-[#c4c4c4] border border-[#333333]
            bg-[#1c1c1c]"
            name="name"
          />

          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Your email"
            required
            className="flex-1 px-4 py-4 outline-none text-[#c4c4c4] border border-[#333333]
            bg-[#1c1c1c]"
            name="email"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows="8"
          placeholder="Type away, I'm listening!"
          required
          className="flex-1 px-4 py-4 outline-none text-[#c4c4c4] border border-[#333333] w-full
            bg-[#1c1c1c]"
          name="message"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-6 flex items-center justify-between gap-2 bg-[#333333] text-[#c4c4c4] mx-auto hover:bg-[#c4c4c4] hover:text-black
          duration-500 mt-4 mb-40"
        >
          Submit
          <MoveRight className="w-4" />
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
