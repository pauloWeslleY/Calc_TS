import DateHour from "./DateHour.js";
import Operation from "./Operation.js";
import Screen from './Screen.js';
export default class CalculatorController {
    constructor(screen = new Screen(), operation = new Operation({
        onCalculate: (result) => this.screen.content = result
    })) {
        this.screen = screen;
        this.operation = operation;
        new DateHour();
        this.eventButtons();
    }
    eventButtons() {
        document.querySelectorAll("#teclado button").forEach(element => {
            element.addEventListener("click", (event) => {
                const target = event.target;
                switch (target.id) {
                    case "zero":
                    case "um":
                    case "dois":
                    case "tres":
                    case "quatro":
                    case "cinco":
                    case "seis":
                    case "sete":
                    case "oito":
                    case "nove":
                        this.addNumber(Number(target.dataset.valor));
                        break;
                    case "adicao":
                    case "subtracao":
                    case "divisao":
                    case "multiplicacao":
                        this.addOperator(target.dataset.valor);
                        break;
                    case "ponto":
                        break;
                    case "limpar":
                        break;
                    case "desfazer":
                        break;
                    case "porcentagem":
                        break;
                    case "igual":
                        this.calc();
                        break;
                    default:
                        break;
                }
            });
        });
    }
    calc() {
        this.operation.calculate();
    }
    addOperation(value) {
        this.operation.add(value);
        console.log(this.operation.length);
    }
    addNumber(numbers) {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.addOperation(numbers.toString());
        }
        else {
            numbers = Number(this.operation.lastPosition.toString() + numbers.toString());
            this.operation.lastPosition = numbers.toString();
        }
        this.screen.content = numbers.toString();
    }
    addOperator(operator) {
        if (isNaN(Number(this.operation.lastPosition))) {
            this.operation.lastPosition = operator;
        }
        else {
            if (this.operation.length === 0) {
                this.addOperation("0");
            }
            this.addOperation(operator);
        }
    }
}
//# sourceMappingURL=CalculatorController.js.map