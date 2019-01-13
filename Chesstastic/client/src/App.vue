<template>

  <div id="app">

    <TheHeader />
    <SeekComponentLayout />


  </div>

</template>

<script>
import TheHeader from './allpages/TheHeader.vue'
import SeekComponentLayout from "./lobby/components/SeekComponentLayout";


export default {
  name: 'app',
  components: {
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