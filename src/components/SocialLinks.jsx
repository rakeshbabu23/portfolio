import { Mail, Linkedin, Github } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:baburakesh2308@gmail.com",
      label: "Email",
    },
    {
      icon: Github,
      href: "https://github.com/rakeshbabu23",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rakesh-babu-ba487820a/",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="flex items-center space-x-8 py-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center hover:opacity-70 transition-opacity"
          aria-label={link.label}
        >
          <link.icon className="w-6 h-6 text-white" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
