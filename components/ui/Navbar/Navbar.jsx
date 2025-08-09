import React from 'react';
import './Navbar.css';

export default function Navbar({ links }) {
  return (
    <nav className="navbar">
      {links.map((link, idx) => (
        <a key={idx} href={link.href}>{link.label}</a>
      ))}
    </nav>
  );
}
