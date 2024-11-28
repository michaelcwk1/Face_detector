import React from "react";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <section id="hero" className="min-h-screen">
        <Hero />
      </section>
      <section id="experience" className="min-h-screen">
        <Experience />
      </section>
      <section id="project" className="min-h-screen">
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
