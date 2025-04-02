import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 w-full py-6 px-12 bg-[#080808] backdrop-blur-md flex justify-between items-center z-50">
      <Link
        to="/"
        className="text-4xl  text-white font-sans cursor-pointer transition-transform duration-300 hover:scale-110"
      >
        <span className="text-[#0080ff]">Shanu</span> Kumar Gupta
      </Link>
      <i className="bx bx-menu text-2xl text-white cursor-pointer" id="menu-icon"></i>
      <nav className="navbar flex">
        <Link
          to="/"
          className="text-lg text-white mx-4 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-main hover:border-main"
        >
          Home
        </Link>
        <Link
          to="/education"
          className="text-lg text-white mx-4 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-main hover:border-main"
        >
          Education
        </Link>
        <Link
          to="/projects"
          className="text-lg text-white mx-4 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-main hover:border-main"
        >
          Projects
        </Link>
        <Link
          to="/services"
          className="text-lg text-white mx-4 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-main hover:border-main"
        >
          Services
        </Link>
        <Link
          to="/testimonials"
          className="text-lg text-white mx-4 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-main hover:border-main"
        >
          Testimonials
        </Link>
        <Link
          to="/contact"
          className="text-lg text-white mx-4 font-medium transition-all duration-300 border-b-2 border-transparent hover:text-main hover:border-main"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
