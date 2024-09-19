import SkillsUi from "../ui/SkillsUi";
import Heading from "../ui/Heading";

export default function skills() {

  const frontendItemsList = [
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "ReactJS",
  ];

  const brontendItemsList = [
    
    "Node.js",
    "Express",
    "SQL",
    "MongoDB",
    "Next.js",
    
  ];

  const othersItemsList = [
    
    "Java",
    "Data Structure and Algorithm",
   
  ];

  return (
    <section id="skills" className="my-[10%]" aria-label="services">
      <Heading title="skills" />
      <div className="space-y-14">
        <SkillsUi
          title="Front-End."
          description="I create immersive digital experiences focused on user engagement and seamless navigation. My goal is to design intuitive, user-friendly interfaces that enhance the overall user experience."
          items={frontendItemsList}
        />
        <SkillsUi
          title="Back-End."
          description="I specialize in developing robust backend solutions that ensure seamless digital operations, focusing on building efficient, scalable systems for optimal performance and reliability."
          items={brontendItemsList}
        />
        <SkillsUi
          title="Programming."
          description="I have a basic foundation in problem-solving, with expertise in Data Structures and Algorithms, and a passion for solving complex challenges through innovative solutions."
          items={othersItemsList}
        />
      </div>
    </section>
  );
}
