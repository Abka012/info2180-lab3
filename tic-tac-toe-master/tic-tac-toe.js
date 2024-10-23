document.addEventListener('DOMContentLoaded', function() {

    const squares = document.querySelectorAll('#board div');
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let gameState = Array(9).fill(null);
    let currentPlayer = "X";

    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return true;
            }
        }
        return false;
    }

    squares.forEach((square, i) => {
        square.classList.add('square');
        square.addEventListener("click", function() {
            if (gameState[i] === null && !checkWinner()) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[i] = currentPlayer;
                if (checkWinner()) {
                    const statusDiv = document.getElementById("status");
                    statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                    statusDiv.classList.add("you-won");
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
        square.addEventListener("mouseover", function() {
            if (gameState[i] === null) {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
    });
});
