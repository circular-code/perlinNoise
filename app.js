'use strict';

const canvas = document.getElementById("canvas");
const width = canvas.width = document.body.clientWidth;
const height = canvas.height = document.body.clientHeight;
const ctx = canvas.getContext("2d");
let xoff1 = 0;
let xoff2 = 10000;

let time = Date.now();

//https://www.youtube.com/watch?v=y7sgcFhk6ZM&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=5
// 6:00

function renderLoop(now) {

    let timeDelta = (now - time) / 1000;

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(0, 0);

    const x = noise(xoff1) * width;
    const y = noise(xoff2) * height;

    for (let x = 0; x < width; x++){
        ctx.lineTo(x, y);
        ellipse(x, y, 1);
    }

    // xoff += 20 * timeDelta;
    xoff1 += 0.01;
    xoff2 += 0.01;

    ctx.closePath();
    ctx.stroke();

    time = now;

    requestAnimationFrame(renderLoop);
}

function distance (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
}

renderLoop();

function ellipse (x,y,r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
}



