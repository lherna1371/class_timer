import React from "react";
import './Game.css';


export default class Game extends React.Component {
  constructor(props) {
    super(props);

    const base_game = [
      " ________________ \n",
      "|  _  |  _____|  |\n",
      "| | | | |  ____  |\n",
      "|___|     |___ | |\n",
      "|  _   _|______| |\n",
      "|_|  _|  ________|\n",
      "____|_____________\n",
    ];
    let game = this.deepcopy(base_game);
    game[base_game.length - 1] = this.addXToRow(game[base_game.length - 1], 0);

    if (this.state === undefined || this.state.game === undefined) {
      this.state = {
        base_game: base_game,
        game: game,
        position: [base_game.length - 1, 0],
      };
    }

    this.movePosition = this.movePosition.bind(this);
    this.pressKey = this.pressKey.bind(this);
    this.checkBounds = this.checkBounds.bind(this);
    this.changeBoard = this.changeBoard.bind(this);
    this.changeBoard();

    // Move within the game
    document.onkeydown = this.pressKey;
  }

  deepcopy(in_array) {
    let copy = [];
    for (let index = 0; index < in_array.length; index++) {
      copy.push(in_array[index]);
    }
    return copy;
  }

  addXToRow(row, index) {
    return row.substring(0, index) + "x" + row.substring(index + 1);
  }

  changeBoard() {
    let temp_board = this.deepcopy(this.state.base_game);
    let row_index = this.state.position[0];
    let col_index = this.state.position[1];
    let new_row = this.addXToRow(temp_board[row_index], col_index);
    temp_board[row_index] = new_row;
    this.setState({game: temp_board});
  }

  checkBounds(row_change, col_change) {
    let num_of_rows = this.state.game.length;
    let num_of_cols = this.state.game[0].length;
    let row_index = this.state.position[0] + row_change;
    let col_index = this.state.position[1] + col_change;

    // Check that the indices in this.state.position are in bounds
    if (row_index > num_of_rows - 1) {
      return false;
    }
    if (row_index < 0) {
      return false;
    }
    if (col_index > num_of_cols - 2) { // Exclude the '\n' character
      return false;
    }
    if (col_index < 0) {
      return false;
    }

    // Check not running into a wall
    let char_at_new_position = this.state.game[row_index][col_index];
    if (char_at_new_position === "|") {
      return false;
    }

    // Check not running into a floor
    if (row_change === -1 && char_at_new_position === "_") { // going up
      return false;
    }
    let char_at_curr_position = this.state.base_game[this.state.position[0]][this.state.position[1]];
    if (row_change === 1 && char_at_curr_position === "_") {// going down
      return false;
    }

    // Check if won the game!
    if (row_index === num_of_rows - 1 && col_index === num_of_cols - 2) {
      alert("You win! Congrats!");
    }

    return true;
  }

  movePosition(row_change, col_change) {
    // Check that you can move
    if (this.checkBounds(row_change, col_change) === false) {
      return; // Can't move
    }

    // Change the position in state
    this.setState({
      position:[
        this.state.position[0] + row_change,
        this.state.position[1] + col_change,
      ]
    });
    this.changeBoard();
  }

  pressKey(e) {
    // Move within the game
    switch (e.keyCode) {
      case 37:
        // left
        this.movePosition(0, -1);
        break;
      case 38:
        // up
        this.movePosition(-1, 0);
        break;
      case 39:
        // right
        this.movePosition(0, 1);
        break;
      case 40:
        // down
        this.movePosition(1, 0);
        break;
      default:
        break;
    }
  }

  render() {
    if (this.props.link !== "game") {
      return (
        <div/>
      );
    }
    return (
      <div className="title">
        <h4 className="header">Game:</h4>
        <pre className="game">{this.state.game}</pre>
      </div>
    );
  }
}
