import addOneDayToDate from './index';

test('should return the date in format yyyy-mm-dd + 1 day', () => {
    expect(addOneDayToDate(30, 12, 2020)).toBe('2021-01-01');
    expect(addOneDayToDate(29, 2, 1991)).toBe('1991-02-30');
    expect(addOneDayToDate(30, 6, 1980)).toBe('1980-07-01');
});

test('should return thrown an error if date is not correct', () => {
    expect(() => {
        addOneDayToDate(35, 2, 1900);
    }).toThrowError(new Error('The date is not correct'));
    expect(() => {
        addOneDayToDate(20, 13, 1900);
    }).toThrowError(new Error('The date is not correct'));
    expect(() => {
        addOneDayToDate(20, 12, 10000);
    }).toThrowError(new Error('The date is not correct'));
});
