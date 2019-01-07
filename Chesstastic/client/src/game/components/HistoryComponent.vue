<template>
    <div class="container-fluid">

        <div class="historyBox">
            <h1>History</h1>
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

    .historyBox {
        width: 350px;
        height: 350px;
        float: right;
        background-color: dimgrey;
        opacity: 0.7;
        margin-top: 50px;
    }

    h1 {
        color: white;
        font-size: 18pt;
    }

</style>