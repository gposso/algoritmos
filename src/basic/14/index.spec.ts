import getQualification from './index';

test('should return INSUFFICIENT if the score is less equal to 2', () => {
    expect(getQualification(0)).toBe('INSUFFICIENT');
    expect(getQualification(1)).toBe('INSUFFICIENT');
    expect(getQualification(2)).toBe('INSUFFICIENT');
});

test('should return ENOUGH if the score is less equal to 4', () => {
    expect(getQualification(3)).toBe('ENOUGH');
    expect(getQualification(4)).toBe('ENOUGH');
});

test('should return GOOD if the score is less equal to 6', () => {
    expect(getQualification(5)).toBe('GOOD');
    expect(getQualification(6)).toBe('GOOD');
});

test('should return OUTSTANDING if the score is less equal to 8', () => {
    expect(getQualification(7)).toBe('OUTSTANDING');
    expect(getQualification(8)).toBe('OUTSTANDING');
});

test('should return EXCELLENT if the score is less equal to 10', () => {
    expect(getQualification(9)).toBe('EXCELLENT');
    expect(getQualification(10)).toBe('EXCELLENT');
});

test('should return thrown an error if score is not between 0 and 10', () => {
    expect(() => {
        getQualification(11);
    }).toThrowError(new Error('The score must be between 0 and 10'));
});
