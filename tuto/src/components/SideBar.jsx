import { useEffect, useRef } from 'react';
import { sidebarIconHover, magneticEffect, staggerAnimation } from '../lib/gsapAnimations';
import './SideBar.css';

export default function SideBar() {
  const sidebarRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const links = linksRef.current;

    if (sidebar && links.length > 0) {
      // Stagger animation for sidebar links
      setTimeout(() => {
        staggerAnimation(links, "left");
      }, 200);

      // Add hover animations and magnetic effects to each link
      links.forEach((link, index) => {
        if (link) {
          const icon = link.querySelector('.sidebar-icon');
          if (icon) {
            // Icon hover animation
            const hoverTl = sidebarIconHover(icon);
            link.addEventListener('mouseenter', () => hoverTl.play());
            link.addEventListener('mouseleave', () => hoverTl.reverse());

            // Magnetic effect for the entire link
            magneticEffect(link);
          }
        }
      });
    }
  }, []);

  const sidebarItems = [
    { href: "/home", icon: "fa-house", label: "Home" },
    { href: "/about", icon: "fa-user", label: "About" },
    { href: "/contact", icon: "fa-envelope", label: "Contact" },
    { href: "/blog", icon: "fa-blog", label: "Blog" },
    { href: "/dashboard", icon: "fa-comments", label: "Dashboard" },
    { href: "/portfolio", icon: "fa-briefcase", label: "Portfolio" }
  ];

  return (
    <div ref={sidebarRef} className="sidebar-container">
      {sidebarItems.map((item, index) => (
        <a 
          key={item.href}
          className="sidebar-link" 
          href={item.href}
          ref={(el) => {
            if (el && !linksRef.current.includes(el)) {
              linksRef.current[index] = el;
            }
          }}
          title={item.label}
        >
          <i className={`fa-solid ${item.icon} sidebar-icon`}></i>
          <span className="sidebar-tooltip">{item.label}</span>
        </a>
      ))}
    </div>
  );
}
