import { useState, useEffect, useRef } from "react";
import { 
  testimonialAnimation,
  textRevealAnimation,
  staggerAnimation,
  buttonHoverAnimation,
  magneticEffect,
  imageRevealAnimation,
  pageTransition
} from '../lib/gsapAnimations';
import './testimony.css'

export default function Testimony() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const cardRef = useRef(null);
    const buttonsRef = useRef([]);
    const imageRef = useRef(null);

    const testimonies = [
        {
            name: "Alice",
            text: "Great service! Highly recommended.",
            role: "Client",
            img: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            name: "Bob",
            text: "Professional and reliable team.",
            role: "Collaborator",
            img: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            name: "Charlie",
            text: "Amazing experience working together.",
            role: "Client",
            img: "https://randomuser.me/api/portraits/men/3.jpg",
        },
    ];

    const [current, setCurrent] = useState(0);
    
    const prev = () => {
        const newIndex = (current - 1 + testimonies.length) % testimonies.length;
        setCurrent(newIndex);
        animateTransition();
    };
    
    const next = () => {
        const newIndex = (current + 1) % testimonies.length;
        setCurrent(newIndex);
        animateTransition();
    };

    const animateTransition = () => {
        if (cardRef.current) {
            pageTransition(cardRef.current, cardRef.current);
        }
        if (imageRef.current) {
            setTimeout(() => {
                imageRevealAnimation([imageRef.current]);
            }, 200);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        const title = titleRef.current;
        const card = cardRef.current;
        const buttons = buttonsRef.current.filter(Boolean);
        const image = imageRef.current;

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

        // Testimonial card animation
        if (card) {
            setTimeout(() => {
                testimonialAnimation([card]);
            }, 600);
        }

        // Image reveal animation
        if (image) {
            setTimeout(() => {
                imageRevealAnimation([image]);
            }, 800);
        }

        // Button animations
        buttons.forEach((button) => {
            if (button) {
                const hoverTl = buttonHoverAnimation(button);
                button.addEventListener('mouseenter', () => hoverTl.play());
                button.addEventListener('mouseleave', () => hoverTl.reverse());
                magneticEffect(button);
            }
        });
    }, []);

    return (
        <div ref={containerRef} className="testimony-container">
            <h1 ref={titleRef} className="testimony-title">_-Testimony-_</h1>
            <div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0'}}>
                    <div ref={cardRef} className="testimony-card">
                        <img
                            ref={imageRef}
                            src={testimonies[current].img}
                            alt={testimonies[current].name}
                            className="testimony-img"
                        />
                        <p className="testimony-text">"{testimonies[current].text}"</p>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                            <span className="testimony-name">{testimonies[current].name}</span>
                            <span className="testimony-role">{testimonies[current].role}</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
                        <button
                            ref={(el) => {
                                if (el && !buttonsRef.current.includes(el)) {
                                    buttonsRef.current[0] = el;
                                }
                            }}
                            onClick={prev}
                            className="testimony-nav-btn"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button
                            ref={(el) => {
                                if (el && !buttonsRef.current.includes(el)) {
                                    buttonsRef.current[1] = el;
                                }
                            }}
                            onClick={next}
                            className="testimony-nav-btn"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                    <div className="testimony-indicators">
                        {testimonies.map((_, index) => (
                            <div
                                key={index}
                                className={`testimony-indicator ${index === current ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrent(index);
                                    animateTransition();
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <p style={{textAlign: 'center', padding: '0 1rem', marginTop: '2rem'}}>
                -- Here is a section reserved to all <br />
                -- testimony of clients and collaborators and dear compliments --
            </p>
        </div>
    );
}
