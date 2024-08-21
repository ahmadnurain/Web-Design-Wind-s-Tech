import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-[68px]">
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:px-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        style={{ willChange: "opacity, transform" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-label-text leading-[45px] md:leading-[65px] text-left">Build Your Future with Technology Skills</h1>
        <p className="text-label-text lg:text-xl my-6 md:my-9 leading-[28px] md:leading-[32px] font-medium text-left">
          Wind&apos;s Tech adalah platform edukasi yang menawarkan kursus teknologi terkini, mulai dari pemrograman hingga kecerdasan buatan. Tingkatkan keterampilan Anda dan siapkan masa depan cerah bersama kami!
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-background-button text-white py-2 px-4 font-semibold rounded-[10px] hover:shadow-[0_0_0_4px_#3A3FAD] duration-500">Lets Start Learn</button>
          <button className="bg-background-button-white text-label-text py-2 px-4 font-semibold rounded-[10px] hover:shadow-[0_0_0_4px_#D5D5E5] duration-500">Panduan Belajar</button>
        </div>
      </motion.div>
      <div className="w-full md:w-1/2 flex justify-center relative mb-8 md:mb-0">
        <motion.img
          src="/src/assets/Group 6.png"
          alt="Your Image"
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "opacity, transform" }}
        />
        <motion.img
          src="/src/assets/Group 7.png"
          alt="image-course"
          className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] absolute top-[100px] md:top-[190px] right-[-25px] md:right-[-2px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
          style={{ willChange: "opacity, transform" }}
        />
        <motion.img
          src="/src/assets/Group 9.png"
          alt="image-progress"
          className="w-[90px] h-[90px] md:w-[170px] md:h-[170px] absolute top-[80px] md:top-[150px] left-[-30px] md:left-[-2px] object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
          style={{ willChange: "opacity, transform" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
