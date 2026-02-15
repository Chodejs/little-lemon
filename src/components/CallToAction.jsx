import { Link } from 'react-router-dom';

export default function CallToAction() {
   
    const heroSectionStyles = {
        backgroundColor: '#495E57',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const containerStyles = {
        display: 'flex',
        flexWrap: 'wrap', //
        maxWidth: '850px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px'
    };

    const textColumnStyles = {
        flex: '1 1 300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '15px'
    };

    const titleStyles = {
        color: '#F4CE14',
        fontSize: '56px',
        margin: '0',
        fontFamily: 'serif',
        lineHeight: '1'
    };

    const subtitleStyles = {
        color: '#EDEFEE',
        fontSize: '32px',
        margin: '0',
        fontFamily: 'serif'
    };

    const descStyles = {
        color: '#EDEFEE',
        fontSize: '18px',
        margin: '0 0 10px 0',
        lineHeight: '1.5',
        fontFamily: 'sans-serif',
        maxWidth: '350px'
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
        textDecoration: 'none',
        display: 'inline-block', 
    };

    const imageColumnStyles = {
        flex: '1 1 300px',
        display: 'flex',
        justifyContent: 'center'
    };

    const imageStyles = {
        width: '100%',
        maxWidth: '350px',
        borderRadius: '16px',
        objectFit: 'cover',
        height: '350px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
    };

    return (
        <section style={heroSectionStyles}>
            <div style={containerStyles}>
                {/* The Text Side */}
                <div style={textColumnStyles}>
                    <div>
                        <h1 style={titleStyles}>Little Lemon</h1>
                        <h2 style={subtitleStyles}>Chicago</h2>
                    </div>
                    <p style={descStyles}>
                        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to="/reserve" style={buttonStyles}>
                        Reserve a Table
                    </Link>
                </div>

                {/* The Image Side */}
                <div style={imageColumnStyles}>
                    <img 
                        src="https://via.placeholder.com/350x350.png?text=Tasty+Food+Here" 
                        alt="Little Lemon Restaurant Food" 
                        style={imageStyles} 
                    />
                </div>
            </div>
        </section>
    );
}