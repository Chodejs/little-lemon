import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

describe('BookingForm Initial Render', () => {
    test('Renders the BookingForm heading', () => {
        const mockAvailableTimes = ["17:00", "18:00"];
        const mockDispatch = jest.fn();

        render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
        
        const headingElement = screen.getByText("Reserve a Table");
        expect(headingElement).toBeInTheDocument();
    });
});

describe('HTML5 Validation Attributes', () => {
    test('Date input has the required attribute', () => {
        render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);
        
        // Find the input by its label text
        const dateInput = screen.getByLabelText(/Choose date/i);
        
        // Assert the HTML5 required attribute is present
        expect(dateInput).toHaveAttribute('required');
    });

    test('Guests input has min, max, and required attributes', () => {
        render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);
        
        const guestsInput = screen.getByLabelText(/Number of Guests/i);
        
        // Assert all our specific HTML5 numerical constraints
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('required');
    });
});

describe('JavaScript State Validation', () => {
    test('Next button is DISABLED when the form state is invalid/empty', () => {
        render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);
        
        // Grab the button. We gave it an aria-label earlier, which makes it dead easy to find
        const nextButton = screen.getByRole('button', { name: /Proceed to the next step/i });
        
        // The form starts empty, so our JS validation should keep this disabled
        expect(nextButton).toBeDisabled();
    });

    test('Next button is ENABLED when all fields are populated correctly', () => {
        const mockAvailableTimes = ["17:00", "18:00"];
        render(<BookingForm availableTimes={mockAvailableTimes} dispatch={jest.fn()} />);
        
        
        // 1. Fill the date
        fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2026-03-14' } });
        
        // 2. Select a time
        fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '17:00' } });
        
        // 3. Set the guests
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '4' } });
        
        // 4. Set the occasion
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Anniversary' } });

        // Now check the button again...
        const nextButton = screen.getByRole('button', { name: /Proceed to the next step/i });
        
        // It should be completely unlocked and ready to click
        expect(nextButton).not.toBeDisabled();
    });
});