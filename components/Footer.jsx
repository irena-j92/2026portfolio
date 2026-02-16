import React from "react";
import {
  BiLogoBehance,
  BiLogoDribbble,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="pb-10 bg-[#c4c4c4]">
      <div className="text-center text-sm text-black sm:flex items-center justify-between py-10 mb-6 sm:mb-6 md:mb-0 lg:mb-0">
        <p className="mx-20">© 2025 Made with coffee and banana toast 🖤</p>

        <ul className="grid grid-cols-2 md:inline-flex lg:inline-flex items-center gap-4 justify-center sm:mt-0 text-white mx-20">
          {[
            {
              href: "https://www.linkedin.com/in/irenajurisic92/",
              label: "LinkedIn",
              icon: <BiLogoLinkedin />,
            },

            {
              href: "https://www.dribbble.com/irena-j92",
              label: "Dribbble",
              icon: <BiLogoDribbble />,
            },
            {
              href: "https://github.com/irena-j92",
              label: "GitHub",
              icon: <BiLogoGithub />,
            },
            {
              href: "https://www.behance.net/i-jurisic",
              label: "Behance",
              icon: <BiLogoBehance />,
            },
          ].map(({ href, label, icon }) => (
            <li key={label} className="relative group cursor-pointer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                className="inline-flex items-center text-black gap-1"
              >
                {icon}
                <span className="text-black">{label}</span>
                {/* underline */}
                <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
