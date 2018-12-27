<template>

  <div id="app">

    <TheChessboard />

<!-- **********************************************************************************' -->
<!--  Detta ska naturligtvis in i en "egen" seek-komponent  -->

    <div id="temp-seek">
      <h1>MOCKED DATA</h1>

      <div id="data">
        <ul>
          <li v-for="(item,i) in userData" :key="i">
            {{item}}
          </li>
        </ul>
      </div>

    </div>

    <div id="rooms">
      <button v-on:click="switchRoom()">PLAY</button> 

      <button v-on:click="makeRandomMove()">MAKE RANDOM MOVE</button>

    </div>

    <div id="temp-chat">
      <h1>{{room}}</h1>

      <form @submit.prevent="sendMessage">
         
        <label for="message">Message:</label>
        <input type="text" v-model="message">
       
      </form>

      <div id="data2">
        <ul>
          <li v-for="(msg,i) in msgs" :key="i">
            {{ msg }}
          </li>
        </ul>
      </div>

    </div>
    
  </div>

<!-- ********************************************************* -->
<!-- **********************************************************************************' -->

</template>

<script>
import TheChessboard from './components/TheChessboard.vue';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

export default {
  name: 'app',
  components: {
    TheChessboard,
  },
  data () {
   return {
     userData: [],
     msgs: [],
     message: '',
     room: 'NOT PLAYING',
     board: []
   }
  },
  mounted () {

    socket.on('MOCKDATA_SEEK', (data) => {
      const rawData = Array.of(data).flat();
      this.userData = rawData;
    });
    
    socket.on('NEW_MSG', (data) => {
      this.msgs.push(data);
    });
    
    socket.on('ENTER_ROOM', (room) => {
      this.room = `PLAYS at ${room}`; 
    });

    socket.on('CHESS_ACTION', (data) => {
      this.board = data.board;
      console.log(this.board);  
      this.msgs.push(`${data.user} made a move: ${data.move}`);  
    });
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      socket.emit('MSG_SEND', this.message);
      this.message = ''
    },
    switchRoom() {
      this.msgs = [];
      socket.emit('SWITCH_ROOM', "PLAY");
    },
    makeRandomMove() {
      if(this.room !== 'NO ROOM') {
        socket.emit('MAKE_MOVE', 'MOVE');
      } else {
        console.log("GAME NOT ACTIVE!");
      } 
    }
  }  
}
</script>

<style>
#temp-seek {
  position: absolute;
  padding: 10px;
  top: 75px;
  left: 25px;      
  font-size: 10px;
  width: 450px;
  height: 600px;
  background-color: #ffe6e6;
}

#temp-chat {
  position: absolute;
  padding: 10px;  
  top: 75px;
  right: 25px;      
  font-size: 10px;
  width: 450px;
  height: 600px;
  background-color: #ff9990;
}

#rooms {
  position: absolute;
  top: 75px;
  left: 50%;
  margin: auto;
  width: 100px;
  height: 600px;
  padding: 10px; 
  background-color: #ff3333; 
}

input {
  width: 100%;
  border: none;  
  border-bottom: 1px solid black;  
  background: #ff9990;
}

button {
  width: 90px;
  height: 90px;
  border: none;
  background-color: #d9b3ff;
  margin: 20px; 
  text-align: center;
}
</style>
