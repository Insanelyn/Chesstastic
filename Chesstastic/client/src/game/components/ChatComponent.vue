<template>

    <div class="container-fluid">
        <div class="chatBox">
            <h1>Chat</h1>
            <form @submit.prevent="sendMessage">
                <div class="ui input">
                    <input
                            v-model="message"
                            id="messageInput"
                            type="text"
                            autocomplete="off"
                            placeholder="Write message here..."
                    >
                    <button class="ui button" id="messageButton">Send</button>
                </div>
                <div id="messageBox" v-for="(chatMessage,i) in messages" :key="i">
                    <p>User: {{ chatMessage.user }}:</p>
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
             this.messages.unshift(data)
            });
        }
    }
</script>

<style scoped>
    .container-fluid {
        margin-top: 20px;
    }

    .chatBox {
        width: 350px;
        height: 350px;
        background-color: dimgrey;
        opacity: 0.7;
        border-radius: 5px;
        overflow: auto;
        padding: 20px;
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
        margin: 15px 15px 5px 15px;
        border-radius: 5px;
    }

    #messageInput {
        margin: 5px 15px 5px 15px;
        min-width: 60px;
    }

    #messageButton {
        height: 37px;
        margin-top: 6px;
    }

</style>