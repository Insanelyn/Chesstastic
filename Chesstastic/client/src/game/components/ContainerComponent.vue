<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3">
                <ChatComponent v-bind:socket="socket"/>
            </div>
            <div class="col-lg-6">
                <chessboard class="cg-board-wrap" :fen="currentFen" @onMove="showInfo" />
                <button @click="makeMove">Play</button>
            </div>
            <div class="col-lg-3">
                <ingameBox />
            </div>
        </div>
    </div>

</template>

<script>


    import ChatComponent from './ChatComponent.vue'
    import ingameBox from './ingameBox.vue'
    import { chessboard } from 'vue-chessboard'
    import 'vue-chessboard/dist/vue-chessboard.css'

    import io from 'socket.io-client';

   // const socket =

//
//  const board = document.querySelector(".cg-board-wrap");
//  board.setAttribute('style', 'width: 600px');

/*  const board = document.getElementsByClassName("cg-board-wrap");
    board.setAttribute('style', 'width: 600px');*/

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
                room: 'NOT PLAYING',
                board: "",
                plrW: "",
                plrB: "",
                color: "",
                opponent: "",
                turn: "",
                status: "",
                time: 0,
                historyOfMoves: [],
                positionInfo: null,
                currentFen: "",
                oldFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                loginUsername: "",
                loginPassword: "",
                socket: io.connect('http://localhost:5000')
            }
        },
        mounted () {
            this.switchRoom()
            this.socket.on('MOCKDATA_SEEK', (data) => {
                const rawData = Array.of(data).flat();
                this.userData = rawData;
            });

            this.socket.on('NEW_MSG', (data) => {
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

            this.socket.on('ENTER_ROOM', (data) => {
                this.room = `PLAYS at ${data.room}`;
            });
            this.socket.on('CHESS_ACTION', (data) => {
                this.board = data.board;
                this.status = data.status;
                this.turn = data.turn;
                this.historyOfMoves = [...this.historyOfMoves, { user: data.user, move: data.move }];
                this.loadFen(data.fen);
                this.oldFen = data.fen;
            });
            this.socket.on('PLRS', (plrs) => {
                this.plrW = plrs.w;
                this.plrB = plrs.b;
                this.turn = plrs.turn;
                this.status = plrs.status;
            });
            this.socket.on('CHEAT_DETECTED', (data) => {
                alert("CHEAT!!!");
            });
        },
        methods: {
            sendMessage(e) {
                e.preventDefault();
                this.socket.emit('MSG_SEND', this.message);
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
                this.socket.emit('SWITCH_ROOM', "PLAY");
            },
            makeMove() {
                if(this.room !== 'NO ROOM' && this.turn === this.color) {
                    this.socket.emit('MAKE_MOVE', { type: "normal", color: this.color, fen: this.currentFen });
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
                }
            },
            loadFen(fen) {
                this.currentFen = fen;
            }
        }



    }
</script>

<style scoped>

    .container-fluid {
        margin-top: 100px;
        display: flex;
        justify-content: space-around;
        align-content: center;
        height: 100vh;
        background-color: white;
        margin-right: 200px;
    }

    .cg-board-wrap {
        margin-top: 100px;
        width: 600px;
        height: 600px;
    }

</style>