import { useEffect, useRef } from 'react';
import { 
  skillsAnimation, 
  textRevealAnimation,
  staggerAnimation,
  magneticEffect
} from '../lib/gsapAnimations';
import './skills.css';
import React from 'react'

function Skills() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const skillItemsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const skillItems = skillItemsRef.current.filter(Boolean);

    // Container entrance animation
    if (container) {
      setTimeout(() => {
        staggerAnimation([container], "up");
      }, 200);
    }

    // Title text reveal animation
    if (title) {
      setTimeout(() => {
        textRevealAnimation(title);
      }, 400);
    }

    // Skills animation with progress bars
    if (skillItems.length > 0) {
      setTimeout(() => {
        skillsAnimation(skillItems);
      }, 600);

      // Add magnetic effects to skill items
      skillItems.forEach((item) => {
        if (item) {
          magneticEffect(item);
        }
      });
    }
  }, []);

  const skills = [
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: 'text-orange-500', percentage: 95 },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: 'text-blue-500', percentage: 90 },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: 'text-yellow-400', percentage: 85 },
    { name: 'React', icon: 'fa-brands fa-react', color: 'text-blue-400', percentage: 88 },
    { name: 'Node.js', icon: 'fa-brands fa-node', color: 'text-green-600', percentage: 80 },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: 'text-orange-600', percentage: 85 }
  ];

  return (
    <div ref={containerRef} className='skills-container'>
      <h1 ref={titleRef} className='skills-title'>_-Skills-_</h1>
      <div className='skills-list'>
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className={`skills-item skills-${skill.name.toLowerCase().replace('.', '')}`}
            ref={(el) => {
              if (el && !skillItemsRef.current.includes(el)) {
                skillItemsRef.current[index] = el;
              }
            }}
          >
            <div className="skill-content">
              <i className={`${skill.icon} text-4xl ${skill.color}`}></i>
              <span className="skill-name">{skill.name}</span>
            </div>
            <div className="skill-progress-container">
              <div 
                className="skill-progress" 
                data-percentage={skill.percentage}
              ></div>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
