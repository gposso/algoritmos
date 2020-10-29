import biggerNumberOrEqual from './index';

test('should return the bigger number', () => {
    expect(biggerNumberOrEqual(1, 2)).toBe(2);
    expect(biggerNumberOrEqual(-40, 2)).toBe(2);
    expect(biggerNumberOrEqual(8, 9)).toBe(9);
});

test('should return equal', () => {
    expect(biggerNumberOrEqual(1, 1)).toBe('equal');
    expect(biggerNumberOrEqual(-40, -40)).toBe('equal');
    expect(biggerNumberOrEqual(8.8, 8.8)).toBe('equal');
});
