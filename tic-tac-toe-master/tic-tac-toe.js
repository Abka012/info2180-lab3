document.addEventListener('DOMContentLoaded', function() {
    // Select all the square elements in the grid
    const squares = document.querySelectorAll('#board div');

    // Loop through each square element and add the appropriate class
    squares.forEach(square => {
        // Add your styling class here
        square.classList.add('square');
    });
});
