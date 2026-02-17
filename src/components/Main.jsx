import { useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import styles from './Main.module.css';

import { fetchAPI } from '../api';

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const selectedDate = new Date(action.payload);
            // 2. Fetch and return the new available times for that specific date
            return fetchAPI(selectedDate);
        default:
            return state; 
    }
};

export default function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [bookings, setBookings] = useState([]);

    return (
        <main className={styles.mainStyles}>
            <Routes>
                {/* The default landing page */}
                <Route path="/" element={<Homepage />} />

                <Route 
                    path="/reserve" 
                    element={<BookingPage 
                        availableTimes={availableTimes}
                         dispatch={dispatch}
                         bookings={bookings} 
                        setBookings={setBookings}
                    />} 
                />
            </Routes>
        </main>
    )
}