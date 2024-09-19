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
            link="https://nabadeep069.github.io/Project--Whiplash-Techfest/"
            img={gestureDetection}
            alt="PRJECT 'WHIPLASH'"
            name="PROJECT 'WHIPLASH'"
            type="• This is a virtual drumset project. I did a collaborative project named ”WHIPLASH” alongside four classmates, leveraging
HTML, CSS, and JavaScript. This project secured first prize in our annual tech fest ”Techcracy”."
            year="2023"
            tools="HTML • CSS • JS •(This is only desktop version) "
            

          />
        </div>
         {/* Project #2 */}
         <div className="col-span-1 pt-0 md:col-span-8">
          <Projects
            link="https://prashxant.github.io/NORTH-EAST-DRONE-SERVICES1/"
            img={cryptotracker}
            alt="NEDS"
            name="NEDS"
            type="North-east's leading drone service company"
            year="2024"
            tools="HTML • CSS • JavaScript • React • "
          />
        </div>
      
        {/* Project #4 */}
      
        {/* Project #5 */}
        <div className="col-span-1 pt-0 md:col-span-9">
          <Projects
            link="https://placements.cit.ac.in/#/home"
            img={portfolio}
            alt=""
            name="Training and Placement website, CITK"
            type="Built the official page of the placement cell of CITK."
            year="2024"
            tools="React • Typescript • Node.js "
          />
        </div>
      </div>
    </section>
  );
}
