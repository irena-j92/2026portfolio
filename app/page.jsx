"use client";
import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Services from "../components/Services";
import ToolsSlider from "../components/ToolsSlider";
import Contact from "../components/Contact";
import { BookHeart } from "lucide-react";
import Modal from "../components/Modal";
import Whiteboard from "../components/Whiteboard";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // 🔹 Initialize theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme:dark)'
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // 🔹 Apply theme to <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // 🔹 Loading screen (once per session)
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (!hasVisited) {
      setLoading(true);
      sessionStorage.setItem("hasVisited", "true");
      
      // ✅ Set loading to false after a delay (e.g., 2 seconds)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Adjust timing as needed
      
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  // 🔹 Hash navigation after load
  useEffect(() => {
    if (!loading && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [loading]);

  return (
    <div>
      {/* Optional: Show a loading screen */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#1c1c1c] z-50">
          <div className="text-center">
            <p className="text-6xl sm:text-8xl font-[800] text-white animate-pulse">᧖(• ᦢ •)ᦣ</p>
          </div>
        </div>
      )}

      {!loading && (
        <>
          <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Header isDarkMode={isDarkMode} />
          <Services isDarkMode={isDarkMode} />
          <Work isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
          <ToolsSlider isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
        </>
      )}
    </div>
  );
}