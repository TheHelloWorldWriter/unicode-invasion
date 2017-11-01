const MAX_CODE_POINT = 0x10FFFF;

class App {
    
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    addNewChar() {
        let randomCodePoint = this.getRandomInt(0, MAX_CODE_POINT);

        let newCharElement = document.createElement("i");
        newCharElement.innerText = String.fromCodePoint(randomCodePoint);
        newCharElement.style.left = this.getRandomInt(0, window.innerWidth) + "px";
        newCharElement.style.top = this.getRandomInt(0, window.innerHeight) + "px";
        // console.log(newCharElement.style.left);
        document.body.appendChild(newCharElement);
    }


    init() {
        setInterval(() => { this.addNewChar(); }, 100);
    }

}

window.addEventListener("load", () => {
    const app = new App();
    app.init();
});