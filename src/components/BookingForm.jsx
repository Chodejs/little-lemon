import { useState } from "react";
import styles from './BookingPage.module.css';
import { submitAPI } from '../api';

export default function BookingForm({ availableTimes, dispatch, bookings = [], setBookings }) {

    const [step, setStep] = useState(1);

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [requests, setRequests] = useState("");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({type: 'UPDATE_TIMES', payload: selectedDate})
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            date, time, guests, occasion,
            firstName, lastName, email, phone, requests
        };

        const isSubmitted = submitAPI(formData);

        if (isSubmitted) {
            setBookings([...bookings, formData]);
            setStep(3); 
        } else {
            console.error("Blimey! The submission failed.");
        }
    };

    const filteredTimes = availableTimes?.filter(
        (t) => !bookings?.some((b) => b.date === date && b.time === t)
    );

    const isStep1Valid = date !== "" && time !== "" && guests >= 1 && guests <= 10 && occasion !== "";
    const isStep2Valid = firstName !== "" && lastName !== "" && email !== "" && phone !== "";

    return (
        <main className={styles.mainStyles}>
            <div className={styles.containerStyles}>
                
                {/* STEP 1: BOOKING DETAILS */}
                {step === 1 && (
                    <>
                        <h1 className={styles.headingStyles}>Reserve a Table</h1>
                        <form className={styles.formStyles} onSubmit={handleNext}>
                            
                            <label htmlFor="res-date" className={styles.labelStyles}>Choose date</label>
                            <input 
                                type="date" 
                                id="res-date" 
                                required 
                                className={styles.inputStyles}
                                value={date}
                                onChange={handleDateChange}
                            />

                            <label htmlFor="res-time" className={styles.labelStyles}>Time</label>
                            <select 
                                id="res-time" 
                                required 
                                className={styles.inputStyles}
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            >
                                <option value="">Select a time</option>
                                    {filteredTimes?.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                            </select>

                            <label htmlFor="res-guests" className={styles.labelStyles}>Number of Guests</label>
                            <input 
                                id="res-guests" 
                                type="number" 
                                min="1" 
                                max="10" 
                                required 
                                className={styles.inputStyles} 
                                placeholder="1"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)} 
                            />

                            <label htmlFor="res-occassion" className={styles.labelStyles}>Occasion</label>
                            <select 
                                id="res-occassion" 
                                required 
                                className={styles.inputStyles}
                                value={occasion}
                                onChange={(e) => setOccasion(e.target.value)}
                            >
                                <option value="">Select an occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Other">Just a standard nosh</option>
                            </select>

                            <button 
                                type="submit" 
                                className={styles.buttonStyles}
                                disabled={!isStep1Valid}
                                aria-label="On Click"
                                style={!isStep1Valid ? { backgroundColor: '#ccc', cursor: 'not-allowed' } : {}}
                            >
                                Next: Your Details
                            </button>
                        </form>
                    </>
                )}

                {/* STEP 2: CONTACT DETAILS */}
                {step === 2 && (
                    <>
                        <h1 className={styles.headingStyles}>Almost There!</h1>
                        <form className={styles.formStyles} onSubmit={handleSubmit}>
                            
                            {/* EMMA'S NOTE: Step 2 also gets the un-nested htmlFor/id treatment */}
                            <label htmlFor="firstName" className={styles.labelStyles}>First Name</label>
                            <input id="firstName" type="text" required minLength="2" className={styles.inputStyles} placeholder="e.g. John" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                            <label htmlFor="lastName" className={styles.labelStyles}>Last Name</label>
                            <input id="lastName" type="text" required minLength="2" className={styles.inputStyles} placeholder="e.g. Doe" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                            <label htmlFor="email" className={styles.labelStyles}>Email Address</label>
                            <input id="email" type="email" required className={styles.inputStyles} placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label htmlFor="phone" className={styles.labelStyles}>Phone Number</label>
                            <input id="phone" type="tel" required className={styles.inputStyles} placeholder="(555) 123-4567" value={phone} onChange={(e) => setPhone(e.target.value)} />

                            <label htmlFor="requests" className={styles.labelStyles}>Special Requests</label>
                            <textarea id="requests" className={styles.textareaStyles} placeholder="Allergies, seating preferences, etc." value={requests} onChange={(e) => setRequests(e.target.value)}></textarea>

                            <button 
                                type="submit" 
                                className={styles.buttonStyles}
                                disabled={!isStep2Valid}
                                aria-label="On Click"
                                style={!isStep2Valid ? { backgroundColor: '#ccc', cursor: 'not-allowed' } : {}}
                            >
                                Complete Reservation
                            </button>
                            
                            <button 
                                type="button" 
                                className={styles.backButtonStyles} 
                                aria-label="On Click"
                                onClick={() => setStep(1)}
                            >
                                Go Back
                            </button>
                        </form>
                    </>
                )}

                {/* STEP 3: SUCCESS TOAST */}
                {step === 3 && (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <div style={{ fontSize: '50px', marginBottom: '10px' }}>✅</div>
                        <h1 className={styles.headingStyles}>Booking Confirmed!</h1>
                        <p style={{ fontSize: '18px', color: '#495E57', lineHeight: '1.5' }}>
                            Brilliant! Your details have been received and your table is secured. We look forward to seeing you.
                        </p>
                        <button 
                            className={styles.buttonStyles}
                            style={{ backgroundColor: '#495E57', color: '#FFF'}} 
                            aria-label="On Click"
                            onClick={() => {
                                setStep(1); 
                                setDate(""); setTime(""); setGuests(1); setOccasion("");
                                setFirstName(""); setLastName(""); setEmail(""); setPhone(""); setRequests("");
                            }}
                        >
                            Make Another Booking
                        </button>
                    </div>
                )}

            </div>
        </main>
    )
}