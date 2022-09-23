import { TRANSLATION, LANG } from '../constants';

/**
 * Class representing Average sessions data
 *
 * @property {Array} sessions - The average sessions
 */
class AverageSessionsModel {
    /**
     * @constructor
     * @param {Array} data  - Data of average sessions
     */
    constructor(data) {
        this.sessions = data.sessions;
    }

    /**
     * Return days first letter from number of days in week
     * @param {number} day
     * @returns {string} Day's first letter
     */
    dayNumberToLetter(day) {
        return TRANSLATION.days[day][LANG];
    }

    /**
     * Get the formatted sessions
     * @return {Array} {day, dayLegend, sessionsLength}
     */
    get formattedSessions() {
        return this.sessions.map((session) => ({
            day: session.day,
            dayLegend: this.dayNumberToLetter(session.day),
            sessionLength: session.sessionLength
        }));
    }
}

export default AverageSessionsModel;
