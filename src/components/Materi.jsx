import { useState } from "react";
import { MarqueeDemo } from "./Marquee";
import { motion } from "framer-motion";

const Materi = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <>
      <motion.div
        className="text-center py-14 flex flex-col items-center"
        initial={{ opacity: 0, y: -100 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        whileInView={() => {
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      >
        <p className="text-background-button text-xl lg:text-2xl pb-4 font-semibold"> Materi course kami</p>
        <h1 className="lg:text-4xl text-2xl pb-7 font-bold w-96 ">Kelas Online, Materi yang selalu Update</h1>
        <div>
          <MarqueeDemo />
        </div>
      </motion.div>
    </>
  );
};

export default Materi;
