// Initialize boxes
const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');

// Put boxes in array
const boxes = [b0,b1,b2,b3,b4,b5,b6,b7,b8];

// Initilize reset button and textbox to display winner
const r = document.getElementById('reset');
const winText = document.getElementById('winText');

// Add marked and value properties to each box
// 'Marked' denotes if there is an x or an o in the square
// If 'value' is -1, the square is empty, if it is 0, the box has an x, if it is 1, the box has an o
for(box of boxes) {
    box.marked = false;
    box.value = -1;
}

// Initilize an object called palyer and give it a value of x to keep track of if it is X'x or O's turn
// Initialized as an object because javascript passes objects by pointer so I can change the value of x in a function
let player = {};
player.x = true;

// Detect which box or button is clicked
// Code found at https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
document.querySelector('body').addEventListener('click', event => {
    switch(event.target) {
        case b0:
            console.log('0');
            mark(b0, player);
            break;
        case b1:
            console.log('1');
            mark(b1, player);
            break;
        case b2:
            console.log('2');
            mark(b2, player);
            break;
        case b3:
            console.log('3');
            mark(b3, player);
            break;
        case b4:
            console.log('4');
            mark(b4, player);
            break;
        case b5:
            console.log('5');
            mark(b5, player);
            break;
        case b6:
            console.log('6');
            mark(b6, player);
            break;
        case b7:
            console.log('7');
            mark(b7, player);
            break;
        case b8:
            console.log('8');
            mark(b8, player);
            break;
        case r:
            reset();
            break;
        default: 
            console.log('null');
            return;
    }
})

// Mark box with an x or an o
function mark(box, play) {

    // Return if the box already has a mark or if someone has won
    if(box.marked || checkWin())
        return;

    // Create an element which will hold the x or the o
    const mark = document.createElement('p');

    // If it is x's turn, put an x in mark, set the value of the box to 0, and set it to o's turn
    if(play.x) {
        mark.textContent = 'x';
        box.value = 0;
        play.x = false;
    }

    // If it is o's turn, put an o in mark, set the value of the box to 1, and set it to x's turn
    else {
        mark.textContent = 'o';
        box.value = 1;
        play.x = true;
    }

    // Put mark in the box, set the box to marked
    box.appendChild(mark);
    box.marked = true;

    // If a playuer has won, call the win function with the player who won
    if(checkWin()) {
        win(play);
        return;
    }

    // Check if the game has drawn
    // Check after check for win to give the win priority
    if(checkDraw())
        draw();
}

// Check if a player has won
function checkWin() {

    // A player has won if three boxes in a row are of the same value, but not empty
    // A -1 marks a box as empty, a 0 with an x, and a 1 with an o

            //  x x x  |  x      |  x      |
            //         |    x    |  x      |
            //         |      x  |  x      |
    return (b0.value != -1 
            && ((b0.value == b1.value && b0.value == b2.value)
            || (b0.value == b4.value && b0.value == b8.value)
            || (b0.value == b3.value && b0.value == b6.value))

            //    x    |
            //    x    |
            //    x    |
        || b1.value != -1
            && (b1.value == b4.value && b1.value == b7.value)

            //      x  |      x  |
            //      x  |    x    |
            //      x  |  x      |
        || b2.value != -1
            && ((b2.value == b5.value && b2.value == b8.value)
            || (b2.value == b4.value && b2.value == b6.value))

            //         |
            //  x x x  |
            //         |
        || b3.value != -1
            && (b3.value == b4.value && b3.value == b5.value)

            //         |
            //         |
            //  x x x  |
        || b6.value != -1
            && (b6.value == b7.value && b6.value == b8.value))
}

// Displays text saying which player won
function win(play) {
    const w = document.createElement('h3');

    // Player 2 wins if it is x's (player 1's) turn after the winning turn
    if(play.x) {
        w.textContent = "Player 2 wins!";
        winText.appendChild(w);
    }

    // Player 1 wins if it is o's (player 2's) turn after the winning turn
    else {
        w.textContent = "Player 1 wins!";
        winText.appendChild(w);
    }
}

// Checks if there is a draw
function checkDraw() {

    // If there exists a box that is empty, return false
    for(i of boxes) {
        if(i.value == -1)
            return false;
    }

    // If all of the boxes are full, return true
    return true;
}

// Displays text saying that the game has been drawn
function draw() {
    const d = document.createElement('h3');
    d.textContent = "It's a draw!"
    winText.appendChild(d);
}

// Reset the board
function reset() {
    console.log('reset');
    
    // For each box in the boxes array remove its child if it has one, set it to unmarked, and set it's value to -1
    for(box of boxes) {
        if(box.firstChild)
            box.removeChild(box.firstChild);
        box.marked = false;
        box.value = -1;
    }

    // Remove the text that displays which player won if there is any
    if(winText.firstChild)
        winText.removeChild(winText.firstChild);

    // Set it to x's turn
    player.x = true;
}