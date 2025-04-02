import React from 'react';
import { ImLinkedin } from "react-icons/im";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 text-xl">
      {/* Social Media Icons */}
      <div className="flex justify-center mb-6">
        <a
          href="https://linkedin.com/in/shanu-kumar-gupta"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0080ff] border-[#0080ff] text-xl border-2 rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:scale-110 hover:-translate-y-2 transition-transform"
        >
          <ImLinkedin />
        </a>
        <a
          href="https://github.com/shanugupta7999"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0080ff] border-[#0080ff] text-xl border-2 rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:scale-110 hover:-translate-y-2 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0080ff] border-[#0080ff] text-xl border-2 rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:scale-110 hover:-translate-y-2 transition-transform"
        >
          <FaTwitter />
        </a>
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0080ff] border-[#0080ff] text-xl border-2 rounded-full w-10 h-10 flex items-center justify-center mx-2 hover:scale-110 hover:-translate-y-2 transition-transform"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Contact Information */}
      <div className="text-center mb-8">
        <p className="text-lg md:text-base">
          <span className="font-bold">Phone:</span>{" "}
          <a
            href="tel:+917999499339"
            className="text-[#0080ff] hover:underline"
          >
            +91-7999499339
          </a>
        </p>
        <p className="text-lg md:text-base">
          <span className="font-bold">Email:</span>{" "}
          <a
            href="mailto:shanukumargupta.224ca056@nitk.edu.in"
            className="text-[#0080ff] hover:underline"
          >
            shanukumargupta.224ca056@nitk.edu.in
          </a>
        </p>
      </div>

      {/* Quick Links */}
      <ul className="list flex justify-center flex-wrap gap-6 text-2xl">
        <li>
          <a
            href="#faq"
            className="hover:border-b-4 border-indigo-500 pb-1 transition-all"
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:border-b-4 border-indigo-500 pb-1 transition-all"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:border-b-4 border-indigo-500 pb-1 transition-all"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:border-b-4 border-indigo-500 pb-1 transition-all"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className="hover:border-b-4 border-indigo-500 pb-1 transition-all"
          >
            Testimonials
          </a>
        </li>
      </ul>

      {/* Copyright Notice */}
      <p className="copywrite mt-8 text-center text-xl text-gray-400">
        © 2024 Shanu Kumar Gupta | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
