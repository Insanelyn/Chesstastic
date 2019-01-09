<template>

  <div class="container-fluid">
    <div>
        <div class="timeBox">
            <div class="time">
                15:00
            </div>
        </div>
        <div id="mainBox">
            <div id="nameOneBox">
                <h4>{{opponent}}</h4>

            </div>
            <div id="mediabuttons">
                <div class="media-skip-backward"></div>
                <div class="media-step-backward"></div>
                <div class="media-step-forward"></div>
                <div class="media-skip-forward"></div>
            </div>

            <!----
            write code in previousMoves() to render previous moves here
            ---->

            <div id="previousMovesWrapper">
                <div class="movesParagraphTwo">PL1 moves</div>
                <div class="movesParagraphTwo">PL2 moves</div>
                <div class="movesParagraph" v-for="(item, i) in this.historyOfMoves" v-bind:key="i">{{item.move}}</div>
            </div>
            <!----
            ---->

            <div id="moreButtons" v-if="gameState">
                <div title="Cancel Game" class="icon-cross" @click="giveUp"></div>
                <div title="Give Up" class="icon-flag" @click="giveUp"></div>
            </div>
            <div v-if="!gameState">
                <p id="gameOverText">Game Over!</p>
                <button id="newGameButton" @click="newGame">New Game</button>
            </div>
            <div id="nameTwoBox">
                <h4>{{player}}</h4>
            </div>
        </div>
        <div class="timeBox">
            <div class="time">
                15:00
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {

    props:['historyOfMoves'],

    data() {
        return {
            player: "playerOne",
            opponent: "playerTwo",
            gameState: true
        }
    },

    created() {

    },

    methods: {
        giveUp: function (e) {
            if(this.gameState === true) {
                this.gameState = false
            }
        },  
        newGame: function (e) {
            if(this.gameState === false) {
                this.gameState = true;
            }
        }
    }
}
</script>

<style scoped>
.container-fluid{
    width: 240px;
}

.timeBox {
    display: inline-block;
    border: 1px solid #ccc;
    padding: 0 8px;
    font-size: 38px;
    font-family: roboto mono,roboto;
    height: 44px;
    line-height: 44px;
    white-space: nowrap;
    will-change: transform;
}

#mainBox {
    border: 1px solid rgba(240, 240, 240, 0.9);
}

h4 {
    padding: 2px;
    margin-left: 10px;
    margin-bottom: 0;
}

#moreButtons {
    display: flex;
    justify-content: space-around;
    padding: 10px 0px 10px 0px;
    border-top: 1px solid rgba(240, 240, 240, 0.9);
    border-bottom: 1px solid rgba(240, 240, 240, 0.9);
}

#mediabuttons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid rgba(240, 240, 240, 0.9);
}

#nameOneBox {
    border-bottom: 1px solid rgba(240, 240, 240, 0.9);
}

#nameTwoBox {
    border-top: 1px solid rgba(240, 240, 240, 0.9);
}

.media-skip-backward {
    height: 14px;
    width: 14px;
    background: url("../../assets/images/media-skip-backward.svg") no-repeat;
    margin-right: 15px;
    
}

.media-step-backward {
    height: 14px;
    width: 14px;
    background: url("../../assets/images/media-step-backward.svg") no-repeat;
    margin-right: 15px;
}

.media-step-forward {
    height: 14px;
    width: 14px;
    background: url("../../assets/images/media-step-forward.svg") no-repeat;
    margin-right: 15px;
}

.media-skip-forward {
    height: 14px;
    width: 14px;
    background: url("../../assets/images/media-skip-forward.svg") no-repeat
}

.icon-cross {
    display: inline-block;
    background: url("../../assets/images/x.svg") no-repeat;
    height: 24px;
    width: 24px;
}

.icon-flag {
    display: inline-block;
    background: url("../../assets/images/flag.svg") no-repeat;
    height: 24px;
    width: 24px;
}

.media-skip-backward:hover, .media-skip-forward:hover, .media-step-backward:hover, .media-step-forward:hover, .icon-cross:hover, .icon-flag:hover {
    cursor: pointer;
}

#gameOverText {
    display: flex;
    justify-content: center;
    font-weight: 900;
    padding: 15px;
}

#newGameButton {
    width: 209px;

    background: rgba(0, 255, 0, 1);
	padding: 0;
	cursor: pointer;
	outline: inherit;
}

#previousMovesWrapper {
    height: 150px;
    overflow: scroll;
}

.movesParagraph, .movesParagraphTwo {
    margin-bottom: 0;
    border: 1px solid rgba(40, 40, 40, 0.1);
    background: rgba(56,147,232,.1);
    padding: 3px;
    display: inline-block;
    width: 50%;
}
.movesParagraphTwo {

    background: rgba(255, 255, 255, 0.1);
}

</style>
