import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Footer  from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
