import circleLongitude from './index';

test('should return the longitude of a circle', () => {
    expect(circleLongitude(2)).toBeCloseTo(12.566, 2);
    expect(circleLongitude(0)).toBeCloseTo(0, 2);
    expect(circleLongitude(5)).toBeCloseTo(31.415, 2);
});

