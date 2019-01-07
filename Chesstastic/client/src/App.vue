<template>

  <div id="app">

    <TheChessboard />
    <TheHeader />
    <SeekComponentLayout />
    <router-view />

  </div>

</template>

<script>
import TheChessboard from './game/components/TheChessboard.vue'
import TheHeader from './allpages/TheHeader.vue'
import SeekComponentLayout from "./lobby/components/SeekComponentLayout";

export default {
  name: 'app',
  components: {
      SeekComponentLayout,
      TheChessboard,
      TheHeader
  },
}
</script>

<style>
#temp-seek {
  font-size: 10px;
  width: 700px;
  margin:50px;
}
</style>
