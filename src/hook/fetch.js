import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) {
            return;
        }

        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();

                /*Get label of userId */
                const getIdLabel = data[0].id ? 'id' : 'userId';

                setData(
                    data.filter(
                        (user) =>
                            user[getIdLabel] ===
                            parseInt(window.location.pathname.split('/').pop())
                    )[0]
                );
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
};

export { useFetch };
