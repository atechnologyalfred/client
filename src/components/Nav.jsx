import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <nav className="navbar bg-base-100 px-6 py-4 shadow-md" >
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-base-content">
          ShowFashion
        </Link>
      </div>
      {/* Desktop Menu */}
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/create" className="text-base-content">Create</Link>
          </li>
          <li>
            <Link to="/about" className="text-base-content">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-base-content">Contact</Link>
          </li>
            <li>
            <Link to="/contactlist" className="text-base-content">Testimonies</Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/create" className="text-base-content">Create</Link>
            </li>
            <li>
              <Link to="/about" className="text-base-content">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-base-content">Contact</Link>
            </li>
            <li>
              <Link to="/contactlist" className="text-base-content">Testimonials</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
