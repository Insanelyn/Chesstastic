<template>

  <div id="app">

    <TheHeader />
    <SeekComponentLayout />
    <router-view></router-view>
    <TheFooter />
    
    
    
    
    
  </div>

</template>

<script>
    import TheHeader from './allpages/TheHeader.vue'
    import TheFooter from './allpages/TheFooter.vue'
    import SeekComponentLayout from "./lobby/components/SeekComponentLayout";
    export default {
        name: 'app',
        components: {
            TheHeader,
            TheFooter,
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
