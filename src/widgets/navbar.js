import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    const handleClick = () => {
    nav.classList.toggle('active');
    };

    hamburger.addEventListener('click', handleClick);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
    hamburger.removeEventListener('click', handleClick);
    };
}, []);

return (
<header className="header">
    <nav className="nav">
    <div className="logo">
    <Link to="/">WEDD</Link>
    </div>
    </nav>
    <nav className="nav">
    <nav className="nav_right">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    </nav>
    </nav>
    <div className="hamburger">
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    </div>
</header>
);
}

export default Navbar;
