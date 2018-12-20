<template>

    <div class="container-fluid">
        <div>
            <h1>Chesstastic</h1>
        </div>

        <div class="nav-list">
            <nav>
                <ul class="nav">
                    <li>Spela</li>
                    <li>Lära sig</li>
                    <li>Titta</li>
                    <li>Gemenskap</li>
                    <li>Verktyg</li>
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
        background-color: orange;
        opacity: 0.9;
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


    li {
        list-style-type: none;
        margin-right: 8px;
    }

    li:hover {
        color: grey;
    }

</style>