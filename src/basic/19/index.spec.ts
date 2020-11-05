import daysOfDifferenceBetweenTwoDates from './index';

test('should return number the days of difference between two dates', () => {
    expect(daysOfDifferenceBetweenTwoDates('2020-05-30', '2020-06-05')).toBe(5);
    expect(daysOfDifferenceBetweenTwoDates('2000-05-30', '1995-05-30')).toBe(1800);
    expect(daysOfDifferenceBetweenTwoDates('2000-06-29', '2000-05-28')).toBe(31);
});
