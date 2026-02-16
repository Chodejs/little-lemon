import styles from './CallToAction.module.css';

import { Link } from 'react-router-dom';

export default function CallToAction() {

    const imageSrc = "../restauranfood.JPG";

    return (
        <section className={styles.heroSectionStyles}>
            <div className={styles.containerStyles}>
                {/* The Text Side */}
                <div className={styles.textColumnStyles}>
                    <div>
                        <h1 className={styles.titleStyles}>Little Lemon</h1>
                        <h2 className={styles.subtitleStyles}>Chicago</h2>
                    </div>
                    <p className={styles.descStyles}>
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/reserve" className={styles.buttonStyles}>
                        Reserve a Table
                    </Link>
                </div>

                {/* The Image Side */}
                <div className={styles.imageColumnStyles}>
                    <img 
                        src={imageSrc}
                        alt="Little Lemon Restaurant Food" 
                        className={styles.imageStyles} 
                    />
                </div>
            </div>
        </section>
    );
}