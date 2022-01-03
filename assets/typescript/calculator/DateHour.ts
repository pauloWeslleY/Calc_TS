export default class DateHour {
   constructor(
      private elementDate = document.querySelector("#datetime > div:nth-child(2)"),
      private elementHour = document.querySelector("#datetime time")
   ) {

   }
}