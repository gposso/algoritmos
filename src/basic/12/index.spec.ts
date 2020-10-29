import reverseNumber from './index';

test('should return reverse of number between 0 and 9999', () => {
    expect(reverseNumber(1111)).toBe(1111);
    expect(reverseNumber(1234)).toBe(4321);
    expect(reverseNumber(12)).toBe(21);
});

test('should return thrown  an error if number is not between 0 and 9999', () => {
    expect(() => {
        reverseNumber(10000);
    }).toThrowError(new Error('The number must be between 0 and 9999'));
});
