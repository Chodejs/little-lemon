import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import styles from './Main.module.css';

export default function Main() {

    return (
        <main className={styles.mainStyles}>
            <Routes>
                {/* The default landing page */}
                <Route path="/" element={<Homepage />} />
                <Route path="/reserve" element={<BookingPage />} />

            </Routes>
        </main>
    )
}