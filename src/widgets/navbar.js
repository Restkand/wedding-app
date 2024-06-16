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
<header className="header flex justify-center sticky top-0">
    <nav className="nav pr-8">
        <div className="logo">
        <Link to="/">WEDD</Link>
        </div>
    </nav>
    <nav className="nav">
        <nav className="nav_right text-lg pr-32">
        <Link to="/design">Preset/Design</Link>
        <Link to="/portofolio">Portofolio</Link>
        <Link to="/lainnya">Lainnya</Link>
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
