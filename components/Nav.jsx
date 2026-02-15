"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { assets } from "../assets/assets";
import Image from "next/image";
import { MoonStar, Sun, Menu, X } from "lucide-react";

const Nav = ({ isDarkMode, setIsDarkMode, isModal = false, modalRef = null, onClose }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const router = useTransitionRouter();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  const routes = [
    {
      label: "About",
      url: "/about",
      title: "About"
    },
    {
      label: "Work",
      url: "/#work",
      title: "work"
    },
    {
      label: "Services",
      url: "/#services",
      title: "services"
    },
    {
      label: "Contact",
      url: "/#contact",
      title: "contact"
    },
  ];

  const handleNavigation = (url) => {
    if (isModal) {
      // Close the modal first
      onClose?.();
      
      // Wait for the modal to close
      setTimeout(() => {
        router.push(url, { onTransitionReady: pageAnimation });
      }, 400);
    } else {
      // Normal navigation
      router.push(url, { onTransitionReady: pageAnimation });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <nav
        className={`sticky top-0 w-full px-5 lg:px-8 xl:px-[4%] py-4
                flex items-center justify-between z-50 transition-all duration-300 ${
                  isScroll
                    ? "bg-[#1c1c1c] bg-opacity-95 backdrop-blur-lg"
                    : "bg-transparent"
                }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavigation("/#top")}
          className="justify-start cursor-pointer"
        >
          <h2 className="uppercase text-xl font-[800] text-[#c4c4c4] hover:text-[#fafafa] transition-colors">
           ૮꒰˶  - ˕ -꒱ა⟡
                     </h2>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-[14px]">
          {routes.map((route) => (
            <li key={route.label}>
              <Link
                href={route.url}
                className="relative group cursor-pointer"
                style={{ color: '#c4c4c4' }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(route.url);
                }}
              >
                <span className="hover:text-[#fafafa] transition-colors">{route.label}</span>
                <span className="absolute left-0 -bottom-1.5 h-[1px] w-0 bg-[#fafafa] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          {/* Uncomment if you want dark mode toggle on desktop */}
          {/* <li>
            <button onClick={() => setIsDarkMode((prev) => !prev)}>
              {isDarkMode ? (
                <Sun className="w-5 text-[#c4c4c4] hover:text-[#fafafa]" />
              ) : (
                <MoonStar className="w-5 text-[#c4c4c4] hover:text-[#fafafa]" />
              )}
            </button>
          </li> */}
        </ul>

        {/* Mobile Menu Button */}
        <button className='block md:hidden ml-3' onClick={openMenu}>
          <Menu className='w-6 text-[#c4c4c4]' />
        </button>

{/* Mobile Side Menu */}
<ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-12 fixed -right-64
top-0 bottom-0 w-64 z-50 h-screen bg-[#1c1c1c] transition duration-500 text-lg'>
          
          {/* Close Button */}
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <X className='w-6 cursor-pointer text-[#c4c4c4] hover:text-[#fafafa]' />
          </div>

          {/* Mobile Links */}
          {routes.map((route) => (
            <li key={route.label}>
              <button 
                onClick={() => {
                  handleNavigation(route.url);
                  closeMenu();
                }}
                className="text-[#c4c4c4] hover:text-[#fafafa] transition-colors"
              >
                {route.label}
              </button>
            </li>
          ))}

          {/* Mobile Dark Mode Toggle */}
          {/* <button 
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="mt-10"
          >
            {isDarkMode ? (
              <Sun className="w-6 text-[#c4c4c4]" />
            ) : (
              <MoonStar className="w-6 text-[#c4c4c4]" />
            )}
          </button> */}
        </ul>
      </nav>
    </div>
  );
};

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(-100px)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.24, 0.76, 0, 1)",
      fill: "backwards",
      pseudoElement: "::view-transition-old(root)",
    },
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.24, 0.76, 0, 1)",
      fill: "backwards",
      pseudoElement: "::view-transition-new(root)",
    },
  );
};

export default Nav;
