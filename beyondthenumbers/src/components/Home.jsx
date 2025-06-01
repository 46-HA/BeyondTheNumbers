import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/Home.css';

const Home = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.from(titleRef.current, { opacity: 0, y: -50, duration: 1 });
    }, []);

    return(
        <div className="home">
            <h1 ref={titleRef}>Beyond The Numbers</h1>
            <p>Remembering the lives lost on September 11, 2001</p>
            <p>A summer project by a teenager</p>
            <Link to="/stories">Explore Stories</Link>
        </div>
    );
};

export default Home;