function findFirstNonRepeatingCharacter(str) {
    const arr = str.split('');
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
    }

    for (let el in obj) {
        if (obj[el] === 1) {
            return el;
        }
    }

    return null;
}

module.exports = findFirstNonRepeatingCharacter;
