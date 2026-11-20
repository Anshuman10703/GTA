import { useState } from "react";
import "./App.css";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

gsap.registerPlugin(scrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
