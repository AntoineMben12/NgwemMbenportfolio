
import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
  return (
    <>
    <SideBar />
    <RightSidBar />
    <div className="contact-hero">
      <p className="contact-title"><b>CONTACT</b></p>
    </div>
    <div>
      <form 
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <div>
          <label className="contact-label" htmlFor="name">
            Name
          </label>
          <input
            className="contact-input"
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="contact-label" htmlFor="email">
            Email
          </label>
          <input
            className="contact-input"
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="contact-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact-input"
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="contact-btn"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
    <Footer />
    </>
  );
}
