export default function CustomersSay() {
    // Dummy Data:

    const testimonials = [
        {
            id: 1,
            name: "Sarah Jones",
            rating: "⭐⭐⭐⭐⭐",
            image: "https://via.placeholder.com/100x100.png?text=SJ",
            review: "Absolutely brilliant! The Greek Salad was so fresh, and the atmosphere was perfectly cozy."
        },
        {
            id: 2,
            name: "Marcus Smith",
            rating: "⭐⭐⭐⭐",
            image: "https://via.placeholder.com/100x100.png?text=MS",
            review: "Great food, bit of a wait for the table, but the Lemon Dessert was completely worth it."
        },
        {
            id: 3,
            name: "Elena Rodriguez",
            rating: "⭐⭐⭐⭐⭐",
            image: "https://via.placeholder.com/100x100.png?text=ER",
            review: "Family-owned and you can taste the love in the recipes. Will definitely be coming back!"
        },
        {
            id: 4,
            name: "John Davies",
            rating: "⭐⭐⭐⭐⭐",
            image: "https://via.placeholder.com/100x100.png?text=JD",
            review: "Best Mediterranean food in Chicago, hands down. The Bruschetta is a must-try."
        }
    ];

    const sectionStyles = {
        backgroundColor: '#EDEFEE',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif'
    };

    const containerStyles = {
        maxWidth: '850px',
        width: '100%'
    };

    const headingStyles = {
        textAlign: 'center',
        fontSize: '40px',
        color: '#495E57',
        marginBottom: '40px'
    };

    const gridStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
    };

    const cardStyles = {
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        padding: '25px',
        flex: '1 1 200px',
        maxWidth: '280px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
    };

    const ratingStyles = {
        fontSize: '18px',
        margin: '0'
    };

    const profileContainerStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
    };

    const imageStyles = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        objectFit: 'cover'
    };

    const nameStyles = {
        fontWeight: 'bold',
        fontSize: '18px',
        color: '#333333',
        margin: '0'
    };

    const reviewTextStyles = {
        color: '#495E57',
        fontSize: '16px',
        lineHeight: '1.5',
        margin: '0',
        fontStyle: 'italic'
    };

    return (
        <section style={sectionStyles}>
            <div style={containerStyles}>
                <h2 style={headingStyles}>What Our Customers Say</h2>

                <div style={gridStyles}>
                    {testimonials.map((testimonial) => (
                        <article key={testimonial.id} style={cardStyles}>
                            <p style={ratingStyles}>{testimonial.rating}</p>

                            <div style={profileContainerStyles}>
                                <img
                                    src={testimonial.image}
                                    alt={`${testimonial.name}'s profile`}
                                    style={imageStyles}
                                />
                                <h3 style={nameStyles}>{testimonial.name}</h3>
                            </div>

                            <p style={reviewTextStyles}>"{testimonial.review}"</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}