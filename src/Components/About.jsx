import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Yashwanth from "../assets/Yashwanth.jpg";
import Santa from "../assets/Santa.jpg";
import Praveen from "../assets/Praveen.jpg";
import Dhanus from "../assets/Dhanus.jpg";
import Suhas from "../assets/Suhas.jpg";
import Aravinth from "../assets/Aravinth.jpg";
import Nithesh from "../assets/Nithesh.jpg";
import ParticlesBackground from "./ParticlesBackground";

const teamMembers = [
  {
    name: "Yashwanth",
    role: "CEO & Founder",
    img: Yashwanth,
    desc: "Yashwanth is the founder and CEO of Spynad, a newly established startup built by a group of passionate college students. With a vision to bring innovative ideas to life, he leads the team in exploring creative solutions while balancing the challenges of both entrepreneurship and academics.",
  },
  {
    name: "Praveen",
    role: "Client Relations",
    img: Praveen,
    desc: "As the Head of Client Relations at Spynad, Praveen is dedicated to building meaningful connections with clients and partners. With a natural talent for communication and problem-solving, he ensures that every interaction reflects the company's values of transparency, collaboration, and innovation.",
  },
  {
    name: "Aravinth",
    role: "Developer",
    img: Aravinth,
    desc: "Aravinth is a Developer at Spynad, focused on building and optimizing the company's digital products. Passionate about problem-solving and clean code, he enjoys creating seamless and efficient user experiences.",
  },
  {
    name: "Nithesh",
    role: "Developer",
    img: Nithesh,
    desc: "As a Developer at Spynad, Nithesh brings creativity and precision to every project he works on. He specializes in writing efficient, maintainable code and ensuring that applications run smoothly.",
  },
  {
    name: "Santhanakrishnan",
    role: "Content Creation",
    img: Santa,
    desc: "Santa is responsible for crafting engaging and compelling content that reflects the company's vision. Whether it's writing blog posts, social media updates, or marketing materials, Santa ensures that every piece resonates with the audience.",
  },
  {
    name: "Suhas",
    role: "Designer",
    img: Suhas,
    desc: "Suhas is the Designer at Spynad, bringing ideas to life through visually stunning graphics and creative designs. From branding materials to UI/UX elements, he ensures that every design is both aesthetically appealing and functional.",
  },
  {
    name: "Dhanus",
    role: "Video Editor",
    img: Dhanus,
    desc: "Dhanus is the Video Editor at Spynad, dedicated to producing high-quality video content that captivates and inspires. He ensures that each piece is polished and impactful.",
  },
  {
    name: "Shivakumar",
    role: "Editor and Photography",
    img: Suhas,
    desc: "Shivakumar combines his technical expertise with artistic vision to capture and refine stunning visuals. Passionate about storytelling through photography and editing, he helps the company build a strong and professional visual identity.",
  },
];

const TeamMemberSection = ({ member, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <div
          className={`flex flex-col ${
            isEven ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-8 md:gap-16`}
        >
          {/* Image Section - Simplified animations */}
          <motion.div
            className="relative w-64 h-64 md:w-[500px] md:h-[600px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-2xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content Section - Simplified animations */}
          <div
            className={`flex-1 ${
              isEven ? "md:pl-8" : "md:pr-8"
            } text-center md:text-left`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                {member.name}
              </h2>
              <h3 className="text-xl md:text-2xl text-purple-300 mb-6">
                {member.role}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {member.desc}
              </p>

              {/* Social Links - Simplified animations */}
              <div className="flex gap-6 justify-center md:justify-start">
                <SocialLink platform="github" />
                <SocialLink platform="linkedin" />
                <SocialLink platform="twitter" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ platform }) => (
  <motion.a
    href={`https://${platform}.com`}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group"
    whileHover={{ y: -2 }}
  >
    <div className="bg-white/5 backdrop-blur-sm text-white p-4 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
      <span className="text-xl">
        {platform === "github" ? "⌘" : platform === "linkedin" ? "⚡" : "★"}
      </span>
    </div>
  </motion.a>
);

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      id="About"
      className="min-h-screen bg-gradient-to-b from-black via-purple-900/10 to-black py-20"
    >
      <motion.div className="container mx-auto px-4 md:px-8" style={{ y }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 pb-4">
            Our Team
          </h1>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Meet the passionate minds behind Spynad
          </p>
        </motion.div>

        {teamMembers.map((member, index) => (
          <TeamMemberSection key={member.name} member={member} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default About;
