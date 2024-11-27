import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Project = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-16">
      <h2 className="text-6xl font-bold text-center">My Project</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 items-center lg:grid-cols-2 gap-6 mt-10">
        <ProjectCard
          image="CETAK.png"
          title="Project Cetak"
          description="Projek Cetak ini merupakan kumpulan Projek cetak yang diberikan oleh  PT Evotek Dan Kumpulan projek ini terdiri dari beberapa rumah sakit yang dikerjakan oleh PT Evotek. Disini saya bertanggung jawab mengerjakan Projek Cetak nya dan hasil nya saya rangkum menjadi Website  "
          link="/cetak"
        />
        <ProjectCard
          image="form.png"
          title="Project Form"
          description="Projek Form ini merupakan kumpulan Projek Form yang diberikan oleh  PT Evotek Dan Kumpulan projek ini terdiri dari beberapa rumah sakit yang dikerjakan oleh PT Evotek. Disini saya bertanggung jawab mengerjakan Projek Form nya dan hasil nya saya rangkum menjadi Website  "
          link="/form"
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2 mb-7 ">{description}</p>
      <motion.a
          href={link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-violet-500 text-white py-2 px-5 rounded-full hover:bg-violet-600 transition-colors duration-300"
        >
          View Project
        </motion.a>
    </motion.div>
  );
};

export default Project;
