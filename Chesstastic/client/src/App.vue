<template>
  <div id="app">
  <TheChessboard />
    <SeeksComponentLayout />
  </div>

</template>

<script>
import TheChessboard from './components/TheChessboard.vue'
import SeeksComponentLayout from './components/SeeksComponentLayout'

export default {
  name: 'app',
  components: {
      SeeksComponentLayout,
    TheChessboard,

  }

}
</script>

<style>

</style>
