import orderThreeNumbers from './index';

test('should return array of three order numbers', () => {
    expect(orderThreeNumbers(1, 2, 3)).toEqual(expect.arrayContaining([3, 2, 1]));
    expect(orderThreeNumbers(-40, 2, 0)).toEqual(expect.arrayContaining([2, 0, -40]));
});
