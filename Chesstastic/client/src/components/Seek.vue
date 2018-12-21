<template>

  <div class="container-fluid">
    <h1>This is a Lobby</h1>
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
    sockets: {
        connect()  {
            console.log('socket connected')
    },
}
</script>

<style scoped>
.container-fluid{
    background-color: grey;
}


</style>
