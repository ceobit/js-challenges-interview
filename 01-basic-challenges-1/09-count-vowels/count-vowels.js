function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.split('').length; i++) {
       if (vowels.includes(str.toLowerCase().split('')[i])) {
           count = count + 1;
       }
    }
    return count;
}

module.exports = countVowels;
