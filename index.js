import PromptSync from "prompt-sync";
const prompt = PromptSync();

const hat = "🍖";
const hole = "👿";
const path = "🌿";
const character = "🐷";

class Game {
  constructor(field, startX, startY) {
    this.field = field;
    this.x = startX;
    this.y = startY;
  }
  printField() {
    console.log(this.field.map((row) => row.join("")).join("\n"));
  }
  //In computer always start from Topleft corner
  moveDown() {
    this.field[this.y][this.x] = path;
    this.y = this.y + 1;
  }
  moveUp() {
    this.field[this.y][this.x] = path;
    this.y = this.y - 1;
  }
  moveLeft() {
    this.field[this.y][this.x] = path;
    this.x = this.x - 1;
  }
  moveRight() {
    this.field[this.y][this.x] = path;
    this.x = this.x + 1;
  }

  play() {
    let playing = true;

    while (playing) {
      this.printField();

      const direction = prompt(
        "Where should Hawk-chan go? (U=UP, D=DOWN, L=LEFT, R=RIGHT):",
      ).toUpperCase();

      if (direction === "U") {
        this.moveUp();
      } else if (direction === "D") {
        this.moveDown();
      } else if (direction === "L") {
        this.moveLeft();
      } else if (direction === "R") {
        this.moveRight();
      } else {
        console.log("Eh! Hawk-chan can't go that way!");
      }

      if (
        this.y < 0 ||
        this.y >= this.field.length ||
        this.x < 0 ||
        this.x >= this.field[0].length
      ) {
        console.log("🚫 You went out of bounds! Game Over.");
        playing = false;
        break;
      } else if (this.field[this.y][this.x] === hole) {
        console.log("💀 You Got Beaten by a Demon Game Over.");
        playing = false;
        break;
      } else if (this.field[this.y][this.x] === hat) {
        console.log("🎉 Hawk-Chan Found a Left Over Food! You win!");
        playing = false;
        break;
      }
      this.field[this.y][this.x] = character;
    }
  }

  static generateField(height, width, percentage) {
    const newField = [];

    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        row.push(path);
      }
      newField.push(row);
    }

    const startY = Math.floor(Math.random() * height);
    const startX = Math.floor(Math.random() * width);
    newField[startY][startX] = character;

    const holeCount = Math.floor(height * width * percentage);
    for (let i = 0; i < holeCount; i++) {
      let randomY = Math.floor(Math.random() * height);
      let randomX = Math.floor(Math.random() * width);

      if (newField[randomY][randomX] === path) {
        newField[randomY][randomX] = hole;
      } else {
        i--;
      }
    }

    let hatPlaced = false;
    while (!hatPlaced) {
      let randomY = Math.floor(Math.random() * height);
      let randomX = Math.floor(Math.random() * width);

      if (newField[randomY][randomX] === path) {
        newField[randomY][randomX] = hat;
        hatPlaced = true;
      }
    }

    return { field: newField, startX, startY };
  }
}

// const myMap = [
//   [character, path, path],
//   [path, hole, path],
//   [path, path, hat],
// ];

const { field, startX, startY } = Game.generateField(5, 5, 0.1);
const myGame = new Game(field, startX, startY);
myGame.play();
