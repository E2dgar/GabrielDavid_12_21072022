import { TRANSLATION, LANG } from '../constants';

class AverageSessionsModel {
    constructor(data) {
        this.sessions = data.sessions;
    }

    dayNumberToLetter(day) {
        return TRANSLATION.days[day][LANG];
    }

    get formattedSessions() {
        return this.sessions.map((session) => ({
            day: session.day,
            dayLegend: this.dayNumberToLetter(session.day),
            sessionLength: session.sessionLength
        }));
    }
}

export default AverageSessionsModel;
