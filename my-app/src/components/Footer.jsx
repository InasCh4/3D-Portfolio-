import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary backdrop-blur-md text-gray-300 py-6 px-6 border-t border-gray-700/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Photo + Contact */}
        <div className="flex items-center gap-4">
          <img
            src="/me.jpg"
            alt="Inas Chabla"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />
          <div className="flex flex-col text-sm">
            <a
              href="mailto:inaschabla@email.com"
              className="hover:text-blue-400"
            >
              inaschabla@email.com
            </a>
            <a href="tel:+213655615791" className="hover:text-blue-400">
              +213 655 61 57 91
            </a>
          </div>
        </div>

        {/* Socials au centre */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/InasCh4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/inas-chabla-16aa6632b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/hiinaataa04?igsh=dmE2eXkwZzMxYnNw&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-right">
          © 2025 Inas Chabla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
