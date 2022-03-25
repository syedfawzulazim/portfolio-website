import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skills.scss";

interface skillsObjType {
  icon: string;
  name: string;
  bgColor: string;
}
interface worksType {
  name: string;
  company: string;
  desc: string;
}

interface experienceObjType {
  works: worksType[];
  year: string;
}

const Skills = () => {
  const [experiences, setExperience] = useState<experienceObjType[]>([]);
  const [skills, setSkills] = useState<skillsObjType[]>([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="app__skills-item app__flex"
              key={`item-${index}`}
            >
              <motion.div
                whileHover={{
                  border: "1px solid #313bac",
                  transition: { ease: "easeIn" },
                  boxShadow:
                    "rgba(9, 160, 230, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
                }}
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
                key={index}
              >
                <img src={urlFor(skill.icon).toString()} alt={skill.name} />
              </motion.div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div className="app__skills-exp-item" key={`item-${index}`}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience?.works?.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={index}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
