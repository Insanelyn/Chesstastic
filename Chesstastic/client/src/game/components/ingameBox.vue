<template>

  <div class="container-fluid">
    <div>
        <div class="timeBox">
            <div class="time">
                15:00
            </div>
        </div>
        <div id="mainBox">
            <div style="color: blue;">
                <h2>{{opponent}}</h2>

            </div>
            <div id="mediaButtonsWrapper">
                <div class="media-skip-backward mediaButtons"></div>
                <div class="media-step-backward mediaButtons"></div>
                <div class="media-step-forward mediaButtons"></div>
                <div class="media-skip-forward mediaButtons"></div>
            </div>

            <!----
            write code in previousMoves() to render previous moves here
            ---->

            <div id="previousMovesWrapper">
                <div class="movesParagraphTwo">White's moves</div>
                <div class="movesParagraphTwo">Black's moves</div>
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
            <div style="color: blue;">
                <h2>{{player}}</h2>
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
        giveUp: function () {
            if(this.gameState === true) {
                this.gameState = false
            }
        },  
        newGame: function () {
            if(this.gameState === false) {
                this.gameState = true;
            }
        }

    }
}
</script>

<style scoped>
.container-fluid{
    width: 350px;
}

.timeBox {
    display: inline-block;
    padding: 0 8px;
    font-size: 38px;
    font-family: roboto mono,roboto;
    height: 44px;
    line-height: 44px;
    white-space: nowrap;
    will-change: transform;
}

#mainBox, .timeBox {
    background-color: rgba(211,211,211, 0.8);
    border-radius: 5px; 
}

h2 {
    padding: 2px;
    margin-left: 10px;
    margin-bottom: 0;
}

#moreButtons {
    display: flex;
    justify-content: space-around;
    padding: 10px 0px 10px 0px;
}

#mediaButtonsWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
}

.media-skip-backward {
    margin-right: 15px;
    background: url("../../assets/images/media-skip-backward.svg") no-repeat;
}

.media-step-backward {
    margin-right: 15px;
    background: url("../../assets/images/media-step-backward.svg") no-repeat;
}

.media-step-forward {
    margin-right: 15px;
    background: url("../../assets/images/media-step-forward.svg") no-repeat;
}

.media-skip-forward {
    background: url("../../assets/images/media-skip-forward.svg") no-repeat
}

.mediaButtons {
    height: 18px;
    width: 18px;
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
    padding: 10px;
}

#newGameButton {
    width: 100%;
    background: rgba(123, 255, 123, 0.767);
	padding: 20px;
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
