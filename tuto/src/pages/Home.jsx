import { useEffect, useRef } from 'react';
import Resume from "../components/resume";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import Testimony from "../components/testimony";
import Footer from "../components/footer";
import { 
  homeHeroAnimation, 
  pageTransitionIn, 
  buttonHoverAnimation,
  magneticEffect,
  imageRevealAnimation,
  textRevealAnimation,
  scrollRevealAnimation
} from '../lib/gsapAnimations';
import './Home.css';

export default function Home() {
  const titleContainerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const pageRef = useRef(null);
  const buttonsRef = useRef([]);
  const resumeRef = useRef(null);
  const testimonyRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const titleContainer = titleContainerRef.current;
    const imageContainer = imageContainerRef.current;
    const page = pageRef.current;
    const buttons = buttonsRef.current;
    const resume = resumeRef.current;
    const testimony = testimonyRef.current;
    const footer = footerRef.current;

    // Page entrance animation
    if (page) {
      pageTransitionIn(page);
    }

    // Hero animation
    if (titleContainer && imageContainer) {
      setTimeout(() => {
        homeHeroAnimation(titleContainer, imageContainer);
      }, 300);
    }

    // Image reveal animation
    const images = imageContainer?.querySelectorAll('img');
    if (images && images.length > 0) {
      setTimeout(() => {
        imageRevealAnimation(Array.from(images));
      }, 800);
    }

    // Text reveal animation for title
    const titleElement = titleContainer?.querySelector('.home-title');
    if (titleElement) {
      setTimeout(() => {
        textRevealAnimation(titleElement);
      }, 600);
    }

    // Button animations and effects
    buttons.forEach((button, index) => {
      if (button) {
        // Hover animation
        const hoverTl = buttonHoverAnimation(button);
        button.addEventListener('mouseenter', () => hoverTl.play());
        button.addEventListener('mouseleave', () => hoverTl.reverse());

        // Magnetic effect
        magneticEffect(button);
      }
    });

    // Scroll-triggered animations for sections
    const sectionsToAnimate = [resume, testimony, footer].filter(Boolean);
    if (sectionsToAnimate.length > 0) {
      setTimeout(() => {
        scrollRevealAnimation(sectionsToAnimate, "up");
      }, 1000);
    }
  }, []);

  return (
    <div ref={pageRef} className="home-page">
      <RightSidBar />
      <SideBar />
      <div className="home-main">
        <div className="home-content">
          <div ref={titleContainerRef} className="home-title-container">
            <h1 className="home-title">
              Hi, i'm <span className="home-desc-bold">Mben</span>
            </h1>
            <p className="home-subtitle">
              Glad to meet you and you are welcome to my World.
            </p>
            <p className="home-desc">
              I'm a{" "}
              <span className="home-desc-bold">
                software developer
              </span>{" "}
              and <span className="home-desc-bold">designer</span> for
              more then 3+ years{" "}
            </p>
            <div className="home-btn-group">
              <button 
                ref={(el) => {
                  if (el && !buttonsRef.current.includes(el)) {
                    buttonsRef.current[0] = el;
                  }
                }}
                className="home-btn-primary"
              >
                Download Cv
              </button>
              <a href="/contact">
                <button 
                  ref={(el) => {
                    if (el && !buttonsRef.current.includes(el)) {
                      buttonsRef.current[1] = el;
                    }
                  }}
                  className="home-btn-secondary"
                >
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
          <div ref={imageContainerRef}>
            <div className="home-image-container">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" 
                alt="Computer" 
                className="home-image" 
              />
            </div>
          </div>
        </div>
        <div ref={resumeRef}>
          <Resume />
        </div>
        <div ref={testimonyRef}>
          <Testimony />
        </div>
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
