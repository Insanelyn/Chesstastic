<template>

    <div class="container-fluid">
        <ChatComponent />
        <chessboard class="board" :fen="currentFen" @onMove="showInfo" />

        <ingameBox v-bind:historyOfMoves="this.historyOfMoves"/>
        <div id="movesWrapper">
        <div v-for="(item, i) in this.historyOfMoves" v-bind:key="i">{{i.move}}</div>
        </div>
    </div>

</template>

<script>


    import ChatComponent from './ChatComponent.vue'
    import ingameBox from './ingameBox.vue'
    import { chessboard } from 'vue-chessboard'
    import 'vue-chessboard/dist/vue-chessboard.css'

    import io from 'socket.io-client';

    const socket = io.connect('http://localhost:5000');

    export default {
        name: 'Container',
        components: {
            chessboard,
            ChatComponent,
            ingameBox
        },
        data () {
            return {
                userData: [],
                msgs: [],
                message: '',
                room: 'NOT PLAYING',
                board: "",
                plrW: "",
                plrB: "",
                color: "",
                opponent: "",
                turn: "",
                status: "",
                time: 0,
                historyOfMoves: [
                    {
                        user: "player1",
                        move: "d5"
                    }, 
                    {
                        user: "player2",
                        move: "g3"
                    }
                    ],
                positionInfo: null,
                currentFen: "",
                oldFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                loginUsername: "",
                loginPassword: ""
            }
        },
        mounted () {
            socket.on('MOCKDATA_SEEK', (data) => {
                const rawData = Array.of(data).flat();
                this.userData = rawData;
            });
            socket.on('NEW_MSG', (data) => {
                if(!this.color) {
                    this.color = data.color;
                }
                this.msgs.push(data);
                if(this.color === "black") {
                    this.opponent = "white";
                } else {
                    this.opponent = "black";
                }
            });
            socket.on('ENTER_ROOM', (data) => {
                this.room = `PLAYS at ${data.room}`;
            });
            socket.on('CHESS_ACTION', (data) => {
                this.board = data.board;
                this.status = data.status;
                this.turn = data.turn;
                this.historyOfMoves = [...this.historyOfMoves, { user: data.user, move: data.move }];
                this.loadFen(data.fen);
                this.oldFen = data.fen;
            });
            socket.on('PLRS', (plrs) => {
                this.plrW = plrs.w;
                this.plrB = plrs.b;
                this.turn = plrs.turn;
                this.status = plrs.status;
            });
            socket.on('CHEAT_DETECTED', (data) => {
                alert("CHEAT!!!");
            });
        },
        methods: {
            
            sendMessage(e) {
                e.preventDefault();
                socket.emit('MSG_SEND', this.message);
                this.message = '';
            },
            login(e) {
                e.preventDefault();
                //  socket.emit('MSG_SEND', this.message);
                this.loginUsername = '';
                this.loginPassword = '';
            },
            switchRoom() {
                this.msgs = [];
                socket.emit('SWITCH_ROOM', "PLAY");
            },
            makeMove() {
                if(this.room !== 'NO ROOM' && this.turn === this.color) {
                    socket.emit('MAKE_MOVE', { type: "normal", color: this.color, fen: this.currentFen });
                } else if(this.room === 'NO ROOM') {
                    alert("GAME NOT ACTIVE!");
                } else if(this.turn !== this.color) {
                    alert("By all means, move around pieces. But this move doesn't count.");
                }
                
            },
            showInfo(data) {
                if(data && this.turn === this.color) {
                    this.positionInfo = data;
                    this.currentFen = data.fen;
                } else {
                    alert("Hey! Wait up!");
                    this.loadFen(this.oldFen);
                    this.positionInfo = null;
                };

                // denna kommer köras 
                this.historyOfMoves.push({ user: "player1 or 2", move: Math.floor(Math.random() * Math.floor(100))});
                console.log(this.historyOfMoves)
                
            },
            loadFen(fen) {
                this.currentFen = fen;
            }
        }



    }
</script>

<style scoped>

    .container-fluid {
        width: 50%;
        margin-top: 50px;
        display: flex;
        justify-content: space-evenly;
        height: 100vh;
        background-color: white;
    }

    .board {
        width: 600px;
    }

    #movesWrapper {
        background-color: grey;
        width: 600px;
        height: 600px;
    }
</style>