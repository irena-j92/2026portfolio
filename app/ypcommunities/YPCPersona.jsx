"use client";
import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";
import {
  ArrowLeft,
  ArrowUp,
  GraduationCap,
  Heart,
  MapPin,
} from "lucide-react";

const YPCPersona = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-0 relative mt-4 overflow-hidden mx-4 md:mx-10 rounded-xl">
      {/* Left side - Image */}
      <div className="relative w-full lg:w-2/5 lg:max-w-md">
        <Image
          src={assets.ypc_persona}
          alt="Maya Image"
          className="w-full h-64 sm:h-80 lg:h-full object-cover"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        {/* Text on top */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
          <h3 className="text-white text-xl md:text-2xl font-semibold">Maya, 23</h3>
          <p className="text-[#c4c4c4] text-sm md:text-md mt-1">
            🏺 History B.A. ❤️ Single 📍 Boston, MA
          </p>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-3/5 bg-[#333333] rounded-r-xl py-8 md:py-14 px-6 md:px-10">
        {/* Aspirations */}
        <div className="w-full text-base md:text-lg mb-8 md:mb-12">
          <h2 className="text-sm text-[#c4c4c4] uppercase font-bold mb-3">
            Aspirations
          </h2>
          <p className="italic mb-2">
            "I want to feel confident saying who I am and where I'm going, even
            if I'm still figuring out the details."
          </p>
          <p className="italic">
            "I want a clear direction, people who support me, and a chance to
            grow into something meaningful."
          </p>
        </div>

        {/* Main Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10 text-sm md:text-base leading-6 md:leading-7">
          {/* About */}
          <div>
            <h2 className="text-sm text-[#c4c4c4] uppercase font-bold mb-3">
              About
            </h2>
            <p>Location: Boston, MA</p>
            <p>Education: B.A. in History</p>
            <p>Employment status: Unemployed</p>
            <p>Relationship status: Single</p>
            <p>Living situation: Rents with roommates</p>
          </div>

          {/* Tech */}
          <div>
            <h2 className="text-sm text-[#c4c4c4] uppercase font-bold mb-3">
              Tech
            </h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="min-w-[110px]">Internet:</span>
              <div className="flex gap-1">
                <div className="bg-[#c4c4c4] rounded-full w-4 h-4"></div>
                <div className="bg-[#c4c4c4] rounded-full w-4 h-4"></div>
                <div className="bg-[#c4c4c4] rounded-full w-4 h-4"></div>
                <div className="bg-[#c4c4c4] rounded-full w-4 h-4"></div>
                <div className="border border-[#c4c4c4] rounded-full w-4 h-4"></div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="min-w-[110px]">Social Media:</span>
              <div className="flex gap-1">
                <div className="bg-[#c4c4c4] rounded-full w-4 h-4"></div>
                <div className="bg-[#c4c4c4] rounded-full w-4 h-4"></div>
                <div className="bg-[#c4c4c4] rounded-full w-4 h-4"></div>
                <div className="bg-[#c4c4c4] rounded-full w-4 h-4"></div>
                <div className="border border-[#c4c4c4] rounded-full w-4 h-4"></div>
              </div>
            </div>
          </div>

          {/* User Needs */}
          <div>
            <h2 className="text-sm text-[#c4c4c4] uppercase font-bold mb-3">
              User Needs
            </h2>
            <p>New life direction</p>
            <p>A supporting community</p>
            <p>In-person events</p>
            <p>Connecting online</p>
            <p>Expanding network</p>
          </div>

          {/* Frustrations */}
          <div>
            <h2 className="text-sm text-[#c4c4c4] uppercase font-bold mb-3">
              Frustrations
            </h2>
            <p>Fear of being judged or excluded</p>
            <p>Anxious about "falling behind"</p>
            <p>Networking events feel transactional or intimidating</p>
            <p>Unclear time commitment</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YPCPersona;