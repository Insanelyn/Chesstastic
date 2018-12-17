import React, { Component } from 'react';

import GameBoardComponent from './GameBoardComponent';
import GameInfoComponent from './GameInfoComponent';
import GameChatComponent from './GameChatComponent';
import PlayerHistoryComponent from './PlayerHistoryComponent';

class GameComponent extends Component {
  render() {
    return (
      <div>
        <div>
            <GameChatComponent />
            <GameBoardComponent />
            <GameInfoComponent />
        </div>
        <div>
            <PlayerHistoryComponent />
        </div>
      </div>
    );
  }
}

export default GameComponent;
