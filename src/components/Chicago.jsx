export default function Chicago() {
    
    const sectionStyles = {
        padding: '80px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        backgroundColor: '#FFFFFF'
    };

    const containerStyles = {
        display: 'flex',
        flexWrap: 'wrap-reverse',
        maxWidth: '850px',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '40px'
    };

    const textColumnStyles = {
        flex: '1 1 350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '15px'
    };

    const titleStyles = {
        color: '#495E57',
        fontSize: '56px',
        margin: '0',
        fontFamily: 'serif',
        lineHeight: '1'
    };

    const subtitleStyles = {
        color: '#333333',
        fontSize: '32px',
        margin: '0',
        fontFamily: 'serif'
    };

    const descStyles = {
        color: '#333333',
        fontSize: '18px',
        lineHeight: '1.6',
        margin: '10px 0 0 0',
        maxWidth: '400px'
    };

    const imageColumnStyles = {
        flex: '1 1 350px',
        position: 'relative',
        height: '350px', 
        minWidth: '300px'
    };

    const imageOneStyles = {
        width: '60%',
        borderRadius: '16px',
        position: 'absolute',
        top: '0',
        right: '0',
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
        objectFit: 'cover'
    };

    const imageTwoStyles = {
        width: '60%',
        borderRadius: '16px',
        position: 'absolute',
        bottom: '0',
        left: '0',
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
        objectFit: 'cover',
        border: '5px solid #FFFFFF'
    };

    return (
        <section style={sectionStyles}>
            <div style={containerStyles}>
                
                {/* Text Side */}
                <div style={textColumnStyles}>
                    <div>
                        <h1 style={titleStyles}>Little Lemon</h1>
                        <h2 style={subtitleStyles}>Chicago</h2>
                    </div>
                    <p style={descStyles}>
                        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. 
                        <br /><br />
                        To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                    </p>
                </div>

                {/* Image Side */}
                <div style={imageColumnStyles}>
                    <img 
                        src="https://via.placeholder.com/250x300.png?text=Mario+and+Adrian+1" 
                        alt="Mario and Adrian cooking" 
                        style={imageOneStyles} 
                    />
                    <img 
                        src="https://via.placeholder.com/250x300.png?text=Mario+and+Adrian+2" 
                        alt="Restaurant interior" 
                        style={imageTwoStyles} 
                    />
                </div>

            </div>
        </section>
    );
}