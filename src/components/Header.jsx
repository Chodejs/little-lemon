import styles from './Header.module.css';

export default function Header() {


    return (
        <>
            <header className={styles.headerStyles}>
                <img src="logo.svg" alt="Little Lemon Logo" className={styles.logoStyles} />
            </header>
        </>
    )
}