"use client";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { icons, ArrowLeft, ArrowUp, ArrowUpRight } from "lucide-react";
import CakePersona from "./CakePersona";
import Other from "../../components/Other";

const CakeClub = () => {
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
      <Head>
        <title>CakeClub®: Product Design & Research</title>
      </Head>
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
        <Image src={assets.cakeclub_logo} alt="Logo" className="w-16 h-16" />
        <div className="leading-relaxed">
          <h2 className="font-manrope text-2xl sm:text-4xl">CakeClub®</h2>
          <p className="text-gray-300 font-medium">Product Design & Research</p>
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight mb-12 mx-10 font-medium"
      >
        Spend smarter. Save faster.
        <br />
        Build financial freedom.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={assets.cakeclub_hero}
          alt="Hero CakeClub"
          objectFit="cover"
          className="w-full px-10"
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
          CakeClub® addresses a real, emotional problem: people want to save but
          feel overwhelmed by finance tools. By focusing on clarity, automation,
          and emotional ease, the app enables users to build sustainable saving
          habits – without stress.
        </p>
        <p></p>
      </motion.div>

      {/* Problem */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:mt-20 mx-10 gap-10"
      >
        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p></p>
        </div>

        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p className="text-[#FF7EC5]">Problem</p>People want to save money,
          but finance apps are often too complex, stressful, or disconnected
          from real life to support consistent behavior. Managing money and
          saving consistently is emotionally taxing and cognitively demanding
          for most people.
        </div>
      </motion.section>

      {/* Numbers */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 mx-10 gap-12 mt-6"
      >
        <div className="text-left text-lg leading-relaxed lg:ml-2">
          <p></p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:mt-10">
          <div className="w-full">
            <h2 className="text-6xl font-semibold text-[#FF7EC5]">
              70<span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm text-[#c4c4c4]">
              financially stressed about their finances
            </p>
          </div>

          <div className="w-50">
            <h2 className="text-6xl font-semibold text-[#FF7EC5]">
              22<span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm w-40 text-[#c4c4c4]">
              satisfied with their personal savings
            </p>
          </div>

          <div className="w-50">
            <h2 className="text-6xl font-semibold text-[#FF7EC5]">
              48<span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm w-34 text-[#c4c4c4]">
              saved less in the last year than before
            </p>
          </div>

          <div className="w-40">
            <h2 className="text-6xl font-semibold text-[#FF7EC5]">
              <span className="text-4xl">~</span>9
              <span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm text-[#c4c4c4] w-[80%]">
              use a personal finance app
            </p>
          </div>
        </div>
      </motion.section>

      {/* Solution */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mt-20 mx-10 sm:mx-0"
      >
        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-12">
          <p className="text-[#FF7EC5]">Solution</p>CakeClub® is a visually
          intuitive, low-stress finance app that simplifies expense tracking and
          saving through clarity, automation, and motivation. Instead of forcing
          users to "manage money," CakeClub helps them feel in control-making
          saving a natural byproduct of everyday decisions.
        </div>

        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p></p>
        </div>
      </motion.section>

      {/* User Personas */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mt-12 lg:mt-20 md:mt-8 sm:mt-6 mx-10"
      >
        <div className="text-left text-lg mt-6 leading-relaxed">
          <p></p>
        </div>

        <div className="text-left text-lg mt-6 leading-relaxed mr-2">
          <p className="text-[#FF7EC5]">User Persona</p>The following personas
          represent CakeClub's primary user groups and highlight key goals,
          behaviors, and financial challenges. They are used to guide design
          decisions and ensure the product addresses real user needs across
          different life stages.
        </div>
      </motion.section>

      <CakePersona className="mx-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mt-10"
      >
        <a
          href="https://www.cakeclubapp.com/financial-freedom"
          className="rounded-lg px-5 py-3 flex hover:text-black inline-flex bg-[#333333] hover hover:bg-[#FF7EC5] hover:scale-105 duration-300"
          target="_blank"
        >
          Find out more
          <ArrowUpRight
            className="flex inline-flex items-center mt-1 ml-1"
            width={20}
          />
        </a>
      </motion.div>

      {/* Brand system */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mt-20 mx-10"
      >
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-[#333333] px-6 py-6 rounded-xl">
              <p className="text-4xl text-center">👔</p>
              <p className="text-center text-[#c4c4c4]">Professional</p>
            </div>
            <div className="bg-[#333333] px-6 py-6 rounded-xl">
              <p className="text-4xl text-center">🎯</p>
              <p className="text-center text-[#c4c4c4]">Minimal</p>
            </div>
            <div className="bg-[#333333] px-6 py-6 rounded-xl">
              <p className="text-4xl text-center">👍</p>
              <p className="text-center text-[#c4c4c4]">User-friendly</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 gap-4">
            <div className="bg-[#FF7EC5] px-6 py-6 border border-gray-600 rounded-xl text-[#1c1c1c] leading-snug">
              <p className="text-lg mt-12">Pink Tease</p>
              <p className="text-sm">#FF7EC5</p>
            </div>
            <div className="bg-[#9AF09E] px-6 py-6 border border-gray-600 rounded-xl text-[#1c1c1c]">
              <p className="text-lg mt-12">Mint Tonic</p>
              <p className="text-sm">#9AF09E</p>
            </div>
            <div className="bg-[#FED580] px-6 py-6 border border-gray-600 rounded-xl text-[#1c1c1c]">
              <p className="text-lg mt-12">Lemon Burst</p>
              <p className="text-sm">#FED580</p>
            </div>
          </div>
        </section>

        <div></div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <div className="text-left text-lg mt-6 leading-relaxed">
          <p className="text-[#FF7EC5]">Brand system</p>CakeClub® is a visually
          intuitive, low-stress finance app that simplifies expense tracking and
          saving through clarity, automation, and motivation. Instead of forcing
          users to "manage money," CakeClub helps them feel in control—making
          saving a natural byproduct of everyday decisions.
        </div>

        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p></p>
        </div>
      </motion.section>

      {/* App architecture */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid grid-cols-2 sm:grid-cols-5 lg:ml-140 mx-10 gap-4 mt-20">
          <div className="bg-[#333333] aspect-square rounded-xl">
            <p className="text-4xl text-center mt-8 md:mt-14 lg:mt-12">📋</p>
            <h2 className="text-center leading-6 mt-4">Dashboard</h2>
            <p className="text-sm text-[#c4c4c4] text-center">
              Feature overview
            </p>
          </div>
          <div className="bg-[#333333] aspect-square rounded-xl">
            <p className="text-4xl text-center mt-8 md:mt-14 lg:mt-12">👛</p>
            <h2 className="text-center leading-6 mt-4">Budget</h2>
            <p className="text-sm text-[#c4c4c4] text-center">Manage finances</p>
          </div>
          <div className="bg-[#333333] aspect-square rounded-xl">
            <p className="text-4xl text-center mt-8 md:mt-14 lg:mt-12">🔄</p>
            <h2 className="text-center leading-6 mt-4">Transfers</h2>
            <p className="text-sm text-[#c4c4c4] text-center">
              Your transactions
            </p>
          </div>
          <div className="bg-[#333333] aspect-square rounded-xl">
            <p className="text-4xl text-center mt-8 md:mt-14 lg:mt-12">📊</p>
            <h2 className="text-center leading-6 mt-4">Analytics</h2>
            <p className="text-sm text-[#c4c4c4] text-center">
              Expenses and income
            </p>
          </div>
          <div className="bg-[#333333] aspect-square rounded-xl">
            <p className="text-4xl text-center mt-8 md:mt-14 lg:mt-12">⭐️</p>
            <h2 className="text-center leading-6 mt-4">Rewards</h2>
            <p className="text-sm text-[#c4c4c4] text-center">Collect offers</p>
          </div>
        </div>

        <div></div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p></p>
        </div>

        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p className="text-[#FF7EC5]">App architecture</p>CakeClub's app is
          organized around a clear, intuitive structure to make managing
          finances simple and engaging. The Dashboard provides an overview of
          key features, while Budget helps users track and manage their
          spending. Transfers lists all transactions, and Analytics visualizes
          income and expenses for better financial insight. Finally, Rewards
          lets users collect offers, adding a motivating and gamified element to
          everyday finance management.
        </div>
      </motion.section>

      {/* Screens */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mx-10"
      >
        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.cakeclub_splash}
            alt="Welcome Screen"
            width={300}
            height={700}
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.cakeclub_passcode}
            alt="Passcode"
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

        <div className="text-left text-lg mt-6 leading-relaxed lg:lg:ml-2 mx-10">
          <p className="text-[#FF7EC5]">Security first</p>To ensure optimal user
          experience and protect sensitive financial data, a passcode screen is
          required each time the app is opened. Additional security measures —
          such as biometric authentication and multi-factor verification — are
          planned for future iterations to further strengthen user trust and
          data protection.
        </div>
      </motion.div>

      {/* Onboarding */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full py-10 lg:py-10 md:py-8 sm:py-6 px-6 mt-10 items-center justify-center">
          <Image
            src={assets.cakeclub_onboarding}
            alt="Onboarding"
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
        className="grid grid-cols-1 sm:grid-cols-2 mx-10"
      >
        <p></p>

        <div className="text-left text-lg mt-6 leading-relaxed lg:lg:ml-2">
          <p className="text-[#FF7EC5]">First impressions that convert</p>{" "}
          Turning new users into long-term customers begins with a strong first
          impression. The onboarding experience introduces the app through
          personalized, minimal, and colorful illustrations that reflect the
          brand identity. The goal is to create an emotional connection early on
          while clearly communicating the app's value.
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
        <div className="bg-[#333333] w-full py-10 mt-10 items-center justify-center">
          <Image
            src={assets.cakeclub_notification}
            alt="Notification"
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
        <div className="text-left text-lg mt-6 leading-relaxed lg:lg:ml-2 mx-10">
          <p className="text-[#FF7EC5]">
            Meaningful, behavior-based notifications
          </p>
          Notifications are curated based on user behavior and financial
          activity. Rather than being intrusive, they are designed to provide
          meaningful insights, reminders, or motivational updates — reinforcing
          a personalized and positive user experience.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mx-10"
      >
        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.cakeclub_login}
            alt="Login"
            width={300}
            height={700}
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.cakeclub_profile}
            alt="Profile"
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
        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p className="text-[#FF7EC5]">Seamless access and personalization</p>
          Users can log in using an email address, phone number, or their Apple
          account for added convenience. The profile section centralizes
          essential features such as savings goals, a personal QR code, and a
          referral option to invite friends — encouraging both personalization
          and growth.
        </div>
      </motion.div>

      <br />

      {/* Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full py-10 lg:py-10 md:py-8 sm:py-6 px-6 mt-10 items-center justify-center">
          <Image
            src={assets.cakeclub_home}
            alt="Home"
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

        <div className="text-left text-lg mt-6 leading-relaxed lg:lg:ml-2 mx-10">
          <p className="text-[#FF7EC5]">Financial overview at a glance</p>The
          home screen provides users with an immediate overview of their total
          balance. Prominent action buttons enable quick and easy transactions
          without unnecessary steps. Recent transfers are displayed below,
          giving users essential financial insights at a glance. By swiping,
          users can also view their linked cards and active savings goals,
          keeping key information accessible without cluttering the interface.
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-10"
      >
        <div className="bg-[#333333] w-full sm:px-0 py-10 mt-20 items-center justify-center">
          <Image
            src={assets.cakeclub_analytics}
            alt="Home"
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

        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2 mx-10">
          <p className="text-[#FF7EC5]">Financial insights</p>The analytics
          dashboard consolidates users' financial behavior into one clear
          overview. Users can explore detailed charts either by selecting
          elements from the grid layout or navigating through the main menu.
          This flexible interaction allows both quick insights and deeper
          financial analysis.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mx-10"
      >
        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.cakeclub_income}
            alt="Income"
            width={300}
            height={700}
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.cakeclub_expenses}
            alt="Income"
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
        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p className="text-[#FF7EC5]">Smart income and expense tracking</p>
          Users can track both their spending and income to better plan future
          finances. Charts can be customized by switching between different
          visualization types or selecting specific time frames, giving users
          control over how they interpret their data.
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
        <div className="bg-[#333333] w-full py-10 mt-10 items-center justify-center">
          <Image
            src={assets.cakeclub_budget}
            alt="Home"
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
        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2 mx-10">
          <p className="text-[#FF7EC5]">Budget control</p>This is one of the
          app's core features. Users can create expense categories in a simple
          and intuitive way and assign spending limits to each. A detailed pie
          chart provides a visual breakdown of how their budget is distributed,
          helping users stay aware of their financial habits and adjust when
          necessary.
        </div>
      </motion.div>

      <br />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 gap-4 mt-10 mx-10"
      >
        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.cakeclub_transfers}
            alt="Home"
            width={300}
            height={700}
            className="mx-auto"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <div className="bg-[#333333] w-full py-12 items-center justify-center">
          <Image
            src={assets.cakeclub_receipt}
            alt="Home"
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
        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2 mx-10">
          <p className="text-[#FF7EC5]">Organized transaction management</p>All
          transactions are organized in a filterable list sorted by category.
          Each category is assigned a distinct color, allowing users to quickly
          and visually differentiate between expenses. Individual transfers can
          be edited to include notes or uploaded receipts, which also contribute
          to earning reward points.
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
        <div className="bg-[#333333] w-full py-10 mt-10 items-center justify-center">
          <Image
            src={assets.cakeclub_rewards}
            alt="Home"
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
        className="grid grid-cols-1 sm:grid-cols-2 mx-10 mb-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p className="text-[#FF7EC5]">Gamified financial motivation</p>
          Consistent app usage and positive financial progress are incentivized
          through a rewards system featuring offers from selected partner
          brands. Users can track their progress toward the next reward
          milestone, creating anticipation and motivating continued engagement.
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
        <div className="bg-[#333333] w-full py-10 mt-10 items-center justify-center">
          <Image
            src={assets.cakeclub_watch}
            alt="CakeClub Watched"
            width={960}
            height={840}
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
        className="grid grid-cols-1 sm:grid-cols-2 mx-10 mb-10"
      >
        <p></p>
        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p className="text-[#FF7EC5]">Cross-device experience</p>To ensure
          users can access their finances anytime, the app experience was
          extended and tested for Apple Watch. This allows users to quickly
          check balances and key updates without needing their phone.
        </div>
      </motion.div>

      {/* Takeaways */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 mt-20 mx-10 mb-10"
      >
        <div className="text-left text-lg mt-6 leading-relaxed">
          <p className="text-[#FF7EC5]">Takeaways</p>CakeClub's intuitive
          structure helps users manage finances efficiently while staying
          motivated. After three months of use, over 80% of users reported
          better control over their spending, 65% tracked more transactions
          regularly, and engagement with the Rewards section increased by 40%,
          showing that gamification encourages consistent app interaction. The
          dashboard and analytics features also reduced user confusion, with 90%
          of users stating they found their financial overview "clear and easy
          to understand."
        </div>

        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p></p>
        </div>
      </motion.section>

      {/* Numbers */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-4 mx-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:mt-10">
          <div className="w-full">
            <h2 className="text-6xl font-semibold text-[#FF7EC5]">
              80<span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm text-gray-300">
              better control over <br />
              their spending
            </p>
          </div>

          <div className="w-50">
            <h2 className="text-6xl font-semibold text-[#FF7EC5]">
              65<span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm w-40 text-gray-300">
              tracked more transactions regularly
            </p>
          </div>

          <div className="w-50">
            <h2 className="text-6xl font-semibold text-[#FF7EC5]">
              40<span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm w-34 text-gray-300">
              more engagement with Rewards
            </p>
          </div>

          <div className="w-40">
            <h2 className="text-6xl font-semibold text-[#FF7EC5]">
              90<span className="text-4xl">%</span>
            </h2>
            <p className="leading-snug mt-1 text-sm text-gray-300">
              reduced user confusion
            </p>
          </div>
        </div>

        <div className="text-left text-lg mt-6 leading-relaxed lg:ml-2">
          <p></p>
        </div>
      </motion.section>

      <Other currentProjectId={2} />

      <Footer />
    </div>
  );
};

export default CakeClub;
