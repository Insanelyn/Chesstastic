/*
ANTECKNINGAR

Should be done with Jest!

As you can notice this uses object, not array as it's basic structure...

I believe this is wise, if the application should be able to scale well.

The id shoud be replace with some kind of hash! Perhaps we could use new Set(...)

---

const rooms = roomMeths.newRoom({}, {plr1: {username: "hey"}, plr2: {username: "what"}});
const newRooms = roomMeths.newRoom(rooms, {plr1: {username: "hey2"}, plr2: {username: "what2"}});
console.log(newRooms);
---------------------------
OUTPUT:
0: {…}
​​
chatMsgs: Array []
​​
id: 0
​​
users: Object { plr1: "hey", plr2: "what" }
​​
<prototype>: Object { … }
​
1: {…}
​​
chatMsgs: Array []
​​
id: 1
​​
users: Object { plr1: "hey2", plr2: "what2" }
------------------------------

let room1 = { ...newRooms["0"]};
room1.users.plr1 = "TEST";

const newRooms2 = roomMeths.updateRoom(newRooms, room1);
console.log(newRooms2)
-----------------------------
OUTPUT:
0: {…}
​​
chatMsgs: Array []
​​
id: 0
​​
users: Object { plr1: "TEST", plr2: "what" }
​​
<prototype>: Object { … }
​
1: {…}
​​
chatMsgs: Array []
​​
id: 1
​​
users: Object { plr1: "hey2", plr2: "what2" }
-------------------------------------------




const id = newRooms["0"].id.toString();
const newRooms3 = roomMeths.deleteRoom(newRooms, id)

console.log(newRooms3)
-----------------------------------------
OUTPUT:
1: {…}
​​
chatMsgs: Array []
​​
id: 1
​​
users: Object { plr1: "hey2", plr2: "what2" }
------------------------------------------
*/



/*

while (!chess.game_over()) {
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)];
  chess.move(move);
}
console.log(chess.pgn());


*/


const express = require('express');
const app = express();
const randomFullname = require('random-fullName');
const chess = require('chess');

const PORT = 5000;

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

const mockRoomFabric = (n) => {

	let mockedData = {};
	for (let i = 0; i < n; i++) {
		const user1 = randomFullname();
		const user2 = randomFullname();
		mockedData = roomMeths.newRoom(mockedData, {
			plr1: {
				username: user1
			},
			plr2: {
				username: user2
			}
		});
	}
	return mockedData;
};
let mockedRooms = mockRoomFabric(30);



app.use(express.static(`${__dirname}/public`));

const server = app.listen(PORT, () => {
	console.log(`Server listens only to port ${PORT}, and to ONLY that one.`);
});

app.get("/", (req, res) => {
	res.redirect("localhost:8080");

});

app.get("/seeksAPI", (req, res) => {
	const mockData = mockSeekUsers(50);
	const asJSON = JSON.stringify(mockData);
	res.json(asJSON);
});

const io = require("socket.io")(server);

io.sockets.on('connection', (socket) => {

	// these function will be implenteded later on:
	socket.on('DISCONNECTED_USER', function(data) {}); // should be linked to the roomMeths.

	socket.username = "anonym spelare";

	socket.on('CHANGE_USERNAME', (data) => {
		socket.username = data.username; // should be connected to the datastruct by look up.
	})

	// ---------------------------------------------

	setInterval(() => {
		socket.emit('MOCKDATA_SEEK', mockSeekUsers(30));
		const newMockGameData = mockChessData(mockedRooms);
		socket.emit("MOCKDATA_GAMEDATA", newMockGameData);
	}, 1500);
});

function mockChessData(rooms) {

	// let gameData = [];
	// for (let room of Object.values(rooms)) {
	// 	gameData.push(JSON.stringify(room.chessGame));
	// }
	//return gameData;
	return rooms;
}

function mockSeekUsers(n) {

	const mockTime = () => {
		const val1 = randMinMax(1, 30);
		const val2 = randMinMax(1, 30);
		return `${val1}+${val2}`;
	};
	const randMinMax = (min, max) => Math.floor((Math.random() * Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
	const isRanked = () => randMinMax(0, 2) === 0 ? "Ej rankat" : "Raknat";

	let users = [];

	for (let i = 0; i < n; i++) {
		const userType = randMinMax(0, 2);
		let user = userType === 0 ? "anonymous" : randomFullname({
			lastName: false
		}).toLowerCase();
		const time = mockTime();

		const rating = randMinMax(100, 2400);
		const ranked = isRanked();
		const collectUsers = {
			user,
			time,
			rating,
			ranked
		};
		users = [...users, collectUsers];
	}
	return users;
}