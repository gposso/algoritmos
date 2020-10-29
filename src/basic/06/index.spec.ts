import isFirstNumberMultipleOfSecondNumber from './index';

test('should return true if first number is multiple of second number ', () => {
    expect(isFirstNumberMultipleOfSecondNumber(42, 7)).toBeTruthy();
    expect(isFirstNumberMultipleOfSecondNumber(0, 20)).toBeTruthy();
});

test('should return false if first number is not multiple of second number ', () => {
    expect(isFirstNumberMultipleOfSecondNumber(6, 10)).toBeFalsy();
    expect(isFirstNumberMultipleOfSecondNumber(500, 11)).toBeFalsy();
});

