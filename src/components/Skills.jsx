import Chip from "./Chip";
const skills = [
  "React",
  "React Native",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
  "Firebase",
  "REST API",
  "Git",
  "AWS",
  "HTML/CSS",
  "Redux",
  "Express.js",
  "SQL",
  "Tailwind CSS",
];

function Skills() {
  return (
    <div className="py-8">
      <h2 className="mb-6 font-semibold text-2xl text-white">
        Technical Skills
      </h2>
      <div className="flex flex-wrap -ml-1">
        {skills.map((skill, index) => (
          <Chip key={index}>{skill}</Chip>
        ))}
      </div>
    </div>
  );
}

export default Skills;
