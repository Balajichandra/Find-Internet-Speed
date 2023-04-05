let startTime, endTime;
let imageSize = "";
let image = new Image();
let bit = document.getElementById("bits");
let kb = document.getElementById("kbs");
let mb = document.getElementById("mbs");

let imageLink = "https://source.unsplash.com/random?topics=nature";

image.onload = async function () {
    endTime = new Date().getTime();

    await fetch(imageLink).then((response) => {
        imageSize = response.headers.get("content-length");
        calculateSpeed();
    });
};

function calculateSpeed(){
    let timeDuration = (endTime - startTime) / 1000;
    let loadedBits = imageSize * 8;
    let speedbits = (loadedBits / timeDuration).toFixed(2);
    let speedkbs = (speedbits / 1024).toFixed(2);
    let speedmbs = (speedkbs / 1024).toFixed(2);

    bit.innerHTML += `${speedbits}`;
    kb.innerHTML += `${speedkbs}`;
    mb.innerHTML += `${speedmbs}`;
}

const init = async () => {
    startTime = new Date().getTime();
    image.src = imageLink;
};
window.onload = () => init();