class PerformanceModel {
    constructor(data) {
        this.kind = data.kind;
        this.data = data.data;
    }

    kindToString(index) {
        return this.kind[index];
    }

    get formattedPerf() {
        return this.data.map((elt) => ({
            value: elt.value,
            kind: this.kindToString(elt.kind)
        }));
    }
}

export default PerformanceModel;
