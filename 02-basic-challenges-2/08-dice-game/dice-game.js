const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function diceGameSimulation(num) {
    // dice1: The value of the first dice (a random number between 1 and 6).
    // dice2: The value of the second dice (a random number between 1 and 6).
    // sum: The sum of the two dice values
    // result: The result of the roll, which can be "win", "lose", or "roll again".

    const arr = []
    for (let i = 0; i < num; i++) {
        const dice1 = random(1,6);
        const dice2 = random(1,6);
        const sum = dice1 + dice2;
        let result = 'roll again';
        if (sum === 7 || sum === 11) {
            result = 'win'
        }
        if (sum === 2 || sum === 3 || sum === 12) {
            result = 'lose'
        }
        arr.push({dice1, dice2, sum, result})
    }
    return arr;
}

module.exports = diceGameSimulation;
