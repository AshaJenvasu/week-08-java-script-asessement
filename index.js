import PromptSync from "prompt-sync";
const prompt = PromptSync();

const hat = "🍖";
const hole = "👿";
const path = "🌿";
const character = "🐷";

class Game {
  constructor(field) {
    this.field = field;
    this.x = 0;
    this.y = 0;
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
}

const myMap = [
  [character, path, path],
  [path, hole, path],
  [path, path, hat],
];

const myGame = new Game(myMap);
myGame.play();
