export default function Header() {

    const headerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderBottom: '2px solid #edefee'
    };

    const logoStyles = {
        height: '65px',
        width: 'auto',
        display: 'block'
    };

    return (
        <>
            <header style={headerStyles}>
                <img src="logo.svg" alt="Little Lemon Logo" style={logoStyles} />
            </header>
        </>
    )
}