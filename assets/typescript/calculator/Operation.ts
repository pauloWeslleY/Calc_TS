interface OperationOptions {
   onCalculate: any;
}

export default class Operation {
   private onCalculate: any;
   constructor(
      opts: OperationOptions,
      private operation: string[] = []
   ) {
      this.onCalculate = opts.onCalculate;
   }

   add(value: string): number {
      if (this.operation.length === 3) {
         this.calculate();
      }
      this.operation.push(value);
      console.log(this.operation);
      return this.length;
   }

   getResult(): string {
      let result: string = "0";
      try {
         result = (eval(this.operation.join(""))).toString();
      } catch (e) {
         result = "ERROR";
      }
      return result;
   }

   calculate(): void {
      let results = this.getResult();
      if (results.length > 12) {
         results = results.substr(0, 12);
      }
      this.operation = [results];
      this.onCalculate(results);
   }

   get length(): number {
      return this.operation.length;
   }
}