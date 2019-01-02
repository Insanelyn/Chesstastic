<template>

  <div id="app">

    <TheChessboard />
    <TheHeader />
    <ingameBox />

  </div>

</template>

<script>
import TheChessboard from './game/components/TheChessboard.vue'
import TheHeader from './allpages/TheHeader.vue'
import ingameBox from './game/components/ingameBox.vue'

export default {
  name: 'app',
  components: {
    TheChessboard,
    TheHeader,
    ingameBox
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
