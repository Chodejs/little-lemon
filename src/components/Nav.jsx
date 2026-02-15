import { useState } from "react";

export default function Nav() {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const pages = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: 'about',
            link: '/about'
        },
        {
            name: 'menu',
            link: '/menu'
        },
        {
            name: 'reserve',
            link: '/reserve'
        }
    ]

    const navStyles = {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#495E57', 
        padding: '15px 0',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
    };

    const ulStyles = {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: '40px'
    };

    const baseLiStyles = {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '18px',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        letterSpacing: '1px',
        padding: '5px 10px',
        borderRadius: '5px',
        transition: 'all 0.3s ease'
    };

    return (
        <>
            <nav style={navStyles}>
                <ul style={ulStyles}>
                    {pages.map((page, index) => {
                        const isHovered = hoveredIndex === index;

                        const dynamicStyles = {
                            ...baseLiStyles,
                            color: isHovered ? '#495E57' : '#F4CE14',
                            backgroundColor: isHovered ? '#F4CE14' : 'transparent'
                        }
                        return (
                            <li
                                key={index}
                                style={dynamicStyles}

                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {page.name}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}