"use client";

import React from "react";
import { assets, workData } from "../../assets/assets";
import Image from "next/image";

const CakePersona = () => {
  return (
    <div>
      <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mx-10">
        {/* Arrione */}
        <div className="bg-[#333333] w-full py-6 items-center justify-center">
          <div className="mx-10">
            <img
              src="https://cdn.prod.website-files.com/67729e3b88c5426b1c81d7e2/6782decc4b92192a06e9e15e_arrione-stairs.avif"
              alt="Arrione Image"
              className="mb-4 mt-4 rounded-lg"
              width={320}
              height={320}
            />

            <div className="leading-snug">
              <p className="font-semibold text-lg text-[#FF7EC5]">Arrione</p>
              <p>Gen Z Student</p>
            </div>
            {/* <h2 className='text-lg text-gray-300 font-semibold mt-10'>From Chaos to Clarity</h2> */}
            <p className="leading-relaxed mt-4 mb-6 text-gray-300">
              Ambitious, experience-driven, paying off student loans. Wants
              stress-free saving that fits her lifestyle.
            </p>
          </div>
        </div>

        {/* David */}
        <div className="bg-[#333333] w-full py-6 items-center justify-center">
          <div className="mx-10">
            <img
              src="https://cdn.prod.website-files.com/67729e3b88c5426b1c81d7e2/6782df94deb3c248c26a30f1_david-window.avif"
              alt="David Image"
              className="mb-4 mt-4 rounded-lg"
              width={320}
              height={320}
            />

            <div className="leading-snug">
              <p className="font-semibold text-lg text-[#FF7EC5]">David</p>
              <p>Millennial Parent</p>
            </div>
            {/* <h2 className='text-lg text-gray-300 font-semibold mt-10'>From Chaos to Clarity</h2> */}
            <p className="leading-relaxed mt-4 mb-6 text-gray-300">
              Managing household chaos. Needs shared clarity and collaborative
              budgeting.
            </p>
          </div>
        </div>

        {/* Sam */}
        <div className="bg-[#333333] w-full py-6 items-center justify-center">
          <div className="mx-10">
            <img
              src="https://cdn.prod.website-files.com/67729e3b88c5426b1c81d7e2/6782e0a9f872b2b85fc27626_sam-phone.avif"
              alt="Sam Image"
              className="mb-4 mt-4 rounded-lg"
              width={320}
              height={320}
            />

            <div className="leading-snug">
              <p className="font-semibold text-lg text-[#FF7EC5]">Sam</p>
              <p>Early Career</p>
            </div>
            {/* <h2 className='text-lg text-gray-300 font-semibold mt-10'>From Chaos to Clarity</h2> */}
            <p className="leading-relaxed mt-4 mb-6 text-gray-300">
              Just started working. Needs effortless tracking and habit-building
              without complexity.
            </p>
          </div>
        </div>

        {/* Tamsin */}
        <div className="bg-[#333333] w-full py-6 items-center justify-center">
          <div className="mx-10">
            <img
              src="https://cdn.prod.website-files.com/67729e3b88c5426b1c81d7e2/6782e3f4d661643d04b02437_Tamsin-Stairs.avif"
              alt="Tamsin Image"
              className="mb-4 mt-4 rounded-lg"
              width={320}
              height={320}
            />

            <div className="leading-snug">
              <p className="font-semibold text-lg text-[#FF7EC5]">Tamsin</p>
              <p>Gen X Planner</p>
            </div>
            {/* <h2 className='text-lg text-gray-300 font-semibold mt-10'>From Chaos to Clarity</h2> */}
            <p className="leading-relaxed mt-4 mb-6 text-gray-300">
              Balancing her finances and caregiving. Needs foresight, control,
              and peace of mind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CakePersona;
