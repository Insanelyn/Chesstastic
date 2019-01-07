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
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        margin-right: auto;
        margin-left: auto;
    }

</style>