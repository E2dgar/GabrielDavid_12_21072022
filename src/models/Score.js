/**
 * Class representing the user score
 *
 * @property {Number} score - Score
 */

class ScoreModel {
    /**
     * @constructor
     * @param {number} score  - Score
     */
    constructor(data) {
        this.score = data.score ?? data.todayScore;
    }

    /**
     * Get the formatted score for chart. Angle for radial chart
     * @return {array}
     */
    get formattedScore() {
        return [{ score: this.score * 360 }];
    }

    /**
     * Get the formatted score for label
     * @return {number}
     */
    get labelScore() {
        return this.score * 100;
    }
}

export default ScoreModel;
