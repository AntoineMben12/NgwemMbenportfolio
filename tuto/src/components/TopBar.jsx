import { useEffect, useRef } from 'react';
import React from "react";
import { magneticEffect, staggerAnimation, textRevealAnimation } from '../lib/gsapAnimations';
import './TopBar.css';

const RightSidBar = () => {
  const topbarRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const topbar = topbarRef.current;
    const title = titleRef.current;

    if (topbar) {
      // Entrance animation
      setTimeout(() => {
        staggerAnimation([topbar], "down");
      }, 100);

      // Magnetic effect for the entire topbar
      magneticEffect(topbar);
    }

    if (title) {
      // Text reveal animation for the title
      setTimeout(() => {
        textRevealAnimation(title);
      }, 500);
    }
  }, []);

  return (
    <div ref={topbarRef} className="topbar-container">
      <a href="/">
        <h1 ref={titleRef} className="topbar-title">{"</Mben>"}</h1>
      </a>
    </div>
  );
};

export default RightSidBar;
