function titleCase(str) {
    const arr = str.split(' ');
    return arr.map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
}

module.exports = titleCase;
