/**
 * Return a string with first letter uppercase
 * @param {string} string
 * @returns {string}
 */
const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * Replace '.' by ',' in a string
 * @param {string} string
 * @returns {string}
 */
const dotToComma = (string) => {
    return string.replace('.', ',');
};

/**
 * Add extra zero for having 3 numbers after comma and apply dotToComma
 * @param {number} number
 * @returns {string}
 */
const addExtraZero = (number) => {
    const indexOfFloat = number.toString().indexOf('.');

    for (let i = 0; i < 4; i++) {
        if (!number.toString().charAt(indexOfFloat + i)) {
            number = number + '0';
        }
    }
    return dotToComma(number);
};

export { capitalize, addExtraZero };
