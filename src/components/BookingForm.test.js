import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    // dummy props so the component doesn't crash upon rendering
    const mockAvailableTimes = ["17:00", "18:00"];
    const mockDispatch = jest.fn();

    // Render the component with dummy props
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />);
    
    // Look for the exact text from your step 1 heading
    const headingElement = screen.getByText("Reserve a Table");
    
    // Assert that it actually exists on the screen
    expect(headingElement).toBeInTheDocument();
});