import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/Screenshot (1966).png";
import rrr from "/src/assets/images/GSSOC contributor bedge.png";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceAbout() {
  const company = useRef(null);
  const experienceSection = useRef(null);

  // Unique refs for both sets of content
  const heading1 = useRef(null);
  const subheading1 = useRef(null);
  const body1 = useRef(null);

  const heading2 = useRef(null);
  const subheading2 = useRef(null);
  const body2 = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: experienceSection.current,
        start: "top 400px",
        toggleActions: "play none none none",
      },
    });

    // Animation for first section
    timeline
      .to(
        heading1.current,
        { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
        0
      )
      .to(
        subheading1.current,
        { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
        0.1
      )
      .to(
        body1.current,
        { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
        0.2
      );

    // Animation for second section
    timeline
      .to(
        heading2.current,
        { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
        0.3
      )
      .to(
        subheading2.current,
        { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
        0.4
      )
      .to(
        body2.current,
        { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
        0.5
      );

    ScrollTrigger.refresh();
  }, []);

  return (
    <section
      id="experience"
      ref={experienceSection}
      aria-label="about me"
      className="Nav-Change"
    >
      <Heading title="experience" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10">
        {/* First experience */}
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={company}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-full object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading1}
              className="translate-y-10 text-heading-3 2xl:text-5xl font-semibold leading-tight opacity-0"
            >
              Technical co-ordinator at Coding Club, CITK
            </h3>
            <h5
              ref={subheading1}
              className="translate-y-10 2xl:text-5xl font-medium leading-tight opacity-0"
            ></h5>
            <p
              ref={body1}
              className="translate-y-10 text-body-1 2xl:text-4xl opacity-0"
            >
              <br />
              • Involved in the club centered around various program’s.
              <br />
              <br />
            </p>
          </div>
        </div>

        {/* Second experience */}
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={company}
            loading="lazy"
            className="h-full w-full object-cover object-center"
            src={rrr}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading2}
              className="translate-y-10 text-heading-3 2xl:text-5xl font-semibold leading-tight opacity-0"
            >
              Contributor at GirlScript Summer of Code
            </h3>
            <h5
              ref={subheading2}
              className="translate-y-10 2xl:text-5xl font-medium leading-tight opacity-0"
            ></h5>
            <p
              ref={body2}
              className="translate-y-10 text-body-1 2xl:text-4xl opacity-0"
            >
              <br />
              • Trying to contribute to open source projects. (trying exciting
              challenge with Copliotkit)
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
