'use strict';

const canvas = document.getElementById("canvas");
const width = canvas.width = document.body.clientWidth;
const height = canvas.height = document.body.clientHeight;
const ctx = canvas.getContext("2d");
ctx.strokeStyle = 'blue';

const inc = 0.01;
const faster = 0.3;
let start = 0;

function renderLoop() {

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();

    let xoff = start;

    for (let x = 0; x < width; x++){
        let y = noise(xoff) * height;
        ctx.lineTo(x, y);
        ctx.stroke();
        xoff += inc;
    }

    start += faster;

    requestAnimationFrame(renderLoop);
}

renderLoop();

function ellipse (x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
}



