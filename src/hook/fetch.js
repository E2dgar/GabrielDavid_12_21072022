import { useState, useEffect } from 'react';

/**
 * Custom hook to manage fetch with loading and error
 * @param {func} fetchFunction Function that passed the URL, make map operations and return a Class of data
 * @returns {Object}
 */
const useFetchByFn = (fetchFunction) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!fetchFunction) {
            return;
        }

        async function fetchData() {
            try {
                setData(await fetchFunction());
            } catch (err) {
                console.log('error', err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [fetchFunction]);

    return { data, isLoading, error };
};

export { useFetchByFn };
