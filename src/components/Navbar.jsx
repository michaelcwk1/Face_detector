import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ authenticated, setAuthenticated, setShowModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

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
      setIsOpen(false);
    }
  };

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

  const handleScrollClick = (target) => {
    setIsOpen(false);

    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTarget: target } });
    } else {
      // If on home page, scroll directly
      scrollToTarget(target);
    }
  };

  const scrollToTarget = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll target when navigating from another page
  useEffect(() => {
    if (location.pathname === "/") {
      const state = location.state;
      if (state && state.scrollTarget) {
        scrollToTarget(state.scrollTarget);
        // Clear the state to prevent repeated scrolling
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

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
            <a onClick={() => handleScrollClick("hero")} className="hover:text-violet-500 cursor-pointer">
              Profile
            </a>
          </li>
          <li>
            <a onClick={() => handleScrollClick("experience")} className="hover:text-violet-500 cursor-pointer">
              Journey
            </a>
          </li>
          <li>
            <a onClick={() => handleScrollClick("project")} className="hover:text-violet-500 cursor-pointer">
              Project
            </a>
          </li>
          <li>
            <a onClick={() => handleScrollClick("contact")} className="hover:text-violet-500 cursor-pointer">
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

        {/* Mobile menu */}
        <motion.div
          ref={dropdownRef}
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
              <a onClick={() => handleScrollClick("hero")} className="hover:text-violet-500 cursor-pointer">
                Profile
              </a>
            </li>
            <li>
              <a onClick={() => handleScrollClick("experience")} className="hover:text-violet-500 cursor-pointer">
                Journey
              </a>
            </li>
            <li>
              <a onClick={() => handleScrollClick("project")} className="hover:text-violet-500 cursor-pointer">
                Project
              </a>
            </li>
            <li>
              <a onClick={() => handleScrollClick("contact")} className="hover:text-violet-500 cursor-pointer">
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
