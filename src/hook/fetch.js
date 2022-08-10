import { useState, useEffect } from 'react';

/* Responsabilité : cycle de vie, et mettre dans le state */

/**
 *
 * @param {func} fetchFunction Function that passed the URL, make map operations and return a Class of data
 * @returns Class Model
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
                setError(true);
            }
        }

        fetchData();
    }, [fetchFunction]);

    return { data, isLoading, error };
};

/*const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) {
            return;
        }

        async function fetchData() {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();

                setData(data);
            } catch (err) {
                console.log('error', err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, isLoading, error };
};*/

export { useFetchByFn };
