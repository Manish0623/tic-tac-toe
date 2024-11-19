let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turnX = true; // player X, O
let gameOver = false; // flag to stop the game after win

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (gameOver) return; // stop further clicks after a win
        console.log("clicked");

        if (turnX) { // player X
            box.innerText = "X";
        } else { // player O
            box.innerText = "O";
        }

        box.disabled = true;
        turnX = !turnX; // toggle between X and O

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // Check if all three boxes in the pattern are not empty and are the same
        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            gameOver = true; // set flag to stop further clicks
            console.log("Winner: " + pos1Val);
            alert("Player " + pos1Val + " wins!");
            return;
        }
    }

    // Optionally: Check for a draw
    if ([...boxes].every(box => box.innerText !== "") && !gameOver) {
        alert("It's a draw!");
        gameOver = true;
    }
};

// Reset functionality (optional)
resetbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    turnX = true;
    gameOver = false;
});
