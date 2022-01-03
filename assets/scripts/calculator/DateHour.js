export default class DateHour {
    constructor(elementDate = document.querySelector("#datetime > div:nth-child(2)"), elementHour = document.querySelector("#datetime time")) {
        this.elementDate = elementDate;
        this.elementHour = elementHour;
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
    set date(content) {
        if (this.elementDate) {
            this.elementDate.innerHTML = content;
        }
    }
    set hour(content) {
        if (this.elementHour) {
            this.elementHour.innerHTML = content;
        }
    }
}
//# sourceMappingURL=DateHour.js.map