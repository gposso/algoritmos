import lengthNumber from './index';

test('should return length of number between 0 and 9999', () => {
    expect(lengthNumber(1111)).toBe(4);
    expect(lengthNumber(0)).toBe(1);
    expect(lengthNumber(11)).toBe(2);
    expect(lengthNumber(222)).toBe(3);
});

test('should return thrown  an error if number is not between 0 and 9999', () => {
    expect(() => {
        lengthNumber(10000);
    }).toThrowError(new Error('The number must be between 0 and 9999'));
});
