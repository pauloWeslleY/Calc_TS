export default class Operation {
    constructor(opts, operation = []) {
        this.operation = operation;
        this.onCalculate = opts.onCalculate;
    }
    add(value) {
        if (this.operation.length === 3) {
            this.calculate();
        }
        this.operation.push(value);
        console.log(this.operation);
        return this.length;
    }
    getResult() {
        let result = "0";
        try {
            result = (eval(this.operation.join(""))).toString();
        }
        catch (e) {
            result = "ERROR";
        }
        return result;
    }
    calculate() {
        let results = this.getResult();
        if (results.length > 12) {
            results = results.substr(0, 12);
        }
        this.operation = [results];
        this.onCalculate(results);
    }
    get length() {
        return this.operation.length;
    }
}
//# sourceMappingURL=Operation.js.map