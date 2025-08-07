import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { staggerAnimation, magneticEffect } from '../lib/gsapAnimations';
import './AnimatedNavigation.css';

const AnimatedNavigation = ({ currentPath = '/' }) => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const menuItems = menuItemsRef.current;

    // Initial animation
    gsap.fromTo(nav, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );

    // Stagger menu items
    setTimeout(() => {
      staggerAnimation(menuItems, "down");
    }, 500);

    // Add magnetic effect to logo
    const cleanupLogo = magneticEffect(logo);

    // Add magnetic effect to menu items
    const cleanupItems = menuItems.map(item => magneticEffect(item));

    return () => {
      cleanupLogo();
      cleanupItems.forEach(cleanup => cleanup());
    };
  }, []);

  const toggleMenu = () => {
    const tl = gsap.timeline();
    
    if (!isMenuOpen) {
      tl.to('.nav-menu', {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      .fromTo('.nav-item', 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.1 },
        "-=0.3"
      );
    } else {
      tl.to('.nav-item', 
        { x: -50, opacity: 0, duration: 0.2, stagger: 0.05 }
      )
      .to('.nav-menu', {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
    
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav ref={navRef} className="animated-nav">
      <div className="nav-container">
        <div ref={logoRef} className="nav-logo">
          <a href="/">{"</Mben>"}</a>
        </div>
        
        <div className="nav-desktop">
          {navItems.map((item, index) => (
            <a
              key={item.path}
              href={item.path}
              ref={el => menuItemsRef.current[index] = el}
              className={`nav-item ${currentPath === item.path ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div 
          ref={hamburgerRef}
          className="nav-hamburger"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <a
            key={item.path}
            href={item.path}
            className={`nav-item ${currentPath === item.path ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default AnimatedNavigation;
