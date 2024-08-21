import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-6 lg:flex-row items-center justify-between px-10">
      <motion.div className="w-full mb-6 lg:mb-0" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
        <img src="/src/assets/Group 11.png" alt="About Us" className="rounded-lg w-full lg:w-[900px]" />
      </motion.div>
      <motion.div className="w-full lg:w-[60rem] text-start lg:text-left" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.0 }} viewport={{ once: true }}>
        <p className="text-background-button text-xl font-bold pb-3">Lets Start Learn</p>
        <h2 className="text-2xl lg:text-5xl font-bold mb-4 text-gray-800">Build Your Future with Technology Skills</h2>
        <p className="text-gray-600 mb-4 text-lg font-semibold">Benefit yang di dapat jika join Wind&apos;s Tech</p>
        <ul className="mb-6 text-lg font-semibold text-label-text">
          <li className="flex items-center pb-3">
            <FaCheck className="w-6 h-6 text-green-500 mr-2" /> Akses Wind&apos;s Tech selamanya
          </li>
          <li className="flex items-center pb-3">
            <FaCheck className="w-6 h-6 text-green-500 mr-2" /> Free materi update kelas
          </li>
          <li className="flex items-center pb-3">
            <FaCheck className="w-6 h-6 text-green-500 mr-2" /> Real-world case Project
          </li>
          <li className="flex items-center pb-3">
            <FaCheck className="w-6 h-6 text-green-500 mr-2" /> Forum discussions With Mentor
          </li>
          <li className="flex items-center">
            <FaCheck className="w-6 h-6 text-green-500 mr-2" /> Privileges kelas online lainnya
          </li>
        </ul>
        <button className="bg-background-button text-white py-2 px-10 text-lg font-semibold rounded-[10px] hover:shadow-[0_0_0_4px_#3A3FAD] duration-500">Join Now</button>
      </motion.div>
    </section>
  );
};

export default AboutUs;
