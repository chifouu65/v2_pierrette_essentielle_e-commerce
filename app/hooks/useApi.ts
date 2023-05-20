import axios from 'axios';
import React from 'react';

export const makeRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
    },
})

export default function useApi (url: string) {
    const [data, setData] = React.useState<any>(null);
    const [error, setError] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await makeRequest.get(url);
                setData(res.data.data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { data, error, loading };

}