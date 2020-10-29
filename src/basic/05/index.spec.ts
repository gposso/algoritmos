import typeOfNumber from './index';

test('should return the type number', () => {
    expect(typeOfNumber(1)).toBe('POSITIVE');
    expect(typeOfNumber(-1)).toBe('NEGATIVE');
    expect(typeOfNumber(0)).toBe('NEUTRAL');
});

