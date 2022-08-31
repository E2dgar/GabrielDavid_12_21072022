import { TRANSLATION, LANG } from '../constants';

class IndicatorsModel {
    constructor(data) {
        this.calorie = data.keyData.calorieCount;
        this.protein = data.keyData.proteinCount;
        this.glucid = data.keyData.carbohydrateCount;
        this.lipid = data.keyData.lipidCount;
    }

    formatLabel(label) {
        return TRANSLATION.keyData[`${label}`][LANG];
    }
    get formattedIndicators() {
        return [
            {
                label: 'calories',
                count: this.calorie / 100 + 'kCal',
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
