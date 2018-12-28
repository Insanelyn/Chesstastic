<template>

  <div id="app">

    <TheChessboard />
    <TheHeader />
    <LobbyFilterComponent />

  </div>

</template>

<script>
import TheChessboard from './game/components/TheChessboard.vue'
import TheHeader from './allpages/TheHeader.vue'
import LobbyFilterComponent from './lobby/components/LobbyFilterComponent'

export default {
  name: 'app',
  components: {
    TheChessboard,
      TheHeader,
      LobbyFilterComponent
  }
}
</script>

<style>
#temp-seek {
  font-size: 10px;
  width: 700px;
  margin:50px;
}
</style>
