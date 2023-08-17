import React from "react";
import { motion } from "framer-motion";
import {
  githubLogo,
  linkedinLogo,
  twitterLogo,
  instagramLogo,
  facebookLogo,
  youtubeLogo
} from "../assets"; // Import images

const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center h-[4cm] mb-4 ">
      <a
        href="https://github.com/NoorainRaza23"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={githubLogo}
          alt="GitHub"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          className="w-10 h-10 mx-5"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/noorainraza"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={linkedinLogo}
          alt="LinkedIn"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          className="w-15 h-15 mx-5"
        />
      </a>
      <a
        href="https://twitter.com/NoorainRaza23"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={twitterLogo}
          alt="Twitter"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          className="w-12 h-12 mx-5"
        />
      </a>
      <a
        href="https://www.instagram.com/prince__noorain"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={instagramLogo}
          alt="Instagram"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          className="w-15 h-15 mx-5"
        />
      </a>
      <a
        href="https://www.facebook.com/PrinceNoorainNR"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={facebookLogo}
          alt="Facebook"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          className="w-15 h-15 mx-5"
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCJ92mqNlQI4t_egZhcbNTwA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.img
          src={youtubeLogo}
          alt="YouTube"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          className="w-15 h-15 mx-5"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
