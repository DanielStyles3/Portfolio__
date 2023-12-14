import React, { useState } from 'react';
import { LuGrip } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <nav className='app_navbar'>
                <div>
                    <div className="app_navabar-logo">
                        <span className='styles'>STYLES</span>
                    </div>
                </div>
                <ul className='app_navbar-links'>
                    {["home", 'work', "skills", "contact", "about"].map((item) => (
                        <li className='app_flex p-text' key={`link-${item}`}>
                            <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                </ul>
                <div className="app_navbar-menu">
                    <LuGrip onClick={() => setToggle(true)} />
                    {toggle && (
                        <motion.div
                        animate={{ x: !toggle ? '-100%' : 0 }}
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <IoCloseCircle onClick={() => setToggle(false)} />
                            <ul>
                                {["home", 'work', "skills", "contact", "about"].map((item) => (
                <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                </a>
                    </li>
                              ))}
                            </ul>
                        </motion.div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
