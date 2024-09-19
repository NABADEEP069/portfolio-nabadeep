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
      <div className="mt-16 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-round h-auto w-full rounded-full object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
           
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
             
              <br></br>
              <br></br>Hello Myself Nabadeep. I am doing my Bachelors in Technology with Computer Science as a major. I was born in Jan 28 2003 in Nalbari,Assam,India.
              <br></br>
              <br></br>
              I did my kindergarten in Bikash Jatiya Bidyalaya, debachara and continued my primary studies till seven standard at the same school. Then I continued my studies in Sankardeva Bidya Niketan, Nalbari where I got 83.5% in my boards. I went to DR. S.R. Academy, Nalbari from where I completed my higher secondary education and came to Central Institute of Technology for my Bachelor degree.         
              <br></br>
              <br></br>
             
            <br></br>
            <button 
  className="rounded-full inline-flex text-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-3 px-8 py-3 text-white font-bold tracking-wide shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
  <a href="/src/assets/resume/NABADEEP-RESUME-ORIGINAL.pdf" target="_blank" rel="noopener noreferrer" className="ml-2">
    Resume
  </a>
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
