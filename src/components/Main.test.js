import { initializeTimes, updateTimes } from './Main';

// Test 1: Checking our initial state function
test('initializeTimes returns the correct expected array of times', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
});

// Test 2: Checking our reducer function
test('updateTimes returns the identical state provided to it', () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: 'UPDATE_TIMES', payload: '2026-02-16' };
    const result = updateTimes(initialState, action);
    
    expect(result).toEqual(initialState);
});