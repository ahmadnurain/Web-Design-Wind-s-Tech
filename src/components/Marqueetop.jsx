import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ahmad",
    username: "@ahmadfathoni",
    body: "Webcourse ini sangat membantu saya memahami konsep-konsep sulit. Penyampaiannya jelas dan mudah diikuti.",
    img: "/src/assets/testimoni/Ahmad.png",
  },
  {
    name: "Siti",
    username: "@sitinurilmi",
    body: "Materi yang disajikan sangat mendalam dan sesuai dengan kebutuhan saya. Saya merasa lebih percaya diri setelah mengikuti kursus ini.",
    img: "/src/assets/testimoni/Siti.png",
  },
  {
    name: "Budi",
    username: "@budionosiregar",
    body: "Saya sangat terkesan dengan kualitas materi dan cara penyampaian. Sangat interaktif dan informatif.",
    img: "/src/assets/testimoni/Budi.png",
  },
  {
    name: "Dewi",
    username: "@dewirengganis",
    body: "Webcourse ini sangat bermanfaat bagi perkembangan saya dalam dunia digital. Terima kasih!",
    img: "/src/assets/testimoni/Dewi.png",
  },
  {
    name: "Andi",
    username: "@andi_irawan",
    body: "Materinya praktis dan langsung bisa diaplikasikan. Pengalaman belajar yang menyenangkan.",
    img: "/src/assets/testimoni/Andi.png",
  },
  {
    name: "Rina",
    username: "@arinalestari",
    body: "Instruktur sangat jelas dan mudah dipahami. Webcourse ini benar-benar membantu saya.",
    img: "/src/assets/testimoni/Rina.png",
  },
  {
    name: "Hendra",
    username: "@hendrakusuma",
    body: "Saya berhasil meningkatkan keterampilan saya dengan webcourse ini. Sangat direkomendasikan!",
    img: "/src/assets/testimoni/Hendra.png",
  },
  {
    name: "Lina",
    username: "@linameliana",
    body: "Platform ini benar-benar berbeda dari yang lain. Pengalaman belajar yang tak terlupakan.",
    img: "/src/assets/testimoni/Lina.png",
  },
  {
    name: "Rizky",
    username: "@rizky_khoiri",
    body: "Kursus ini membantu saya mendapatkan pemahaman yang lebih baik. Presentasi materi sangat baik.",
    img: "/src/assets/testimoni/Rizky.png",
  },
  {
    name: "Maya",
    username: "@mayasari",
    body: "Topik-topik yang dibahas sangat relevan dengan tren industri saat ini. Sempurna!",
    img: "/src/assets/testimoni/Maya.png",
  },
  {
    name: "Farhan",
    username: "@farhanhidayat",
    body: "Webcourse ini menyediakan akses ke materi berkualitas tinggi yang susah ditemukan di tempat lain.",
    img: "/src/assets/testimoni/Farhan.png",
  },
  {
    name: "Aulia",
    username: "@auliasinta",
    body: "Penjelasannya sederhana, namun sangat mendalam. Saya sangat puas dengan webcourse ini.",
    img: "/src/assets/testimoni/Aulia.png",
  },
  {
    name: "Reza",
    username: "@rezaaidil",
    body: "Instruktur memberikan contoh-contoh praktis yang sangat membantu dalam memahami materi.",
    img: "/src/assets/testimoni/Reza.png",
  },
  {
    name: "Nina",
    username: "@nina_marlina",
    body: "Saya suka bagaimana kursus ini memberikan kesempatan untuk belajar dengan kecepatan saya sendiri.",
    img: "/src/assets/testimoni/Nina.png",
  },
  {
    name: "Wahyu",
    username: "@wahyu_agung",
    body: "Saya sekarang memiliki keahlian baru berkat kursus ini. Materi disajikan dengan cara yang sangat menarik.",
    img: "/src/assets/testimoni/Wahyu.png",
  },
  {
    name: "Rani",
    username: "@raniputri",
    body: "Saya menikmati setiap bagian dari kursus ini. Sangat interaktif dan mudah dipahami.",
    img: "/src/assets/testimoni/Rani.png",
  },
  {
    name: "Fajar",
    username: "@fajar_pratama",
    body: "Pembelajaran yang interaktif membuat saya semakin semangat untuk belajar. Webcourse ini luar biasa.",
    img: "/src/assets/testimoni/Fajar.png",
  },
  {
    name: "Aisyah",
    username: "@sitiaisyah",
    body: "Saya sangat menghargai bagaimana materi disajikan secara jelas dan langsung ke intinya.",
    img: "/src/assets/testimoni/Aisyah.png",
  },
  {
    name: "Dani",
    username: "@danisukmara",
    body: "Kursus ini memberikan wawasan baru yang belum pernah saya dapatkan di tempat lain.",
    img: "/src/assets/testimoni/Dani.png",
  },
  {
    name: "Anita",
    username: "@anita_yulia",
    body: "Webcourse ini sangat membantu meningkatkan keterampilan saya. Saya merasa lebih percaya diri sekarang.",
    img: "/src/assets/testimoni/Anita.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative lg:h-40 h-52 lg:w-[14rem] cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-white bg-white hover:bg-[#EAEAEB]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full object-contain" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black ">{name}</figcaption>
          <p className="text-xs font-medium text-label-text">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-label-text">{body}</blockquote>
    </figure>
  );
};

// Tambahkan validasi props menggunakan PropTypes
ReviewCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export function MarqueeDemoVertical() {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <motion.div
      className="relative flex h-[400px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background  border-none"
      initial={{ opacity: 0, x: 100 }}
      animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
      whileInView={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
        }
      }}
      transition={{ duration: 1 }}
    >
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 "></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 "></div>
    </motion.div>
  );
}
