import React from "react";
import { motion } from "framer-motion";

//import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { imagesName } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">S. Azim</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Software Engineer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {imagesName.map((image, index) => (
        <div className="circle-cmp" key={`circle-${index}`}>
          <motion.div
            transition={{
              duration: 2.5,
            }}
            animate={{
              scale: [1, 1.1, 1.1, 0.9, 0.9],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            className="c1"
          >
            <img src={image.imageURL} alt="profile_bg" />
          </motion.div>
          <motion.div
            className="c2"
            animate={{ scale: [0, 1], x: [-60, -10], opacity: [0, 1] }}
            transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          >
            <h3>{image.name}</h3>
          </motion.div>
        </div>
      ))}
    </motion.div>
  </div>
);

export default Header;
