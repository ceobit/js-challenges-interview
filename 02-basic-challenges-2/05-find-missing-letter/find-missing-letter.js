function findMissingLetter(arr) {
    let first = arr[0].charCodeAt(0);
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i].charCodeAt(0)
        if (current - first > 1) {
            return String.fromCharCode((first + 1));
        }
        first = current
    }
}

module.exports = findMissingLetter;
