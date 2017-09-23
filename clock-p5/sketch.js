let w = 50;
let m = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  let hr = parseInt(hour(), 10).toString(2);
  let mn = parseInt(minute(), 10).toString(2);
  let sc = parseInt(second(), 10).toString(2);

  translate(windowWidth/2-0.5*(4.5*w+5*m), windowHeight/2-2*(w+m));

  let c = 0;

  for (let i = 0; i < 5; i++) {
    fill(255,100,150);
    textAlign(CENTER);
    noStroke();
    text(pow(2,(4-i)),i*(w+m)+i*(w+m)/4,0+w/2);
  }

  strokeWeight(1);

  for (let i = hr.length-1; i >= 0; i--) {
    stroke(255,100,150);
    let supp = 5 - hr.length;
    if (supp > 0) {
      for (let s = 0; s < supp; s++) {
        noFill();
        ellipse(i*(w+m)+i*(w+m)/4, w+m, w);
      }
    }
    if (hr.charAt(i) == "1") {
      fill(255,100,150)
    } else {
      noFill();
    }
    ellipse((i*(w+m)+i*(w+m)/4)+supp, w+m, w);
  }

  for (let i = mn.length-1; i >= 0; i--) {
    stroke(150,100,255);
    let supp = 6 - mn.length;
    if (supp > 0) {
      for (let s = 0; s < supp; s++) {
        noFill();
        ellipse(s*(w+m), 2*(w+m), w);
      }
    }
    if (mn.charAt(i) == "1") {
      fill(150,100,255);
    } else {
      noFill();
    }
    ellipse((i+supp)*(w+m), 2*(w+m), w);
  }

  for (let i = sc.length-1; i >= 0; i--) {
    stroke(150,255,100);
    let supp = 6 - sc.length;
    if (supp > 0) {
      for (let s = 0; s < supp; s++) {
        noFill();
        ellipse(s*(w+m), 3*(w+m), w);
      }
    }
    if (sc.charAt(i) == "1") {
      fill(150,255,100);
    } else {
      noFill();
    }
    ellipse((i+supp)*(w+m), 3*(w+m), w);
  }

  for (let i = 0; i < 6; i++) {
    fill(150,255,100);
    textAlign(CENTER);
    noStroke();
    text(pow(2,(5-i)),i*(w+m),4*(w+m)-w/2+m);
  }

  let fhr = hour();
  let fmn = minute();
  let fsc = second();

  if (fhr < 10) {
    fhr = "0" + fhr;
  } else if (fmn < 10) {
    fmn = "0" + fmn;
  } else if (fsc < 10) {
    fsc = "0" + fsc;
  }

  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(16);
  noStroke();
  text(fhr + "h" + fmn + "m" + fsc + "s",0,5*(w+m)-w/2+m, 5*(w+m), 5*(w+m)+w/2+m);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
