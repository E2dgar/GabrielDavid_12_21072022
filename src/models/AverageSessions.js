class AverageSessionsModel {
    constructor(data) {
        this.sessions = data.sessions;
    }

    dayNumberToLetter(day) {
        return 'L';
    }
    get formattedSessions() {
        return this.sessions.map((session) => ({
            day: session.day,
            dayLetter: this.dayNumberToLetter(session.day),
            sessionLength: session.sessionLength
        }));
    }
}

export default AverageSessionsModel;
