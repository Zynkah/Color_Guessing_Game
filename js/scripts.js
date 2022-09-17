const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'white', 'red', 'yellow'];
let numTries = 0;

function runGame() {
    let guess = '';
    let correct = false;

    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex];
    console.log(target);

    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.sort().join(', ') +
            '\n\nWhat color am I thinking of?\n');
        if (guess === null) {
            alert('Better luck next time!')
            return;
        }
        numTries += 1;
        correct = checkGuess(guess.toLowerCase(), target);
    } while (!correct);

    alert('Congrats you chose the correct color after ' + numTries + ' tries!');
    document.body.style.background = guess;
}


function checkGuess(guess, target) {
    let correct = false;

    if (!COLORS_ARRAY.includes(guess)) {
        alert('This color is not on the list! This is try number ' + numTries + '!');
    } else if (guess > target) {
        alert('The color is a higher target! This is try number ' + numTries + '!');
    } else if (guess < target) {
        alert('The color is a lower target! This is try number ' + numTries + '!');
    } else {
        correct = true;
    }
    return correct;
}