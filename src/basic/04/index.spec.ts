import areEqual from './index';

test('should return if the numbers are equals', () => {
    expect(areEqual(2, 3)).toBeFalsy();
    expect(areEqual(10, 10)).toBeTruthy();
    expect(areEqual(100.01, 100.01)).toBeTruthy();
});

