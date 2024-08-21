import HeroSection from "./components/Herosection";
import Marquee from "./components/MitraprusahaanSection";
import AboutUs from "./components/Aboutus";
import CategorySection from "./components/Categorise";
import TestimonialsSection from "./components/Testimoni";
import Materi from "./components/Materi";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";

function Home() {
  return (
    <>
      <section className="bg-image bg-cover " id="home">
        <HeroSection />
      </section>
      <section>
        <Marquee />
      </section>
      <section className="bg-image-about bg-right bg-cover pt-36 pb-20" id="about">
        <AboutUs />
      </section>
      <section>
        <CategorySection />
      </section>
      <section id="testi">
        <TestimonialsSection />
      </section>
      <section>
        <Materi />
      </section>
      <section className="bg-image-about bg-right bg-cover" id="contact">
        <ContactSection />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
export default Home;
