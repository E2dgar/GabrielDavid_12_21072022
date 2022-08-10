import { API_PATH } from '../constants';
import { get } from './http-client';
import UserModel from '../models/User';
import ActivityModel from '../models/Activity';
import AverageSessionsModel from '../models/AverageSessions';

export default function GetuserId() {
    const idInUrl = window.location.pathname.split('/').pop();
    return parseInt(idInUrl);
}

/** Responsability : appel + mapping */

/**
 * GET a user informations by user ID and return User Model
 * @returns {object} User Model
 */
const GetUser = async () => {
    const data = await get(API_PATH.USER);
    const user = data?.find((user) => user.id === GetuserId());
    return new UserModel(user);
};

/**
 * GET Activity from a user by user ID
 * @returns {object} Activity Model
 */
const GetActivity = async () => {
    const data = await get(API_PATH.ACTIVITY);
    const activityByUserId = data?.find((user) => user.userId === GetuserId());
    console.log('activyty user', activityByUserId);
    return new ActivityModel(activityByUserId);
};

/**
 * GET Average Sessions from a user by user ID and return Average Sessions Model
 * @returns {object} Average Sessions Model
 */
const GetAverageSessions = async () => {
    const data = await get(API_PATH.AVERAGE_SESSIONS);
    const averageSessionsByUserId = data?.find(
        (user) => user.userId === GetuserId()
    );
    return new AverageSessionsModel(averageSessionsByUserId);
};

export { GetUser, GetActivity, GetAverageSessions };
