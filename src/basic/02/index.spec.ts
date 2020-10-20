import circleArea from './index';

test('should return the area of a circle', () => {
    expect(circleArea(2)).toBeCloseTo(12.57, 2);
    expect(circleArea(0)).toBeCloseTo(0, 2);
});

