Theme & Objective
I decided to use the theme from the anime "The Seven Deadly Sins", featuring the character Hawk-chan, a pig who loves to find leftover food!

Game Assets (Characters & Map Elements)

Actor (Hawk-chan): 🐷

Hat (Leftover food): 🍖

Holes (Demons): 👿

Path (Field): 🌿

Thinking Process & Logic Breakdown

1. Data Structure
   To visualize this gameplay in the terminal, it is similar to a 2D chessboard. Therefore, a 2D Array is the perfect data structure to indicate the coordinates [y][x] of each element (actor, hat, holes, and paths) in the game.

2. Setup & Dependencies
   We import the external prompt-sync library. Initializing it into the prompt variable allows us to pause the program's execution and wait for the user to type their command synchronously in the terminal.

3. Rendering the Map

I created a Game class to act as a blueprint.

The constructor accepts a field parameter so we can input different map layouts dynamically.

To render the 2D Array beautifully in the console, I utilized the .map() method to iterate through the rows, .join('') to concatenate elements within the same row without spaces, and .join('\n') to stack the rows vertically.

4. Movement Logic

We use prompt() to catch the player's input (e.g., 'U' for Up).

Applying .toUpperCase() ensures input consistency and reduces case-sensitive errors.

To move Hawk-chan, we update the array coordinates based on a Top-Left (0,0) origin. For example, moving Up means decrementing the row index: this.y - 1.

5. Game Validations (Win/Lose Conditions)
   Before updating the map with the character's new position (this.field[this.y][this.x] = character), we must check for these conditions:

Out of Bounds (Lose): If the user walks outside the map (e.g., this.y < 0 or this.x >= width), it triggers a Game Over message, sets playing = false, and uses break to exit the loop.

Demons (Lose): Same logic applies; if Hawk-chan lands on a hole (👿), the game ends.

Leftover Food (Win): If the new coordinate matches the hat (🍖), a congratulatory message is displayed, and the loop breaks to end the game.
