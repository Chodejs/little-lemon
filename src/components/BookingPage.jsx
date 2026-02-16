import { useState } from "react";
import styles from './BookingPage.module.css';
import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch }) {

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
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    )

}