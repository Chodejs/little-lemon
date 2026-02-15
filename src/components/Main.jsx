import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

export default function Main() {
   
    const mainStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        minHeight: '70vh',
        backgroundColor: '#EDEFEE', 
        padding: '20px'
    };

    return (
        <main style={mainStyles}>
            <Routes>
                {/* The default landing page */}
                <Route path="/" element={<Homepage />} />
                <Route path="/reserve" element={<BookingPage />} />

            </Routes>
        </main>
    )
}