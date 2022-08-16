class ScoreModel {
    constructor(data) {
        this.score = data.score ?? data.todayScore;
    }

    get formattedScore() {
        return [{ score: this.score * 360 }];
    }
}

export default ScoreModel;
