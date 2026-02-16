import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            {/* The Hamburger Icon */}
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            {/* The Navigation Links */}
            <ul className={styles.navLinks + `${menuOpen ? "visible" : ""}`}>
                <li>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                    <a href="#specials" onClick={toggleMenu}>Specials</a>
                </li>
                <li>
                    <a href="#reviews" onClick={toggleMenu}>Reviews</a>
                </li>
                <li>
                    <Link to="/reserve" onClick={toggleMenu}>Reservations</Link>
                </li>
            </ul>
        </nav>
    );
}