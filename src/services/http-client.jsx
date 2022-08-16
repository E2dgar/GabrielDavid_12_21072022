/**
 * GET
 * @param {string} url
 * @param {string} type
 * @returns {object}
 */
const get = async (url, type = 'application/json') => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: type,
            'Content-Type': type
        }
    });
    return response.json();
};

export { get };
