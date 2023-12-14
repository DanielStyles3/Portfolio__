import React, { useState, useEffect } from 'react';
import AppWrap from '../../wrapper/AppWrap';
import { motion } from 'framer-motion';
import About01 from "../../assets/about01.png";
import About02 from "../../assets/about02.png";
import About03 from "../../assets/about04.png";

import './About.scss';
import { urlFor, client } from '../../Client'; // Adjust the path accordingly

const About = () => {
  // Uncomment the following lines if you want to fetch data from Sanity
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  const abouts = [
    { title: 'Frontend Developer', description: "I'm Onyebezie Daniel, a dedicated frontend developer with a profound passion for creating exceptional web experiences. My journey in the digital realm is driven by the intersection of technology and design, where I thrive in bringing imaginative concepts to life.My love for coding extends beyond the lines of HTML, CSS, and JavaScript. It's about creating interfaces that not only function seamlessly but also resonate aesthetically. As a frontend developer, I find joy in translating ideas into visually stunning, user-centric designs that captivate and engage.", img: About01 },
    { title: 'Backend Developer', description: "I'm Onyebezie Daniel, a passionate backend developer specializing in crafting robust web solutions. My expertise lies in the seamless integration of technology, particularly in server-side development using Node.js and Express. Proficient in database management and performance optimization, I focus on architecting reliable, scalable systems that adhere to best practices in security and performance. My goal is to translate complex requirements into efficient, data-driven solutions, ensuring users experience a seamless, reliable, and secure digital journey.", img: About02 },
    { title: 'Affilate Marketing', description: "I'm excited to share that I'm deeply involved in the world of affiliate marketing. As an affiliate marketer, I specialize in connecting people with products and services they'll love. It's all about crafting engaging experiences and building connections. If you're looking for someone to bring a creative and results-driven touch to your affiliate marketing efforts, I'm here and ready to make a meaningful impact. Let's collaborate and take your affiliate journey to new heights! 🚀 ", img: About03 },
  ];

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Descd ign</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.img} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
