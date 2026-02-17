import { initializeTimes, updateTimes } from './Main';

// verify that fetchAPI successfully returns a non-empty array for today's date
test('initializeTimes returns a non-empty array of available booking times', () => {
    const result = initializeTimes();
    
    // We expect the result to actually be an array
    expect(Array.isArray(result)).toBe(true);
    // And we expect it to have at least one time slot inside it
    expect(result.length).toBeGreaterThan(0);
});

// verify that the reducer successfully fetches a new, non-empty array from the API.
test('updateTimes returns a non-empty array of times when a date is dispatched', () => {
    // This is the state before the user changes the date
    const initialState = ["17:00", "18:00", "19:00"]; 
    
    // The user selects a new date from the form
    const action = { type: 'UPDATE_TIMES', payload: '2026-02-16' }; 
    
    // run the reducer
    const result = updateTimes(initialState, action);
    
    // Check that the API handed back a proper array of new times
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
});