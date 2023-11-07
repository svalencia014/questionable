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
/*
// Create a variable to store the person who landed on the square
var personOnSquare;

// Create a variable to store the opponent who was chosen
var opponent;

// Create a variable to store the die roll of the first person
var firstRoll;

// Create a variable to store the die roll of the second person
var secondRoll;

// Prompt the person who landed on the square to choose an opponent
if checkSpaceType(purple)personOnSquare = prompt("Choose an opponent: ");

// Get the die roll of the first person
firstRoll = Math.floor(Math.random() * 6) + 1;

// Get the die roll of the second person
secondRoll = Math.floor(Math.random() * 6) + 1;

// Compare the die rolls to see who wins the duel
if (firstRoll > secondRoll) {
   The first person wins the duel
  alert("The first person wins the duel and gets to move forward two spaces.");
   Move the first person forward two spaces
   ...
} else if (firstRoll < secondRoll) {
   The second person wins the duel
  alert("The second person wins the duel and gets to move forward two spaces.");
   Move the second person forward two spaces
   ...
} else {
   The die rolls are tied
  alert("The die rolls are tied, so the duel is a draw.");
}

function checkGreenSquare(currentPosition) {
  // Get the color of the square at the current position
  const squareColor = getSquareColor(currentPosition);

  // Check if the square is green
  if (squareColor === Color.GREEN) {
    // Move the player two spaces forward
    move(Player) += 2;
  }

  return currentPosition;
}*/

const Theme = new Audio(
    "https://codehs.com/uploads/fcd293c3d1c92b0a954da56bb3d4f6"
);
const BlackSquareTheme = new Audio(
    "https://codehs.com/uploads/66c5a8add52d0a2422190b248cf1355d"
);
//{ x, y, type }
const Spaces = [
    [
        {x:0,y:0,type:"start"},
        {x:45,y:0,type:"blue"},
        {x:90,y:0,type:"green"},
        {x:135,y:0,type:"purple"},
        {x:180,y:0,type:"black"},
        {x:225,y:0,type:"yellow"},
        {x:270,y:0,type:"white"},
        {x:315,y:0,type:"white"}
    ],
    [
        {x:225,y:78,type:"black"},
        {x:270,y:78,type:"orange"},
        {x:315,y:78,type:"green"}
    ],
    [
        {x:225,y:156,type:"green"},
        {x:270,y:156,type:"white"},
        {x:315,y:156,type:"white"}
    ],
    [
        {x:0,y:234,type:"white"},
        {x:45,y:234,type:"yellow"},
        {x:90,y:234,type:"red"},
        {x:135,y:234,type:"blue"},
        {x:180,y:234,type:"roundabout"},
        {x:225,y:234,type:"purple"},
        {x:270,y:234,type:"white"},
        {x:315,y:234,type:"red"}
    ],
    [
        {x:0,y:312,type:"blue"},
        {x:180,y:312,type:"black"},
        {x:270,y:312,type:"white"},
        {x:315,y:312,type:"white"}
    ], 
    [
        {x:0,y:390,type:"purple"},
        {x:180,y:390,type:"orange"},
        {x:270,y:390,type:"white"},
        {x:315,y:390,type:"white"}
    ], 
    [
        {x:0,y:468,type:"purple"},
        {x:45,y:468,type:"white"},
        {x:90,y:468,type:"green"},
        {x:135,y:468,type:"black"},
        {x:180,y:468,type:"yellow"},
        {x:225,y:468,type:"black"},
        {x:270,y:468,type:"red"},
        {x:315,y:468,type:"white"}
    ], 
    [
        {x:0,y:546,type:"end"},
        {x:0,y:546,type:"white"},
        {x:0,y:546,type:"yellow"},
    ], 
    [
        {x:45,y:624,type:"black"},
        {x:90,y:624,type:"orange"},
        {x:135,y:624,type:"white"},
        {x:180,y:624,type:"black"},
        {x:225,y:624,type:"purple"},
        {x:270,y:624,type:"red"},
        {x:315,y:624,type:"blue"},
    ]
]

// Player Pieces 

// Red Player 1
const RedPlayer = new WebImage("https://codehs.com/uploads/9072c362a186c0a45486b3842328428f");
// Blue Player 2
const BluePlayer = new WebImage("https://codehs.com/uploads/13ac08cc5339fac0e3eb87ec49367038");
// Green Player 3
const GreenPlayer = new WebImage("https://codehs.com/uploads/4517728ad2a864e61d5fd8fd9fd7ceb4");
// Yellow Player 4
const YellowPlayer = new WebImage("https://codehs.com/uploads/d7e68d33d5d78a34924059a036ac363b");

const DiceText = new Text("", "10pt Arial");
const EnterText = new Text("Press 'n' to continue", "10pt Arial"); //OG was 'enter'

let CurrentPlayer = ["Red", "Blue", "Green", "Yellow"]
let activePlayer = "";
let PlayerNumber = 0;
let moves = 0;
let hasRolled = false;

async function main() {
    setupGame();
    activePlayer = CurrentPlayer[PlayerNumber];
    console.log(`The current player is ${activePlayer}`);
    DiceText.setText(`Press 'r' to roll for ${activePlayer}`);
    keyDownMethod(keyDownMethods);
}

function keyDownMethods(e) {
    if(e.key == 'r' && hasRolled == false) {
        rollDice();
        switch(PlayerNumber) {
            case 0: {
                move(RedPlayer, moves);
                break;
            }
            case 1: {
                move(BluePlayer, moves);
                break;
            }
            case 2:  {
                move(GreenPlayer, moves)
                break;
            }
            case 3: { 
                move(YellowPlayer, moves)
                break;
            }
        }
    }
    if (e.key == 'n' && hasRolled == true) {
        remove(EnterText);
        setNextPlayer();
        activePlayer = CurrentPlayer[PlayerNumber];
        console.log(`The current player is ${activePlayer}`);
        DiceText.setText(`Press 'r' to roll for ${activePlayer}`);
    }
}

function move(player, spaces) {
    let currentSpace = player.currentSpace;
    let newSpace = [player.currentSpace[0], player.currentSpace[1] + spaces];
    let spaceExists = indexExists(newSpace[0], newSpace[1])
    console.log(`Space Exists? ${spaceExists}`);
    if (!spaceExists) {
        let dx = getSpace(newSpace).x - player.spaceObj.x;
        let dy = 0;
        player.move(dx, dy)
        player.currentSpace = newSpace;
        player.spaceObj = getSpace(newSpace);
        checkSpaceType(newSpace.type);
    }
    console.log(`${indexExists(newSpace[0], newSpace[1])}`);
}

function checkSpaceType(type) {
    switch(type) {
        case "purple": {
            //duel square
            break;
        }
        
        case "green": {
            //+2 spaces
            break;
        }
        
        case "blue": {
            //nearest blue
            break;
        }
        
        case "yellow": {
            //nearest yellow
            break;
        }
        
        case "red": {
            //challenge +1 space
            break;
        }
        
        case "orange": {
            //skip next turn
            break;
        }
        
        case "black": {
            //challenge card
        }
        
        case "roundabout": {
            //Sam R does logic for this
            
        }
    }    
}

function setNextPlayer() {
    if (PlayerNumber == 3) {
        PlayerNumber = 0;
    } else {
        PlayerNumber++
    }
    hasRolled = !hasRolled
}

function setupGame() {
    //setTimer(() => { MenuTheme.play() }, 85, "", "Music Timer")
    //* DRAW GRID
    DiceText.setPosition(25, 155),
    EnterText.setPosition(25, 175);
    DiceText.setColor(Color.WHITE);
    EnterText.setColor(Color.WHITE);
    add(DiceText);
    Color.BLUE = new Color(46, 152, 209);
    Color.PURPLE = new Color(102, 90, 231);
    Color.GREEN = new Color(136, 227, 110);
    Color.YELLOW = new Color(247, 221, 74);
    Color.ORANGE = new Color(255, 94, 31);
    Color.RED = new Color(255, 41, 33);
    drawBoard();
    
    //* Create Player Pieces
    setupPlayer(RedPlayer);
    setupPlayer(BluePlayer, 15);
    setupPlayer(GreenPlayer, 30);
    setupPlayer(YellowPlayer, 45);
}

function setupPlayer(player, offset = 0) {
    player.currentSpace = [0,0];
    player.spaceObj = getSpace(player.currentSpace)
    player.setPosition(RedPlayer.spaceObj.x,RedPlayer.spaceObj.y + offset);
    player.setSize(20, 20);
    add(player);
}

function getSpace(location) {
    return Spaces[location[0]][location[1]]
}

function drawBoard() {
    const roundAbout = new WebImage("https://codehs.com/uploads/e00286aeb2d6b739a08e9a0b67a53168")
    setSize(355, 700);
    drawSquare(Color.WHITE, 0,0, "START", "10pt Arial"); //START SQUARE
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
 
    // create roundabout for the board
    roundAbout.setPosition(180, 235);
    roundAbout.setSize(40, 70);
    add(roundAbout);
    
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
        txt.setPosition(x + 0, y + 40);
        txt.setRotation(90)
        txt.setColor(Color.BLACK);
        add(txt);
    }
}

function rollDice() {
    moves = Randomizer.nextInt(1, 6);
    hasRolled = !hasRolled;
    DiceText.setText(`${activePlayer} rolled a ${moves}!`)
    add(EnterText);
} 

function indexExists(row, column) {
    console.log(row, column)
    return (
        row < 0 || 
        row >= Spaces.length ||
        column < 0 ||
        column >= Spaces[row].length
    )
}

main();
