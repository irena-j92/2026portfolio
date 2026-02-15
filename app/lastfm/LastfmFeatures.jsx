"use client";
import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";

const LastfmFeatures = () => {
  return (

    <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-center justify-center mt-10 lg:mt-20 mx-10">
    <div className="mx-10">
        <div className="bg-gradient-to-r from-[#333333] to-[#1c1c1c] mx-8 sm:mx-10 mb-10 px-4 py-4 w-60 text-center text-gray-400 rounded-xl">User profile</div>
        <div className="bg-gradient-to-r from-[#333333] to-[#1c1c1c] mx-10 sm:mx-20 mb-10 px-4 py-4 w-60 text-center text-gray-400 rounded-xl">Charts</div>
        <div className="bg-gradient-to-r from-[#333333] to-[#1c1c1c] mx-12 sm:mx-30 mb-10 px-4 py-4 w-60 text-center text-gray-400 rounded-xl">Compatibility</div>
        <div className="bg-gradient-to-r from-[#333333] to-[#1c1c1c] mx-8 sm:mx-10 mb-10 px-4 py-4 w-60 text-center text-gray-400 rounded-xl">Reports</div>
        </div>

<div className="mr-20 mb-14 sm:mb-0">
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-[500] bg-gradient-to-r from-gray-400 to-red-600
      bg-clip-text text-transparent leading-snug sm:leading-12 text-center ml-12 sm:ml-0 mb-4 lg:mb-10 sm:mt-10">Emphasizing engagement through thoughtful feature prioritization.</h2>
<div className="flex justify-center items-center">
  <Image
    src={assets.lastfm_person2}
    className="w-18 h-18 rounded border border-gray-600 -mr-2 z-10"
  />
  <Image
    src={assets.lastfm_person3}
    className="w-18 h-18 rounded border border-gray-600 -ml-6 z-10"
  />
    <Image
    src={assets.lastfm_person1}
    className="w-18 h-18 rounded border border-gray-600 -ml-8 z-20"
  />
</div>

      </div>

          <div>
        <div className="bg-gradient-to-r from-[#333333] to-[#1c1c1c] mx-10 sm:mx-20 mb-10 px-4 py-4 w-60 text-center text-gray-400 rounded-xl">Obsessions</div>
        <div className="bg-gradient-to-r from-[#333333] to-[#1c1c1c] mx-12 sm:mx-30 mb-10 px-4 py-4 w-60 text-center text-gray-400 rounded-xl">Labs</div>
        <div className="bg-gradient-to-r from-[#333333] to-[#1c1c1c] mx-10 sm:mx-20 mb-10 px-4 py-4 w-60 text-center text-gray-400 rounded-xl">Time Capsule</div>
        <div className="bg-gradient-to-r from-[#333333] to-[#1c1c1c] mx-8 sm:mx-10 mb-10 px-4 py-4 w-60 text-center text-gray-400 rounded-xl">Inbox</div>
        </div>

    </section>
  );
};

export default LastfmFeatures;
