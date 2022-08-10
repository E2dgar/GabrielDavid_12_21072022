import { useFetch } from '../hook/fetch';
import { API_PATH } from '../constants';
import UserModel from '../models/User';
import { useEffect } from 'react';
import { useState } from 'react';

const GetUser = async () => {
    let { data, isLoading, error } = useFetch(API_PATH.USER);
    const [user, setUSer] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const filteredData = data.filter((user) => user.id === 18)[0];
                setUSer(new UserModel(filteredData));
            } catch (err) {
                console.log('http error', err);
            }
        }

        fetchData();
        console.log('http loading', isLoading);
        console.log('error', error);
        console.log('http user', user);
    }, [data]);

    return { user, isLoading, error };
};

const GetActivity = () => {
    return useFetch(API_PATH.ACTIVITY);
};

const GetAverageSessions = () => {
    return useFetch(API_PATH.AVERAGE_SESSIONS);
};

export { GetUser, GetActivity, GetAverageSessions };
