document.addEventListener('DOMContentLoaded', function() {
    // Select all the square elements in the grid
    const squares = document.querySelectorAll('#board div');

    // Array to keep track of the state of each square (null for empty, "X" or "O" for players)
    let gameState = Array(9).fill(null);
    
    // Variable to track whose turn it is (X goes first)
    let currentPlayer = "X";

    // Loop through each square element and add the appropriate class
    squares.forEach((square, i) => {
        // Add your styling class here
        square.classList.add('square');
        // Add event listener to each square
        square.addEventListener("click", function() {
            // Check if the square is already filled
            if (gameState[i] === null) {
                // Mark the square with the current player's symbol (X or O)
                square.textContent = currentPlayer;
                
                // Add the appropriate class for styling
                square.classList.add(currentPlayer);
                
                // Update the game state array
                gameState[i] = currentPlayer;
                
                // Switch to the next player
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        });
    });
});
