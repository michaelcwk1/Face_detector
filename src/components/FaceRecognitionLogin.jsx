import React, { useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const FaceRecognitionLogin = ({
  setAuthenticated,
  setShowModal,
  setLoginSuccess,
}) => {
  const [loading, setLoading] = useState(true);  

  const loadModels = async () => {
    try {
      await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
      setLoading(false);  
    } catch (error) {
      console.error("Error loading face-api models:", error);
    }
  };

  useEffect(() => {
    loadModels();
  }, []);

  const handleVideoPlay = async (video) => {
    if (video.paused || video.ended) return;

    try {
      const detections = await faceapi
        .detectAllFaces(video)
        .withFaceLandmarks()
        .withFaceDescriptors();

      if (detections.length > 0) {
        setAuthenticated(true);
        setLoginSuccess(true);
        setShowModal(false);  
      } else {
        setAuthenticated(false);
      }
    } catch (error) {
      console.error("Error detecting faces:", error);
    }
  };

  return (
    <div className="login-container">
      {loading ? (
          <div className="spinner"></div>
      ) : (
        <>
          <h2 className="font-bold mb-4">Login dengan Wajah Anda</h2>
          <video
            id="videoInput"
            autoPlay
            muted
            style={{
              transform: "scaleX(-1)", // Balik video horizontal
            }}
            ref={async (video) => {
              try {
                const stream = await navigator.mediaDevices.getUserMedia({
                  video: {},
                });
                video.srcObject = stream;
                video.play();
                video.onplaying = () => handleVideoPlay(video);
              } catch (error) {
                console.error("Error accessing camera:", error);
              }
            }}
          />
        </>
      )}
    </div>
  );
  
};

export default FaceRecognitionLogin;
