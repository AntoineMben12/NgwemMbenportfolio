import { useEffect, useRef } from 'react';
import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { 
  contactFormAnimation, 
  pageTransitionIn,
  inputFocusAnimation,
  buttonPressAnimation,
  scrollRevealAnimation,
  notificationSlide
} from '../lib/gsapAnimations';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const pageRef = useRef(null);
  const formRef = useRef(null);
  const inputsRef = useRef([]);
  const buttonRef = useRef(null);
  const footerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Button press animation
    if (buttonRef.current) {
      buttonPressAnimation(buttonRef.current);
    }

    try {
      fetch( `${'https://ngwemmbenbackend.onrender.com'}/api/forms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then((response) => {
          if (response.ok) {
            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          } else {
            toast.error('Error sending message.');
          }
        })
        .catch((error) => {
          toast.error('Error sending message.');
        });
    } catch (error) {
      toast.error('Error sending message.');
    }
  };

  useEffect(() => {
    const page = pageRef.current;
    const form = formRef.current;
    const inputs = inputsRef.current.filter(Boolean);
    const button = buttonRef.current;
    const footer = footerRef.current;

    // Page entrance animation
    if (page) {
      pageTransitionIn(page);
    }

    // Contact form animation
    if (form && inputs.length > 0 && button) {
      setTimeout(() => {
        contactFormAnimation(form, inputs, button);
      }, 400);
    }

    // Input focus animations
    inputs.forEach((input) => {
      if (input) {
        const focusTl = inputFocusAnimation(input);
        input.addEventListener('focus', () => focusTl.play());
        input.addEventListener('blur', () => focusTl.reverse());
      }
    });

    // Footer scroll reveal
    if (footer) {
      setTimeout(() => {
        scrollRevealAnimation([footer], "up");
      }, 1000);
    }

    // Custom toast animations
    const originalToastSuccess = toast.success;
    const originalToastError = toast.error;

    toast.success = (message, options) => {
      const toastElement = originalToastSuccess(message, options);
      setTimeout(() => {
        const toastContainer = document.querySelector('.Toastify__toast--success');
        if (toastContainer) {
          notificationSlide(toastContainer, 'right');
        }
      }, 100);
      return toastElement;
    };

    toast.error = (message, options) => {
      const toastElement = originalToastError(message, options);
      setTimeout(() => {
        const toastContainer = document.querySelector('.Toastify__toast--error');
        if (toastContainer) {
          notificationSlide(toastContainer, 'right');
        }
      }, 100);
      return toastElement;
    };

  }, []);

  return (
    <div ref={pageRef} className="contact-page">
      <SideBar />
      <RightSidBar />
      <div className="contact-hero">
        <div className="contact-container">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
          
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="name" className="contact-label">Name</label>
              <input
                ref={(el) => {
                  if (el && !inputsRef.current.includes(el)) {
                    inputsRef.current[0] = el;
                  }
                }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                required
                placeholder="Your full name"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email" className="contact-label">Email</label>
              <input
                ref={(el) => {
                  if (el && !inputsRef.current.includes(el)) {
                    inputsRef.current[1] = el;
                  }
                }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="message" className="contact-label">Message</label>
              <textarea
                ref={(el) => {
                  if (el && !inputsRef.current.includes(el)) {
                    inputsRef.current[2] = el;
                  }
                }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact-textarea"
                rows="6"
                required
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
              ref={buttonRef}
              type="submit" 
              className="contact-submit-btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div ref={footerRef}>
        <Footer />
      </div>
      
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
