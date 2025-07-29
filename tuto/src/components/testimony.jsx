import { useState } from "react";
import './testimony.css'
export default function Testimony() {
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
    const prev = () => setCurrent((current - 1 + testimonies.length) % testimonies.length);
    const next = () => setCurrent((current + 1) % testimonies.length);

    return (
        <>
            <div className="testimony-container">
                <h1 className="testimony-title">_-Testimony-_</h1>
                <div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0'}}>
                        <div className="testimony-card">
                            <img
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
                                onClick={prev}
                                className="testimony-nav-btn"
                                aria-label="Previous"
                            >
                                &#8592;
                            </button>
                            <button
                                onClick={next}
                                className="testimony-nav-btn"
                                aria-label="Next"
                            >
                                &#8594;
                            </button>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '0.5rem'}}>
                            {testimonies.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`testimony-indicator${idx === current ? ' active' : ''}`}
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
        </>
    );
}
