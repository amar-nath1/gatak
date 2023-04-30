import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from './Logo';

const Header = () => {
  return (
    <nav >
        <Logo/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li className="dropdown">
          <Link to="/our-designers">Our Designers</Link>
          <ul>
            <li><Link to="/designer1">Designer 1</Link></li>
            <li><Link to="/designer2">Designer 2</Link></li>
          </ul>
        </li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
