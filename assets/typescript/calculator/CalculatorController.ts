import DateHour from "./DateHour.js";
import Screen from './Screen.js'

export default class CalculatorController {
   constructor(private screen = new Screen()) {
      new DateHour();
   }
}