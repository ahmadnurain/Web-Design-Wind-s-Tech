// src/SplashScreen.jsx

import { Player } from "@lottiefiles/react-lottie-player"; // Use named import for Player
import loadingAnimation from "../assets/Animation.json"; // Path to your Lottie JSON file
import "../style.css";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <Player loop autoplay src={loadingAnimation} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default SplashScreen;
