"use client";

import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        setIsVisible(true);
      } else if (scrollTop > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 p-4 backdrop-filter backdrop-blur-lg bg-white/30 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-gray-500 text-sm mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://deficollective.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
          >
            DeFi Collective
          </a>
        </div>
        <div>
          <a
            href="/terms"
            className="text-gray-500 hover:text-gray-700 mr-4 transition-colors duration-200"
          >
            Terms
          </a>
          <a
            href="/privacy"
            className="text-gray-500 hover:text-gray-700 ml-4 transition-colors duration-200"
          >
            Privacy
          </a>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://x.com/defiscan_info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/defi-collective"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://discord.gg/Z467Ehv6VU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            <FaDiscord size={24} />
          </a>
          <a
            href="https://github.com/deficollective/defiscan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
