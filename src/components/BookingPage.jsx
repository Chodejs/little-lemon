import { useState } from "react";
import styles from './BookingPage.module.css';
import BookingForm from "./BookingForm";

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
        <>
            <BookingForm />
        </>
    )

}