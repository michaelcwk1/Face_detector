import React from "react";
import { motion } from "framer-motion";
import tpImg from "../assets/logo.jpeg";

const Hero = () => {
  return (
    <div className="w-4/5 m-auto flex flex-col md:flex-row justify-between  md:mt-20">
      <div className=" space-y-6 text-center md:text-center">
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="  flex justify-center mt-12 md:mt-0 lg:mt-0"
      >
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={tpImg}
          alt="Evotek"
          className="hero-img custom-max-width"
        />
      </motion.div>


        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 10,
          }}
          className="text-2xl md:text-6xl font-bold"
        >
          PT Evolusi Teknologi
        </motion.h1>

        <motion.p
        className="text-justify"
        initial={{ opacity: 0 }}   
        animate={{ opacity: 1 }}   
        transition={{ duration: 1 }}   
        whileInView={{ opacity: 1 }}  
        viewport={{ once: true }}  
      >
        "Saya telah selesai magang di PT Evoteks, dan selama magang, saya mengerjakan beberapa proyek, di antaranya
        adalah proyek cetak dan form."
      </motion.p>

      <motion.p
        className="text-justify"
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ duration: 1, delay: 2 }}  
        whileInView={{ opacity: 1 }}  
        viewport={{ once: true }}  
      >
        Masa magang, dengan tujuan untuk memberikan kontribusi pada perusahaan. Untuk mempermudah pengujian dan
        memberikan gambaran yang lebih jelas mengenai hasil proyek, saya memutuskan untuk mengemas semua pekerjaan
        saya dalam bentuk website.
      </motion.p>

      <motion.p
        className="text-justify"
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ duration: 1, delay: 3  }}  
        whileInView={{ opacity: 1 }}  
      >
        Hal ini agar penguji dapat dengan mudah mengakses dan melihat hasil kerja saya secara langsung tanpa
        harus melalui berbagai format atau file yang terpisah.
      </motion.p>

      <motion.p
        className="text-justify"
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ duration: 1, delay: 4 }}  
        whileInView={{ opacity: 1 }}  
        viewport={{ once: true }}   
      >
        Website ini berfungsi sebagai platform untuk menampilkan semua proyek yang telah saya selesaikan selama
        magang, termasuk proyek cetak dan form.
      </motion.p>

      <motion.p
        className="text-justify"
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ duration: 1, delay: 5}}  
        whileInView={{ opacity: 1 }}  
        viewport={{ once: true }}  
      >
        Dengan menggunakan website, penguji dapat melihat
        keseluruhan hasil pekerjaan saya dalam satu tempat yang terorganisir.
      </motion.p>

      <motion.p
        className="text-justify"
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ duration: 1, delay: 6 }}  
        whileInView={{ opacity: 1 }}  
        viewport={{ once: true }} 
      >
        Semua hasil proyek yang saya buat selama magang di PT Evoteks dapat ditemukan di website ini, yang
        berfungsi sebagai dokumentasi dan referensi dari tugas-tugas yang telah saya kerjakan."
      </motion.p>

       
      </div>
    </div>
  );
};

export default Hero;
