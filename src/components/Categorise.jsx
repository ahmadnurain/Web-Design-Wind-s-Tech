import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const categories = [
  {
    title: "Kelas Koding",
    description: "Web development & Apps Development",
    icon: "/src/assets/Ellipse 9.png",
  },
  {
    title: "Kelas Design",
    description: "UI/UX & Graphic Design",
    icon: "/src/assets/Ellipse 10.png",
  },
  {
    title: "Cyber Security",
    description: "Network Security Engineer & Cybersecurity Analyst",
    icon: "/src/assets/Ellipse 11.png",
  },
  {
    title: "Perdalam Soft Skills",
    description: "Improve your business",
    icon: "/src/assets/Ellipse 12.png",
  },
];

const CategorySection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className=" pt-16 pb-32 px-8">
      <div className="text-center mb-10">
        <p className="text-background-button lg:text-lg text-xl font-semibold">Start Learning Today</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">Kelas Online Design, Development, dan Freelancer</h2>
      </div>
      <div className="flex justify-end">
        <h1 className="text-lg font-semibold mb-4 mr-4 hover:text-background-button transition duration-500 cursor-pointer flex items-center">
          Show More <MdArrowForwardIos />
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={ref}>
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-[10px] p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="flex items-center justify-between mb-4 " // Background color for debugging
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img src={category.icon} alt={category.title} className="w-16 h-16 object-contain" />
            </motion.div>
            <motion.h3 className="text-xl font-bold text-gray-800" initial={{ opacity: 0, y: -20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} transition={{ delay: 0.5, duration: 0.6 }}>
              {category.title}
            </motion.h3>
            <motion.p className="text-gray-500 mt-2 text-lg" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.7, duration: 0.6 }}>
              {category.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
