First of all I will use the theme from anime "The Seven Deadly Sins" character Hawk-chan a pig that willing to find left over food!

What we need for the game?
Hawk-chan: 🐷
Hat (Left over food): 🍖
Holes (Demon): 👿
Path: 🌿

To imagine this game play in the terminal it is like Chess in 2d form so we can use Array to indicate the location of each element in the game such as the where should we put the Hat.

Rendering: will use Array .join() function to stick as one row and use .join('\n') to make a new column line.

Movement: we can use on prompt-sync catch when player type U it's mean going up also using to Upper case can help reducing mistake. To change row and column we will set the array like this [0][0] mean row0 column0 and to move Hawk-chan we will need to make the change of field[y][x] e.g. y - 1 to move up

Win condition: 🍖
Lose condition: 👿 or walk outside of the map

Dynamic Map Generation: Not yet we will try normal map first
