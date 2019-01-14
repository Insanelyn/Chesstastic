<template>

    <div class="container-fluid">
        <div>
            <h1>Chesstastic</h1>
        </div>

        <div class="nav-list">
            <nav>
                <ul class="nav">
                    <li><router-link to="/game">Spela</router-link></li>
                </ul>
            </nav>
        </div>
        <img class="branding-logo" src="../assets/images/chess_piece_king.png">
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
    .container-fluid{
        background-color: darkgrey;
        opacity: 0.7;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h1 {
        font-family: "Lucida Calligraphy";
        font-size: 4em;
        margin-left: -25%;
        margin-right: 15%;
    }
    .branding-logo {
        width: 100px;
        height: 100px;
        float: right;
        margin-left: 420px;
    }


    li > a {
        color: black;
        list-style-type: none;
        font-size: 24px;
        margin-left: 48px;
    }

    li > a:hover {
        background-color: lightgray;
        padding: 5px;
    }
</style>