import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const navbarVariants = {
  hidden: { y: -100 },
  visible: { y: 0 },
};

const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    y: "-100%",
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
        if (isMenuOpen) setIsMenuOpen(false); // Close menu when scrolling
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header className="bg-white/35 backdrop-blur-lg text-black p-4 sticky top-0 z-50" variants={navbarVariants} initial="visible" animate={showNavbar ? "visible" : "hidden"} transition={{ duration: 0.5 }}>
      <div className="container mx-auto flex justify-between items-center px-9 my-2">
        <div className="flex items-center  gap-3">
          <img src="/src/assets/WhatsApp_Image_2024-08-16_at_18.35.19_6fd9f89d-removebg-preview.png" alt="Contact Image" className="w-14 h-auto  " />
          <h1 className="text-2xl font-bold text-text-color">Wind’s Tech</h1>
        </div>

        {/* Hamburger Icon for Mobile View */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="w-8 h-1 bg-black mb-1"></div>
            <div className="w-8 h-1 bg-black mb-1"></div>
            <div className="w-8 h-1 bg-black"></div>
          </button>
        </div>

        {/* Navigation Links */}
        <motion.nav
          className={`${isMenuOpen ? "block" : "hidden"} fixed inset-x-0 top-[4.9rem] text-center bg-white md:bg-transparent md:flex md:static md:flex-row md:gap-20 z-40`}
          variants={menuVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <div className="md:hidden flex flex-col">
            <Link to="home" smooth={true} duration={500} className="hover:underline p-4 cursor-pointer">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="hover:underline p-4 cursor-pointer">
              About
            </Link>
            <Link to="testi" smooth={true} duration={500} className="hover:underline p-4 cursor-pointer">
              Testimoni
            </Link>
            <Link to="contact" smooth={true} duration={500} className="hover:underline p-4 cursor-pointer">
              Contact
            </Link>
            <div className="flex gap-5 items-center justify-center py-10 lg:hidden md:hidden">
              <button className="group relative border-background-button border-2 rounded-[10px] text-text-blue-button px-10 py-2 font-bold overflow-hidden hover:text-white duration-500 ease-in-out">
                <span className="relative z-10 hover:text-white">Login</span>
                <div className="absolute inset-0 bg-background-button transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
              </button>
              <button className="bg-background-button text-white font-bold px-10 py-2 rounded-[10px] hover:shadow-[0_0_0_4px_#3A3FAD] duration-500">Sign Up</button>
            </div>
          </div>
        </motion.nav>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8">
          <Link to="home" smooth={true} duration={500} className="hover:underline p-4 cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:underline p-4 cursor-pointer">
            About
          </Link>
          <Link to="testi" smooth={true} duration={500} className="hover:underline p-4 cursor-pointer">
            Testimoni
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:underline p-4 cursor-pointer">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex gap-8">
          <button className="group relative border-background-button border-2 rounded-[10px] text-text-blue-button px-10 py-2 font-bold overflow-hidden hover:text-white duration-500 ease-in-out">
            <span className="relative z-10 hover:text-white">Login</span>
            <div className="absolute inset-0 bg-background-button transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
          </button>
          <button className="bg-background-button text-white font-bold px-10 py-2 rounded-[10px] hover:shadow-[0_0_0_4px_#3A3FAD] duration-500">Sign Up</button>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
