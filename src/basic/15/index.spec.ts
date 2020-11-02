import isDate from './index';

test('should return false if the date is not correct', () => {
    expect(isDate(0, 13, 2020)).toBeFalsy();
    expect(isDate(4, 2, 10000)).toBeFalsy();
    expect(isDate(31, 6, 1980)).toBeFalsy();
});

test('should return true if the date is correct', () => {
    expect(isDate(1, 9, 1900)).toBeTruthy();
    expect(isDate(1, 11, 2008)).toBeTruthy();
    expect(isDate(30, 1, 2021)).toBeTruthy();
});
