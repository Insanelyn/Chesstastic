class Instance {
  constructor(game, status, turn, plrs) {
    this.game = game;
    this.status = status;
    this.turn = turn;    
    this.plrs = plrs;
  }
}

let que = []; 

module.exports = {
  Instance,
  que
};

