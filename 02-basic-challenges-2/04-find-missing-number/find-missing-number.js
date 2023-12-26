function findMissingNumber(arr) {
    const benchmarkSum = (arr.length + 1) * (arr.length + 2) / 2;
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return benchmarkSum - sum;
}

module.exports = findMissingNumber;
