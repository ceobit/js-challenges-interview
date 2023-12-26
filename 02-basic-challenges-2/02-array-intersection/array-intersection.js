function arrayIntersection(arr1, arr2) {
    return arr1.map(el => {
        if (arr2.includes(el)) {
            return el;
        }
    }).filter(el => el)
}

module.exports = arrayIntersection;
