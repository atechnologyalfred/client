import React from 'react';
import { Link } from 'react-router';
import { useState } from 'react';
import {toast } from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://uploadproducts.onrender.com/createcontact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success("Contact created successfully");
        setFormData({ name: '', email: '', message: '' });

      } else {
        toast.error("Error creating contact");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200" data-theme="luxury">
      <div className="mb-8 w-full flex justify-center">
        <Link to="/" className="btn btn-outline btn-primary">Home</Link>
      </div>
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body">
          <h1 className="card-title text-3xl mb-4">Contact Us</h1>
          <p className="mb-6">If you have any questions, feel free to reach out!</p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="label">
                <span className="label-text">Name:</span>
              </label>
              <input type="text" id="name" name="name" required className="input input-bordered w-full" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email" className="label">
                <span className="label-text">Email:</span>
              </label>
              <input type="email" id="email" name="email" required className="input input-bordered w-full" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message" className="label">
                <span className="label-text">Message:</span>
              </label>
              <textarea id="message" name="message" required className="textarea textarea-bordered w-full" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;