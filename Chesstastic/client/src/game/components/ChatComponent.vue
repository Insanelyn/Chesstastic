<template>

    <div class="container-fluid">
        <div class="chatBox">
            <h1>Chat</h1>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        created() {

        },
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
    }

    h1 {
        color: white;
        font-size: 18pt;
    }

</style>