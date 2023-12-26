function areAllCharactersUnique(str) {
    if (str.length <= 1) {
        return true
    }
    const strSet = new Set(str.split(''));

    return str.length === strSet.size;
}

module.exports = areAllCharactersUnique;
