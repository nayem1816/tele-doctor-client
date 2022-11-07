import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = ({ url }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                setLoading(false);
                setError(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
