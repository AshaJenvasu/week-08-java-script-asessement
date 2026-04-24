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

6. Random Field Generation

After finishing the movement and logic, the trickiest part was figuring out how to randomly generate a fresh map every time the game starts.

First, I thought about what actually needs to be randomized — just 3 things: Hawk-chan's starting position, the Demons (holes), and the Leftover Food (hat).

Build an empty field first
Used a nested loop height × width and filled with path. This gives us a clean 2D Array ready to work with.

Random Hawk-chan's position
Used Math.floor(Math.random() \* height/width) to randomize startY and startX, then placed the character there. Also returned startX and startY out of the method because the constructor needs to know where Hawk-chan starts.

Random Demons based on percentage
Calculated the total number of holes using Math.floor(height _ width _ percentage), then kept randomizing positions in a loop. The tricky part is if the randomized isn't a path (e.g. it lands on Hawk-chan's position), we do i-- to not count that and force it to retry until all holes are placed correctly.

Lastly Random the Leftover Food (hat)
Used a while loop that keeps running until it finds an empty path, then places the hat there. This guarantees the hat never overlaps with the character or any hole.
