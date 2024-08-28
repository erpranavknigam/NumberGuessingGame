const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function NumberGuessingGame(number, chances) {
    let totalChances = 0;

    function askGuess() {
        if (totalChances >= chances) {
            console.log("You've run out of chances! Better luck next time.");
            console.log("Do you want to play again? 1 for yes and 0 for no:")
            readline.question("", playAgain => {
                if (playAgain == 1) {
                    Main()
                } else {
                    console.log("Thank you for playing!!")
                    readline.close(); // Close the readline interface
                    process.exit();   // Exit the program
                    return
                }
            })
            return
        }

        readline.question("Enter a number between 1 and 100:\n", input => {
            if (Number(input) === number) {
                console.log("You have guessed the number correctly....🎉🎉");
                console.log("Do you want to play again? 1 for yes and 0 for no:")
                readline.question("", playAgain => {
                    if (playAgain == 1) {
                        Main()
                    } else {
                        console.log("Thank you for playing!!")
                        readline.close(); // Close the readline interface
                        process.exit();   // Exit the program
                        return
                    }
                })
            } else {
                totalChances++;
                console.log(`Incorrect guess. You have ${chances - totalChances} chances left.`)
                if (input < number) {
                    console.log("Guessed number is less than actual number")
                }
                if (input > number) {
                    console.log("Guessed number is greater than actual number")
                }
                askGuess(); // Recursively ask for the next guess
            }
        });
    }

    askGuess(); // Start the first guess
}


function Main() {
    readline.question("Enter 1 to Play and 0 to Quit.", (input) => {
        if (input === '1') {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            console.log("Difficulty Levels:\n1)Easy (10 Chances)\n2)Medium (5 Chances)\n3)Hard (3 Chances)")
            const difficulty = readline.question("Select Difficulty Level?", diff => {
                if (Number(diff) !== 1 && Number(diff) !== 2 && Number(diff) !== 3) {
                    console.log("Invalid Input")
                    Main()
                } else {
                    if (diff == "1") {
                        const chances = 10
                        console.log("You have selected Easy Level and Have 10 Chances to guess correct answer")
                        NumberGuessingGame(randomNumber, chances)
                    }
                    else if (diff == "2") {
                        const chances = 5
                        console.log("You have selected Medium Level and Have 5 Chances to guess correct answer")
                        NumberGuessingGame(randomNumber, chances)
                    } else {
                        const chances = 3
                        console.log("You have selected Hard Level and Have 3 Chances to guess correct answer")
                        NumberGuessingGame(randomNumber, chances)
                    }
                }
            })
        } else {
            console.log("Thank you for playing!!")
            readline.close(); // Close the readline interface
            process.exit();   // Exit the program
        }
    })
}

console.log("Welcome to the Number Guessing Game!")
console.log("I'm thinking of a number between 1 and 100.")
Main()