import styles from './Chicago.module.css';

export default function Chicago() {


    return (
        <section className={styles.sectionStyles}>
            <div className={styles.containerStyles}>
                
                {/* Text Side */}
                <div className={styles.textColumnStyles}>
                    <div>
                        <h1 className={styles.titleStyles}>Little Lemon</h1>
                        <h2 className={styles.subtitleStyles}>Chicago</h2>
                    </div>
                    <p className={styles.descStyles}>
                        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. 
                        <br /><br />
                        To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                    </p>
                </div>

                {/* Image Side */}
                <div className={styles.imageColumnStyles}>
                    <img 
                        src="../Mario and Adrian a.JPG" 
                        alt="Mario and Adrian cooking" 
                        className={styles.imageOneStyles} 
                    />
                    <img 
                        src="../Mario and Adrian b.JPG" 
                        alt="Mario and Adrian cooking"
                        className={styles.imageTwoStyles} 
                    />
                </div>

            </div>
        </section>
    );
}