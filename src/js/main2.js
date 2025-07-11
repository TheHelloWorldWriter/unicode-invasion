const MAX_CODE_POINT = 0x10FFFF;
const DEFAULT_DELAY = 500;
// const UNICODE_RANGES = [ [ 0, 31 ], [ 32, 127 ], [ 128, 255 ], [ 256, 383 ], [ 384, 591 ], [ 592, 687 ], [ 688, 767 ], [ 768, 879 ], [ 880, 1023 ], [ 1024, 1279 ], [ 1280, 1327 ], [ 1328, 1423 ], [ 1424, 1535 ], [ 1536, 1791 ], [ 1792, 1871 ], [ 1872, 1919 ], [ 1920, 1983 ], [ 1984, 2047 ], [ 2048, 2111 ], [ 2112, 2143 ], [ 2208, 2303 ], [ 2304, 2431 ], [ 2432, 2559 ], [ 2560, 2687 ], [ 2688, 2815 ], [ 2816, 2943 ], [ 2944, 3071 ], [ 3072, 3199 ], [ 3200, 3327 ], [ 3328, 3455 ], [ 3456, 3583 ], [ 3584, 3711 ], [ 3712, 3839 ], [ 3840, 4095 ], [ 4096, 4255 ], [ 4256, 4351 ], [ 4352, 4607 ], [ 4608, 4991 ], [ 4992, 5023 ], [ 5024, 5119 ], [ 5120, 5759 ], [ 5760, 5791 ], [ 5792, 5887 ], [ 5888, 5919 ], [ 5920, 5951 ], [ 5952, 5983 ], [ 5984, 6015 ], [ 6016, 6143 ], [ 6144, 6319 ], [ 6320, 6399 ], [ 6400, 6479 ], [ 6480, 6527 ], [ 6528, 6623 ], [ 6624, 6655 ], [ 6656, 6687 ], [ 6688, 6831 ], [ 6832, 6911 ], [ 6912, 7039 ], [ 7040, 7103 ], [ 7104, 7167 ], [ 7168, 7247 ], [ 7248, 7295 ], [ 7360, 7375 ], [ 7376, 7423 ], [ 7424, 7551 ], [ 7552, 7615 ], [ 7616, 7679 ], [ 7680, 7935 ], [ 7936, 8191 ], [ 8192, 8303 ], [ 8304, 8351 ], [ 8352, 8399 ], [ 8400, 8447 ], [ 8448, 8527 ], [ 8528, 8591 ], [ 8592, 8703 ], [ 8704, 8959 ], [ 8960, 9215 ], [ 9216, 9279 ], [ 9280, 9311 ], [ 9312, 9471 ], [ 9472, 9599 ], [ 9600, 9631 ], [ 9632, 9727 ], [ 9728, 9983 ], [ 9984, 10175 ], [ 10176, 10223 ], [ 10224, 10239 ], [ 10240, 10495 ], [ 10496, 10623 ], [ 10624, 10751 ], [ 10752, 11007 ], [ 11008, 11263 ], [ 11264, 11359 ], [ 11360, 11391 ], [ 11392, 11519 ], [ 11520, 11567 ], [ 11568, 11647 ], [ 11648, 11743 ], [ 11744, 11775 ], [ 11776, 11903 ], [ 11904, 12031 ], [ 12032, 12255 ], [ 12272, 12287 ], [ 12288, 12351 ], [ 12352, 12447 ], [ 12448, 12543 ], [ 12544, 12591 ], [ 12592, 12687 ], [ 12688, 12703 ], [ 12704, 12735 ], [ 12736, 12783 ], [ 12784, 12799 ], [ 12800, 13055 ], [ 13056, 13311 ], [ 13312, 19903 ], [ 19904, 19967 ], [ 19968, 40959 ], [ 40960, 42127 ], [ 42128, 42191 ], [ 42192, 42239 ], [ 42240, 42559 ], [ 42560, 42655 ], [ 42656, 42751 ], [ 42752, 42783 ], [ 42784, 43007 ], [ 43008, 43055 ], [ 43056, 43071 ], [ 43072, 43135 ], [ 43136, 43231 ], [ 43232, 43263 ], [ 43264, 43311 ], [ 43312, 43359 ], [ 43360, 43391 ], [ 43392, 43487 ], [ 43488, 43519 ], [ 43520, 43615 ], [ 43616, 43647 ], [ 43648, 43743 ], [ 43744, 43775 ], [ 43776, 43823 ], [ 43824, 43887 ], [ 43888, 43967 ], [ 43968, 44031 ], [ 44032, 55215 ], [ 55216, 55295 ], [ 55296, 56191 ], [ 56192, 56319 ], [ 56320, 57343 ], [ 57344, 63743 ], [ 63744, 64255 ], [ 64256, 64335 ], [ 64336, 65023 ], [ 65024, 65039 ], [ 65040, 65055 ], [ 65056, 65071 ], [ 65072, 65103 ], [ 65104, 65135 ], [ 65136, 65279 ], [ 65280, 65519 ], [ 65520, 65535 ], [ 65536, 65663 ], [ 65664, 65791 ], [ 65792, 65855 ], [ 65856, 65935 ], [ 65936, 65999 ], [ 66000, 66047 ], [ 66176, 66207 ], [ 66208, 66271 ], [ 66272, 66303 ], [ 66304, 66351 ], [ 66352, 66383 ], [ 66384, 66431 ], [ 66432, 66463 ], [ 66464, 66527 ], [ 66560, 66639 ], [ 66640, 66687 ], [ 66688, 66735 ], [ 66816, 66863 ], [ 66864, 66927 ], [ 67072, 67455 ], [ 67584, 67647 ], [ 67648, 67679 ], [ 67680, 67711 ], [ 67712, 67759 ], [ 67808, 67839 ], [ 67840, 67871 ], [ 67872, 67903 ], [ 67968, 67999 ], [ 68000, 68095 ], [ 68096, 68191 ], [ 68192, 68223 ], [ 68224, 68255 ], [ 68288, 68351 ], [ 68352, 68415 ], [ 68416, 68447 ], [ 68448, 68479 ], [ 68480, 68527 ], [ 68608, 68687 ], [ 68736, 68863 ], [ 69216, 69247 ], [ 69632, 69759 ], [ 69760, 69839 ], [ 69840, 69887 ], [ 69888, 69967 ], [ 69968, 70015 ], [ 70016, 70111 ], [ 70112, 70143 ], [ 70144, 70223 ], [ 70272, 70319 ], [ 70320, 70399 ], [ 70400, 70527 ], [ 70784, 70879 ], [ 71040, 71167 ], [ 71168, 71263 ], [ 71296, 71375 ], [ 71424, 71487 ], [ 71840, 71935 ], [ 72384, 72447 ], [ 73728, 74751 ], [ 74752, 74879 ], [ 74880, 75087 ], [ 77824, 78895 ], [ 82944, 83583 ], [ 92160, 92735 ], [ 92736, 92783 ], [ 92880, 92927 ], [ 92928, 93071 ], [ 93952, 94111 ], [ 110592, 110847 ], [ 113664, 113823 ], [ 113824, 113839 ], [ 118784, 119039 ], [ 119040, 119295 ], [ 119296, 119375 ], [ 119552, 119647 ], [ 119648, 119679 ], [ 119808, 120831 ], [ 120832, 121519 ], [ 124928, 125151 ], [ 126464, 126719 ], [ 126976, 127023 ], [ 127024, 127135 ], [ 127136, 127231 ], [ 127232, 127487 ], [ 127488, 127743 ], [ 127744, 128511 ], [ 128512, 128591 ], [ 128592, 128639 ], [ 128640, 128767 ], [ 128768, 128895 ], [ 128896, 129023 ], [ 129024, 129279 ], [ 129280, 129535 ], [ 983040, 1048573 ], [ 1048576, 1114109 ] ];


let zappedCount = 0;

class App {

    

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    seemsGoodChar(char) {
        // console.log(char + " " + char.length);
        this.charCheck.innerText = char;
        return this.charCheck.offsetWidth != this.unrenderableWidth;
    }

    addNewChar() {
        let randomChar;

        do {
            randomChar = String.fromCodePoint(this.getRandomInt(0, MAX_CODE_POINT));
        }
        while (!this.seemsGoodChar(randomChar));

        let newCharElement = document.createElement("i");
        newCharElement.innerText = randomChar;
        newCharElement.style.left = this.getRandomInt(0, window.innerWidth) + "px";
        newCharElement.style.top = this.getRandomInt(0, window.innerHeight) + "px";
        // newCharElement.addEventListener("click", (e) => this.main.removeChild(e.target));
        newCharElement.addEventListener("click", (e) => {
            this.main.removeChild(e.target);
            zappedCount++;
            this.updateInfo();
        });
        this.main.appendChild(newCharElement);

        setTimeout(() => { this.addNewChar(); }, this.delay);
    }

    updateInfo() {
        let count = this.main.childElementCount;
        // this.delay = (DEFAULT_DELAY / count) * 10;

        if (count > 10000) {
            this.delay = 50;
        } else if (count > 1000) {
            this.delay = 100;
        } else if (count > 100) {
            this.delay = 150;
        } else {
            this.delay = 200;
        }

        // document.title = "count: " + count + ", delay: " + this.delay;
        document.title = `Invaders: ${count} | Zapped: ${zappedCount} | Delay: ${this.delay}ms`;
    }


    init() {
        this.delay = DEFAULT_DELAY;

        this.main = document.querySelector("main");

        this.unrenderableWidth = document.getElementById("unrenderable").offsetWidth;
        this.charCheck = document.getElementById("charCheck");

        setTimeout(() => { this.addNewChar(); }, this.delay);

        setInterval(() => this.updateInfo(), 1000);
    }

}

window.addEventListener("load", () => {
    const app = new App();
    app.init();
});