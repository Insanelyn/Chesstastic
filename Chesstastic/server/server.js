// ***************************************************************************************
//
//                    >>> BACKEND FOR CHESSTASTIC <<<
//
//
// ***************************************************************************************

// ---------------------------------------------------------------------------------------
// dependencies --------------------------------------------------------------------------
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const randomFullname = require('random-fullName');
const Chess = require('chess.js').Chess;
let { Instance, que } = require('./datastruct.js');
let { 
  trylogin,
  updateHistory,
  findByUsername,
  findById,
  findAllUsers,
  createUser 
} = require('./controllers.js');

// ---------------------------------------------------------------------------------------
// helpers (mock) ------------------------------------------------------------------------
const randMinMax = (min, max) => Math.floor((Math.random() * Math.floor(max) - Math.ceil(min)) + Math.ceil(min));

function mockSeekUsers(n) {

	const mockTime = () => {
		const val1 = randMinMax(1, 30);
		const val2 = randMinMax(1, 30);
		return `${val1}+${val2}`;
	};

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

let tempRoomName = 666;
let rooms = {};
let usersInQue = que;

io.on('connection', (socket) => {  
  
    let thisRoom = 'X';
    
    socket.on('SWITCH_ROOM', (room) => {
      if(!usersInQue.includes(socket.id)) {
          usersInQue.push(socket.id);
          let gameRoom = tempRoomName.toString(); 
          socket.join(gameRoom);
          thisRoom = gameRoom;

          if(usersInQue.length > 1) {
           
            io.sockets.in(thisRoom).emit('ENTER_ROOM', { 
              room: gameRoom
            }); 
            io.sockets.in(thisRoom).emit('NEW_MSG', { 
              message: `${usersInQue[0]} vs ${usersInQue[1]}`, 
              user: socket.id, 
              color: "black",
            });   
            io.sockets.in(thisRoom).emit('PLRS', { 
              w: usersInQue[0], 
              b: usersInQue[1], 
              turn: "white", 
              status: "white is up" 
            });

            usersInQue = []; 
            tempRoomName++;  

            rooms[gameRoom] = new Instance(
              new Chess,
              "white is up",
              "white",
              { w: usersInQue[0], b: usersInQue[1] }
            );
          } else {
            io.sockets.in(thisRoom).emit('NEW_MSG', { 
              message: `${usersInQue[0]} awaits a partner`, 
              user: socket.id,
              color: "white",  
              }); 
          }
      }
    });
    
  socket.on('MAKE_MOVE', (data) => { // hantera om den som trycker på "move" INTE gör ett drag

      rooms[thisRoom].game.load(data.fen);
      rooms[thisRoom].game.turn();

      let thisPlr = rooms[thisRoom].turn === "white"?  
        "black"
        :
        "white";

      rooms[thisRoom].turn = thisPlr;
     
      if (rooms[thisRoom].game.in_checkmate() === true) {
        rooms[thisRoom].status = "CHECKMATE!";
      } else if (rooms[thisRoom].game.in_draw() === true) {
        rooms[thisRoom].status = 'DRAW!';
      } else if (rooms[thisRoom].game.in_check() === true) {
          rooms[thisRoom].status = 'CHECK!';    
      } else {
        rooms[thisRoom].status = `${rooms[thisRoom].turn} is up!`;
      }
       io.sockets.in(thisRoom).emit('CHESS_ACTION', { 
         turn: rooms[thisRoom].turn, 
         board: rooms[thisRoom].game.ascii(), 
         status: rooms[thisRoom].status,
         fen: rooms[thisRoom].game.fen(),
         move: data.move
       }); 
    });

    socket.on('MSG_SEND', (msg) => {
      io.sockets.in(thisRoom).emit('NEW_MSG', { 
        message: msg, 
        user: socket.user 
      });   
    });

    socket.on('LOGIN_SEND', (login) => {
        io.sockets.in(thisRoom).emit('LOGIN_SEND', {
            loginUsername: user,
            loginPassword: socket.user
        });
    });

  setInterval(() => {
	  socket.emit('MOCKDATA_SEEK', mockSeekUsers(15));
  }, 1000);
});
