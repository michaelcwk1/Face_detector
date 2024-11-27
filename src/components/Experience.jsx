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
        <h3 className="md:text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
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
    visible: { height: "80%", transition: { duration: 2 } },
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
        title="Frontend Developer"
        date="Jan 2023 - Present"
        description="Worked on building responsive web applications."
        index={0} // Indeks untuk animasi
      />
      <TimelineItem
        side="right"
        title="Backend Developer"
        date="Jun 2021 - Dec 2022"
        description="Designed and maintained server-side applications."
        index={1} // Indeks untuk animasi
      />
      <TimelineItem
        side="left"
        title="Internship"
        date="Jan 2021 - May 2021"
        description="Developed simple APIs and worked on small projects."
        index={2} // Indeks untuk animasi
      />
      <TimelineItem
        side="right"
        title="Backend Developer"
        date="Jun 2021 - Dec 2022"
        description="Designed and maintained server-side applications."
        index={3} // Indeks untuk animasi
      />
      <TimelineItem
        side="left"
        title="Internship"
        date="Jan 2021 - May 2021"
        description="Developed simple APIs and worked on small projects."
        index={4} // Indeks untuk animasi
      />
      <TimelineItem
        side="right"
        title="Backend Developer"
        date="Jun 2021 - Dec 2022"
        description="Designed and maintained server-side applications."
        index={5} // Indeks untuk animasi
      />
      <TimelineItem
        side="left"
        title="Internship"
        date="Jan 2021 - May 2021"
        description="Developed simple APIs and worked on small projects."
        index={6} // Indeks untuk animasi
      />
    </div>
  );
};

export default Experience;
