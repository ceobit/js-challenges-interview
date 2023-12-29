function sumOfEvenSquares(arr) {
    // sumOfEvenSquares([1, 2, 3, 4, 5]); // 20 (2^2 + 4^2)
    // sumOfEvenSquares([-1, 0, 1, 2, 3, 4]); // 20 (0^2 + 2^2 + 4^2)
    // sumOfEvenSquares([]); // 0

    const filterArr = arr.filter(el => el % 2 === 0);
    const squares = filterArr.map(el => el * el);
    return  squares.reduce((acc, cur) => acc + cur, 0)

}

module.exports = sumOfEvenSquares;
