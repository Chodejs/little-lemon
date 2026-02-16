import { useState } from "react";
import styles from './BookingPage.module.css';
export default function BookingPage() {

const [step, setStep] = useState(1);

    const handleNext = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(3);
    };

    return (
        <main className={styles.mainStyles}>
            <div className={styles.containerStyles}>
                
                {/* STEP 1: BOOKING DETAILS */}
                {step === 1 && (
                    <>
                        <h1 className={styles.headingStyles}>Reserve a Table</h1>
                        <form className={styles.formStyles} onSubmit={handleNext}>
                            <label className={styles.labelStyles}>Date
                                <input type="date" required className={styles.inputStyles} />
                            </label>

                            <label className={styles.labelStyles}>Time
                                <select required className={styles.inputStyles}>
                                    <option value="">Select a time</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                </select>
                            </label>

                            <label className={styles.labelStyles}>Number of Guests
                                <input type="number" min="1" max="10" required className={styles.inputStyles} placeholder="1" />
                            </label>

                            <label className={styles.labelStyles}>Occasion
                                <select required className={styles.inputStyles}>
                                    <option value="">Select an occasion</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Other">Just a standard nosh</option>
                                </select>
                            </label>

                            <button type="submit" className={styles.buttonStyles}>Next: Your Details</button>
                        </form>
                    </>
                )}

                {/* STEP 2: CONTACT DETAILS */}
                {step === 2 && (
                    <>
                        <h1 className={styles.headingStyles}>Almost There!</h1>
                        <form className={styles.formStyles} onSubmit={handleSubmit}>
                            <label className={styles.labelStyles}>First Name
                                <input type="text" required className={styles.inputStyles} placeholder="e.g. John" />
                            </label>

                            <label className={styles.labelStyles}>Last Name
                                <input type="text" required className={styles.inputStyles} placeholder="e.g. Doe" />
                            </label>

                            <label className={styles.labelStyles}>Email Address
                                <input type="email" required className={styles.inputStyles} placeholder="john@example.com" />
                            </label>

                            <label className={styles.labelStyles}>Phone Number
                                <input type="tel" required className={styles.inputStyles} placeholder="(555) 123-4567" />
                            </label>

                            <label className={styles.labelStyles}>Special Requests
                                <textarea className={styles.textareaStyles} placeholder="Allergies, seating preferences, etc."></textarea>
                            </label>

                            <button type="submit" className={styles.buttonStyles}>Complete Reservation</button>
                            <button type="button" className={styles.backButtonStyles} onClick={() => setStep(1)}>Go Back</button>
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
                            onClick={() => setStep(1)}
                        >
                            Make Another Booking
                        </button>
                    </div>
                )}

            </div>
        </main>
    )

}