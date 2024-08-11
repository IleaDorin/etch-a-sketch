
let color = "black";
let shift = false;

document.addEventListener('keydown', function (event) {
    if (event.key === 'Shift') {
        shift = true;
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'Shift') {
        shift = false;
    }
});


function populateBoard(size) {
    let board = document.querySelector('.board');
    // clear the board
    let squares = document.querySelectorAll('.board div');
    squares.forEach(square => square.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);
function changeSize(input) {
    if (input > 100 || input < 2) {
        alert('Please enter a number between 2 and 100');
        return;
    }
    populateBoard(input);
}

function colorSquare() {
    if (shift)
        this.style.backgroundColor = color;
}

function changeColor(newColor) {
    // TODO: Add validation
    color = newColor;
}

function clearBoard() {
    let squares = document.querySelectorAll('.board div');
    squares.forEach(square => square.style.backgroundColor = 'white');
}

