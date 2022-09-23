/**
 * Class representing Activity data
 *
 * @property {Array} sessions - The activity sessions
 */
class ActivityModel {
    /**
     * @constructor
     * @param {Array} data  - Data of sessions
     */
    constructor(data) {
        this.sessions = data.sessions;
    }

    /**
     * Convert a string to a date
     * @param {string} date
     * @returns {date} new Date
     */
    formattedDate(date) {
        return new Date(date).getDate();
    }

    /**
     * Get the formatted sessions
     * @return {Array} {day, kilogram, calories}
     */
    get formattedSessions() {
        return this.sessions.map((session) => ({
            day: this.formattedDate(session.day),
            kilogram: session.kilogram,
            calories: session.calories
        }));
    }
}

export default ActivityModel;
