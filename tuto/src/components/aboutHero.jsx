import { useEffect, useRef } from 'react';
import { 
  staggerAnimation,
  textRevealAnimation,
  scrollRevealAnimation,
  imageRevealAnimation
} from '../lib/gsapAnimations';
import './aboutHero.css';

export default function AboutHero() {
    const containerRef = useRef(null);
    const backgroundRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const background = backgroundRef.current;
        const title = titleRef.current;

        // Container entrance animation
        if (container) {
            setTimeout(() => {
                staggerAnimation([container], "up");
            }, 200);
        }

        // Background image reveal animation
        if (background) {
            setTimeout(() => {
                imageRevealAnimation([background]);
            }, 400);
        }

        // Title text reveal animation
        if (title) {
            setTimeout(() => {
                textRevealAnimation(title);
            }, 600);
        }

        // Scroll reveal animation for the entire hero section
        if (container) {
            scrollRevealAnimation([container], "up");
        }
    }, []);

    return (
        <div ref={containerRef} className="about-hero-container">
            <div 
                ref={backgroundRef}
                className="about-hero-bg"
            >
                <p ref={titleRef} className="about-hero-title">
                  <span className="about-hero-icon" aria-label="info" title="About"><i className="fa-solid fa-circle-info"></i></span>
                  <b>ABOUT</b>
                </p>
            </div>
        </div>
    );
}
