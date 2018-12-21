<template>

  <div id="app">

    <TheChessboard />

<!--  Detta ska naturligtvis in i en "egen" seek-komponent  -->

    <div id="temp-seek">
      <h1>MOCKED DATA</h1>

      <div id="data">
        <ul>
          <li v-for="(item,i) in userData" :key="i">
            {{item}}
          </li>
        </ul>
      </div>

    </div>
  </div>

<!-- ********************************************************* -->

</template>

<script>
import TheChessboard from './lobby/components/TheChessboard.vue'


export default {
  name: 'app',
  components: {
    TheChessboard,
  },
  data () {
   return {
     userData: []
   }
  },
  mounted () {
    socket.on('MOCKDATA_SEEK', (data) => {
      const rawData = Array.of(data).flat();
      this.userData = rawData;
    });
    socket.on('MOCKDATA_GAMEDATA', (gameData) => {
      console.log(gameData);
    });
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
