import DateHour from "./DateHour.js";
import Screen from './Screen.js';
export default class CalculatorController {
    constructor(screen = new Screen()) {
        this.screen = screen;
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
                        break;
                    default:
                        break;
                }
            });
        });
    }
    addNumber(numbers) {
        this.screen.content = numbers.toString();
    }
}
//# sourceMappingURL=CalculatorController.js.map