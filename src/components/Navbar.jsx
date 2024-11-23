import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = ({
  authenticated,
  setAuthenticated,
  setShowFaceRecognition,
  setShowModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLoginClick = () => {
    if (!authenticated) {
      // Show the modal when user clicks Log In
      setShowModal(true);
    } else {
      setAuthenticated(false); // Log out
    }
  };

  return (
    <div className="w-4/5 m-auto flex justify-between items-center py-5 relative z-10">
      <h1 className="text-xl font-bold">
        <Link to="/" className="hover:text-violet-500">
          Projek
        </Link>
      </h1>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, staggerChildren: 0.1 }}
        className="hidden md:flex items-center space-x-5"
      >
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
      </motion.ul>

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

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.9,
        }}
        transition={{ duration: 0.3 }}
        className={`absolute top-14 left-1/2 transform -translate-x-1/2 w-1/2 bg-white shadow-sm border rounded-lg ${
          isOpen ? "block" : "hidden"
        } py-2 px-3`}
      >
        <ul className="flex flex-col items-center space-y-3 py-3">
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
  );
};

export default Navbar;
