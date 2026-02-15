export default function Footer() {
    // Emma's Styling Notes:
    // A dark, robust footer to ground the whole page. 
    // We are using flex-wrap so it automatically stacks nicely on smaller screens!
    const footerStyles = {
        backgroundColor: '#495E57', // Classic Little Lemon green
        color: '#EDEFEE',
        display: 'flex',
        flexWrap: 'wrap', // Absolute lifesaver for mobile responsiveness
        justifyContent: 'space-around',
        padding: '40px 20px',
        fontFamily: 'sans-serif',
        marginTop: 'auto' // Pushes footer to the bottom if the page content is short
    };

    const columnStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        minWidth: '200px', // Stops columns from getting hilariously squashed
        marginBottom: '20px'
    };

    const headerStyles = {
        color: '#F4CE14', // Yellow headers for a proper pop of contrast
        fontSize: '20px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    const linkStyles = {
        color: '#EDEFEE',
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'color 0.2s ease'
    };

    return (
        <footer style={footerStyles}>
            <div style={columnStyles}>
                {/* I added a cheeky white background to the logo so it pops against the dark green */}
                <img 
                    src="logo.svg" 
                    alt="Little Lemon" 
                    style={{ height: '70px', width: 'auto', backgroundColor: '#FFF', padding: '10px', borderRadius: '8px', alignSelf: 'flex-start' }} 
                />
            </div>
            
            <div style={columnStyles}>
                <h4 style={headerStyles}>Doormat Nav</h4>
                <a style={linkStyles} href="/">Home</a>
                <a style={linkStyles} href="/about">About</a>
                <a style={linkStyles} href="/menu">Menu</a>
                <a style={linkStyles} href="/reserve">Reservations</a>
            </div>

            <div style={columnStyles}>
                <h4 style={headerStyles}>Contact</h4>
                <span style={linkStyles}>123 Lemon Way<br/>Chicago, IL 60601</span>
                <span style={linkStyles}>+1 (555) 123-4567</span>
                <span style={linkStyles}>hello@littlelemon.com</span>
            </div>

            <div style={columnStyles}>
                <h4 style={headerStyles}>Socials</h4>
                <a style={linkStyles} href="#facebook">Facebook</a>
                <a style={linkStyles} href="#instagram">Instagram</a>
                <a style={linkStyles} href="#twitter">X / Twitter</a>
            </div>
        </footer>
    )
}