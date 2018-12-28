<template>

  <div id="app">

    <TheHeader />
    <TheChessboard />

  </div>

</template>

<script>
import TheChessboard from './game/components/TheChessboard.vue'
import TheHeader from './allpages/TheHeader.vue'
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'
import Chessboard from "../node_modules/vue-chessboard/src/components/chessboard/index.vue";

export default {
  name: 'app',
  components: {
      Chessboard,
      TheChessboard,
      TheHeader
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
