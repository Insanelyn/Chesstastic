import React, { Component } from 'react';
const Chessground = require("chessground").Chessground;

class GameBoardComponent extends Component {
  onComponentDidMount() {
    const ground = Chessground(document.body, config);
  }
  render() {
    return (
      <div>
        GameBoardComponent
      </div>
    );
  }
}

export default GameBoardComponent;
