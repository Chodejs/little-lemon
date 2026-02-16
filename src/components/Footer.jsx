import styles from './Footer.module.css';


export default function Footer() {

    return (
        <footer className={styles.footerStyles}>
            <div className={styles.columnStyles}>

                <img
                    src="logo.svg"
                    alt="Little Lemon"
                    className={styles.footerImage} 
                />
            </div>

            <div className={styles.columnStyles}>
                <h4 className={styles.headerStyles}>Doormat Nav</h4>
                <a className={styles.linkStyles} href="/">Home</a>
                <a className={styles.linkStyles} href="/about">About</a>
                <a className={styles.linkStyles} href="/menu">Menu</a>
                <a className={styles.linkStyles} href="/reserve">Reservations</a>
            </div>

            <div className={styles.columnStyles}>
                <h4 className={styles.headerStyles}>Contact</h4>
                <span className={styles.linkStyles}>123 Lemon Way<br/>Chicago, IL 60601</span>
                <span className={styles.linkStyles}>+1 (555) 123-4567</span>
                <span className={styles.linkStyles}>hello@littlelemon.com</span>
            </div>

            <div className={styles.columnStyles}>
                <h4 className={styles.headerStyles}>Socials</h4>
                <a className={styles.linkStyles} href="#facebook">Facebook</a>
                <a className={styles.linkStyles} href="#instagram">Instagram</a>
                <a className={styles.linkStyles} href="#twitter">X / Twitter</a>
            </div>
        </footer>
    )
}