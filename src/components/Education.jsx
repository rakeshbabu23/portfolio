import { useState } from "react";
import Card from "./Card";
const edu = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ77atGdoT1m07zq21unug5T5h7WRYneJi3w&s",
    company: "Madanapalle Institute of Technology and Science",
    role: "B.Tech / B.E",
    duration: "2019 - 2023",
    description: "B.Tech / B.E in Electronic and Communication Engg",
  },
];
const Education = () => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <>
      <h5 className="mb-2 font-semibold text-xl lg:text-2xl tracking-tight">
        Education
      </h5>
      <div>
        {edu.map((e, index) => {
          return (
            <Card
              index={index + 1}
              key={e.company}
              data={e}
              isOpen={isOpen}
              onClick={(num) => setIsOpen((curr) => (!curr ? num + 1 : null))}
            />
          );
        })}
      </div>
    </>
  );
};

export default Education;
