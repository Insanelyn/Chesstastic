<template>

  <div id="app">

    <TheHeader />
    <SeekComponentLayout />
    <router-view />
    <router-view></router-view>

  </div>

</template>

<script>

import TheHeader from './allpages/TheHeader.vue'
import SeekComponentLayout from "./lobby/components/SeekComponentLayout";



export default {
  name: 'app',
  components: {
      SeekComponentLayout,
      TheChessboard,
      TheHeader
  },

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
