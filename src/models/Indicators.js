import { TRANSLATION, LANG } from '../constants';
import { addExtraZero } from '../services/string';

/**
 * Class representing Indicators (keyData)
 *
 * @property {number} calorie - Calorie count
 * @property {number} protein - Protein count
 * @property {number} glucid - Glucid count
 * @property {number} lipid - Lipid count
 */
class IndicatorsModel {
    /**
     * @constructor
     * @param {Array} data  - Data of average sessions
     */
    constructor(data) {
        this.calorie = data.keyData.calorieCount;
        this.protein = data.keyData.proteinCount;
        this.glucid = data.keyData.carbohydrateCount;
        this.lipid = data.keyData.lipidCount;
    }

    /**
     * Return formatted label
     * @param {string} label
     * @returns {string} Formatted label
     */
    formatLabel(label) {
        return TRANSLATION.keyData[`${label}`][LANG];
    }

    /**
     * Return a string of formatted calorie with comma and 3 number after comma (if needed )
     * @param {number} calorie
     * @returns {string} Formatted calorie
     */
    formatCalorie(calorie) {
        if ((calorie / 1000) % 1 === 0) {
            return calorie / 1000;
        }

        return addExtraZero(calorie / 1000);
    }

    /**
     * Get the formatted indicators
     * @return {Array}
     */
    get formattedIndicators() {
        return [
            {
                label: 'calories',
                count: this.formatCalorie(this.calorie) + 'kCal',
                picto: 'calories.png'
            },
            {
                label: 'protéines',
                count: this.protein + 'g',
                picto: 'proteines.png'
            },
            {
                label: 'glucides',
                count: this.glucid + 'g',
                picto: 'glucides.png'
            },
            {
                label: 'lipides',
                count: this.lipid + 'g',
                picto: 'lipides.png'
            }
        ];
    }
}

export default IndicatorsModel;
