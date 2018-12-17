import {BehaviorSubject} from 'rxjs';
const Chess = require('chess.js').Chess;


const defaultState = {
};

const subject = new BehaviorSubject();

class GameStore {
    constructor() {
        this.state = Object.assign({}, defaultState, {});
    }

}

export default new GameStore();
