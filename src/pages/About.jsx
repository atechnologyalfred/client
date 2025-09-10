import React from 'react';
import { Link } from 'react-router';

const About = () => (
  <div data-theme="forest" className="min-h-screen bg-base-200">
    <nav className="navbar bg-base-100 px-6 py-4 shadow-md">
      <div className="flex-1">
        <span className="text-2xl font-bold text-base-content">ShowFashion</span>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-base-content">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="flex items-center justify-center">
      <div className="bg-base-100 p-8 shadow-md max-w-xl mt-10 rounded-tl-2xl rounded-tr-2xl border-b-4 border-base-300">
        <h1 className="text-3xl font-bold mb-4 text-base-content">About ShowFashion</h1>
        <p className="text-base-content text-lg">
          ShowFashion is a platform where you request for a good outfit for an occasion or ceremony.
          Give the occasion details and we select the best outfit for the occasion.
          You log into our website within 24 hours and you will see what we have for you.
          You can choose to get them outside or get them from us.
          We can follow you all through the ceremony by being your dressee and attendees.
        </p>
      </div>
    </div>
  </div>
);

export default About;