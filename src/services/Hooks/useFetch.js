import { useEffect, useState } from 'react';

const useFetch = ({ url }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
