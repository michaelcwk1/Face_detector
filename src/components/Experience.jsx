import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TimelineItem = ({ side, title, date, description, index }) => {
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, delay: index * 2 }, // Delay setiap item
    },
  };

  return (
    <motion.div
      className={`flex ${side === "left" ? "flex-row-reverse" : "flex-row"} items-center`}
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={`w-1/2 p-4 ${side === "right" ? "text-right" : ""}`}>
        <h3 className="md:text-xl font-bold" style={{ whiteSpace: "nowrap" }}>{title}</h3>
        <p className="text-gray-600" >{description}</p>
        <span className="text-sm text-gray-400  ">{date}</span>
      </div>
      <div className="w-10 h-10 bg-gray-400 rounded-full border-4 m-2  "></div>
    </motion.div>
  );
};

const Experience = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.9 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const lineVariants = {
    visible: { height: "85%", transition: { duration: 2 } },
  };

  return (
    <div className="relative flex flex-col items-center mt-20 py-20" id="experience">
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
        }}
        className="text-4xl md:text-6xl font-bold mb-10"
      >
       Journey
      </motion.p>
      <motion.div
        className="absolute bg-slate-600 w-2 mt-20"
        variants={lineVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
      />
      <TimelineItem
        side="left"
        title="Landing Page"
        date="01 Sep - 20 Sep 2024"
        description="Belajar Membuat Landing Page dengan studi kasus Perpustakaan "
        index={0}
      />
      <TimelineItem
        side="right"
        title="Projek 1 Website "
        date="20 Sep - 25 Sep 2024"
        description="Landing page Web Perpustakaan SmartLib dan telah di konversi ke bentuk Aplikasi"
        index={1} 
      />
      <TimelineItem
        side="left"
        title="Postgre SQL"
        date="25 Sep - 01 Oct 2024"
        description="Mempelajari cara kerja Postgre SQL"
        index={2} 
      />
      <TimelineItem
        side="right"
        title="Projek 2 Cetak / Form"
        date="01 Oct - 10 Nov 2024"
        description="1 Bulan kita membantu perusahan mengerjakan Cetak / Form dari beberapa Client dari PT Evotek"
        index={3}  
      />
      <TimelineItem
        side="left"
        title="Projek 3 Iot"
        date="10 Nov - 23 Nov 2024"
        description="Membuat Website untuk mempermudahkan Hasil Projek yang telah di kerjakan dengan sentuhan konsep Iot "
        index={4}  
      />
      <TimelineItem
        side="right"
        title="Konsep API dan MVC"
        date="23 Nov - 10 Dec 2024"
        description="Mempelajari struktur server PT Evotek konsep API dan MVC "
        index={5}  
      />
      <TimelineItem
        side="left"
        title="Projek 4 EvoSisTask"
        date="10 Dec - 23 Dec 2024"
        description="Rancang bangung aplikasi EvoSisTask"
        index={6}  
      />
      <TimelineItem
        side="right"
        title="Laporan dan sidang"
        date="23 Dec - 20 Jan 2025"
        description="Mempersiapkan Laporan dan Projek untuk Hasil Akhir magang 5 bulan"
        index={7} 
      />
 
    </div>
  );
};

export default Experience;
