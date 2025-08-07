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

// Dashboard-specific animations
export const dashboardEntranceAnimation = (container, sidebar, topbar, chart, messages) => {
  const tl = gsap.timeline();
  
  // Set initial states
  tl.set([container, sidebar, topbar, chart, messages], { opacity: 0 })
    .set(sidebar, { x: -100 })
    .set(topbar, { y: -50 })
    .set(chart, { scale: 0.8, y: 50 })
    .set(messages, { y: 100 });
  
  // Animate entrance
  tl.to(container, { opacity: 1, duration: 0.3 })
    .to(sidebar, { 
      opacity: 1, 
      x: 0, 
      duration: 0.8, 
      ease: "back.out(1.7)" 
    })
    .to(topbar, { 
      opacity: 1, 
      y: 0, 
      duration: 0.6, 
      ease: "power2.out" 
    }, "-=0.4")
    .to(chart, { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      duration: 1, 
      ease: "elastic.out(1, 0.5)" 
    }, "-=0.3")
    .to(messages, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      ease: "power2.out" 
    }, "-=0.5");
  
  return tl;
};

// Animated chart reveal
export const chartRevealAnimation = (chartContainer, chartCanvas) => {
  const tl = gsap.timeline();
  
  tl.fromTo(chartContainer, 
    { 
      scale: 0.9, 
      opacity: 0,
      rotationY: 15
    },
    {
      scale: 1,
      opacity: 1,
      rotationY: 0,
      duration: 1.2,
      ease: "power3.out"
    }
  )
  .fromTo(chartCanvas,
    { scale: 0.8 },
    { 
      scale: 1, 
      duration: 0.8, 
      ease: "back.out(1.2)" 
    },
    "-=0.6"
  );
  
  return tl;
};

// Table row stagger animation
export const tableRowAnimation = (rows) => {
  gsap.fromTo(rows, 
    { 
      opacity: 0, 
      x: -30,
      scale: 0.95
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }
  );
};

// Sidebar icon hover animation
export const sidebarIconHover = (icon) => {
  const tl = gsap.timeline({ paused: true });
  
  tl.to(icon, {
    scale: 1.2,
    rotation: 5,
    color: "#3b82f6",
    duration: 0.3,
    ease: "back.out(1.7)"
  });
  
  return tl;
};

// Loading pulse animation
export const loadingPulseAnimation = (element) => {
  gsap.to(element, {
    opacity: 0.5,
    scale: 1.05,
    duration: 1,
    ease: "power2.inOut",
    yoyo: true,
    repeat: -1
  });
};

// Card hover lift effect
export const cardHoverEffect = (card) => {
  const tl = gsap.timeline({ paused: true });
  
  tl.to(card, {
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    duration: 0.4,
    ease: "power2.out"
  });
  
  return tl;
};

// Smooth page transition
export const pageTransition = (outElement, inElement) => {
  const tl = gsap.timeline();
  
  tl.to(outElement, {
    opacity: 0,
    scale: 0.95,
    duration: 0.3,
    ease: "power2.in"
  })
  .set(inElement, { opacity: 0, scale: 1.05 })
  .to(inElement, {
    opacity: 1,
    scale: 1,
    duration: 0.4,
    ease: "power2.out"
  });
  
  return tl;
};

// Notification slide animation
export const notificationSlide = (notification, direction = 'right') => {
  const fromX = direction === 'right' ? 300 : -300;
  
  const tl = gsap.timeline();
  
  tl.fromTo(notification,
    { x: fromX, opacity: 0 },
    { 
      x: 0, 
      opacity: 1, 
      duration: 0.6, 
      ease: "back.out(1.7)" 
    }
  );
  
  return tl;
};

// Data counter animation
export const counterAnimation = (element, endValue, duration = 2) => {
  const obj = { value: 0 };
  
  gsap.to(obj, {
    value: endValue,
    duration: duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.value);
    }
  });
};

// Home page animations
export const homeHeroAnimation = (titleContainer, imageContainer) => {
  const tl = gsap.timeline();
  
  tl.fromTo(titleContainer, 
    { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.7)"
    }
  )
  .fromTo(imageContainer,
    {
      opacity: 0,
      x: 100,
      rotation: 10
    },
    {
      opacity: 1,
      x: 0,
      rotation: 0,
      duration: 1,
      ease: "power3.out"
    },
    "-=0.6"
  );
  
  return tl;
};

// Portfolio card animations
export const portfolioCardsAnimation = (cards) => {
  gsap.fromTo(cards,
    {
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotation: 5
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.4)"
    }
  );
};

// Portfolio card hover effect
export const portfolioCardHover = (card) => {
  const tl = gsap.timeline({ paused: true });
  const image = card.querySelector('.portfolio-image');
  const content = card.querySelector('.portfolio-card-content');
  
  tl.to(card, {
    y: -15,
    scale: 1.03,
    boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
    duration: 0.4,
    ease: "power2.out"
  })
  .to(image, {
    scale: 1.1,
    duration: 0.4,
    ease: "power2.out"
  }, 0)
  .to(content, {
    y: -5,
    duration: 0.4,
    ease: "power2.out"
  }, 0);
  
  return tl;
};

// Contact form animations
export const contactFormAnimation = (form, inputs, button) => {
  const tl = gsap.timeline();
  
  tl.fromTo(form,
    { 
      opacity: 0, 
      scale: 0.9,
      y: 50
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }
  )
  .fromTo(inputs,
    {
      opacity: 0,
      x: -30
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    },
    "-=0.4"
  )
  .fromTo(button,
    {
      opacity: 0,
      scale: 0.8
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    },
    "-=0.2"
  );
  
  return tl;
};

// Skills animation
export const skillsAnimation = (skillBars) => {
  skillBars.forEach((bar, index) => {
    const progress = bar.querySelector('.skill-progress');
    const percentage = progress?.dataset.percentage || 90;
    
    gsap.fromTo(bar,
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out"
      }
    );
    
    if (progress) {
      gsap.fromTo(progress,
        { width: "0%" },
        { 
          width: `${percentage}%`, 
          duration: 1.5,
          delay: 0.5 + (index * 0.1),
          ease: "power2.out"
        }
      );
    }
  });
};

// Education timeline animation
export const educationTimelineAnimation = (timelineItems) => {
  gsap.fromTo(timelineItems,
    {
      opacity: 0,
      x: -100,
      scale: 0.8
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.4)"
    }
  );
};

// About page info animation
export const aboutInfoAnimation = (infoSection, mapContainer) => {
  const tl = gsap.timeline();
  
  tl.fromTo(infoSection,
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      ease: "power2.out"
    }
  )
  .fromTo(mapContainer,
    { 
      opacity: 0, 
      scale: 0.8,
      rotation: 5
    },
    { 
      opacity: 1, 
      scale: 1,
      rotation: 0,
      duration: 1,
      ease: "back.out(1.4)"
    },
    "-=0.4"
  );
  
  return tl;
};

// Testimonial animation
export const testimonialAnimation = (testimonials) => {
  gsap.fromTo(testimonials,
    {
      opacity: 0,
      y: 100,
      rotation: 10
    },
    {
      opacity: 1,
      y: 0,
      rotation: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "back.out(1.4)"
    }
  );
};

// Footer animation
export const footerAnimation = (footerElements) => {
  gsap.fromTo(footerElements,
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }
  );
};

// Form input focus animation
export const inputFocusAnimation = (input) => {
  const tl = gsap.timeline({ paused: true });
  
  tl.to(input, {
    scale: 1.02,
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
    borderColor: "#3b82f6",
    duration: 0.3,
    ease: "power2.out"
  });
  
  return tl;
};

// Button press animation
export const buttonPressAnimation = (button) => {
  gsap.to(button, {
    scale: 0.95,
    duration: 0.1,
    ease: "power2.out",
    yoyo: true,
    repeat: 1
  });
};

// Page transition with route change
export const pageTransitionOut = (element) => {
  return gsap.to(element, {
    opacity: 0,
    scale: 0.95,
    y: -30,
    duration: 0.3,
    ease: "power2.in"
  });
};

export const pageTransitionIn = (element) => {
  return gsap.fromTo(element,
    { 
      opacity: 0, 
      scale: 1.05, 
      y: 30 
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }
  );
};

// Scroll-triggered animations
export const scrollRevealAnimation = (elements, direction = "up") => {
  elements.forEach((element) => {
    const fromVars = direction === "up" ? { y: 100, opacity: 0 } :
                     direction === "down" ? { y: -100, opacity: 0 } :
                     direction === "left" ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 };
    
    gsap.fromTo(element, fromVars, {
      y: 0,
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });
};

// Image reveal animation
export const imageRevealAnimation = (images) => {
  images.forEach((img, index) => {
    gsap.fromTo(img,
      {
        opacity: 0,
        scale: 1.2,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        delay: index * 0.2,
        ease: "power2.out"
      }
    );
  });
};

// Text reveal animation (word by word)
export const textRevealAnimation = (textElement) => {
  const text = textElement.textContent;
  const words = text.split(' ');
  
  textElement.innerHTML = words.map(word => 
    `<span class="word" style="display: inline-block; opacity: 0;">${word}</span>`
  ).join(' ');
  
  const wordElements = textElement.querySelectorAll('.word');
  
  gsap.fromTo(wordElements,
    { 
      opacity: 0, 
      y: 50,
      rotationX: 90
    },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }
  );
};

// Blog card animations
export const blogCardsAnimation = (cards) => {
  gsap.fromTo(cards,
    {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out"
    }
  );
};
