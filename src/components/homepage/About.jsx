import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/202202021024.jpeg";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const education=useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        )
        .to(
          education.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    
    <section id="about" ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
              I am an independent fullstack developer 
              <br></br>
              <br></br>I specialize in crafting polished, user-friendly, and sophisticated designs tailored for startups and small businesses, 
              aimed at making a lasting impression in the digital realm. 
              <br></br>
              <br></br>
              Skilled in the intricacies of full-stack , I bring a holistic approach to every project, 
              combining top-notch frontend aesthetics with robust backend functionality.              
              <br></br>
              <br></br>
              <h4
            ref={education}
              className="translate-y-10 2xl:text-5xl font-medium leading-tight opacity-0"
            >
              Education : Bachelor of Technology in Computer Science Engineering from The CENTRAL INSTITUTE OF TECHNOLOGY KOKRAJHAR
            </h4>
            <br></br>
            <button 
    className=" rounded-full inline-flex text-md  bg-accent-300 mt-3 px-8 py-3 text-secondary-200 font-grotesk tracking-wide bottom-2 ">
    <a href="/src/assets/resume/Prabhu_Satyam_Resume.pdf" download className="ml-2">Resume </a>
    </button>
            </p>
          </div>
        </div>
      </div>
      <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              
    </section>
  );
}
