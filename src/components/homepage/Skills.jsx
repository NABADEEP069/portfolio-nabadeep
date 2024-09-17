import SkillsUi from "../ui/SkillsUi";
import Heading from "../ui/Heading";

export default function skills() {

  const frontendItemsList = [
    "HTML",
    "CSS",
    "BootStrap",
    "JavaScript",
   
    
    "TailwindCSS",
    "ReactJS",
  ];

  const brontendItemsList = [
    "Rest APIs",
    "Node.js",
    "Express",
    "SQL",
    "MongoDB",
    "Mongoose",
    "Next.js",
    
  ];

  const othersItemsList = [
    "C ",
    "Java",
    
    "Data Structure and Algorithm",
   
  ];

  return (
    <section id="skills" className="my-[10%]" aria-label="services">
      <Heading title="skills" />
      <div className="space-y-14">
        <SkillsUi
          title="Front-End."
          description="My focus lies in creating immersive digital experiences that 
          prioritize user engagement and seamless navigation. I'm dedicated to crafting user-friendly
           interfaces and enhancing the overall user experience to ensure every interaction is both 
           intuitive and impactful."
          items={frontendItemsList}
        />
        <SkillsUi
          title="Back-End."
          description="My focus is on developing powerful backend solutions that drive seamless digital 
          operations. I specialize in architecting efficient and scalable systems, prioritizing performance
           and reliability to deliver optimal user experiences."
          items={brontendItemsList}
        />
        <SkillsUi
          title="Programming."
          description="I have a strong foundation in problem-solving, where I enjoy unraveling complex puzzles
           and crafting innovative solutions. With experience in various programming challenges, 
           I've developed expertise in Data Structures and Algorithms."
          items={othersItemsList}
        />
      </div>
    </section>
  );
}
