function isPalindrome(str) {
    if (str === '') {
        return false
    }

    return str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('') === str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

module.exports = isPalindrome;
