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
    "https://codehs.com/uploads/fcd293c3d1c92b0a954da56bb3d4f6"
);
const BlackSquareTheme = new Audio(
    "https://codehs.com/uploads/66c5a8add52d0a2422190b248cf1355d"
);
const MenuTheme = new Audio(
    "https://codehs.com/uploads/c433e1ffe02ef1e0f5168fd9416f23ec"
);
const RedPlayer = new WebImage(
    "https://codehs.com/uploads/9072c362a186c0a45486b3842328428f"
);

let CurrentPlayer = ["Red", "Blue", "Green", "Yellow"]
let PlayerNumber = 0;

const Spaces = [
    ["start", "blue", "green", "purple", "black", "yellow", "white", "white"],
    ["black", "orange", "green"],
    ["green", "white", "white"],
    ["white", "yellow", "red", "blue", "roundabout", "purple", "white", "red"],
    ["blue", "black", "white", "white"],
    ["purple", "orange", "white", "white"],
    ["purple", "white", "green", "black", "yellow", "black", "red", "white"],
    ["end", "white", "yellow"],
    ["black", "orange", "white", "black", "purple", "red", "blue"]
]

function main() {
    setupGame();
    let activePlayer = CurrentPlayer[0];
    let moves = 0;
    while (true) {
        let txt = new Text(`${activePlayer} rolled: ${rollDice()}`, "20pt Arial");
        txt.setPosition(25, 155);
        txt.setColor(Color.WHITE);
        add(txt);
    }
}

function setNextPlayer() {
    if (PlayerNumber == 4) {
        PlayerNumber = 0;
    }
    console.log(CurrentPlayer[PlayerNumber])
    PlayerNumber++
}

function setupGame() {
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
    RedPlayer.setPosition(0, 0);
    RedPlayer.setSize(20, 20);
    add(RedPlayer);
}

function drawBoard() {
    // Draw start space
    setSize(355, 700);
    drawSquare(Color.WHITE, 0,0, "START", "10pt Arial");
    drawSquare(Color.BLUE, 45, 0);
    drawSquare(Color.GREEN, 90, 0);
    drawSquare(Color.PURPLE, 135, 0);
    drawSquare(Color.BLACK, 180, 0);
    drawSquare(Color.YELLOW, 225, 0);
    drawSquare(Color.WHITE, 270, 0);
    drawSquare(Color.WHITE, 315, 0);

    drawSquare(Color.BLACK, 225, 78);
    drawSquare(Color.ORANGE, 270, 78);
    drawSquare(Color.GREEN, 315, 78);
    drawSquare(Color.GREEN, 225, 156);
    drawSquare(Color.WHITE, 270, 156);
    drawSquare(Color.WHITE, 315, 156);
    drawSquare(Color.WHITE, 270, 234);
    drawSquare(Color.WHITE, 270, 390);
    drawSquare(Color.WHITE, 270, 312);
    drawSquare(Color.RED, 270, 468);
    drawSquare(Color.RED, 315, 234);
    drawSquare(Color.WHITE, 315, 390);
    drawSquare(Color.WHITE, 315, 312);
    drawSquare(Color.WHITE, 315, 468);
     
    drawSquare(Color.PURPLE, 225, 234);
    drawSquare(Color.BLUE, 135, 234);
    drawSquare(Color.RED, 90, 234);
    drawSquare(Color.YELLOW, 45, 234);
    drawSquare(Color.WHITE, 0, 234);

    drawSquare(Color.BLUE, 0, 312);
    drawSquare(Color.PURPLE, 0, 390);
    drawSquare(Color.PURPLE, 0, 468);
    drawSquare(Color.WHITE, 45, 468);
    drawSquare(Color.GREEN, 90, 468);
    drawSquare(Color.BLACK, 135, 468);
    drawSquare(Color.YELLOW, 180, 468);
    drawSquare(Color.WHITE, 0, 546, "END", "10pt Arial"); //END SQAURE
    drawSquare(Color.WHITE, 45, 546);

    drawSquare(Color.RED, 270, 624);
    drawSquare(Color.BLACK, 45, 624);
    drawSquare(Color.ORANGE, 90, 624);
    drawSquare(Color.WHITE, 135, 624);
    drawSquare(Color.BLACK, 180, 624);
    drawSquare(Color.PURPLE, 225, 624);
    drawSquare(Color.BLUE, 315, 625);
    drawSquare(Color.YELLOW, 315, 546);
    drawSquare(Color.BLACK, 225, 468);
    drawSquare(Color.ORANGE, 180, 390);
    drawSquare(Color.BLACK, 180, 312);
    
}

function drawSquare(color, x, y, text = "", font = "") {
    let rect = new Rectangle(40, 75);
    rect.setPosition(x, y);
    rect.setColor(color);
    add(rect);
    if (text != "") {
        let txt = new Text(text, font);
        txt.setPosition(x + 5, y + 40);
        txt.setRotation(90)
        txt.setColor(Color.BLACK);
        add(txt);
    }
}

function rollDice() {
    let num = Randomizer.nextInt(1, 6);
    return num;
}

main();
