<template>

    <div class="container-fluid">
        <div class="chatBox">
            <h1>Chat</h1>
            <form @submit.prevent="sendMessage">
                <input v-model="message" id="messageInput" autocomplete="off" placeholder="Write your message here">
                <button id="messageButton">Send</button>
                <div id="messageBox" v-for="(chatMessage,i) in messages" :key="i">
                    <p>Message: {{ chatMessage.message }}</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props:['socket'],
        data() {
            return {
                message: "",
                messages: [],
            }
        },
        computed: {
        },

        methods: {
        sendMessage(e) {
            e.preventDefault();
            this.socket.emit('MSG_SEND', this.message);
            this.message = ''
            }
        },
        mounted() {

            this.socket.on('NEW_MSG', (data) => {
             /*
                if(!this.color) {
                    this.color = data.color;
                }
                this.msgs.push(data);
                if(this.color === "black") {
                    this.opponent = "white";
                } else {
                    this.opponent = "black";
                }
                */
             this.messages.push(data)
console.log(data)
            });
        }
    }
</script>

<style scoped>
    .container-fluid {
        background-color: lightskyblue;
    }

    .chatBox {
        width: 350px;
        height: 350px;
        background-color: dimgrey;
        opacity: 0.7;
        border-radius: 5px;
    }

    h1 {
        color: white;
        font-size: 18pt;
        display: flex;
        justify-content: center;
    }

    #messageBox {
        height: auto;
        background-color: #c9c0cf;
        margin: 5px 15px 5px 15px;
    }

    #messageInput {
        margin: 5px 5px 5px 15px;
    }

</style>