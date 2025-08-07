import { useEffect, useRef } from 'react';
import { 
  textRevealAnimation,
  staggerAnimation,
  imageRevealAnimation,
  buttonHoverAnimation,
  magneticEffect
} from '../lib/gsapAnimations';
import './resume.css';

export default function Resume() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const gridRef = useRef(null);
  const imagesRef = useRef([]);
  const articlesRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const intro = introRef.current;
    const grid = gridRef.current;
    const images = imagesRef.current.filter(Boolean);
    const articles = articlesRef.current.filter(Boolean);
    const button = buttonRef.current;

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

    // Intro text animation
    if (intro) {
      setTimeout(() => {
        staggerAnimation([intro], "up");
      }, 600);
    }

    // Grid stagger animation
    if (grid) {
      setTimeout(() => {
        staggerAnimation([grid], "up");
      }, 800);
    }

    // Image reveal animations
    if (images.length > 0) {
      setTimeout(() => {
        imageRevealAnimation(images);
      }, 1000);
    }

    // Articles stagger animation
    if (articles.length > 0) {
      setTimeout(() => {
        staggerAnimation(articles, "left");
      }, 1200);
    }

    // Button animations
    if (button) {
      const hoverTl = buttonHoverAnimation(button);
      button.addEventListener('mouseenter', () => hoverTl.play());
      button.addEventListener('mouseleave', () => hoverTl.reverse());
      magneticEffect(button);
    }
  }, []);

  return (
    <div ref={containerRef} className="resume-container">
      <h1 ref={titleRef} className="resume-title">_-Resume-_</h1>
      <article ref={introRef} className="resume-intro">
        I'm named{" "}
        <span className="resume-name">NGWEM MBEN ANTOINE DE PADOUE </span>
        ,i'm a young student in the field to software engineering .
        <p>
          i'm a passionate of the tech industry and during my journey i worked
          on many projects for more than 3+ years.
        </p>
        <p>
          I'm also a student in level II at the{" "}
          <span className="resume-school">
            AFRICAN INSTITUTE OF COMPUTER SCIENCE{" "}
          </span>
          in the software engineering departement.
        </p>
        <p>Here is resume of my journey</p>
      </article>
      <div ref={gridRef} className="resume-grid">
        <div className="resume-row resume-row-1">
          <div className="resume-img-container">
            <img 
              ref={(el) => {
                if (el && !imagesRef.current.includes(el)) {
                  imagesRef.current[0] = el;
                }
              }}
              src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80" 
              alt="Education" 
              className="resume-img"
            />
          </div>
          <article 
            ref={(el) => {
              if (el && !articlesRef.current.includes(el)) {
                articlesRef.current[0] = el;
              }
            }}
            className="resume-details"
          >
            <p>For my education i'm did my primary eduction and secondary study at <br /><span className="resume-school">LA FIERTE CSBM</span>& <span className="resume-school">ALL NATIONS SCHOOL</span></p>
            <p>Obtain my <a href="" className="resume-link">GCE ORDINARY LEVEL</a> in 2022 with a pass in 11 subject on 11 possible</p>
            <p>And <a href="" className="resume-link">ADVANCE LEVEL</a> in 2024.</p>
            <p>And presently studing at <a href="" className="resume-link">AICS CAMEROON</a>.</p>
          </article>
        </div>
        <div className="resume-row resume-row-2">
          <article 
            ref={(el) => {
              if (el && !articlesRef.current.includes(el)) {
                articlesRef.current[1] = el;
              }
            }}
            className="resume-details"
          >
            <p>For professional i'm freelance since<br /><span className="resume-year">2022</span>.</p>
            <p>I did intentship at <a href="" className="resume-link">COMPOSt</a> in 2024.</p>
            <p>
              <a href="">
                <button ref={buttonRef} className="resume-btn">Github</button>
              </a>
            </p>
          </article>
          <div className="resume-img-container">
            <img 
              ref={(el) => {
                if (el && !imagesRef.current.includes(el)) {
                  imagesRef.current[1] = el;
                }
              }}
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" 
              alt="Company" 
              className="resume-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
