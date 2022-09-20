class ScoreModel {
    constructor(data) {
        this.score = data.score ?? data.todayScore;
    }

    get formattedScore() {
        return [{ score: this.score * 360 }];
    }

    get labelScore() {
        return this.score * 100;
    }
}

export default ScoreModel;
