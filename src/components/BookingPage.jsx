import { useState } from "react";
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

    const mainStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        minHeight: '70vh',
        backgroundColor: '#EDEFEE', 
        padding: '20px'
    };

    const containerStyles = {
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '30px',
        width: '100%',
        maxWidth: '400px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    };

    const headingStyles = {
        color: '#495E57', 
        textAlign: 'center',
        margin: '0 0 20px 0',
        fontSize: '28px'
    };

    const formStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px' 
    };

    const labelStyles = {
        display: 'flex',
        flexDirection: 'column',
        fontWeight: 'bold',
        color: '#333333',
        gap: '8px'
    };

    const inputStyles = {
        padding: '12px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        fontSize: '16px',
        fontFamily: 'inherit'
    };

    const textareaStyles = {
        ...inputStyles,
        resize: 'vertical',
        minHeight: '80px'
    };

    const buttonStyles = {
        backgroundColor: '#F4CE14', 
        color: '#333333',
        border: 'none',
        borderRadius: '8px',
        padding: '16px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.15)'
    };

    const backButtonStyles = {
        ...buttonStyles,
        backgroundColor: 'transparent',
        border: '2px solid #495E57',
        color: '#495E57',
        boxShadow: 'none',
        marginTop: '0px'
    };

    return (
        <main style={mainStyles}>
            <div style={containerStyles}>
                
                {/* STEP 1: BOOKING DETAILS */}
                {step === 1 && (
                    <>
                        <h1 style={headingStyles}>Reserve a Table</h1>
                        <form style={formStyles} onSubmit={handleNext}>
                            <label style={labelStyles}>Date
                                <input type="date" required style={inputStyles} />
                            </label>

                            <label style={labelStyles}>Time
                                <select required style={inputStyles}>
                                    <option value="">Select a time</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                </select>
                            </label>

                            <label style={labelStyles}>Number of Guests
                                <input type="number" min="1" max="10" required style={inputStyles} placeholder="1" />
                            </label>

                            <label style={labelStyles}>Occasion
                                <select required style={inputStyles}>
                                    <option value="">Select an occasion</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Other">Just a standard nosh</option>
                                </select>
                            </label>

                            <button type="submit" style={buttonStyles}>Next: Your Details</button>
                        </form>
                    </>
                )}

                {/* STEP 2: CONTACT DETAILS */}
                {step === 2 && (
                    <>
                        <h1 style={headingStyles}>Almost There!</h1>
                        <form style={formStyles} onSubmit={handleSubmit}>
                            <label style={labelStyles}>First Name
                                <input type="text" required style={inputStyles} placeholder="e.g. John" />
                            </label>

                            <label style={labelStyles}>Last Name
                                <input type="text" required style={inputStyles} placeholder="e.g. Doe" />
                            </label>

                            <label style={labelStyles}>Email Address
                                <input type="email" required style={inputStyles} placeholder="john@example.com" />
                            </label>

                            <label style={labelStyles}>Phone Number
                                <input type="tel" required style={inputStyles} placeholder="(555) 123-4567" />
                            </label>

                            <label style={labelStyles}>Special Requests
                                <textarea style={textareaStyles} placeholder="Allergies, seating preferences, etc."></textarea>
                            </label>

                            <button type="submit" style={buttonStyles}>Complete Reservation</button>
                            <button type="button" style={backButtonStyles} onClick={() => setStep(1)}>Go Back</button>
                        </form>
                    </>
                )}

                {/* STEP 3: SUCCESS TOAST */}
                {step === 3 && (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <div style={{ fontSize: '50px', marginBottom: '10px' }}>✅</div>
                        <h1 style={headingStyles}>Booking Confirmed!</h1>
                        <p style={{ fontSize: '18px', color: '#495E57', lineHeight: '1.5' }}>
                            Brilliant! Your details have been received and your table is secured. We look forward to seeing you.
                        </p>
                        <button 
                            style={{...buttonStyles, backgroundColor: '#495E57', color: '#FFF'}} 
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