class AverageSessionsModel {
    constructor(data) {
        this.sessions = data.sessions;
    }

    formattedDate(date) {
        return new Date(date).getDate();
    }

    get formattedSessions() {
        return this.sessions.map((session) => ({
            day: this.formattedDate(session.day),
            kilogram: session.kilogram,
            calories: session.calories
        }));
    }
}

export default AverageSessionsModel;
