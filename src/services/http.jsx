import {
    DATA_MOCKED,
    API_PATHS,
    API_PATH_BASE,
    API_PATH_MOCKED
} from '../constants';
import { get } from './http-client';
import UserModel from '../models/User';
import ActivityModel from '../models/Activity';
import AverageSessionsModel from '../models/AverageSessions';
import PerformanceModel from '../models/Performance';
import IndicatorsModel from '../models/Indicators';
import ScoreModel from '../models/Score';

const paths = DATA_MOCKED
    ? {
          USER: API_PATH_MOCKED.USER,
          ACTIVITY: API_PATH_MOCKED.ACTIVITY,
          AVERAGE_SESSIONS: API_PATH_MOCKED.AVERAGE_SESSIONS,
          PERFORMANCE: API_PATH_MOCKED.PERFORMANCE
      }
    : {
          USER: API_PATH_BASE + GetuserId() + API_PATHS.USER,
          ACTIVITY: API_PATH_BASE + GetuserId() + API_PATHS.ACTIVITY,
          AVERAGE_SESSIONS:
              API_PATH_BASE + GetuserId() + API_PATHS.AVERAGE_SESSIONS,
          PERFORMANCE: API_PATH_BASE + GetuserId() + API_PATHS.PERFORMANCE
      };

const getData = (data) => {
    if (DATA_MOCKED) {
        return data?.find((user) => user.id ?? user.userId === GetuserId());
    }
    return data.data;
};

/**
 * Get the ID in URL
 * @returns
 */
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
    const data = await get(paths.USER);
    /*const user = data?.find((user) => user.id === GetuserId());*/
    console.log('back', data);
    return new UserModel(getData(data));
};

/**
 * GET Activity from a user by user ID
 * @returns {object} Activity Model
 */
const GetActivity = async () => {
    const data = await get(paths.ACTIVITY);
    /* const activityByUserId = data?.find((user) => user.userId === GetuserId());
    console.log('activyty user', activityByUserId);*/
    return new ActivityModel(getData(data));
};

/**
 * GET Average Sessions from a user by user ID and return Average Sessions Model
 * @returns {object} Average Sessions Model
 */
const GetAverageSessions = async () => {
    const data = await get(paths.AVERAGE_SESSIONS);
    /*const averageSessionsByUserId = data?.find(
        (user) => user.userId === GetuserId()
    );*/
    return new AverageSessionsModel(getData(data));
};

/**
 * GET Performance from a user by user ID
 * @returns {object} Performance Model
 */
const GetPerformance = async () => {
    const data = await get(paths.PERFORMANCE);
    /*const performanceByUserId = data?.find(
        (user) => user.userId === GetuserId()
    );*/
    return new PerformanceModel(getData(data));
};

/**
 * GET Indicators from a user by user ID
 * @returns {object} Indicators Model
 */
const GetIndicators = async () => {
    const data = await get(paths.USER);
    /*const indicatorsByUserId = data?.find((user) => user.id === GetuserId());*/
    return new IndicatorsModel(getData(data));
};

/**
 * GET score from a user by user ID
 * @returns {object} Score Model
 */
const GetScore = async () => {
    const data = await get(paths.USER);
    /*const scoreByUserId = data?.find((user) => user.id === GetuserId());*/
    return new ScoreModel(getData(data));
};

export {
    GetUser,
    GetActivity,
    GetAverageSessions,
    GetPerformance,
    GetIndicators,
    GetScore
};
