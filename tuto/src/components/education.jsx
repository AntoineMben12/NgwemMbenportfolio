import { useEffect, useRef } from 'react';
import { 
  educationTimelineAnimation, 
  textRevealAnimation,
  imageRevealAnimation,
  staggerAnimation
} from '../lib/gsapAnimations';
import './education.css';
import React from 'react'

function Education() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const detailsRef = useRef(null);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const image = imageRef.current;
    const details = detailsRef.current;
    const paragraphs = paragraphsRef.current.filter(Boolean);

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

    // Image reveal animation
    if (image) {
      setTimeout(() => {
        imageRevealAnimation([image]);
      }, 600);
    }

    // Education timeline animation for paragraphs
    if (paragraphs.length > 0) {
      setTimeout(() => {
        educationTimelineAnimation(paragraphs);
      }, 800);
    }
  }, []);

  return (
    <div ref={containerRef} className='education-container'>
      <h1 ref={titleRef} className='education-title'>_-Education-_</h1>
      <div className='education-row'>
        <div ref={imageRef} className="education-image"></div>
        <div ref={detailsRef} className='education-details'>
          <p ref={(el) => {
            if (el && !paragraphsRef.current.includes(el)) {
              paragraphsRef.current[0] = el;
            }
          }}>
            Primary studies was completed at LaFierte School.
          </p>
          <p ref={(el) => {
            if (el && !paragraphsRef.current.includes(el)) {
              paragraphsRef.current[1] = el;
            }
          }}>
            Secondary studies were undertaken at LaFieter and All natoins School.
          </p>
          <p ref={(el) => {
            if (el && !paragraphsRef.current.includes(el)) {
              paragraphsRef.current[2] = el;
            }
          }}>
            Tertiary education was pursued at DEF University.
          </p>
          <p ref={(el) => {
            if (el && !paragraphsRef.current.includes(el)) {
              paragraphsRef.current[3] = el;
            }
          }}>
            Graduated with a degree in Computer Science.
          </p>
          <p ref={(el) => {
            if (el && !paragraphsRef.current.includes(el)) {
              paragraphsRef.current[4] = el;
            }
          }}>
            Continuous learning through online courses and certifications.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education