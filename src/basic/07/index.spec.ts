import biggerNumber from './index';

test('should return the bigger number', () => {
    expect(biggerNumber(1, 2)).toBe(2);
    expect(biggerNumber(-40, 2)).toBe(2);
    expect(biggerNumber(8, 8)).toBe(8);
});

