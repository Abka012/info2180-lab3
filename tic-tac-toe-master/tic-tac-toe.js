document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');

    let gameState = Array(9).fill(null);
    let currentPlayer = "X";

    squares.forEach((square, i) => {
        square.classList.add('square');
        square.addEventListener("click", function() {
            if (gameState[i] === null) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[i] = currentPlayer;
                currentPlayer = currentPlayer === "X" ? "O" : "X";
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
