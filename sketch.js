function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(78, 113, 120);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255);
  noFill();
  stroke(241, 247, 236);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(79, 169, 184);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(32, 43, 48);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(241, 247, 236);
  line (0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(79, 169, 184);
  line (0, 0, 100, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(32, 43, 48);
  line (0, 0, 100, 0);
  pop();

  stroke(241, 247, 236);
  point(0, 0);
}
