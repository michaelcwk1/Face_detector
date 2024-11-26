import React from "react";
import { motion } from "framer-motion";
import tpImg from "../assets/logo.jpeg";

const Hero = () => {
  return (
    <section className="w-4/5 m-auto flex flex-col md:flex-row justify-between md:mt-20">
      {/* Logo Section */}
      <div className=" w-full flex justify-center md:justify-start space-y-6 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mt-12 md:mt-0 lg:mt-0"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={tpImg}
            alt="Evotek"
            className="hero-img  md:p-20 h-auto max-h-[300px] object-contain" // Adjust height here
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="space-y-6 md:space-y-8 md:ml-8 text-center md:text-left">
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
          PT Evolusi Teknologi Indonesia adalah konsultan TI yang berbasis di Sidoarjo, Jawa Timur. Perusahaan ini terus
          berkembang untuk memenuhi tuntutan bisnis global, dengan komitmen memberikan layanan TI terbaik. Timnya
          terdiri dari tenaga ahli berpengalaman dengan latar belakang pendidikan dan pengalaman dari berbagai
          organisasi dan instansi.
        </motion.p>

        <motion.p
          className="text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PT Evolusi Teknologi Indonesia bertujuan membantu klien mencapai sasaran usaha dengan menyediakan layanan TI
          terbaik melalui sistem informasi yang mendukung kelancaran bisnis. Dengan motto "Talk With Us, Share With Us,
          And Blend With Us For the Brighter Future," PT Evolusi Teknologi Indonesia ingin menjadi mitra yang tumbuh
          bersama perusahaan Anda.
        </motion.p>

        <motion.p
          className="text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          whileInView={{ opacity: 1 }}
        >
          PT Evolusi Teknologi Indonesia juga merancang Pengembangan Aplikasi Kustom dan Aplikasi Produk mencakup dua
          layanan utama. Pengembangan aplikasi kustom dirancang sesuai kebutuhan spesifik perusahaan, biasanya untuk
          aplikasi yang unik dan sulit dimodifikasi dari produk yang ada di pasaran. Sementara aplikasi produk adalah
          solusi bisnis siap pakai yang dapat digunakan langsung, baik untuk usaha retail maupun hospitality.
        </motion.p>

        <motion.p
          className="text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          PT Evolusi Teknologi Indonesia melayani desain, pemeliharaan, dan pengembangan situs web untuk pribadi maupun
          perusahaan. Didukung oleh tim desainer dan pengembang profesional, layanan ini memastikan tampilan website
          menarik dan berkualitas, mendukung citra perusahaan atau pribadi.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
