import { useEffect, useRef } from 'react';
import { 
  footerAnimation,
  staggerAnimation,
  inputFocusAnimation,
  buttonHoverAnimation,
  magneticEffect,
  scrollRevealAnimation
} from '../lib/gsapAnimations';
import './footer.css';

export default function Footer() {
    const footerRef = useRef(null);
    const sectionsRef = useRef([]);
    const linksRef = useRef([]);
    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const feedbackRef = useRef(null);

    const dataing = new Date().getFullYear();

    useEffect(() => {
        const footer = footerRef.current;
        const sections = sectionsRef.current.filter(Boolean);
        const links = linksRef.current.filter(Boolean);
        const input = inputRef.current;
        const button = buttonRef.current;
        const feedback = feedbackRef.current;

        // Footer entrance animation with scroll trigger
        if (footer) {
            scrollRevealAnimation([footer], "up");
        }

        // Sections stagger animation
        if (sections.length > 0) {
            setTimeout(() => {
                staggerAnimation(sections, "up");
            }, 300);
        }

        // Footer links animation
        if (links.length > 0) {
            setTimeout(() => {
                footerAnimation(links);
            }, 500);

            // Add hover effects to links
            links.forEach((link) => {
                if (link) {
                    magneticEffect(link);
                }
            });
        }

        // Input focus animation
        if (input) {
            const focusTl = inputFocusAnimation(input);
            input.addEventListener('focus', () => focusTl.play());
            input.addEventListener('blur', () => focusTl.reverse());
        }

        // Button hover animation
        if (button) {
            const hoverTl = buttonHoverAnimation(button);
            button.addEventListener('mouseenter', () => hoverTl.play());
            button.addEventListener('mouseleave', () => hoverTl.reverse());
            magneticEffect(button);
        }

        // Feedback message animation
        if (feedback) {
            setTimeout(() => {
                staggerAnimation([feedback], "up");
            }, 700);
        }
    }, []);

    return (
        <footer ref={footerRef} className="footer-container">
            <div className="footer-content">
                <div 
                    ref={(el) => {
                        if (el && !sectionsRef.current.includes(el)) {
                            sectionsRef.current[0] = el;
                        }
                    }}
                    className="footer-section"
                >
                    <ul>
                        <li>
                            <i className="fa-solid fa-file-arrow-down mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[0] = el;
                                    }
                                }}
                                href="/cv.pdf" 
                                download
                            >
                                Download Cv
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-comments mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[1] = el;
                                    }
                                }}
                                href="/chat"
                            >
                                Chat
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-blog mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[2] = el;
                                    }
                                }}
                                href="/blog"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[3] = el;
                                    }
                                }}
                                href="/contact"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-user mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[4] = el;
                                    }
                                }}
                                href="/about"
                            >
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <div 
                    ref={(el) => {
                        if (el && !sectionsRef.current.includes(el)) {
                            sectionsRef.current[1] = el;
                        }
                    }}
                    className="footer-section"
                >
                    <ul>
                        <li>
                            <i className="fa-solid fa-briefcase mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[5] = el;
                                    }
                                }}
                                href="/portfolio"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-github mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[6] = el;
                                    }
                                }}
                                href="https://github.com/antoinemben12" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-instagram mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[7] = el;
                                    }
                                }}
                                href="https://instagram.com/yourusername" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-telegram mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[8] = el;
                                    }
                                }}
                                href="https://t.me/yourusername" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Telegram
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-facebook mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[9] = el;
                                    }
                                }}
                                href="https://facebook.com/yourusername" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
                <div 
                    ref={(el) => {
                        if (el && !sectionsRef.current.includes(el)) {
                            sectionsRef.current[2] = el;
                        }
                    }}
                    className="footer-section"
                >
                    <ul>
                        <li>
                            <i className="fa-brands fa-linkedin mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[10] = el;
                                    }
                                }}
                                href="https://linkedin.com/in/antoineMen" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Linkedin
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[11] = el;
                                    }
                                }}
                                href="mailto:ngwemmben@gmail.com"
                            >
                                Email
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-whatsapp mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[12] = el;
                                    }
                                }}
                                href="https://wa.me/1234567890" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Whatsapp
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-tags mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[13] = el;
                                    }
                                }}
                                href="/pricing"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-free-code-camp mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[14] = el;
                                    }
                                }}
                                href="https://freecodecamp.org" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                FreeCodeCamp
                            </a>
                        </li>
                    </ul>
                </div>
                <div 
                    ref={(el) => {
                        if (el && !sectionsRef.current.includes(el)) {
                            sectionsRef.current[3] = el;
                        }
                    }}
                    className="footer-section"
                >
                    <ul>
                        <li>
                            <i className="fa-solid fa-graduation-cap mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[15] = el;
                                    }
                                }}
                                href="https://coursera.org" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Formation
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-eye mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[16] = el;
                                    }
                                }}
                                href="/portfolio"
                            >
                                View Projects
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-code mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[17] = el;
                                    }
                                }}
                                href="/about"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-house mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[18] = el;
                                    }
                                }}
                                href="/"
                            >
                                Start Page
                            </a>
                        </li>
                        <li>
                            <i className="fa-brands fa-twitter mr-2"></i>
                            <a 
                                ref={(el) => {
                                    if (el && !linksRef.current.includes(el)) {
                                        linksRef.current[19] = el;
                                    }
                                }}
                                href="https://twitter.com/yourusername" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
                <div 
                    ref={(el) => {
                        if (el && !sectionsRef.current.includes(el)) {
                            sectionsRef.current[4] = el;
                        }
                    }}
                    className="footer-section"
                >
                    <p>Send Feedback</p>
                    <div className="footer-feedback">
                        <input 
                            ref={inputRef}
                            type="text" 
                            className="footer-input" 
                            placeholder="Enter a feedback"
                        />
                        <button 
                            ref={buttonRef}
                            type="submit" 
                            className="footer-btn"
                        >
                            <i className="fa-solid fa-paper-plane footer-btn-icon"></i>
                        </button>
                    </div>
                    <p ref={feedbackRef} className="footer-feedback-msg">thanks for your feedbacks</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {dataing} Ngwem Mben Antoine. All rights reserved.</p>
            </div>
        </footer>
    );
}
