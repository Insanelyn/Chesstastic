class Instance {
  constructor(game, status, turn, plrs) {
    this.game = game;
    this.status = status;
    this.turn = turn;    
    this.plrs = plrs;
  }
}

let que = []; 


const roomMeths = {
	newRoom(oldRooms = {}, {
		plr1,
		plr2
	}) {
		const room = {
			id: Object.keys(oldRooms).length,
			users: {
				plr1: plr1.username,
				plr2: plr2.username,
			},
			chatMsgs: [],
			chessGame: chess.create()
		};
		return { ...oldRooms,
			[room.id]: room
		};
	},
	deleteRoom(oldRooms, delRoomId) {
		const filtered = Object.keys(oldRooms)
			.filter(key => key !== delRoomId)
			.reduce((obj, key) => {
				obj[key] = oldRooms[key];
				return obj;
			}, {});
		return filtered;
	},
	updateRoom(oldRooms, roomToUpdate) {
		const updatedRoomsTemp = this.deleteRoom(oldRooms, roomToUpdate.id)
		return { ...updatedRoomsTemp,
			[roomToUpdate.id]: roomToUpdate
		}
	}
};

module.exports = {
  Instance,
  que,
  roomMeths
};


