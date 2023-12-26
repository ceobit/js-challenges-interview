function removeDuplicates(arr) {
    // return [... new Set(arr)];
    const uniqArr = [];

    arr.forEach(el => {
        if (!uniqArr.includes(el)) {
            uniqArr.push(el);
        }
    })

    return uniqArr;
}

module.exports = removeDuplicates;
