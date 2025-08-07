import { useEffect, useRef } from 'react';
import { 
  staggerAnimation,
  textRevealAnimation,
  scrollRevealAnimation
} from '../lib/gsapAnimations';
import './Contain.css';

export default function Contain() {
    const containerRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const title = titleRef.current;

        // Container entrance animation with scroll trigger
        if (container) {
            scrollRevealAnimation([container], "up");
        }

        // Title text reveal animation
        if (title) {
            setTimeout(() => {
                textRevealAnimation(title);
            }, 300);
        }
    }, []);

    return (
        <div ref={containerRef} className="contain-container">
            <h1 ref={titleRef} className="contain-title">_-Contain-_</h1>
        </div>
    );
}
