import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Page entrance animations
export const pageEntranceAnimation = (container) => {
  const tl = gsap.timeline();
  
  tl.set(container, { opacity: 0 })
    .to(container, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    });
  
  return tl;
};

// Hero text animations
export const heroTextAnimation = (titleElement, subtitleElement, descElement) => {
  const tl = gsap.timeline();
  
  tl.fromTo(titleElement, 
    { 
      y: 100, 
      opacity: 0,
      scale: 0.8
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.7)"
    }
  )
  .fromTo(subtitleElement,
    {
      x: -50,
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    },
    "-=0.6"
  )
  .fromTo(descElement,
    {
      y: 30,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    },
    "-=0.4"
  );
  
  return tl;
};

// Button hover animations
export const buttonHoverAnimation = (button) => {
  const tl = gsap.timeline({ paused: true });
  
  tl.to(button, {
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    duration: 0.3,
    ease: "power2.out"
  });
  
  return tl;
};

// Stagger animation for multiple elements
export const staggerAnimation = (elements, direction = "up") => {
  const fromVars = direction === "up" ? { y: 50, opacity: 0 } : 
                   direction === "down" ? { y: -50, opacity: 0 } :
                   direction === "left" ? { x: 50, opacity: 0 } : { x: -50, opacity: 0 };
  
  gsap.fromTo(elements, fromVars, {
    y: 0,
    x: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
  });
};

// Floating animation
export const floatingAnimation = (element) => {
  gsap.to(element, {
    y: -10,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
  });
};

// Typewriter effect
export const typewriterAnimation = (element, text) => {
  const tl = gsap.timeline();
  
  tl.to(element, {
    duration: text.length * 0.1,
    text: text,
    ease: "none"
  });
  
  return tl;
};

// Magnetic button effect
export const magneticEffect = (button) => {
  const handleMouseMove = (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };
  
  button.addEventListener('mousemove', handleMouseMove);
  button.addEventListener('mouseleave', handleMouseLeave);
  
  return () => {
    button.removeEventListener('mousemove', handleMouseMove);
    button.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// Scroll-triggered animations
export const scrollTriggerAnimation = (element, animationProps = {}) => {
  gsap.fromTo(element, 
    { 
      y: 50, 
      opacity: 0,
      ...animationProps.from 
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      ...animationProps.to
    }
  );
};

// Particle effect background
export const createParticleEffect = (container) => {
  const particles = [];
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(255,255,255,0.5);
      border-radius: 50%;
      pointer-events: none;
    `;
    
    container.appendChild(particle);
    particles.push(particle);
    
    // Animate particles
    gsap.set(particle, {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    });
    
    gsap.to(particle, {
      x: `+=${Math.random() * 200 - 100}`,
      y: `+=${Math.random() * 200 - 100}`,
      duration: Math.random() * 10 + 5,
      repeat: -1,
      yoyo: true,
      ease: "none"
    });
  }
  
  return particles;
};
