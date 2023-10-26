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

const Theme = new Audio(
    "https://codehs.com/uploads/fcd293c3d1c92b0a954da5706bb3d4f6"
);
const BlackSquareTheme = new Audio(
    "https://codehs.com/uploads/66c5a8add52d0a2422170b248cf1355d"
);
const MenuTheme = new Audio(
    "https://codehs.com/uploads/c433e1ffe02ef1e0f5168fd9416f23ec"
);
function main() {
    //setTimer(() => { MenuTheme.play() }, 85, "", "Music Timer")
    //BlackSquareTheme.play();
    //* DRAW GRID
    Color.BLUE = new Color(46, 152, 209);
    Color.PURPLE = new Color(102, 90, 231);
    Color.GREEN = new Color(136, 227, 110);
    Color.YELLOW = new Color(247, 221, 74);
    Color.ORANGE = new Color(255, 94, 31);
    Color.RED = new Color(255, 41, 33);
    drawBoard();
    let txt = new Text()
}

function drawBoard() {
    // Draw start space
    setSize(400, 500);
    drawSquare(Color.WHITE, -20, 12, 90, "START", "10pt Arial");
    drawSquare(Color.BLUE, 25, 12, 90);
    drawSquare(Color.GREEN, 70, 12, 90);
    drawSquare(Color.PURPLE, 115, 12, 90);
    drawSquare(Color.BLACK, 160, 12, 90);
    drawSquare(Color.YELLOW, 205, 12, 90);
    drawSquare(Color.WHITE, 250, 12, 90);
    drawSquare(Color.WHITE, 295, 12, 90);
    drawSquare(Color.BLACK, 205, 90, 90);
    drawSquare(Color.ORANGE, 250, 90, 90);
    drawSquare(Color.GREEN, 295, 90, 90);
    drawSquare(Color.GREEN, 205, 168, 90);
    drawSquare(Color.WHITE, 250, 168, 90);
    drawSquare(Color.GREEN, 295, 90, 90);
    drawSquare(Color.WHITE, 295, 168, 90);

    drawSquare(Color.PURPLE, 205, 246, 90);
    drawSquare(Color.BLUE, 115, 246, 90);
    drawSquare(Color.RED, 70, 246, 90);
    drawSquare(Color.YELLOW, 25, 246, 90);
    drawSquare(Color.WHITE, -20, 246, 90);
}

function drawSquare(color, x, y, rotation, text = "", font = "") {
    let rect = new Rectangle(75, 40);
    rect.setRotation(rotation);
    rect.setPosition(x, y);
    rect.setColor(color);
    add(rect);
    if (text != "") {
        let txt = new Text(text, font);
        txt.setAnchor({ vertical: 0.5, horizontal: 0.5 });
        txt.setRotation(rotation);
        txt.setPosition(x, y);
        txt.setColor("white");
        add(txt);
    }
}

function rollDice() {
    let num = Randomizer.nextInt(1,6)
    return num;
}

main();


main()
