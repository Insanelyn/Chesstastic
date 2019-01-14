<template>
  <div class="container">
    <div class="column-1">
      <h3>Variant</h3>
    </div>

    <div class="column-2">
      <input type="checkbox" name="standard" value="choice"> Standard
      <br>
      <input type="checkbox" name="kingofthehill" value="choice"> King of the hill
      <br>
      <input type="checkbox" name="atomic" value="choice" checked> Atomic
      <br>
    </div>

    <div class="column-3">
      <input type="checkbox" name="crazyhouse" value="choice"> Crazyhouse
      <br>
      <input type="checkbox" name="threecheck" value="choice"> Three-check
      <br>
      <input type="checkbox" name="horde" value="choice" checked> Horde
      <br>
    </div>

    <div class="column-4">
      <input type="checkbox" name="chess960" value="choice"> Chess960
      <br>
      <input type="checkbox" name="antichess" value="choice"> Antichess
      <br>
      <input type="checkbox" name="racingkings" value="choice" checked> Racing Kings
      <br>
    </div>

    <div class="column-5">
      <router-link tag="a" :to="{name: 'LobbyContent'}">
        <button class="btn pull-right">
          <i class="fa fa-times"></i>
        </button>
      </router-link>
    </div>

    <div class="column-1-row-2">
      <h3>Tidskontroll</h3>
    </div>

    <div class="column-2-row-2">
      <input type="checkbox" name="bullet" value="choice"> Bullet - Mindre än 3 minuter
      <br>
      <input type="checkbox" name="blitz" value="choice"> Blitz - Mindre än 8 minuter
      <br>
      <input type="checkbox" name="rapid" value="choice" checked> Rapid - Mindre än 25 minuter
      <br>
      <input type="checkbox" name="classical" value="choice" checked> Classical - Mindre än 360 minuter
      <br>
    </div>

    <div class="buttons-row-3">
      <button type="button" class="btn btn-danger">
        <i class="fas fa-ban"></i> Återställ
      </button>
      
       <router-link class="quickplay" tag="a" :to="{name: 'Container',}">
             <button type="button" class="btn btn-success">

                <i class="fas fa-check"></i> Använd

      </button>
      
            </router-link>

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  background: lightgrey;
  box-sizing: border-box;
}

.column-1,
.column-1-row-2 {
  padding: 50px;
}

.column-2,
.column-3,
.column-4 {
  padding: 50px;
}

.column-2-row-2 {
  grid-column: span 3;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
}

.buttons-row-3 {
  grid-column-start: 4;
  padding: 20px;
}

button {
  margin: 1px;
}
</style>
