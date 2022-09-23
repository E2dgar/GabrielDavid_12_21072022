import { TRANSLATION, LANG } from '../constants';

/**
 * Class representing Performance data
 *
 * @property {Number} kind - Index of kind
 * @property {Array} data - Value for a kind and kind index
 */
class PerformanceModel {
    /**
     * @constructor
     * @param {Array} data  - Data of performance
     */
    constructor(data) {
        this.kind = data.kind;
        this.data = data.data;
    }

    /**
     * Return kind string from kind index
     * @param {Number} index
     * @returns {string} Kind
     */
    kindIDToString(index) {
        return this.kind[index];
    }

    /**
     * Return translation of kind
     * @param {string} string
     * @returns {string} Translation
     */
    translate(string) {
        return TRANSLATION[string][LANG];
    }

    /**
     * Get the formatted performance
     * @return {Array}
     */
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
