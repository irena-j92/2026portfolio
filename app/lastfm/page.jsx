"use client"
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ArrowLeft, ArrowUp } from "lucide-react";
import Other from "../../components/Other";
import LastfmAnalysis from "./LastfmAnalysis";
import LastfmPersona from "./LastfmPersona";
import LastfmFeatures from "./LastfmFeatures";
import MuxPlayer from "@mux/mux-player-react";

const Lastfm = () => {
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
        className="flex inline-flex mx-10 items-center gap-4 mb-10 sm:mb-20 mt-10 sm:mt-20"
      >
        <Image src={assets.lastfm_logo} alt="Logo" className="w-16 h-16" />
        <div className="leading-relaxed">
          <h2 className="font-manrope text-2xl sm:text-4xl">Last.fm Pro</h2>
          <p className="text-[#c4c4c4] font-medium">UX/UI Design & Research</p>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight mb-12 mx-10 font-medium"
      >
        Proving that music counts
        <br className="leading-tight" />
        even two decades later.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={assets.lastfm_hero}
          alt="Hero Lastfm"
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
          Last.fm has a loyal following, but their current mobile app is lacking
          originality and hasn't been updated in a while. To be able to bring in
          new users while also exciting existing ones, Last.fm decided to step
          up their game by improving their app and overall user experience.
        </p>
        <p></p>
      </motion.div>

      {/* Numbers */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 mt-6 mx-10"
      >
        <div className="text-left text-lg mt-6 leading-relaxed">
          <p></p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-12 mt-0 sm:mt-10 sm:ml-2">
          <div className="w-30 mr-24">
            <h2 className="text-6xl font-semibold text-[#E42900]">
              80<span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm text-[#c4c4c4]">
              employed in the creative field
            </p>
          </div>

          <div className="w-30 mr-24">
            <h2 className="text-6xl font-semibold text-[#E42900]">
              <span className="text-4xl">~</span>40
            </h2>
            <p className="leading-snug mt-1 text-sm w-40 text-[#c4c4c4]">
              average age range of interviewees
            </p>
          </div>

          <div className="w-30 mr-24">
            <h2 className="text-6xl font-semibold text-[#E42900]">
              90<span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm w-34 text-[#c4c4c4]">
              use Spotify as their streaming service
            </p>
          </div>

          <div className="w-30 mr-24">
            <h2 className="text-6xl font-semibold text-[#E42900]">
              60<span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm text-[#c4c4c4]">
              2-21 years using Last.fm
            </p>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mt-10 mx-10"
      >
        <p></p>

        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mb-20">
          <p className="text-[#c4c4c4]">Analyzing the numbers</p>The collected
          information is based on 15 participants from the following countries:
          Canada (3), the USA (3), Mexico, Thailand, Australia, and Belgium. 45%
          use iPhones, another 45% Samsung devices, and the remaining 10%
          alternatives like Google Pixel or Oppo. All of the respondents agreed
          that they would pay for a membership if it included more features.
        </p>
      </motion.div>

      <br />

      <LastfmPersona />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>

        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2">
          <p className="text-[#c4c4c4]">User Persona</p> Since the average age
          range goes from 20 to 60, the users probably vary a lot. Still, there
          were some shared interests, I've found during my research, like the
          preference for rock and alternative music. While creating the
          personas, I've also focused on the younger audience, since they are
          the ones who grew up with technology and are more likely to appreciate
          a neatly designed interface. That's why I made sure that this product
          caters to them as well.
        </p>
      </motion.div>

      <br />
      
      <LastfmAnalysis />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>

        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2">
          <p className="text-[#c4c4c4]">Competitive Analysis</p>The strength of
          the service lies in its uniqueness. Most of the statistic-based
          services focus on a particular music platform, whereas Last.fm is
          flexible – you are in charge of selecting your preferred music player.
          Still, there are features from the competition that could be
          reinvented and reused by Last.fm to further improve the user
          experience.
        </p>
      </motion.div>

      <br />

      <LastfmFeatures />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>

        <p className="text-left text-lg leading-relaxed sm:ml-2 lg:mb-20">
          <p className="text-[#c4c4c4]">Setting priorities</p>The existing mobile
          app offered only a limited set of features, while the website provided
          a more comprehensive experience and competitors had their own
          extensive catalogs. To address this, the design process was organized
          into three phases, prioritizing features based on user value and
          impact.
        </p>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 mt-10 mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.lastfm_home}
            alt="Lastfm Home"
            width={300}
            height={700}
            objectFit="cover"
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.lastfm_menu}
            alt="Lastfm Menu"
            width={300}
            height={700}
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
        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2">
          <p className="text-[#c4c4c4]">Getting around the app</p>Looking at the home screen,
          we are able to navigate through the app via the bottom navigation and
          the hidden menu. The bottom navigation holds the central features of
          the app, that will most likely be used the most. Meanwhile, the menu
          offers more features, that will hopefully tie the user down to the
          app.
        </p>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] px-4 w-full px-4 py-12 sm:py-20 mt-10 items-center justify-center">
          <Image
            src={assets.lastfm_profile}
            alt="Last.fm Profile"
            width={300}
            height={700}
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

        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2">
          <p className="text-[#c4c4c4]">Reimagined profile experience</p>Currently, Last.fm
          profiles can only be viewed on the web, which made translating the
          experience into a mobile interface a unique challenge. The goal was to
          preserve the richness of the profile while adapting it to a clean,
          intuitive app layout. The widget below the bio section is
          customizable: users can choose to display their Top Track, their
          current Obsession, or both (accessible via swipe). This allows for
          personalization while keeping the interface uncluttered.
        </p>
      </motion.div>

            <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 mt-10 mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.lastfm_followers}
            alt="Lastfm Followers"
            width={300}
            height={700}
            objectFit="cover"
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.lastfm_inbox}
            alt="Lastfm Inbox"
            width={300}
            height={700}
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
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        <p></p>
        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mx-10">
          <p className="text-[#c4c4c4]">Building social connectivity</p>To
          create a more complete and web-like experience within the app,
          follower/following lists and an inbox feature were introduced. Both
          screens include search functionality, allowing users to quickly find
          specific people or conversations. This improves usability and makes
          navigating larger networks seamless.
        </p>
      </motion.div>

            <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] px-4 w-full px-4 py-12 sm:py-20 mt-10 items-center justify-center">
          <Image
            src={assets.lastfm_obsessions}
            alt="Last.fm Obsessions"
            width={300}
            height={700}
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
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        <p></p>
        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mx-10">
          <p className="text-[#c4c4c4]">Visualizing musical identity</p>Obsessions are a central
          part of the Last.fm identity. Instead of presenting them as a static
          list, they are displayed in a dynamic image wall featuring the user's
          previous favorites. Tapping on any item allows users to view detailed
          information about the track or artist, making the experience more
          immersive and visually engaging.
        </p>
      </motion.div>

            <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 mt-10 mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.lastfm_user}
            alt="Lastfm User Profile"
            width={300}
            height={700}
            objectFit="cover"
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.lastfm_compatibility}
            alt="Lastfm Compatibility"
            width={300}
            height={700}
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
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        <p></p>
        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mx-10">
          <p className="text-[#c4c4c4]">Taste matching</p>Beyond viewing their
          own profile, users can explore other profiles, connect with others,
          and compare music tastes. A compatibility score is displayed below
          each user's bio. By tapping on the score, users can access a detailed
          breakdown explaining how it was calculated, creating transparency and
          encouraging engagement.
        </p>
      </motion.div>

            <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] px-4 w-full px-4 py-12 sm:py-20 mt-10 items-center justify-center">
          <Image
            src={assets.lastfm_search}
            alt="Last.fm Search"
            width={300}
            height={700}
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
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        <p></p>
        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mx-10">
          <p className="text-[#c4c4c4]">Frictionless music discovery</p>The main search
          feature enables users to explore Last.fm's database directly within
          the app and stay up to date with the latest music trends. Before
          entering a query, users are presented with trending artists, tracks,
          and profiles at a glance — encouraging discovery and reducing
          friction.
        </p>
      </motion.div>

            <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 mt-10 mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.lastfm_labs}
            alt="Lastfm Labs"
            width={300}
            height={700}
            objectFit="cover"
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.lastfm_generator}
            alt="Lastfm Personality Generator"
            width={300}
            height={700}
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
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        <p></p>
        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mx-10">
          <p className="text-[#c4c4c4]">
            Experimental engagement
          </p>
          The Labs section was one of the most creative and challenging aspects
          of this project. It expands on experimental features and introduces
          playful tools that enhance user engagement. One of these tools is the
          Personality Type Generator, which assigns users a personality based on
          their listening habits.
        </p>
      </motion.div>

            <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full py-10 lg:py-10 md:py-8 sm:py-6 px-6 mt-10 items-center justify-center">
          <Image
            src={assets.lastfm_personalities}
            alt="Last.fm Personalities"
            width={980}
            height={800}
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
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        <p></p>
        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mx-10">
          <p className="text-[#c4c4c4]">Dynamic personality insights</p>A total
          of 12 personality types were created. Each type is accompanied by a
          surrealist-inspired illustration and a short, playful description.
          Unlike the annual personality recap on the web platform, users can
          generate their personality type at any time — especially if their
          music taste evolves significantly.
        </p>
      </motion.div>

            <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 mt-10 mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.lastfm_capsule}
            alt="Lastfm Time Capsule"
            width={300}
            height={700}
            objectFit="cover"
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.lastfm_capsule_stats}
            alt="Lastfm Time Capsule Stats"
            width={300}
            height={700}
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
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        <p></p>
        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mx-10">
          <p className="text-[#c4c4c4]">Nostalgia by design</p>Time Capsule is a
          nostalgic feature that allows users to revisit what they were
          listening to on the exact same date one, two, or more years ago. It
          offers a meaningful way to reflect on personal music history.
        </p>
      </motion.div>

            <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] px-4 w-full px-4 py-12 sm:py-20 mt-10 items-center justify-center">
          <Image
            src={assets.lastfm_capsule_calendar}
            alt="Last.fm Capsule Calendar"
            width={300}
            height={700}
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
        className="grid grid-cols-1 sm:grid-cols-2"
      >
        <p></p>
        <p className="text-left text-lg mt-6 leading-relaxed sm:ml-2 mx-10">
          <p className="text-[#c4c4c4]">A metaphorical timeline of a life</p>The
          feature highlights data such as Favorite Artist, Track, and Album,
          along with analytics based on listening behavior. Users can only
          access the exact same calendar date from previous years; other dates
          remain locked to preserve the concept. Past days from the current
          year, however, are available for review.
        </p>
      </motion.div>

            <br />

      <Other currentProjectId={4} />

      <Footer />
    </div>
  );
};

export default Lastfm;