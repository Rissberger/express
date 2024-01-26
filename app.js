const express = require('express');
const app = express();
const port = 3000;

function calculateMean(nums) {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    return sum / nums.length;
}

function calculateMedian(nums) {
    nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

function calculateMode(nums) {
    const freqMap = {};
    let maxFreq = 0, mode = [];

    nums.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) + 1;
        if (freqMap[num] > maxFreq) {
            maxFreq = freqMap[num];
            mode = [num];
        } else if (freqMap[num] === maxFreq) {
            mode.push(num);
        }
    });

    return mode.length === nums.length ? "No mode" : mode;
}

function parseAndValidateNums(numsString) {
    if (!numsString) {
        return { error: "nums are required." };
    }

    const nums = numsString.split(',').map(n => {
        if (isNaN(parseFloat(n))) {
            throw new Error(`${n} is not a number.`);
        }
        return parseFloat(n);
    });

    return nums;
}

app.get('/mean', (req, res) => {
    try {
        const nums = parseAndValidateNums(req.query.nums);
        if (nums.error) {
            return res.status(400).json({ error: nums.error });
        }
        const mean = calculateMean(nums);
        res.json({ response: { operation: "mean", value: mean } });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

app.get('/median', (req, res) => {
    try {
        const nums = parseAndValidateNums(req.query.nums);
        if (nums.error) {
            return res.status(400).json({ error: nums.error });
        }
        const median = calculateMedian(nums);
        res.json({ response: { operation: "median", value: median } });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

app.get('/mode', (req, res) => {
    try {
        const nums = parseAndValidateNums(req.query.nums);
        if (nums.error) {
            return res.status(400).json({ error: nums.error });
        }
        const mode = calculateMode(nums);
        res.json({ response: { operation: "mode", value: mode } });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = { calculateMean, calculateMedian, calculateMode }; // For testing purposes
