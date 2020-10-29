import orderTwoNumbers from './index';

test('should return array of two order numbers', () => {
    expect(orderTwoNumbers(1, 2)).toEqual(expect.arrayContaining([2,1]));
    expect(orderTwoNumbers(-40, 2)).toEqual(expect.arrayContaining([2,-40]));
});
