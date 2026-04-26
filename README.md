# 🐷 Hawk-chan's Scraps Hunt (JS Assessment)

An interactive terminal-based game built with **Vanilla JavaScript** using **OOP (Object-Oriented Programming)** principles. Help Hawk-chan from *The Seven Deadly Sins* find his favorite leftover food while avoiding dangerous demons!

---

## 🎮 Game Concept & Theme
- **Protagonist**: Hawk-chan (🐷)
- **Objective**: Find the Leftover Food (🍖)
- **Obstacles**: Beware of Demons (👿) lurking in the field.
- **Environment**: Lush green fields (🌿)

---

## 📑 Core Logic & Thinking Process

### 1. Data Structure: 2D Array 🗺️
The game environment is modeled as a **2-dimensional array**, representing a grid coordinate system $[y][x]$. This allows for precise tracking of the character's movement and item placement.



### 2. OOP Architecture 🏗️
I utilized a `class`-based approach to keep the code modular and clean:
- **Constructor**: Initializes the field and tracks Hawk-chan’s current $(x, y)$ position.
- **Methods**: Dedicated functions for movement (`moveUp`, `moveDown`, etc.) and field rendering.
- **Static Method**: `generateField` allows for dynamic map creation with customizable difficulty (percentage of holes).

### 3. Procedural Generation 🎲
To make the game replayable, I implemented a random map generator:
- **Starting Position**: Randomly assigned at the start of each game.
- **Hole Placement**: Calculated based on a percentage of the total area to ensure fair difficulty.
- **Overlap Prevention**: Includes logic to ensure the character, holes, and the hat never occupy the same cell during generation.

---

## 📁 Repository Structure

- `index.js`: The main game file containing the `Game` class and execution logic.
- `package.json`: Manages the `prompt-sync` dependency for synchronous terminal input.

---

## 💻 Code Highlight: Dynamic Rendering

```javascript
// Converting the 2D Array into a visual terminal grid
printField() {
  console.log(this.field.map((row) => row.join("")).join("\n"));
}
