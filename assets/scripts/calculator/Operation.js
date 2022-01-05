export default class Operation {
    constructor(operation = []) {
        this.operation = operation;
    }
    add(value) {
        this.operation.push(value);
        console.log(this.operation);
        return this.length;
    }
    get length() {
        return this.operation.length;
    }
}
//# sourceMappingURL=Operation.js.map