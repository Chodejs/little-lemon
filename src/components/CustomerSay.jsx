import styles from './CustomerSay.module.css';

export default function CustomersSay() {
    // Dummy Data:

    const testimonials = [
        {
            id: 1,
            name: "Sarah Jones",
            rating: "⭐⭐⭐⭐⭐",
            image: "https://api.maracentral.com/images/ai-generated/businesswoman-eating-corn-cob-office-2.jpg",
            review: "Absolutely brilliant! The Greek Salad was so fresh, and the atmosphere was perfectly cozy."
        },
        {
            id: 2,
            name: "Marcus Smith",
            rating: "⭐⭐⭐⭐",
            image: "https://api.maracentral.com/images/ai-generated/man-inspecting-salad-magnifying-glass-food-safety-2.jpg",
            review: "Great food, bit of a wait for the table, but the Lemon Dessert was completely worth it."
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            rating: "⭐⭐⭐⭐⭐",
            image: "https://api.maracentral.com/images/ai-generated/couple-eating-steaming-vegetables-ai-glitch-2.jpg",
            review: "Family-owned and you can taste the love in the recipes. Will definitely be coming back!"
        },
        {
            id: 4,
            name: "John Davies",
            rating: "⭐⭐⭐⭐⭐",
            image: "https://api.maracentral.com/images/ai-generated/smiling-man-holding-plate-vegetables-fridge-background-2.jpg",
            review: "Best Mediterranean food in Chicago, hands down. The Bruschetta is a must-try."
        }
    ];


    return (
        <section className={styles.sectionStyles}>
            <div className={styles.containerStyles}>
                <h2 className={styles.headingStyles}>What Our Customers Say</h2>

                <div className={styles.gridStyles}>
                    {testimonials.map((testimonial) => (
                        <article key={testimonial.id} className={styles.cardStyles}>
                            <p className={styles.ratingStyles}>{testimonial.rating}</p>

                            <div className={styles.profileContainerStyles}>
                                <img
                                    src={testimonial.image}
                                    alt={`${testimonial.name}'s profile`}
                                    className={styles.imageStyles}
                                />
                                <h3 className={styles.nameStyles}>{testimonial.name}</h3>
                            </div>

                            <p className={styles.reviewTextStyles}>"{testimonial.review}"</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}