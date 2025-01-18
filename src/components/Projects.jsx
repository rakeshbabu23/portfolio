import { ExternalLink, Github } from "lucide-react";
import SubtitleGen from "../assets/subtitle-gen.png";
import Realdevs from "../assets/Realdevs.png";
import Nearby from "../assets/Nearby.png";
import Portfolio from "../assets/Portfolio.png";
const projects = [
  {
    title: "Subtitle Generator",
    link: "https://subtitles-generator-emh6.vercel.app/",
    github: "https://github.com/rakeshbabu23/subtitles-generator",
    image: SubtitleGen,
    tech: ["React", "Node.js", "FFmpeg", "AWS Transcribe"],
    description: `Developed a web application to generate and edit video subtitles with custom styling options. Users can customize font styles, colors, and sizes, then embed subtitles and download the finalized video.`,
  },
  {
    title: "Realdevs",
    link: "https://realdevs.vercel.app/",
    github: "https://github.com/rakeshbabu23/realdevs",
    image: Realdevs,
    tech: ["React", "Node.js", "MongoDB", "Puppeteer", "Redis"],
    description: `Portfolio and projects showcase platform with automated screenshot generation. Features Redis-backed cron jobs for tracking engagement metrics and calculating trending portfolios.`,
  },
  {
    title: "Nearby",
    link: "https://nearby-web-app.vercel.app/",
    github: "https://github.com/rakeshbabu23/nearby-web-app",
    image: Nearby,
    tech: ["React", "React Native", "Node.js", "MongoDB", "LocationIQ API"],
    description: `Full-stack social platform for local user interaction. Features include OTP authentication, location-based post discovery, multimedia content sharing, reels, real-time chat, and comprehensive profile management.`,
  },
  {
    title: "Portfolio",
    link: "https://github.com/rakeshbabu23/realdevs",
    github: "https://github.com/rakeshbabu23/cheap-crypto-finder",
    image: Portfolio,
    tech: ["React", "TailwindCSS"],
    description: `Modern portfolio website showcasing professional work and projects. Built with latest web technologies for optimal performance and design aesthetics.`,
  },
];

const ProjectCard = ({ project }) => (
  <div className="group border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300">
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-white">{project.title}</h3>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full border border-white/20 text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-400 leading-relaxed">{project.description}</p>

      <div className="flex items-center gap-4 pt-2">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <ExternalLink size={18} />
          <span>Live Demo</span>
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          <Github size={18} />
          <span>Source Code</span>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of projects showcasing my expertise in full-stack
          development, from interactive web applications to mobile solutions.{" "}
          <a
            href="https://github.com/rakeshbabu23/"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline text-white inline-flex items-center"
          >
            <span className="font-semibold"> More projects</span>

            <span className="ml-1">
              <ExternalLink size={18} />
            </span>
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
