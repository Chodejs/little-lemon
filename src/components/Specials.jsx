import styles from './Specials.module.css';

export default function Specials() {
    // Data Source: until later in project 
    const specialsData = [
        {
            id: 1,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: "../greek salad.JPG"
        },
        {
            id: 2,
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            image: "../bruchetta.svg"
        },
        {
            id: 3,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: "../lemon dessert.JPG"
        }
    ];


    return (
        <section id="specials" className={styles.sectionStyles}>
            <div className={styles.containerStyles}>

                {/* Header Row */}
                <div className={styles.headerRowStyles}>
                    <h2 className={styles.titleStyles}>This weeks specials!</h2>
                    <button className={styles.buttonStyles}>Online Menu</button>
                </div>


                <div className={styles.cardsContainerStyles}>
                    {specialsData.map((special) => (
                        <article key={special.id} className={styles.cardStyles}>
                            <img src={special.image} alt={special.title} className={styles.imageStyles} />

                            <div className={styles.cardBodyStyles}>
                                <div className={styles.cardHeaderStyles}>
                                    <h3 className={styles.cardTitleStyles}>{special.title}</h3>
                                    <p className={styles.priceStyles}>{special.price}</p>
                                </div>
                                <p className={styles.descStyles}>{special.description}</p>
                                <span className={styles.orderLinkStyles}>Order a delivery 🛵</span>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}