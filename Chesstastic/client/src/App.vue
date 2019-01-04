<template>

  <div id="app">

    <TheChessboard />
    <TheHeader />
    <HistoryComponent />
  </div>

</template>

<script>
import TheChessboard from './game/components/TheChessboard.vue'
import TheHeader from './allpages/TheHeader.vue'
import HistoryComponent from './game/components/HistoryComponent.vue'

export default {
  name: 'app',
  components: {
    TheChessboard,
    TheHeader,
    HistoryComponent
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
