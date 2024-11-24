import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";  

const Cetak = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const handleProjectClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="container mx-auto px-4 pt-10 pb-16" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center text-4xl font-bold text-gray-800 tracking-wider"
      >
        PROJECT CETAK
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            key={project.id}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => handleProjectClick(index)}
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl bg-black/70 backdrop-blur-sm"
            >
              <h3 className="mb-3 text-xl font-semibold">{project.name}</h3>
              <p className="mb-8 px-6 text-center text-sm text-gray-200">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-2 text-black transition-colors hover:bg-gray-100"
              >
                <span>Go</span>
                <MdArrowOutward className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Cetak;
