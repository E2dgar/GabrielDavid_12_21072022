import { useFetch } from '../hook/fetch';
import { API_PATH } from '../constants';

const GetUser = () => {
    return useFetch(API_PATH.USER);
};

const GetActivity = () => {
    return useFetch(API_PATH.ACTIVITY);
};

const GetAverageSessions = () => {
    return useFetch(API_PATH.AVERAGE_SESSIONS);
};

export { GetUser, GetActivity, GetAverageSessions };
