const { calculateMedian } = require('./app'); // Adjust the path as needed

describe('calculateMedian', () => {
    test('calculates the median of an array of numbers', () => {
        expect(calculateMedian([1, 2, 3, 4, 5])).toBe(3);
        expect(calculateMedian([5, 4, 3, 2, 1])).toBe(3);
        expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
    });

    test('calculates the median of an array with one number', () => {
        expect(calculateMedian([5])).toBe(5);
    });

    test('calculates the median of an empty array to be NaN', () => {
        expect(calculateMedian([])).toBeNaN();
    });

    test('calculates the median of an array with even number of elements', () => {
        expect(calculateMedian([1, 3, 2, 4])).toBe(2.5);
        expect(calculateMedian([10, 2, 8, 4])).toBe(6);
    });

    test('calculates the median of an array with odd number of elements', () => {
        expect(calculateMedian([1, 3, 2])).toBe(2);
        expect(calculateMedian([10, 2, 8, 4, 6])).toBe(6);
    });
});
