export default function Specials() {
    // Data Source: until later in project 
    const specialsData = [
        {
            id: 1,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: "https://via.placeholder.com/400x250.png?text=Greek+Salad"
        },
        {
            id: 2,
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            image: "https://via.placeholder.com/400x250.png?text=Bruschetta"
        },
        {
            id: 3,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: "https://via.placeholder.com/400x250.png?text=Lemon+Dessert"
        }
    ];

    const sectionStyles = {
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

    const headerRowStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px',
        flexWrap: 'wrap',
        gap: '20px'
    };

    const titleStyles = {
        fontSize: '40px',
        color: '#333333',
        margin: 0
    };

    const buttonStyles = {
        backgroundColor: '#F4CE14',
        color: '#333333',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 24px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    };

    const cardsContainerStyles = {
        display: 'flex',
        gap: '30px',
        flexWrap: 'wrap',
        justifyContent: 'center'
    };

    // The individual card styling
    const cardStyles = {
        backgroundColor: '#EDEFEE',
        borderRadius: '16px 16px 0 0',
        width: '100%',
        maxWidth: '260px',
        flex: '1 1 260px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
    };

    const imageStyles = {
        width: '100%',
        height: '180px',
        objectFit: 'cover'
    };

    const cardBodyStyles = {
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    };

    const cardHeaderStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px'
    };

    const cardTitleStyles = {
        margin: 0,
        fontSize: '20px',
        fontWeight: 'bold'
    };

    const priceStyles = {
        color: '#EE9972',
        fontWeight: 'bold',
        fontSize: '18px',
        margin: 0
    };

    const descStyles = {
        color: '#495E57',
        fontSize: '16px',
        lineHeight: '1.4',
        marginBottom: '20px',
        flexGrow: 1
    };

    const orderLinkStyles = {
        fontWeight: 'bold',
        cursor: 'pointer',
        color: '#333333'
    };

    return (
        <section style={sectionStyles}>
            <div style={containerStyles}>

                {/* Header Row */}
                <div style={headerRowStyles}>
                    <h2 style={titleStyles}>This weeks specials!</h2>
                    <button style={buttonStyles}>Online Menu</button>
                </div>


                <div style={cardsContainerStyles}>
                    {specialsData.map((special) => (
                        <article key={special.id} style={cardStyles}>
                            <img src={special.image} alt={special.title} style={imageStyles} />

                            <div style={cardBodyStyles}>
                                <div style={cardHeaderStyles}>
                                    <h3 style={cardTitleStyles}>{special.title}</h3>
                                    <p style={priceStyles}>{special.price}</p>
                                </div>
                                <p style={descStyles}>{special.description}</p>
                                <span style={orderLinkStyles}>Order a delivery 🛵</span>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}