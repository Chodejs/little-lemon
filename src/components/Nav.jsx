import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            {/* The Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* The Navigation Links */}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                    <a href="#about" onClick={toggleMenu}>About</a>
                </li>
                <li>
                    <a href="#menu" onClick={toggleMenu}>Menu</a>
                </li>
                <li>
                    <Link to="/reserve" onClick={toggleMenu}>Reservations</Link>
                </li>
            </ul>
        </nav>
    );
}