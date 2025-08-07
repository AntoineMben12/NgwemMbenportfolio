import { useEffect, useRef } from 'react';
import { 
  pageEntranceAnimation, 
  heroTextAnimation, 
  magneticEffect, 
  staggerAnimation,
  createParticleEffect,
  floatingAnimation
} from '../lib/gsapAnimations';
import './index.css';

export default function Index() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const greetingRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const startBtnRef = useRef(null);
  const contactBtnRef = useRef(null);
  const footerIconsRef = useRef(null);
  const footerTextRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const greeting = greetingRef.current;
    const subtitle = subtitleRef.current;
    const desc = descRef.current;
    const startBtn = startBtnRef.current;
    const contactBtn = contactBtnRef.current;
    const footerIcons = footerIconsRef.current;
    const footerText = footerTextRef.current;

    // Page entrance animation
    pageEntranceAnimation(container);

    // Create particle effect background
    createParticleEffect(container);

    // Hero text animations with stagger
    setTimeout(() => {
      heroTextAnimation(title, greeting, subtitle);
      
      // Animate description separately
      setTimeout(() => {
        staggerAnimation([desc], "up");
      }, 800);

      // Animate buttons with stagger
      setTimeout(() => {
        staggerAnimation([startBtn, contactBtn], "up");
      }, 1200);

      // Animate footer elements
      setTimeout(() => {
        staggerAnimation([footerIcons, footerText], "up");
      }, 1600);
    }, 300);

    // Add magnetic effect to buttons
    const cleanupStart = magneticEffect(startBtn);
    const cleanupContact = magneticEffect(contactBtn);

    // Add floating animation to title
    setTimeout(() => {
      floatingAnimation(title);
    }, 2000);

    // Cleanup function
    return () => {
      cleanupStart();
      cleanupContact();
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="index-container relative overflow-hidden">
        <div ref={titleRef} className="index-title">{"</Mben>"}</div>
        <div className="index-content">
          <p ref={greetingRef} className="index-greeting">
            Hi, dear user
          </p>
          <p ref={subtitleRef} className="index-subtitle">
            You are welcome to Mben's portfolio
          </p>
          <p ref={descRef} className="index-desc">
            Welcome once more and thanks for visiting i'm{" "}
            <span className="index-desc-name">MBEN ANTOINE</span> software
            developer <span className="index-desc-and">&</span> Designer.
          </p>
          <a href="/home">
            <button ref={startBtnRef} className="index-btn-primary animated-btn">
              Start
            </button>
          </a>
          <a href="/contact">
            <button ref={contactBtnRef} className="index-btn-secondary animated-btn">
              Contact
            </button>
          </a>
        </div>
      </div>
      <div className="index-footer">
        <div ref={footerIconsRef} className="index-footer-icons">
          <a href=""><i>f</i></a>
          <a href=""><i>in</i></a>
          <a href=""><i>i</i></a>
          <a href=""><i>e</i></a>
        </div>
        <div ref={footerTextRef} className="index-footer-text">
          All right has been <span className="index-footer-reserved">reserved</span>!
        </div>
      </div>
    </>
  );
}
