export default class DateHour {
   constructor(
      private elementDate: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2)"),
      private elementHour: HTMLTimeElement | null = document.querySelector("#datetime time")
   ) {
      this.render();
      setInterval(() => this.render(), 1000);
   }

   render() {
      const dateCurrent = new Date();
      const day = dateCurrent.getDate();
      const month = dateCurrent.toLocaleDateString("pt-BR", {
         month: "long"
      });
      const year = dateCurrent.getFullYear();
      const hour = dateCurrent.getHours();
      const minute = dateCurrent.getMinutes().toString().padStart(2, '0');
      const twoPoint = dateCurrent.getSeconds() % 2 === 0 ? ":" : " ";
      this.date = `${day} ${month} ${year}`;
      this.hour = `${hour}${twoPoint}${minute}`;
   }

   set date(content: string) {
      if (this.elementDate) {
         this.elementDate.innerHTML = content;
      }
   }

   set hour(content: string) {
      if (this.elementHour) {
         this.elementHour.innerHTML = content;
      }
   }
}