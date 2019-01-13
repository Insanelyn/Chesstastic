<template>

  <div id="app">

    <TheHeader />
    <LobbyFilterComponent />
    <SeekComponentLayout />
    <router-view />


  </div>

</template>

<script>
import TheHeader from './allpages/TheHeader.vue'
import LobbyFilterComponent from './lobby/components/LobbyFilterComponent'
import SeekComponentLayout from "./lobby/components/SeekComponentLayout";


export default {
  name: 'app',
  components: {
      TheHeader,
      LobbyFilterComponent,
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