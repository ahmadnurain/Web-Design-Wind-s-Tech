import { useState } from "react";
import { motion } from "framer-motion";
import { MarqueeDemoVertical } from "./Marqueetop";

const TestimonialsSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <section className="bg-text-blue-button text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        {/* Bagian Kiri: Konteks */}
        <motion.div
          className="order-first md:order-none text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          whileInView={() => {
            if (!hasAnimated) {
              setHasAnimated(true);
            }
          }}
          transition={{ duration: 1 }}
        >
          <p className="text-green-500 font-semibold text-lg">1000+ Alumni Course Kami</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-1 leading-[3rem] md:leading-[4rem]">Come join Now And Become Part Of Us</h2>
          <p className="mt-4 text-gray-400 text-lg">Bergabung dan jadi bagian dari komunitas kami</p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <button className="bg-background-button text-white px-6 py-2 rounded-[10px] hover:shadow-[0_0_0_4px_#3A3FAD] duration-500">Katalog Kelas</button>
            <button className="bg-background-button-white text-slate-900 px-6 py-2 rounded-[10px] hover:shadow-[0_0_0_4px_#D5D5E5] duration-500">Karya Students</button>
          </div>
        </motion.div>

        {/* Bagian Kanan: Image Testimoni */}
        <div className="order-last md:order-none grid grid-cols-1 gap-6">
          <MarqueeDemoVertical />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
