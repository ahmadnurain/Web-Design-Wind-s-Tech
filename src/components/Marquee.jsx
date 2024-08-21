import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Adobe Ilustrator",
    username: "Design Grafis",
    img: "/src/assets/logo/adobe ilustrator (6).png",
  },
  {
    name: "Adobe XD",
    username: "Ui Design",
    img: "/src/assets/logo/Adobe XD (21).png",
  },
  {
    name: "After Effect",
    username: "Video Editor",
    img: "/src/assets/logo/After Effect (19).png",
  },
  {
    name: "Blender",
    username: "3D Ui Design",
    img: "/src/assets/logo/Blender (12).png",
  },
  {
    name: "C++",
    username: "Back End Developer",
    img: "/src/assets/logo/6132222_2.png",
  },
  {
    name: "C#",
    username: "Back End Developer",
    img: "/src/assets/logo/c--4.png",
  },
  {
    name: "Codeigniter",
    username: "Back End Developer",
    img: "/src/assets/logo/Codeigniter (15).png",
  },
  {
    name: "Docker",
    username: "Back End Developer",
    img: "/src/assets/logo/Docker (17).png",
  },
  {
    name: "Excel",
    username: "Data Analysis",
    img: "/src/assets/logo/Excel (14).png",
  },
  {
    name: "figma",
    username: "UI/UX Design",
    img: "/src/assets/logo/figma.png",
  },
  {
    name: "Firebase",
    username: "Back End Developer",
    img: "/src/assets/logo/Firebase (18).png",
  },
  {
    name: "Golang",
    username: "Back End Developer",
    img: "/src/assets/logo/Go lang.png",
  },
  {
    name: "java",
    username: "Back End Developer",
    img: "/src/assets/logo/java.png",
  },
  {
    name: "Jquery ",
    username: "Front End Developer",
    img: "/src/assets/logo/Jquery  (16).png",
  },
  {
    name: "Kotlin",
    username: "Mobile Development",
    img: "/src/assets/logo/Kotlin_(programming_language)-Logo.wine.png",
  },
  {
    name: "Laravel",
    username: "Back End Developer",
    img: "/src/assets/logo/Laravel (3).png",
  },
  {
    name: "Mongodb",
    username: "Back End Developer",
    img: "/src/assets/logo/Mongodb  (9).png",
  },
  {
    name: "mysql",
    username: "Back End Developer",
    img: "/src/assets/logo/mysql.png",
  },
  {
    name: "Node js",
    username: "Back End Developer",
    img: "/src/assets/logo/Node js (11).png",
  },
  {
    name: "Photoshop",
    username: "Design Grafis",
    img: "/src/assets/logo/Photoshop (5).png",
  },
  {
    name: "python",
    username: "Data Science",
    img: "/src/assets/logo/python.png",
  },
  {
    name: "TypeScript",
    username: "Front End Developer",
    img: "/src/assets/logo/TypeScript (8).png",
  },
  {
    name: "Vue",
    username: "Front End Developer",
    img: "/src/assets/logo/Vue  (2).png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username }) => {
  return (
    <figure
      className={cn(
        "relative w-[20rem] h-auto cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className=" lg:w-[4.5rem] w-[3rem] h-auto mr-5 mt-2.5" alt="" src={img} />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-start  dark:text-white uppercase"> {name}</h1>
          <p className="text-base text-start font-normal text-label-text dark:text-white/40">{username}</p>
        </div>
      </div>
    </figure>
  );
};

// Add propTypes for validation
ReviewCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export function MarqueeDemo() {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <motion.div
      className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none "
      initial={{ opacity: 0, y: 100 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      whileInView={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      }}
      transition={{ duration: 1 }}
    >
      <Marquee pauseOnHover className="[--duration30s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} {...review} />
        ))}
      </Marquee>
    </motion.div>
  );
}
