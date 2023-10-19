//* DO NOT PUT ON CODEHS
import { Graphics, Rectangle } from 'chs-js-lib'
const graphics = new Graphics();
function add(shape) {
  graphics.add(shape);
}
function remove(shape) {
  graphics.remove(shape);
}
//* END DO NOT PUT ON CODEHS

const Theme = new Audio("https://codehs.com/uploads/fcd293c3d1c92b0a954da5706bb3d4f6")

function main() {
  //* DRAW GRID
  //Theme.play();
  drawBoard();
}

function drawBoard() {
  // Draw start space
  drawSquare("white", 0, 0, "start", "30pt Arial")
}

function drawSquare(color, x, y, text = "", font ="") {
  let rect = new Rectangle(100, 50);
  rect.setPosition(x, y);
  rect.setColor(color);
  add(rect);
  if (text != "") {
    let txt = new Text(text, font);
    txt.setPosition(x, y);
    add(txt)
  }
}

main()
