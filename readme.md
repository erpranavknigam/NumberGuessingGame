
# Number Guessing Game

--------------------------------------------------------------------------------------------------------------------------------------
Welcome to the Number Guessing Game! This is a command-line game where you try to guess a randomly generated number between 1 and 100. The game offers different difficulty levels, each with a different number of allowed guesses.

### Project URL
[![Project Page](https://img.shields.io/badge/Project%20Page-Click%20Here-brightgreen)](https://roadmap.sh/projects/number-guessing-game)


## How to Play
1. *Start the Game*: Run the program, and you will be welcomed with an introduction to the game.

2. *Choose an Option*:
    * Enter 1 to start the game.
    * Enter 0 to quit the game.

3. Select Difficulty Level:

    * 1 for Easy (10 chances)
    * 2 for Medium (5 chances)
    * 3 for Hard (3 chances)

4. Make Your Guesses:

    ``` Enter a number between 1 and 100.
    If your guess is correct, you win the game!
    If your guess is incorrect, the game will tell you whether your guess was too high or too low.
    The game continues until you guess correctly or run out of chances.
    ```

5. Play Again or Quit:

    ``` After each game, you will be prompted to play again or quit.
    Enter 1 to play again or 0 to quit the game ```

## Example

```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
Enter 1 to Play and 0 to Quit.1
Difficulty Levels:
1. Easy (10 Chances)
2. Medium (5 Chances)
3. Hard (3 Chances)
Select Difficulty Level?2
You have selected Medium Level and Have 5 Chances to guess the correct answer
Enter a number between 1 and 100:
50
Incorrect guess. You have 4 chances left.
Guessed number is less than actual number
Enter a number between 1 and 100:
75
Incorrect guess. You have 3 chances left.
Guessed number is greater than actual number
Enter a number between 1 and 100:
60
You have guessed the number correctly....🎉🎉
Do you want to play again? 1 for yes and 0 for no:0
Thank you for playing!!

```

## Installation and Setup

Make sure you have Node.js installed on your machine.

1. Clone this repository using:  
```
git clone https://github.com/erpranavknigam/NumberGuessingGame.git
cd <repository-folder>
```
2. Run the game using the following command:
    `node index.js`


## Project Structure
* index.js: The main file containing the game logic.


## Features

1. *Difficulty Levels*: Choose between Easy, Medium, and Hard difficulty levels.
2. *Hints*: Get hints whether your guess is too high or too low.
3. *Replay Option*: Play the game as many times as you want without restarting the program.