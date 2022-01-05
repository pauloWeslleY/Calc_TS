import DateHour from "./DateHour.js";
import Screen from './Screen.js';
export default class CalculatorController {
    constructor(screen = new Screen()) {
        this.screen = screen;
        new DateHour();
    }
}
//# sourceMappingURL=CalculatorController.js.map