import reverseNumber from '../12/index';

function isPalindromic(num: number): boolean {
    if (num > 9999 || num < 0) {
        throw new Error('The number must be between 0 and 9999');
    }

    return num === reverseNumber(num);
}

export = isPalindromic;
