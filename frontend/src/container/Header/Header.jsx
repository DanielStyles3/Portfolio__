import React from 'react';
import "./Header.scss";
import { motion } from "framer-motion";
import Profile from "../../assets/profile.jpg";
import Circle from "../../assets/bgIMG.png";
import Redux from "../../assets/redux.png";
import Node from "../../assets/node.png";
import AppWrap from '../../wrapper/AppWrap';
import Javascript from "../../assets/javascript.png";

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
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
              <h1 className="head-text">Daniel</h1>
            </div>
          </div>
  
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Affilate Marketer</p>
          </div>
        </div>
      </motion.div>
  
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={Profile} alt="profile_bg" />
        </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[Redux, , Node,Javascript].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
  
export default AppWrap(Header,'home') ;
