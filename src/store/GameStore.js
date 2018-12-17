import {BehaviorSubject} from 'rxjs';


const defaultState = {

};
const subject = new BehaviorSubject();

class GameStore {
    constructor() {
        console.log('store');
    }
}

export default new GameStore();
