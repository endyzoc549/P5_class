/*
 * p5js.org example
 * Trick02 easing
 */

// Example: basic easing
// 示例： 基本渐隐
// 线上示例：https://editor.p5js.org/yulicai/sketches/zdG63NOLN

let x = 1;
let y = 1;
let easing = 0.05;

function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw()
{
    background(237,34,93);
    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY - y;
    y += dy * easing;

    ellipse(x,y,66,66);

}