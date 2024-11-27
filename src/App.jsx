import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cetak from "./pages/Cetak";
import Form from "./pages/Form";
import FaceRecognitionLogin from "./components/FaceRecognitionLogin";
import { motion } from "framer-motion";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [setShowFaceRecognition] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoginSuccess = () => {
    setLoginSuccess(true);
    setTimeout(() => {
      setFadeOut(true);
    }, 3000);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const LockedContent = () => (
    <div className="locked-content">
      <div className="locked-overlay">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="locked-container"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="locked-icon"
          >
            <path d="M12 17a1.5 1.5 0 0 0 1.5-1.5V11a1.5 1.5 0 0 0-3 0v4.5A1.5 1.5 0 0 0 12 17z" />
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </motion.svg>
          <p className="locked-text">You need to log in to access this page</p>
        </motion.div>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="full-screen-background">
        <Navbar
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setShowFaceRecognition={setShowFaceRecognition}
          setShowModal={setShowModal}
        />

        {showModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-content">
              <FaceRecognitionLogin
                setAuthenticated={setAuthenticated}
                setShowModal={setShowModal}
                setLoginSuccess={handleLoginSuccess}
              />
            </div>
          </motion.div>
        )}

        {loginSuccess && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`success-animation ${fadeOut ? "fade-out" : ""}`}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="checkmark-icon"
            >
              <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </motion.svg>
          </motion.div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={authenticated ? <Form /> : <LockedContent />} />
          <Route path="/cetak" element={authenticated ? <Cetak /> : <LockedContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
