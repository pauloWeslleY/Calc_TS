import DateHour from "./DateHour.js";
import Operation from "./Operation.js";
import Screen from './Screen.js';

export default class CalculatorController {
   constructor(
      private screen = new Screen(),
      private operation = new Operation({
         onCalculate: (result: string) => this.screen.content = result
      })
   ) {
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
                  this.addOperator(<string>target.dataset.valor);
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

   calc(): void {
      this.operation.calculate();
   }

   addOperation(value: string): void {
      this.operation.add(value);
      console.log(this.operation.length);
   }

   addNumber(numbers: number): void {
      if (isNaN(Number(this.operation.lastPosition))) {
         this.addOperation(numbers.toString());
      } else {
         numbers = Number(this.operation.lastPosition.toString() + numbers.toString());
         this.operation.lastPosition = numbers.toString();
      }
      this.screen.content = numbers.toString();
   }

   addOperator(operator: string): void {
      if (isNaN(Number(this.operation.lastPosition))) {
         this.operation.lastPosition = operator;
      } else {
         if (this.operation.length === 0) {
            this.addOperation("0");
         }
         this.addOperation(operator);
      }
   }
}