import gestureDetection from "/src/assets/images/Whiplash_photo.jpg";
import portfolio from "/src/assets/images/t&p.jpg";
import cryptotracker from "/src/assets/images/LOGO Final Part 1-1.jpg";
import chatapp from "/src/assets/images/t&p.jpg";
import complainSys from "/src/assets/images/t&p.jpg";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-12 ">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-10 md:col-start-2">
          <Projects
            link=""
            img={gestureDetection}
            alt="Real-Time Gesture Detection Using CNN"
            name="Real-Time Gesture Detection Using CNN"
            type="Machine Learning • Scikit • NLP • Python"
            year="2021"
            tools="ML • Mediapipe • OpenCV • SciKit • Python (Pandas,Numpy)"

          />
        </div>
         {/* Project #2 */}
         <div className="col-span-1 pt-0 md:col-span-8">
          <Projects
            link=""
            img={cryptotracker}
            alt="Crypto Currrency Price Tracker"
            name="Crypto Currrency Price Tracker"
            type="Frontend Development • React • Context API • Firebase"
            year="2022"
            tools="HTML • CSS • JavaScript • React • Material JS • Chart JS • Context API • Email Auth"
          />
        </div>
        {/* Project #3 */}
        <div className="col-span-1 pt-0 md:col-span-4 md:p-8">
          <Projects
            link=""
            img={chatapp}
            alt="Chat App"
            name="Chat App"
            type="Computer Networks"
            year="2021"
            tools="TCP Socket Programming • Multi-Threading • Python"
          />
        </div>
        {/* Project #4 */}
        <div className="col-span-1 pt-0 md:col-span-3 md:pt-60">
        <Projects
            link=""
            img={complainSys}
            alt="complain and recruitment portal"
            name="complain and recruitment portal"
            type="Database Management System"
            year="2021"
            tools="Flask • MySql • Postgresql • Heroku"
          /> 
        </div>
        {/* Project #5 */}
        <div className="col-span-1 pt-0 md:col-span-9">
          <Projects
            link="#hero"
            img={portfolio}
            alt="Personal Portfolio Site"
            name="Personal Portfolio Site"
            type="Frontend Development • React"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript • React • Animation(GSAP)"
          />
        </div>
      </div>
    </section>
  );
}
