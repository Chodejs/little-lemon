import { useState } from "react";
import styles from './BookingPage.module.css';
import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, bookings = [], setBookings }) {

    return (
        <>
            <BookingForm 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                bookings={bookings}
                setBookings={setBookings}
            />

            {bookings.length > 0 && (
                <div style={{ padding: '20px', maxWidth: '800px', margin: '40px auto' }}>
                    <h2 className={styles.headingStyles} style={{ textAlign: 'center' }}>Current Reservations</h2>
                    
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#F4CE14', color: '#333', textAlign: 'left' }}>
                                <th style={{ padding: '12px', border: '1px solid #ccc' }}>Date</th>
                                <th style={{ padding: '12px', border: '1px solid #ccc' }}>Time</th>
                                <th style={{ padding: '12px', border: '1px solid #ccc' }}>Guests</th>
                                <th style={{ padding: '12px', border: '1px solid #ccc' }}>Occasion</th>
                                <th style={{ padding: '12px', border: '1px solid #ccc' }}>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '12px', border: '1px solid #ccc' }}>{booking.date}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ccc' }}>{booking.time}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ccc' }}>{booking.guests}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ccc' }}>{booking.occasion || 'Standard nosh'}</td>
                                    <td style={{ padding: '12px', border: '1px solid #ccc' }}>{booking.firstName} {booking.lastName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}