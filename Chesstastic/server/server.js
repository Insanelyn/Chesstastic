// *************************************************************************************
//
// BACKEND FOR LICHESS-ISH CHESS GAME PLATFORM
//
// 
//
// *************************************************************************************

// ---------------------------------------------------------------------------------------
// dependencies --------------------------------------------------------------------------
const express = require('express');
const app = express();
const randomFullname = require('random-fullName');
const Chess = require('chess.js').Chess;

// ---------------------------------------------------------------------------------------
// helpers - mocked data -----------------------------------------------------------------
function mockSeekUsers(n) {

	const mockTime = () => {
		const val1 = randMinMax(1, 30);
		const val2 = randMinMax(1, 30);
		return `${val1}+${val2}`;
	};
	const randMinMax = (min, max) => Math.floor((Math.random() * Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
	const isRanked = () => randMinMax(0, 2) === 0 ? "Ej rankad" : "Raknad";

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

app.get("/seeksAPI", (req, res) => {
	const mockData = mockSeekUsers(50);
	const asJSON = JSON.stringify(mockData);
	res.json(asJSON);
});
// ---------------------------------------------------------------------------------------
// server --------------------------------------------------------------------------------
const PORT = 5000;

app.use(express.static(`${__dirname}/public`));

const server = app.listen(PORT, () => {
	console.log(`Server listens only to port ${PORT}.`);
});

app.get("/", (req, res) => {
	res.redirect("localhost:8080");

});

// ---------------------------------------------------------------------------------------
// socket.io -----------------------------------------------------------------------------

const io = require("socket.io")(server);

const lobby = io.of('/lobby');

let tempRooms = 666;

let data = {};

let gameRooms = {};
let gameRoomsData = {};

let wantsToPlay = [];

io.on('connection', (socket) => {   

    let thisRoom = 'X';
    

    socket.on('SWITCH_ROOM', (room) => {
      if(!wantsToPlay.includes(socket.id)) {
          wantsToPlay.push(socket.id);
          let gameRoom = tempRooms.toString(); 
          socket.join(gameRoom);
          thisRoom = gameRoom;

          if(wantsToPlay.length > 1) {
            io.sockets.in(thisRoom).emit('ENTER_ROOM', gameRoom);
            io.sockets.in(thisRoom).emit('NEW_MSG', { message: `${wantsToPlay[0]} vs ${wantsToPlay[1]}`, user: socket.id });   
            io.sockets.in(thisRoom).emit('PLRS', { w: wantsToPlay[0], b: wantsToPlay[1], turn: "white", status: "white is up" });
            wantsToPlay = []; 
            tempRooms++;  
            gameRooms[gameRoom] = new Chess();
            gameRoomsData[gameRoom] = {
              status: "white is up",
              turn: "white",
              plrs: { w: wantsToPlay[0], b: wantsToPlay[1] }
            };
          } else {
            io.sockets.in(thisRoom).emit('NEW_MSG', { message: `${wantsToPlay[0]} awaits a partner`, user: socket.id }); 
          }
      }
    });
    
    socket.on('MAKE_MOVE', (data) => {
       let validMoves = gameRooms[thisRoom].moves();

      let validMovesLen = validMoves.length;
       
      const randMinMax = (min, max) => Math.floor((Math.random() * Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
      let rV = randMinMax(0, validMovesLen);
      let move = gameRooms[thisRoom].move(validMoves[rV]); 

      gameRooms[thisRoom].turn();
     
      if (gameRooms[thisRoom].in_checkmate() === true) {
        gameRoomsData[thisRoom].status = "CHECKMATE!";
      } else if (gameRooms[thisRoom].in_draw() === true) {
        gameRoomsData[thisRoom].status = 'DRAW!';
      } else {
        gameRoomsData[thisRoom].turn === "white"? gameRoomsData[thisRoom].turn = "black": gameRoomsData[thisRoom].turn = "white";
        gameRoomsData[thisRoom].status = `${gameRoomsData[thisRoom].turn} is up!`;
        if (gameRooms[thisRoom].in_check() === true) {
          gameRoomsData[thisRoom].status = 'CHECK!';        
        }
      }

      io.sockets.in(thisRoom).emit('CHESS_ACTION', { turn: gameRoomsData[thisRoom].turn, board: gameRooms[thisRoom].ascii(), status: gameRoomsData[thisRoom].status }); 
 
    });

    socket.on('MSG_SEND', (msg) => {
      io.sockets.in(thisRoom).emit('NEW_MSG', { message: msg, user: socket.id });   
    });

  setInterval(() => {
	socket.emit('MOCKDATA_SEEK', mockSeekUsers(30));
  }, 1500);
});

