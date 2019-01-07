<template>

  <div id="app">

    <TheHeader />
    <router-view></router-view>
  </div>

</template>

<script>

import TheHeader from './allpages/TheHeader.vue'

export default {
  name: 'app',
  components: {

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
