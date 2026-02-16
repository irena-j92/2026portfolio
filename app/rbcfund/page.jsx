
"use client"
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { ArrowLeft, ArrowUp, BriefcaseBusiness, Heart } from "lucide-react";
import Other from "../../components/Other";

const RbcFund = () => {
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
        <Image src={assets.rbcfund_logo} alt="Logo" className="w-16 h-16" />
        <div className="leading-8 sm:leading-tight">
          <h2 className="font-manrope text-2xl sm:text-4xl">
            Richard Bland College Foundation
          </h2>
          <p className="text-[#c4c4c4] font-medium">Website Design</p>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight mb-12 mx-10 font-medium"
      >
        Redesigning for engagement
        <br />
        through strategic design
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={assets.rbcfund_hero}
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
          The Richard Bland College Foundation supports and extends the
          college’s mission, but its website scattered fundraising campaigns,
          student stories, and donation options, make it hard for users to
          navigate. This redesign focused on a user-centric, story-driven
          experience that clarifies the Foundation’s mission, organizes content
          intentionally, and guides visitors to key actions – creating a more
          engaging, navigable, and mission-focused digital presence.
        </p>
        <p></p>
      </motion.div>

      <br />

      {/* Problem */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mt-10 mx-10 sm:gap-20"
      >
        <div className="text-left text-lg mt-6 leading-relaxed sm:mr-2">
          <p></p>
        </div>

        <div className="text-left text-lg mt-6 leading-relaxed sm:mr-2">
          <p className="text-[#c4c4c4]">Project solution</p>The redesign improves
          usability and clarifies the organization's mission while retaining
          existing content. A user-centered, story-driven structure creates a
          clearer content hierarchy, guiding users toward key information and
          actions without unneccessary distractions.
        </div>
      </motion.section>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full px-4 md:px-8 sm:px-0 py-12 sm:py-20 items-center justify-center mt-10">
          <Image
            src={assets.rbcfund_landing}
            alt="RBC Foundation Landing"
            width={860}
            height={480}
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
        <div className="text-left text-lg mt-6 leading-relaxed sm:mr-2">
          <p className="text-[#c4c4c4]">Establishing institutional identity</p>
          The landing page clearly communicates the mission and purpose of the
          College Foundation. Content is structured in a balanced and harmonious
          layout, ensuring a natural visual flow without unnecessary breaks or
          distractions.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
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
            <source src="/assets/rbcfund_board.mp4" type="video/mp4" />
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
        <div className="text-left text-lg mt-6 leading-relaxed sm:mr-2">
          <p className="text-[#c4c4c4]">Transparent leadership presentation</p>
          All twenty board members are presented with equal visual weight to
          emphasize transparency and collective leadership. A short introductory
          section explains the board's role, responsibilities, and history,
          providing context and reinforcing credibility.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full px-4 md:px-8 sm:px-0 py-12 sm:py-20 items-center justify-center mt-10">
          <Image
            src={assets.rbcfund_news}
            alt="RBC Foundation News Page"
            width={840}
            height={460}
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

        <div className="text-left text-lg mt-6 leading-relaxed sm:mr-2 mb-10">
          <p className="text-[#c4c4c4]">Visual consistency as a connector</p> One
          of the main challenges when designing the subpages was the limited
          amount of available content. To maintain visual consistency and avoid
          empty layouts, careful use of imagery and color was essential.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-2 mx-10"
      >
        <section className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-2">
          <div className="aspect-square bg-[#333333] flex flex-col justify-end leading-snug rounded-xl">
            <p className="font-[Cardo] font-[400] text-white/40 text-2xl sm:text-7xl mx-4 sm:mx-6">
              Cardo
            </p>
            <p className="text-[#c4c4c4] mx-4 sm:mx-6 mb-6">Primary font</p>
          </div>
          <div className="aspect-square bg-[#333333] flex flex-col justify-end leading-snug rounded-xl">
            <p className="font-[Roboto] font-[300] text-white/40 text-2xl sm:text-7xl mx-4 sm:mx-6">
              Roboto
            </p>
            <p className="text-[#c4c4c4] mx-4 sm:mx-6 mb-6">Secondary font</p>
          </div>
        </section>
        {/* Green */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="bg-[#23493E] w-full rounded-xl flex flex-col justify-end leading-snug">
            <p className="mx-6 mt-6 sm:mt-0 text-xl">Blackboard Green</p>
            <p className="text-[#c4c4c4] mx-6 mb-6 text-lg">#23493E</p>
          </div>
          {/* Yellow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-[#DABF75] rounded-xl flex flex-col justify-end leading-snug">
              <p className="text-black/60 mx-6 mt-6 sm:mt-0 text-lg">
                Brass Nail
              </p>
              <p className="flex justify-start text-gray-500 mx-6 mb-6">
                #DABF75
              </p>
            </div>
            {/* Grey */}
            <div className="bg-[#ECECEC] rounded-xl flex flex-col justify-end leading-snug">
              <p className="text-black/60 mx-6 mt-6 sm:mt-0 text-lg">
                Pastel Mercury
              </p>
              <p className="flex justify-start text-gray-500 mx-6 mb-6">
                #ECECEC
              </p>
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed sm:mr-2">
          <p className="text-[#c4c4c4]">A cohesive visual identity</p>The color
          palette was intentionally chosen to feel mature, trustworthy, and
          prestigious — aligning with the institution's identity. Strategic
          spacing and structured typography helped create a cohesive overall
          look while preserving clarity and readability.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full px-4 md:px-8 sm:px-0 py-12 sm:py-20 items-center justify-center mt-10">
          <Image
            src={assets.rbcfund_awards}
            alt="RBC Foundation Awards Page"
            width={840}
            height={460}
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
        <div className="text-left text-lg mt-6 leading-relaxed sm:mr-2">
          <p className="text-[#c4c4c4]">Simplifying complex options</p>Accordion
          components were introduced to keep content organized, concise, and
          user-friendly. This approach allows users to expand only the sections
          they are interested in, preventing cognitive overload and keeping the
          pages compact without sacrificing information.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
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
            <source src="/assets/rbcfund_scholarships.mp4" type="video/mp4" />
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
        <div className="text-left text-lg mt-6 leading-relaxed sm:mr-2">
          <p className="text-[#c4c4c4]">Streamlined access to opportunities</p>A
          key improvement was adding a prominent call-to-action button that
          directs users clearly to the application process. The various
          scholarships offered by the Foundation are organized into categories,
          making them easier to browse and reducing cognitive load. This
          structure supports users in quickly finding the opportunity most
          relevant to them.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full px-4 md:px-8 sm:px-0 py-12 sm:py-20 items-center justify-center mt-10">
          <Image
            src={assets.rbcfund_visit}
            alt="RBC Foundation Visit Page"
            width={840}
            height={460}
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
        <div className="text-left text-lg mt-6 leading-relaxed sm:mr-2">
          <p className="text-[#c4c4c4]">Clear guidance</p>The Visit and Contact
          pages were designed with simplicity and clarity in mind. Information
          is presented in a straightforward manner, minimizing unnecessary
          visual elements. Users can contact the Foundation via a dedicated
          form. Directions to the campus are organized in tabbed sections,
          allowing different routes or travel options to be accessed without
          overwhelming the layout.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
       className="mx-4 md:mx-6 sm:mx-4 lg:mx-10"
      >
        <div className="bg-[#333333] w-full py-12 sm:py-20 mt-10 flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-3/5 h-auto block px-6 sm:px-0"
          >
            <source src="/assets/rbcfund_video.mp4" type="video/mp4" />
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

        <div className="text-left text-lg mt-6 leading-relaxed sm:mr-2">
          <p className="text-[#c4c4c4]">Seamless media integration</p>An
          integrated video player was added to provide a seamless,
          distraction-free experience, preventing redirects and eliminating
          unrelated recommendations. It also allows full control over branding,
          accessibility, and overall user experience. This ensures consistency
          with the website's visual identity and strengthens engagement.
        </div>
      </motion.div>

      <br />

      <Other currentProjectId={3} />

      <Footer />
    </div>
  );
};

export default RbcFund;