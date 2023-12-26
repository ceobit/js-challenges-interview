function validateEmail(email) {
    const regex = /[\w]{1,}[@][a-z]{1,}[.][a-z]{2,}$/gm;
    return regex.test(email);
}

module.exports = validateEmail;
