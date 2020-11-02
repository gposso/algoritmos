import isPalindromic from './index';

test('should return true if the number is palindromic', () => {
    expect(isPalindromic(1111)).toBeTruthy();
    expect(isPalindromic(1221)).toBeTruthy();
    expect(isPalindromic(292)).toBeTruthy();
});

test('should return false if the number is not palindromic', () => {
    expect(isPalindromic(1112)).toBeFalsy();
    expect(isPalindromic(123)).toBeFalsy();
    expect(isPalindromic(234)).toBeFalsy();
});

test('should return thrown  an error if number is not between 0 and 9999', () => {
    expect(() => {
        isPalindromic(10000);
    }).toThrowError(new Error('The number must be between 0 and 9999'));
});
