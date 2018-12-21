<template>
  <div id="app">
  <TheChessboard />
    <TheHeader />
  </div>

</template>

<script>
import TheChessboard from './components/TheChessboard.vue'
import TheHeader from './allpages/TheHeader.vue'

export default {
  name: 'app',
  components: {
    TheChessboard,
      TheHeader

  }

}
</script>

<style>

</style>
