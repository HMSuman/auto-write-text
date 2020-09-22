const text = "my viewers on YouTube are the best!!!♡ ♥💕❤";
let i = 0;

function textWrite() {
    document.body.innerText = text.slice(0, i);
    i++;
    if (i > text.length) {
        i = 0;
    }
}
setInterval(textWrite, 100);