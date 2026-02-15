"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ArrowLeft, ArrowUp, BriefcaseBusiness, Heart } from "lucide-react";
import YPCPersona from "./YPCPersona";
import YPCProposition from "./YPCProposition";
import YPCSitemap from "./YPCSitemap";
import Other from "../../components/Other";
import YPCJourney from "./YPCJourney";

const YPCommunities = () => {
    const modalRef = useRef(null);
    const [showScrollButton, setShowScrollButton] = useState(false);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowScrollButton(true);
        } else {
          setShowScrollButton(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div ref={modalRef} className="overflow-x-hidden bg-[#1c1c1c]">
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#333333] hover:bg-[#c4c4c4] text-white hover:text-[#1c1c1c] shadow-lg transition-all duration-300 hover:transform hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}
      <Nav modalRef={modalRef} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full py-10 scroll-mt-20 mt-20 mx-10"
      >
        <a
          href="/#top"
          className="px-4 py-2 flex hover:text-[#1c1c1c] inline-flex bg-[#333333] hover hover:bg-[#c4c4c4] hover:scale-105 duration-300"
        >
          <ArrowLeft
            className="flex inline-flex items-center mt-1 mr-1"
            width={16}
          />
          Back
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex inline-flex mx-10 items-center gap-4 mb-20 mt-20"
      >
        <Image src={assets.ypc_logo} alt="Logo" className="w-16 h-16" />
        <div className="leading-relaxed">
          <h2 className="font-manrope text-2xl sm:text-4xl">
            YPCommunities
          </h2>
          <p className="text-[#c4c4c4] font-medium">UX/UI Design & Research</p>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight mb-12 mx-10 font-medium"
      >
        Bridging the gap between
        <br />
        people and their communities.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={assets.ypc_hero}
          alt="Hero YPCommunities"
          objectFit="cover"
          className="mt-10 w-auto h-auto px-10"
          onContextMenu={(e) => e.preventDefault()}
        />
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-left font-medium text-lg sm:text-2xl leading-relaxed grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 lg:mr-40 sm:mr-0 md:mr-40 mx-10"
      >
        <p>
          YPCommunities is a networking organization established to provide a
          platform where young professionals can connect with other young
          professionals with a heavy emphasis on professional development,
          volunteerism, and helping other professionals make the right
          connections.
        </p>
        <p></p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mt-10 mx-10"
      >
        <p></p>

        <div className="text-left grid grid-cols-2 sm:grid-cols-4 gap-2 text-lg mt-6 leading-relaxed ml-2">
          <div className="py-6 px-6 bg-[#333333] rounded-xl text-center">
            <h2 className="text-4xl">
              <span className="text-3xl">💼</span> 11
              <span className="text-3xl">%</span>
            </h2>
            <p className="text-sm text-[#c4c4c4] mt-1">unemployed</p>
          </div>

          <div className="py-6 px-6 bg-[#333333] rounded-xl text-center">
            <h2 className="text-4xl">
              🔌 16<span className="text-3xl">%</span>
            </h2>
            <p className="text-sm text-[#c4c4c4] mt-1">disconnected</p>
          </div>

          <div className="py-6 px-6 bg-[#333333] rounded-xl text-center">
            <h2 className="text-4xl">
              📡 58<span className="text-3xl">%</span>
            </h2>
            <p className="text-sm text-[#c4c4c4] mt-1">without network</p>
          </div>

          <div className="py-6 px-6 bg-[#333333] rounded-xl text-center">
            <h2 className="text-4xl">
              👥 48<span className="text-3xl">%</span>
            </h2>
            <p className="text-sm text-[#c4c4c4] mt-1">
              racial/ethnic diversity
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>

        <div className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mb-20">
          <p className="text-[#c4c4c4]">Analyzing the numbers</p>Research
          revealed key challenges for youth: 11% are unemployed, 16% feel
          disconnected, 58% lack a supporting network, and 48% report racial or
          ethnic diversity issues. These insights directly inform platform
          features that foster engagement, inclusion, and professional growth.
        </div>
      </motion.div>

      <YPCPersona />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>

        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">User Persona</p>Based on research,
          YPCommunities targets young adults navigating career, social, and
          cultural challenges. Personas capture key traits, motivations, and
          pain points, helping design features that address disconnection, lack
          of support, and career uncertainty.
        </div>
      </motion.div>

      <br />

      <YPCProposition />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10 mt-10 mb-20"
      >
        <p></p>

        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">Value Proposition</p>YPCommunities
          connects young adults to local networks, events, and support systems.
          It offers a safe space to explore opportunities, share experiences,
          and build meaningful connections while addressing social and cultural
          challenges.
        </div>
      </motion.div>

      <YPCJourney />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>

        <div className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mb-20">
          <p className="text-[#c4c4c4]">User Journey</p>The user journey maps
          typical interactions, from discovering events and news to joining
          conversations or submitting requests for local support. This
          highlights friction points and opportunities to create a smoother,
          more engaging experience.
        </div>
      </motion.div>

      <YPCSitemap />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>

        <div className="text-left text-lg leading-relaxed ml-2 mt-10">
          <p className="text-[#c4c4c4]">Information structure</p> Content is
          organized to balance clarity and accessibility, ensuring users can
          quickly find events, news, and community resources. Tabs, filters, and
          categorized sections reduce cognitive load and improve navigation
          across the site.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full px-4 md:px-8 sm:px-0 py-20 sm:py-20 items-center justify-center mt-10">
          <Image
            src={assets.ypc_landing}
            alt="Lastfm Grid"
            width={800}
            height={600}
            objectFit="cover"
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">Communicating the mission</p>The homepage
          communicates the organization's values and mission through a mix of
          media. Key metrics support these claims, and users are invited to join
          the community, creating an engaging and informative entry point.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full py-12 sm:py-20 flex items-center justify-center mt-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-3/5 h-auto block px-6 sm:px-0"
          >
            <source src="/assets/ypc_nav.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">Intuitive navigation</p>The main menu is
          accessed via a burger icon. An accessibility symbol is prominently
          displayed and color-coded to highlight the organization's commitment
          to inclusion.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full py-10 sm:py-20 min-h-[400px] flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-3/5 h-auto block px-6 sm:px-0"
          >
            <source src="/assets/ypc_about.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">Story & Team</p>This section shares the
          organization's backstory and introduces the team, providing context
          and building trust with users.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full py-20 min-h-[400px] mt-10 flex items-center justify-center">
          <Image
            src={assets.ypc_events}
            alt="YPC Events"
            width={860}
            height={480}
            objectFit="cover"
            className="px-10"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>

        <div className="text-left text-lg mt-6 leading-relaxed sm:ml-2">
          <p className="text-[#c4c4c4]">Discover local events</p>Users can view
          upcoming events in their local area. The event calendar allows
          planning ahead and also offers access to past events for reference.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full py-20 min-h-[400px] mt-20 flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-3/5 h-auto block px-6 sm:px-0"
          >
            <source src="/assets/ypc_news.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">Latest updates</p>YPMedia presents news
          and updates, with posts filtered by category. A clear and organized
          layout ensures users can quickly understand the content.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full py-20 min-h-[400px] mt-20 flex items-center justify-center">
          <Image
            src={assets.ypc_locations}
            alt="YPC Locations"
            width={860}
            height={480}
            objectFit="cover"
            className="px-10"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">Expanding reach</p>YPC operates across
          multiple regions. If a user's area isn't yet covered, they can submit
          a request via a simple form to help expand the organization's reach.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full py-20 min-h-[400px] mt-20 flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-3/5 h-auto block px-6 sm:px-0"
          >
            <source src="/assets/ypc_signup.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">Easy access</p>Sign up and login forms
          allow users to access their profiles using Google or Facebook
          accounts, streamlining account creation.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full py-20 min-h-[400px] mt-10 flex items-center justify-center">
          <Image
            src={assets.ypc_profile}
            alt="YPC Profile Events"
            width={960}
            height={680}
            objectFit="cover"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">Personalized event tracking</p>Profiles
          display users' upcoming and attended events. This information is
          private and visible only to the profile owner, ensuring
          confidentiality.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full py-20 min-h-[400px] mt-20 flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-3/5 h-auto block px-6 sm:px-0"
          >
            <source src="/assets/ypc_1000cuts.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">Real faces, real stories</p>1000 Cuts
          provides a platform for networking while addressing important topics.
          It highlights ongoing issues of racism and encourages members to share
          experiences and speak up.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full px-4 md:px-8 sm:px-0 py-8 sm:py-12 flex items-center justify-center mt-10">
          <Image
            src={assets.ypc_mobile}
            alt="YPC Mobile"
            width={1024}
            height={900}
            objectFit="cover"
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed ml-2">
          <p className="text-[#c4c4c4]">Mobile optimization</p>With most users
          accessing the site via mobile devices, the design prioritizes a
          smooth, responsive, and satisfying mobile experience.
        </div>
      </motion.div>

      <br />

      <Other currentProjectId={1} />

      <Footer />
    </div>
  );
};

export default YPCommunities;