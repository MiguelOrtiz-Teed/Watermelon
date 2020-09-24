let angle = 0

let greenHalfCircle = {
x: 0,
y: 0,
xWidth: 300,
yHeight: 300,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'green',
transX: 300,
transY: 300,
}

let whiteHalfCircle = {
x: 0,
y: 0,
xWidth: 290,
yHeight: 290,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 255,
transX: 300,
transY: 300,
}

let redHalfCircle = {
x: 0,
y: 0,
xWidth: 285,
yHeight: 270,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'red',
transX: 300,
transY: 300,
}

let pinkHalfCircle = {
x: 0,
y: 0,
xWidth: 200,
yHeight: 270,
start: 0,
HowMuchPi: 3.14159265358979323846,
color: 'pink',
transX: 300,
transY: 300,
}

let seed01 = {
x: 60,
y: 90,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 45
}

let seed02 = {
x: 60,
y: 90,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 75
}

let seed03 = {
x: 45,
y: 45,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 90
}

let seed04 = {
x: 25,
y: 100,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 300,
angle: 0
}



let seed05 = {
x: 0,
y: 0,
h: 25,
w: 12.5,
color: 'black',
transX: 215,
transY: 375,
angle: 15
}

let seed05a = {
x: 0,
y: 0,
h: 9,
w: 4,
color: 'white',
transX: 220,
transY: 371,
angle: 15
}


let seed06 = {
x: 0,
y: 0,
h: 25,
w: 12.5,
color: 'black',
transX: 300,
transY: 350,
angle: 51
}

let seed06a = {
x: 0,
y: 0,
h: 12,
w: 3,
color: 'white',
transX: 302,
transY: 347,
angle: 51
}


let seed07 = {
x: 0,
y: 0,
h: 25,
w: 12.5,
color: 'black',
transX: 350,
transY: 325,
angle: 2
}

let seed07a = {
x: 0,
y: 0,
h: 12,
w: 3,
color: 'white',
transX: 347,
transY: 323,
angle: 2
}

function setup() {
// put setup code here
createCanvas(600, 600);
}

function draw() {
// put drawing code here
background(0);

push();
//ellipseMode(CENTER);
drawHalfCircle(greenHalfCircle);
//angle += .01
//noFill();
//ellipse(0, 0, 1150, 1150);
pop();

push();
drawHalfCircle(whiteHalfCircle);
pop();

drawHalfCircle(redHalfCircle);

drawHalfCircle(pinkHalfCircle);

drawSeed(seed01);

drawSeed(seed02);

drawSeed(seed03);

drawSeed(seed04);

//with white highlight
drawSeed(seed05);
drawSeed(seed05a);

//with white highlight
drawSeed(seed06);
drawSeed(seed06a);

//with white highlight
drawSeed(seed07);
drawSeed(seed07a);




}

function drawHalfCircle(greenHalfCircle) {
push();
noStroke();
translate(greenHalfCircle.transX, greenHalfCircle.transY)
fill(greenHalfCircle.color)
arc(greenHalfCircle.x, greenHalfCircle.y, greenHalfCircle.xWidth, greenHalfCircle.yHeight, greenHalfCircle.start, greenHalfCircle.HowMuchPi)
pop();
}

function drawHalfCircle(whiteHalfCircle) {
push();
noStroke();
translate(whiteHalfCircle.transX, whiteHalfCircle.transY)
fill(whiteHalfCircle.color)
arc(whiteHalfCircle.x, whiteHalfCircle.y, whiteHalfCircle.xWidth, whiteHalfCircle.yHeight, whiteHalfCircle.start, whiteHalfCircle.HowMuchPi)
pop();
}

function drawHalfCircle(redHalfCircle) {
push();
noStroke();
translate(redHalfCircle.transX, redHalfCircle.transY)
fill(redHalfCircle.color);
arc(redHalfCircle.x, redHalfCircle.y, redHalfCircle.xWidth, redHalfCircle.yHeight, redHalfCircle.start, redHalfCircle.HowMuchPi)
pop();
}

function drawHalfCircle(pinkHalfCircle) {
push();
noStroke();
translate(pinkHalfCircle.transX, pinkHalfCircle.transY)
fill(pinkHalfCircle.color);
arc(pinkHalfCircle.x, pinkHalfCircle.y, pinkHalfCircle.xWidth, pinkHalfCircle.yHeight, pinkHalfCircle.start, pinkHalfCircle.HowMuchPi)
pop();
}

function drawSeed(seed01){
push();
noStroke();
fill(seed01.color)
translate(seed01.transX, seed01.transY)
rotate(seed01.angle)
ellipse(seed01.x, seed01.y, seed01.h, seed01.w)
pop();
}

function drawSeed(seed02){
push();
noStroke();
fill(seed02.color)
translate(seed02.transX, seed02.transY)
rotate(seed02.angle)
ellipse(seed02.x, seed02.y, seed02.h, seed02.w)
pop();
}

function drawSeed(seed03){
push();
noStroke();
fill(seed03.color)
translate(seed03.transX, seed03.transY)
rotate(seed03.angle)
ellipse(seed03.x, seed03.y, seed03.h, seed03.w)
pop();
}

function drawSeed(seed04){
push();
noStroke();
fill(seed04.color)
translate(seed04.transX, seed04.transY)
rotate(seed04.angle)
ellipse(seed04.x, seed04.y, seed04.h, seed04.w)
pop();
}

function drawSeed(seed05){
push();
noStroke();
fill(seed05.color)
translate(seed05.transX, seed05.transY)
rotate(seed05.angle)
ellipse(seed05.x, seed05.y, seed05.h, seed05.w)
pop();
}

function drawSeed(seed05a){
push();
noStroke();
fill(seed05a.color)
translate(seed05a.transX, seed05a.transY)
rotate(seed05a.angle)
ellipse(seed05a.x, seed05a.y, seed05a.h, seed05a.w)
pop();
}



function drawSeed(seed06){
push();
noStroke();
fill(seed06.color)
translate(seed06.transX, seed06.transY)
rotate(seed06.angle)
ellipse(seed06.x, seed06.y, seed06.h, seed06.w)
pop();
}

function drawSeed(seed06a){
push();
noStroke();
fill(seed06a.color)
translate(seed06a.transX, seed06a.transY)
rotate(seed06a.angle)
ellipse(seed06a.x, seed06a.y, seed06a.h, seed06a.w)
pop();
}



function drawSeed(seed07){
push();
noStroke();
fill(seed07.color)
translate(seed07.transX, seed07.transY)
rotate(seed07.angle)
ellipse(seed07.x, seed07.y, seed07.h, seed07.w)
pop();
}

function drawSeed(seed07a){
push();
noStroke();
fill(seed07a.color)
translate(seed07a.transX, seed07a.transY)
rotate(seed07a.angle)
ellipse(seed07a.x, seed07a.y, seed07a.h, seed07a.w)
pop();
}
