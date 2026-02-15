import Image from "next/image";
import { assets, toolsData } from "../assets/assets";

export default function ToolsSlider() {
  return (
    <div className="overflow-hidden py-2 mx-10 mt-10">
      <div className="relative flex">
        {/* First set of logos */}
        <div className="flex animate-scroll gap-4 px-4 text-gray-600">
          {toolsData.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex items-center justify-center w-40 h-40 flex-shrink-0 grayscale transition-all duration-100"
            >
              <div
                alt={`Tool ${index + 1}`}
                className="w-10 h-10 [&>svg]:w-[40px] [&>svg]:h-[40px]"
              >
                {logo}
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex animate-scroll gap-4 px-4 text-gray-600">
          {toolsData.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex items-center justify-center w-40 h-40 flex-shrink-0 grayscale transition-all duration-100"
            >
              <div
                alt={`Tool ${index + 1}`}
                className="w-10 h-10 [&>svg]:w-[40px] [&>svg]:h-[40px]"
              >
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
