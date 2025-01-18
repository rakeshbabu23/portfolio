import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="font-bold text-4xl lg:text-6xl text-gray-100">
          Hi, I'm <span className="text-white">Rakesh</span> 👋
        </h1>
        <h2 className="text-xl lg:text-2xl text-gray-300">
          I decided to become a{" "}
          <span className="font-semibold text-white">software developer</span>{" "}
          when I was in <sup>10th</sup> grade
        </h2>
      </div>

      <div className="space-y-4">
        <h2 className="font-semibold text-2xl text-white">About</h2>
        <p className="text-lg leading-relaxed text-gray-300 space-y-2">
          Skilled{" "}
          <span className="font-semibold text-white">Full Stack Developer</span>{" "}
          with <span className="font-semibold text-white">1.5+ years</span> of
          experience in creating efficient and maintainable web and mobile
          applications. Proficient in front-end and back-end development, with
          expertise in{" "}
          <span className="font-semibold text-white">
            React, React Native, Node.js, TypeScript,
          </span>{" "}
          and modern development practices. Passionate about creating{" "}
          <span className="font-semibold text-white">
            user-centric solutions
          </span>{" "}
          and writing{" "}
          <span className="font-semibold text-white">clean, scalable code</span>
          .
        </p>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Header;
