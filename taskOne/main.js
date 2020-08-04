const x = 10;
const y = 16;

function drawZero() {
  let result = "";
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (i === 0 || j === 0 || i === y - 1 || j === x - 1) {
        result += "x";
      } else {
        result += " ";
      }

      if (
        (i === 2 && j > 2 && j < 6) ||
        (i === 12 && j > 2 && j < 6) ||
        (j === 2 && i > 2 && i < 12) ||
        (j === 6 && i > 2 && i < 12)
      ) {
        result += "0";
      } else {
        result += " ";
      }
    }
    result += "\n";
  }
  console.log(result);
}

function drawOne() {
  let result = "";
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (i === 0 || j === 0 || i === y - 1 || j === x - 1) {
        result += "x";
      } else {
        result += " ";
      }
      if (
        (j === x - 3 && i !== 0 && i !== y - 1) ||
        (i === 6 && j === 1) ||
        (i === 5 && j === 2) ||
        (i === 4 && j === 3) ||
        (i === 3 && j === 4) ||
        (i === 2 && j === 5) ||
        (i === 1 && j === 6)
      ) {
        result += "1";
      } else {
        result += " ";
      }
    }
    result += "\n";
  }
  console.log(result);
  console.log("\n");
}

function drawTwo() {
  let result = "";
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (i === 0 || j === 0 || i === y - 1 || j === x - 1) {
        result += "x";
      } else {
        result += " ";
      }
      if (
        (j > 2 && j < 7 && (i === 1 || i === 7 || i === 14)) ||
        (j === 7 && i > 1 && i < 7) ||
        (j === 2 && i > 7 && i < 14) ||
        (j === 7 && i === 13) ||
        (i === 2 && j === 2)
      ) {
        result += "2";
      } else {
        result += " ";
      }
    }
    result += "\n";
  }
  console.log(result);
  console.log("\n");
}

function drawThree() {
  let result = "";
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (i === 0 || j === 0 || i === y - 1 || j === x - 1) {
        result += "x";
      } else {
        result += " ";
      }
      if (
        (j > 2 && j < 7 && (i === 1 || i === 7 || i === 14)) ||
        (j === 7 && ((i > 1 && i < 7) || (i > 7 && i < 14))) ||
        (j === 2 && (i === 2 || i === 12))
      ) {
        result += "3";
      } else {
        result += " ";
      }
    }
    result += "\n";
  }
  console.log(result);
  console.log("\n");
}

function drawFour() {
  let result = "";
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (i === 0 || j === 0 || i === y - 1 || j === x - 1) {
        result += "x";
      } else {
        result += " ";
      }
      if (
        (j === x - 3 && i !== 0 && i !== y - 1) ||
        (i === 6 && j === 2) ||
        (i === 5 && j === 3) ||
        (i === 4 && j === 4) ||
        (i === 3 && j === 5) ||
        (i === 2 && j === 6) ||
        (i === 1 && j === 7) ||
        (i === 7 && j > 1 && j < 8)
      ) {
        result += "1";
      } else {
        result += " ";
      }
    }
    result += "\n";
  }
  console.log(result);
  console.log("\n");
}

function draw(digit) {
  switch (digit) {
    case 0:
      drawZero();
      break;
    case 1:
      drawOne();
      break;
    case 2:
      drawTwo();
      break;
    case 3:
      drawThree();
      break;
    case 4:
      drawFour();
      break;
    default:
      console.log("Please insert 0,1,2,3 or 4");
  }
}

//Draw digits

draw(0);
draw(1);
draw(2);
draw(3);
draw(4);
draw(5);