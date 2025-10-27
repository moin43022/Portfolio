import React from "react";
import "./Profile.css";
import {motion} from "framer-motion";

const SkillsSlider = ({ skills }) => {
  const skillList = skills || [
    "HTML", "CSS", "JavaScript", "React", "C", "C++", "Java",
    "Python", "MongoDB", "NodeJS", "Express", "TypeScript"
  ];

  const repeatCount = 4; // repeat skills multiple times for smooth infinite scroll

  const repeatedSkills = Array.from({ length: repeatCount }).flatMap(() => skillList);

  return (
    <motion.div className="skills-slider"
     initial={{ opacity: 0}}       
      whileInView={{ opacity: 1}}  
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
    >
      {/* Row 1: scroll left */}
      <div className="slider-row row1">
        <div className="slider-track">
          {repeatedSkills.map((skill, i) => (
            <span key={`row1-${i}`}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Row 2: scroll right */}
      <div className="slider-row row2">
        <div className="slider-track">
          {repeatedSkills.map((skill, i) => (
            <span key={`row2-${i}`}>{skill}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsSlider;
