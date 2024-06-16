// src/pages/Home.js
import React from 'react';
import './Home.css'

const Home = () => {
return (
<div className="pt-16 grid grid-cols-2 gap-4 header-1">
    <div className="left-header pl-20">
    <h2 className="text-4xl text-pink-500 leading-relaxed">No #1 Platform</h2>
    <h2 className="text-4xl color-darkblue leading-snug">Pernikahan Digital</h2>
    <h4 className="text-xl pb-8">Wedding Planner(soon) - Invitation - Digital Guestbook</h4>
    <br></br>
    <h4 className="text-xl">One stop solution your wedding buddy!</h4>
    <h4 className="text-xl font-bold">Solusi pernikahanmu jadi lebih modern, efisien dan terukur</h4>
    </div>
    <div className="right-header">
    <h2 className="text-4xl font-bold">Platform</h2>
    </div>
</div>
);
};

export default Home;
