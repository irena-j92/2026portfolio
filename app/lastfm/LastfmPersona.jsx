import React from "react";
import { assets } from "../../assets/assets";
import Image from "next/image";
import { BriefcaseBusiness, Heart, MapPin, GraduationCap } from "lucide-react";

const LastfmPersona = () => {
  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-0 lg:mt-10 mx-4 sm:mx-10">
        {/* Brad */}
        <div className="bg-[#333333] w-full py-6 items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-8 sm:mx-10 gap-8">
            {/* Image */}
            <div className="relative w-full h-full sm:w-[340px] sm:h-[340px] mt-4 rounded-lg overflow-hidden border border-gray-600">
              <Image
                src={assets.lastfm_brad}
                alt="Brad Image"
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Text on top */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-white text-lg font-semibold mb-1">
                  Brad, 38
                </h3>
                <p className="text-gray-300 text-sm">
                  <BriefcaseBusiness className="flex inline-flex w-4 h-4 mr-1" />
                  <span className="mr-2">Tattoo Artist</span>
                  <Heart className="flex inline-flex w-4 h-4 mr-1" />
                  <span className="mr-2">Married</span>
                  <MapPin className="flex inline-flex w-4 h-4 mr-1" /> Sydney,
                  AU
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-lg text-gray-300 bg-[#1c1c1c] px-6 sm:px-10 w-full h-full sm:w-85 sm:h-85 mb-3 sm:mb-0">
              <p className="mt-6 sm:mt-10 text-white text-lg font-semibold">
                Motivation
              </p>
              <div className="mt-6 bg-[#E42900] w-58 h-1"></div>
              <p>Discovering new music</p>
              <div className="mt-4 bg-[#E42900] w-60 h-1"></div>
              <p>Upcoming events updates</p>
              <div className="mt-4 bg-[#E42900] w-46 h-1"></div>
              <p>Stats and reports check</p>
              <div className="mt-4 bg-[#E42900] w-38 h-1"></div>
              <p>Supporting the service</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 mx-10 gap-10 text-gray-300">
            <div className="mt-12 sm:mt-4 w-fit h-fit sm:w-80 sm:h-80 sm:mr-10">
              <p className="sm:mt-8 text-white text-lg font-semibold">
                User Needs
              </p>
              <p className="sm:mt-2">Suggestions based on music taste</p>
              <p className="sm:mt-2">Easier napp navigation</p>
              <p className="sm:mt-2">More in-app functions</p>
              <p className="sm:mt-2">Detailed statistics</p>
              <p className="sm:mt-2">Personalized reports</p>
            </div>

            <div className="sm:mt-4 w-full h-full sm:w-80 sm:h-80 mr-10 text-gray-300 mb-6 sm:mb-0">
              <p className="sm:mt-8 text-white text-lg font-semibold">
                User Pains
              </p>
              <p className="sm:mt-2">Using website to update profile</p>
              <p className="sm:mt-2">App crashing</p>
              <p className="sm:mt-2">Inaccurate scrobble information</p>
              <p className="sm:mt-2">Service not offering more features</p>
              <p className="sm:mt-2">Little to no updates</p>
            </div>
          </div>
        </div>

        {/* Christa */}
        <div className="bg-[#333333] w-full py-6 items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-8 sm:mx-10 gap-8">
            {/* Image */}
            <div className="relative w-full h-full sm:w-[340px] sm:h-[340px] mt-4 rounded-lg overflow-hidden border border-gray-600">
              <Image
                src={assets.lastfm_christa}
                alt="Christa Image"
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Text on top */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-white text-lg font-semibold mb-1">
                  Christa, 19
                </h3>
                <p className="text-gray-300 text-sm">
                  <GraduationCap className="flex inline-flex w-5 h-5 mr-1" />{" "}
                  <span className="mr-2">Student</span>{" "}
                  <Heart className="flex inline-flex w-4 h-4 mr-1" />{" "}
                  <span className="mr-2">Dating</span>{" "}
                  <MapPin className="flex inline-flex w-4 h-4 mr-1" /> Montreal,
                  CA
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-lg text-gray-300 bg-[#1c1c1c] px-6 sm:px-10 w-full h-full sm:w-85 sm:h-85 mb-3 sm:mb-0">
              <p className="mt-6 sm:mt-10 text-white text-lg font-semibold">
                Motivation
              </p>
              <div className="mt-6 bg-[#E42900] w-46 h-1"></div>
              <p>Online music library</p>
              <div className="mt-4 bg-[#E42900] w-34 h-1"></div>
              <p>Genre exploration</p>
              <div className="mt-4 bg-[#E42900] w-46 h-1"></div>
              <p>Compatibility check</p>
              <div className="mt-4 bg-[#E42900] w-58 h-1"></div>
              <p>Streaming favorite artists</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 mx-10 gap-10 text-gray-300">
            <div className="mt-12 sm:mt-4 w-fit h-fit sm:w-80 sm:h-80 sm:mr-10">
              <p className="sm:mt-8 text-white text-lg font-semibold">
                User Needs
              </p>
              <p className="mt-2">An app she can use on the go</p>
              <p className="mt-2">Modern, user-friendly UI</p>
              <p className="mt-2">Interactions with others</p>
              <p className="mt-2">Detailed compatibility reports</p>
              <p className="mt-2">Fun while using the app</p>
            </div>

            <div className="sm:mt-4 w-full h-full sm:w-80 sm:h-80 mr-10 text-gray-300 mb-6 sm:mb-0">
              <p className="sm:mt-8 text-white text-lg font-semibold">
                User Pains
              </p>
              <p className="mt-2">Expensive pro membership</p>
              <p className="mt-2">Pro doesn't offer unique features</p>
              <p className="mt-2">App being laggy</p>
              <p className="mt-2">Scrobble data not always accurate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LastfmPersona;
