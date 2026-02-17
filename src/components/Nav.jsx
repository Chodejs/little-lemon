import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
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
            <ul className={`${styles.navLinks} ${menuOpen ? styles.visible : ""}`}>
                <li>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/#specials" onClick={toggleMenu}>Specials</Link>
                </li>
                <li>
                    <Link to="/#reviews" onClick={toggleMenu}>Reviews</Link>
                </li>
                <li>
                    <Link to="/reserve" onClick={toggleMenu}>Reservations</Link>
                </li>
            </ul>
        </nav>
    );
}