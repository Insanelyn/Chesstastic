<template>

  <div id="app">

    <TheHeader />

    <TheFooter />

    <SeekComponentLayout />



  </div>

</template>

<script>
import TheHeader from './allpages/TheHeader.vue'

import TheFooter from './allpages/TheFooter.vue'

import SeekComponentLayout from "./lobby/components/SeekComponentLayout";



export default {
  name: 'app',
  components: {
    TheChessboard,
      TheHeader,
      TheFooter
      TheHeader,
      SeekComponentLayout
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