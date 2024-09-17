import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import Role from "./components/homepage/Role";
import About from "./components/homepage/About";
import Experience from "./components/homepage/Experience";
import Skills from "./components/homepage/Skills";
import Works from "./components/homepage/Works";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";

const App = () => {
 // Registering GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  // Creating a ref array to hold references to sections
  const sectionRefs = useRef([]); 

  // Setting up GSAP animations for section headings
  useEffect(() => {
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");
      //Animation for the section title : About me
      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          // markers:true,
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",//start end play reverse

        });
        ScrollTrigger.refresh()
      });
    });
  }, []);

  

  return (
    <div className="bg-secondary-100">
      <NavBar sectionRefs={sectionRefs.current} />{" "}
      {/* Access to sectionref for looping */}
      <Hero />
      <main className="px-5 md:px-10 xl:px-20 2xl:px-28"> {/*Responsive padding */}
        <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />{" "}
        {/* forwardedRef props to pass into the child component to access the ref, then this will go into the useRef array  */}
        <About />
        <Experience />
        <Skills />
        <Works forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
