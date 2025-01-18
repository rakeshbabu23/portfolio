import { useState } from "react";
import Card from "./Card";

const exp = [
  {
    logo: "data:image/jpeg;base64,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",
    company: "Onelab Ventures",
    role: "SDE -1",
    duration: "2024(Jan)-present",
    description: `• MasterOne: Developed a comprehensive CMS dashboard using ReactJS and Firebase. Integrated advanced data visualization tools for user insights.

• Obyami: Created a full-fledged React Native application with TypeScript, integrated with Node.js and MongoDB. Implemented Appypay Payment gateway, Zego Cloud Calling, and multi-language support (Portuguese, French, Arabic, Amharic).

• Delivered real-time chat, video calls, push notifications, and optimized data fetching with React Query.`,
  },
  {
    logo: "https://avatars.githubusercontent.com/u/12999326?s=200&v=4",
    company: "Rupeek Fintech",
    role: "SDE -1",
    duration: "2023(Jul-Nov)",
    description: `• Engineered automated PDF generation system for gold loans using Node.js and Spring Boot, ensuring precise loan and repayment documentation.

• Significantly improved code quality by increasing test coverage from 30% to 80%.`,
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsa_q5ZQjUEN7pcn7aQ6mOev0DYcJWfWIZA&s",
    company: "Cognizant",
    role: "Intern",
    duration: "2023(Jan-Jun)",
    description: `• Trained on MERN tech stack
•  Developed a comprehensive management system for a painting company to streamline operations and enhance customer experience. The system included:
Admin Panel: Built an admin interface to manage clients, staff assignments, schedules, and project statuses effectively.
Real-time Updates: Integrated real-time notifications for booking confirmations, order status updates, and reminders.`,
  },
];

const WorkExp = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="py-8">
      <h2 className="mb-6 font-semibold text-2xl text-white">
        Work Experience
      </h2>
      <div className="space-y-4">
        {exp.map((e, index) => (
          <Card
            key={e.company}
            index={index}
            data={e}
            isOpen={isOpen}
            onClick={(num) =>
              setIsOpen((curr) => (curr === num + 1 ? null : num + 1))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
