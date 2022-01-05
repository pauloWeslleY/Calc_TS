import DateHour from "./DateHour.js";
import Screen from './Screen.js'

export default class CalculatorController {
   constructor(private screen = new Screen()) {
      new DateHour();
      this.eventButtons();
   }

   eventButtons(): void {
      document.querySelectorAll("#teclado button").forEach(element => {
         element.addEventListener("click", (event: Event) => {
            const target = event.target as HTMLButtonElement;
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

   addNumber(numbers:  number): void {
      this.screen.content = numbers.toString();
   }
}