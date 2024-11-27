import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({ authenticated, setAuthenticated, setShowModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLoginClick = () => {
    if (!authenticated) {
      setShowModal(true);
    } else {
      setAuthenticated(false);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Tutup dropdown jika klik di luar elemen dropdown
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "experience", "project", "contact"];
      let currentActiveLink = "hero";

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            window.pageYOffset >= sectionTop - sectionHeight * 0.5 &&
            window.pageYOffset < sectionTop + sectionHeight - sectionHeight * 0.5
          ) {
            currentActiveLink = sections[i];
            break;
          }
        }
      }

      setActiveLink(currentActiveLink);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="sticky-nav">
      <div className="navbar-container">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:text-violet-500">
            Michael
          </Link>
        </h1>

        <ul className="hidden md:flex items-center space-x-5">
          <li>
            <a href="#hero" className="hover:text-violet-500">
              Profile
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-violet-500">
              Journey
            </a>
          </li>
          <li>
            <a href="#project" className="hover:text-violet-500">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-violet-500">
              Contact
            </a>
          </li>
        </ul>

        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLoginClick}
          className="hidden md:flex px-5 py-2 border border-black-sm hover:bg-violet-500 hover:text-white font-semibold rounded-full"
        >
          {authenticated ? "Log Out" : loading ? "Loading..." : "Log In"}
        </motion.button>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            ☰
          </button>
        </div>
        {/* Mobile ver */}
        <motion.div
          ref={dropdownRef} // Tambahkan ref di sini
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : 0.9,
          }}
          transition={{ duration: 0.3 }}
          className={`absolute top-16 right-8 transform -translate-x-1/2 w-2/4 bg-white shadow-sm border rounded-lg ${
            isOpen ? "block" : "hidden"
          } py-2 px-3`}
        >
          <ul className="flex flex-col items-center space-y-3 py-3">
            <li>
              <a href="#hero" className="hover:text-violet-500" onClick={() => setIsOpen(false)}>
                Profile
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-violet-500" onClick={() => setIsOpen(false)}>
                Journey
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-violet-500" onClick={() => setIsOpen(false)}>
                Project
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-violet-500" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/cetak" className="hover:text-violet-500">
                Cetak
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/form" className="hover:text-violet-500">
                Form
              </Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <motion.button
                onClick={handleLoginClick}
                className="md:flex px-5 py-2 border border-black-sm hover:bg-red-600 hover:text-white font-semibold rounded-full"
              >
                {authenticated ? "Log Out" : loading ? "Loading..." : "Login"}
              </motion.button>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
