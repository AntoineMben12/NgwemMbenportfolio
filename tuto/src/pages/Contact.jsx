import Footer from "../components/footer";
import SideBar from "../components/SideBar";
import RightSidBar from "../components/TopBar";
import React from "react";  
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
      fetch( `${'http://localhost:5000'}/api/forms`, {
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
    <SideBar/>
    <RightSidBar/>
    <div className="h-screen w-full flex justify-center items-center bgimg">
      <p className="font-mono text-7xl font-extrabold text-white"><b>CONTACT</b></p>
    </div>
    <div>
      <form 
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded shadow-md space-y-4"
      >
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
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
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </div>
    <Footer/>
    </>
  );
}
