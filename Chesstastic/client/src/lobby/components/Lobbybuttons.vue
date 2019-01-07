<template>

<div class="container">

    <button type="button"> Skapa ett parti </button>

    <button type="button"> Spela med en vän </button>

    <button type="button"> Spela mot datorn </button>


</div>

</template>

<script>
    export default {
        name: "buttons"
    }
</script>

<style scoped>

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        margin-right: auto;
        margin-left: auto;
    }

    button {
        grid-column-start: 4;
        background-color:  lightgrey;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }

</style>