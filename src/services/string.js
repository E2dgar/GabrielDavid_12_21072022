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

export { capitalize, numberToFirstLetter };
