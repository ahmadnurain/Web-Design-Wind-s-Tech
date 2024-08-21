import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./Home";
import SplashScreen from "./components/Splashscreen"; // Import komponen SplashScreen

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu loading, bisa disesuaikan durasinya (contoh 3 detik)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Bersihkan timer saat komponen unmount
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />; // Menampilkan SplashScreen selama status loading true
  }

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
