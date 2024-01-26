const { calculateMean } = require('./app'); // Adjust the path as needed

describe('calculateMean', () => {
    test('calculates the mean of an array of numbers', () => {
        expect(calculateMean([1, 2, 3, 4])).toBe(2.5);
        expect(calculateMean([1, 1, 1, 1])).toBe(1);
        expect(calculateMean([-1, 0, 1, 2])).toBe(0.5);
    });

    test('calculates the mean of an array with one number', () => {
        expect(calculateMean([5])).toBe(5);
    });

    test('calculates the mean of an empty array to be NaN', () => {
        expect(calculateMean([])).toBeNaN();
    });
});
