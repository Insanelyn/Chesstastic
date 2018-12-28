<template>

  <div id="app">

    <TheChessboard />
    <TheHeader />
    <TheFooter />


  </div>

</template>

<script>
import TheChessboard from './game/components/TheChessboard.vue'
import TheHeader from './allpages/TheHeader.vue'
import TheFooter from './allpages/TheFooter.vue'

export default {
  name: 'app',
  components: {
    TheChessboard,
      TheHeader,
      TheFooter
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
