import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import styles from './Main.module.css';

export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return state;
        default:
            return state; 
    }
};

export default function Main() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    return (
        <main className={styles.mainStyles}>
            <Routes>
                {/* The default landing page */}
                <Route path="/" element={<Homepage />} />

                <Route 
                    path="/reserve" 
                    element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} 
                />
            </Routes>
        </main>
    )
}