import { useEffect, useRef } from 'react';
import AboutHero from "../components/aboutHero";
import Education from "../components/education";
import Skills from "../components/skills";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import Footer from "../components/footer";
import { 
  pageTransitionIn, 
  aboutInfoAnimation,
  scrollRevealAnimation,
  staggerAnimation
} from '../lib/gsapAnimations';
import './About.css';

export default function About() {
  const pageRef = useRef(null);
  const aboutHeroRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const infoSectionRef = useRef(null);
  const mapContainerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    const aboutHero = aboutHeroRef.current;
    const education = educationRef.current;
    const skills = skillsRef.current;
    const infoSection = infoSectionRef.current;
    const mapContainer = mapContainerRef.current;
    const footer = footerRef.current;

    // Page entrance animation
    if (page) {
      pageTransitionIn(page);
    }

    // Stagger animation for main components
    const components = [aboutHero, education, skills].filter(Boolean);
    if (components.length > 0) {
      setTimeout(() => {
        staggerAnimation(components, "up");
      }, 400);
    }

    // About info section animation
    if (infoSection && mapContainer) {
      setTimeout(() => {
        aboutInfoAnimation(infoSection, mapContainer);
      }, 800);
    }

    // Footer scroll reveal
    if (footer) {
      setTimeout(() => {
        scrollRevealAnimation([footer], "up");
      }, 1000);
    }

    // Info list items animation
    const infoItems = infoSection?.querySelectorAll('li');
    if (infoItems && infoItems.length > 0) {
      setTimeout(() => {
        staggerAnimation(Array.from(infoItems), "left");
      }, 1200);
    }
  }, []);

  return (
    <div ref={pageRef} className="about-page">
      <SideBar />
      <RightSidBar />
      <div ref={aboutHeroRef}>
        <AboutHero />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div className="about-container">
        <section className="about-info-section">
          <div ref={infoSectionRef} className="about-info">
            <h2 className="about-info-title">Info</h2>
            <ul className="about-info-list">
              <li><span style={{marginRight: '0.5rem', color: '#2563eb'}}><i className="fa-solid fa-user"></i></span><strong>Name:</strong> Ngwem mben antoine</li>
              <li><span style={{marginRight: '0.5rem', color: '#2563eb'}}><i className="fa-solid fa-phone"></i></span><strong>Phone:</strong> (237) 688-495-234</li>
              <li><span style={{marginRight: '0.5rem', color: '#2563eb'}}><i className="fa-solid fa-envelope"></i></span><strong>Email:</strong> ngwemmben@gmail.com</li>
            </ul>
          </div>
          <div ref={mapContainerRef} className="about-map-container">
            <iframe
              src="https://maps.app.goo.gl/Yxi6E1gpuQZLJhC9A"
              title="Info Frame"
              height="180"
              style={{ border: "none", borderRadius: "16px", width: "100%", maxWidth: "400px", boxShadow: "0 4px 16px rgba(59,130,246,0.10)" }}
              className="about-map"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
