const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const numberToFirstLetter = (day) => {
    const days = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D'
    };
    return days[day];
};

const dotToComma = (string) => {
    return string.replace('.', ',');
};

const addExtraZero = (number) => {
    const indexOfFloat = number.toString().indexOf('.');

    for (let i = 0; i < 4; i++) {
        if (!number.toString().charAt(indexOfFloat + i)) {
            number = number + '0';
        }
    }
    return dotToComma(number);
};

export { capitalize, numberToFirstLetter, addExtraZero };
