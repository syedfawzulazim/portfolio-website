import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/syed-fawzul-azim-332a92a4/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/syedfawzulazim"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
