function countOccurrences(str, chr) {
    return str.split(chr).length-1;
}

module.exports = countOccurrences;
