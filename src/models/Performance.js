import { TRANSLATION, LANG } from '../constants';

class PerformanceModel {
    constructor(data) {
        this.kind = data.kind;
        this.data = data.data;
    }

    kindIDToString(index) {
        return this.kind[index];
    }

    translate(string) {
        return TRANSLATION[string][LANG];
    }

    get formattedPerf() {
        return this.data
            .map((elt) => ({
                value: elt.value,
                kind: this.translate(this.kindIDToString(elt.kind))
            }))
            .reverse();
    }
}

export default PerformanceModel;
