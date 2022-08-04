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

                setData(
                    data.filter(
                        (user) =>
                            user.id ||
                            user.userId ===
                                parseInt(
                                    window.location.pathname.split('/').pop()
                                )
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
