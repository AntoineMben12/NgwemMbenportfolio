import { useEffect, useRef } from 'react';
import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import { 
  pageTransitionIn, 
  blogCardsAnimation, 
  cardHoverEffect,
  textRevealAnimation,
  scrollRevealAnimation,
  buttonPressAnimation
} from '../lib/gsapAnimations';
import './Blog.css';

export default function Blog() {
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const imageContainerRef = useRef(null);
  const footerRef = useRef(null);

  // Example blog posts
  const handleLink = "https://www.freecodecamp.org/";
  const posts = [
    {
      title: "Getting Started with React",
      date: "2025-07-01",
      excerpt: "Learn the basics of React and how to build your first component.",
    },
    {
      title: "Understanding Tailwind CSS",
      date: "2025-06-20",
      excerpt: "A quick guide to using Tailwind CSS for rapid UI development.",
    },
    {
      title: "JavaScript ES2025 Features",
      date: "2025-06-10",
      excerpt: "Explore the latest features introduced in ES2025.",
    },
  ];

  useEffect(() => {
    const page = pageRef.current;
    const header = headerRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current.filter(Boolean);
    const imageContainer = imageContainerRef.current;
    const footer = footerRef.current;

    // Page entrance animation
    if (page) {
      pageTransitionIn(page);
    }

    // Header animation
    if (header) {
      setTimeout(() => {
        textRevealAnimation(header);
      }, 400);
    }

    // Title animation
    if (title) {
      setTimeout(() => {
        textRevealAnimation(title);
      }, 600);
    }

    // Blog cards animation
    if (cards.length > 0) {
      setTimeout(() => {
        blogCardsAnimation(cards);
      }, 800);

      // Add hover effects to each card
      cards.forEach((card) => {
        if (card) {
          const hoverTl = cardHoverEffect(card);
          card.addEventListener('mouseenter', () => hoverTl.play());
          card.addEventListener('mouseleave', () => hoverTl.reverse());

          // Button press animation for post titles
          const button = card.querySelector('.post-title');
          if (button) {
            button.addEventListener('click', () => buttonPressAnimation(button));
          }
        }
      });
    }

    // Scroll reveal animations
    const elementsToReveal = [imageContainer, footer].filter(Boolean);
    if (elementsToReveal.length > 0) {
      setTimeout(() => {
        scrollRevealAnimation(elementsToReveal, "up");
      }, 1000);
    }
  }, []);

  return (
    <div ref={pageRef} className="blog-page">
      <SideBar />
      <RightSidBar />
      <div ref={headerRef} className="blog-header">
        <p className="blog-header-title">BLOG</p>
      </div>
      <div className="blog-main">
        <div className="blog-posts">
          <div className="posts-container">
            <h2 ref={titleRef} className="posts-title">Latest Posts</h2>
            <div className="posts-list">
              {posts.map((post, idx) => (
                <div 
                  key={idx} 
                  className="post-card"
                  ref={(el) => {
                    if (el && !cardsRef.current.includes(el)) {
                      cardsRef.current[idx] = el;
                    }
                  }}
                >
                  <button 
                    className="post-title" 
                    onClick={() => window.open(handleLink, "_blank")}
                  >
                    {post.title}
                  </button>
                  <p className="post-date">{post.date}</p>
                  <p className="post-excerpt">{post.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div ref={imageContainerRef} className="blog-image-container">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80" 
            alt="Blog" 
            className="blog-image" 
          />
        </div>
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}
