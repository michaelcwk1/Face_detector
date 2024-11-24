import React from "react";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="w-4/5 m-auto flex flex-col md:flex-row justify-between mt-10 md:mt-20">
      <div className="  space-y-6 text-left md:text-center">
      <motion.h1
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 80,
    damping: 10,
  }}
  className="text-3xl md:text-6xl font-bold"
>
  PT Evolusi Teknologi
</motion.h1>

        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ipsa debitis totam sed error expedita ea, veritatis inventore, quod id quae asperiores, voluptatum quam omnis itaque! Sunt iusto fugiat exercitationem?,Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum dolores mollitia quidem quod? Tenetur fugit, perferendis tempora ipsum, a veritatis porro eum facere ad delectus quos autem doloremque ex! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi odit ullam, itaque earum quo. Tempore magnam aspernatur inventore accusantium exercitationem corrupti, a at voluptas in ad ea cumque est.
        </p>
         
      </div>
    </div>
  );
};

export default Hero;
