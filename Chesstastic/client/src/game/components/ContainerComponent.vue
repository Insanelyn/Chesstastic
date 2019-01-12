<template>

    <div class="container-fluid chessbackground">
        <div class="containerWrapper">
            <div>
                <div  class="playerInfo">
                    <sui-button @click.native="toggle" id="loginBtn">Login</sui-button>
                    <sui-modal v-model="open">
                        <sui-modal-header>
                            <sui-modal-actions>
                                <sui-button floated="right" negative @click.native="toggle">
                                    X
                                </sui-button>
                            </sui-modal-actions>
                            Login
                        </sui-modal-header>
                        <sui-modal-content>
                            <sui-segment>
                                <sui-form @submit.prevent="sendLogin">
                                    <sui-form-field>
                                        <label>Username</label>
                                        <input v-model="loginUsername" placeholder="Username">
                                    </sui-form-field>
                                    <sui-form-field>
                                        <label>Password</label>
                                        <input v-model="loginPassword" placeholder="Password" type="password">
                                    </sui-form-field>
                                    <sui-button type="submit">Login</sui-button>
                                    <sui-form-field>
                                        <sui-accordion>
                                            <a is="sui-accordion-title">
                                                <sui-icon name="dropdown" />
                                                Don't have an account? Create here
                                            </a>
                                            <sui-accordion-content>
                                                <sui-form @submit.prevent="sendRequest">
                                                    <sui-form-field>
                                                        <label>Username</label>
                                                        <input v-model="loginCreateUsername" placeholder="Username">
                                                    </sui-form-field>
                                                    <sui-form-field>
                                                        <label>Password</label>
                                                        <input v-model="loginCreatePassword" placeholder="Password" type="password">
                                                    </sui-form-field>
                                                    <sui-form-field>
                                                        <label>Confirm password</label>
                                                        <input v-model="loginConfirmPassword" placeholder="Confirm password" type="password">
                                                    </sui-form-field>
                                                    <p class="confirmationText">{{confirmationOfAccount}}</p>
                                                    <sui-button type="submit">Create user</sui-button>
                                                </sui-form>
                                            </sui-accordion-content>
                                        </sui-accordion>
                                    </sui-form-field>
                                </sui-form>
                            </sui-segment>
                        </sui-modal-content>
                    </sui-modal>
                    <h3>User: {{loginUsername}}</h3>
                    <h3>Your color: {{color}}</h3>
                    <h3>Game status: {{status}}</h3>
                </div>
                <ChatComponent v-bind:socket="socket"/>
            </div>
            
            <div id="chessboard">
                <chessboard class="cg-board-wrap" :fen="currentFen" @onMove="showInfo" />
            </div>
            <div>
                <ingameBox v-bind:historyOfMoves="this.historyOfMoves"/>
            </div>
        </div>

    </div>

</template>

<script>


    import ChatComponent from './ChatComponent.vue'
    import ingameBox from './ingameBox.vue'
    import { chessboard } from 'vue-chessboard'
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
                temp: [],
                historyOfMoves: [],
                positionInfo: null,
                currentFen: "",
                oldFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                user: "",
                statistics: [],
                loginUsername: "",
                loginPassword: "",
                loginCreateUsername: "",
                loginCreatePassword: "",
                loginConfirmPassword: "",
                socket: io.connect('http://localhost:5000'),
                open: false,
                confirmationOfAccount: ""
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
            this.socket.on('CHEAT_DETECTED', () => {
                alert("CHEAT!!!");
            });

            this.socket.on('LOGIN_USER', (data) => {
                this.user=data.user;
                this.statistics=data.statistics;
            });

        },
        methods: {

            toggle() {
                this.open = !this.open;
            },

            sendMessage(e) {
                e.preventDefault();
                this.socket.emit('MSG_SEND', this.message);
                this.message = '';
            },

            sendLogin(e) {
                e.preventDefault();
                //this.socket.emit('LOGIN_SEND', {username:this.loginUsername, password:this.loginPassword});
                this.loginUsername = '';
                this.loginPassword = '';
            },

            sendRequest(e) {
                e.preventDefault();
                const regExUsername = /^[a-zA-Z0-9_]{5,15}/;
                const regExPassword = /^[a-zA-Z0-9]{7,15}/;
                if(regExUsername.test(this.loginCreateUsername) && regExPassword.test(this.loginCreatePassword)) {

                    if (this.loginCreatePassword === this.loginConfirmPassword) {
                        this.confirmationOfAccount = "Registration of account succeeded";
                    } else  {
                            this.confirmationOfAccount = "Registration of account failed";
                        }

                        console.log("matching!");
                        // this.socket.emit('REQUEST_SEND', {username:this.loginCreateUsername, password: this.loginCreatePassword});
                    }

                this.loginCreateUsername = '';
                this.loginCreatePassword = '';
                this.loginConfirmPassword = '';
                }

            },

            switchRoom() {
                this.msgs = [];
                this.socket.emit('SWITCH_ROOM', "PLAY");
            },

            makeMove() {
                if(this.room !== 'NO ROOM' && this.turn === this.color) {
                    this.socket.emit('MAKE_MOVE', { type: "normal", color: this.color, fen: this.currentFen, move: this.temp });
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
                    if (data.history.length ) {
                        this.temp = data.history[0]
                        this.makeMove()
                    }
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
</script>

<style scoped>

    .chessbackground {
        padding-top: 50px;
        padding-bottom: 50px;
        background: url('../../assets/images/chessbackground.jpg');
    }

    .containerWrapper {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 1200px) {
        .containerWrapper {
            flex-direction: column;
        }
    }

    .playerInfo {
        background-color: rgba(211,211,211, 0.8);
        border-radius: 5px;
        padding: 15px;
        width: 350px;
        margin-left: 15px;
    }

    #chessboard {
        width: 560px;
        height: 560px;
        padding: 20px;
        background: url('../../assets/images/chesswoodplate.jpg');
        border-radius: 10px;
        color: white;
    }

    #loginBtn {
        background-color: #8CA2AD;
        color: white;
        border: 2px solid white;
        border-radius: 5px;
        opacity: 0.6;
        float: right;
        margin: 0px 25px 40px 0px;
    }

    .confirmationText {
        color: darkgrey;
        font-size: large;
    }

</style>