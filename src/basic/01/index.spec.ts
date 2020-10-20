import quadraticEquation from './index';


test('should return false if it is not a quadratic equation', () => {
    expect(quadraticEquation(0, 5, 4)).toBe(false);
})

test('should return false if there is not real solution', () => {
    expect(quadraticEquation(2, 2, 2)).toBe(false);
});

test('should return two real solutions', () => {
    expect(quadraticEquation(-1, 7, -10)).toStrictEqual([2,5]);
});

test('should return one real solution', () => {
    expect(quadraticEquation(1, -2, 1)).toStrictEqual([1]);
});
