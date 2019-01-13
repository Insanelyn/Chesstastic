<template>
  <div class="container">
    <div class="square column-1">
      <router-link class="quickplay" tag="a" :to="{name: 'SnabbParning',}">
        <h2>1+0</h2>
        <h3>Bullet</h3>
      </router-link>
    </div>

    <div class="square column-2">
      <router-link class="quickplay" tag="a" :to="{name: 'SnabbParning',}">
        <h2>2+1</h2>
        <h3>Bullet</h3>
      </router-link>
    </div>

    <div class="square column-3">
      <router-link class="quickplay" tag="a" :to="{name: 'SnabbParning',}">
        <h2>3+0</h2>
        <h3>Blitz</h3>
      </router-link>
    </div>

    <div class="square column-1-row-2">
      <router-link class="quickplay" tag="a" :to="{name: 'SnabbParning',}">
        <h2>3+2</h2>
        <h3>Blitz</h3>
      </router-link>
    </div>

    <div class="square column-2-row-2">
      <router-link class="quickplay" tag="a" :to="{name: 'SnabbParning',}">
        <h2>5+0</h2>
        <h3>Blitz</h3>
      </router-link>
    </div>

    <div class="square column-3-row-2">
      <router-link class="quickplay" tag="a" :to="{name: 'SnabbParning',}">
        <h2>5+3</h2>
        <h3>Blitz</h3>
      </router-link>
    </div>

    <div class="square column-1-row-3">
      <router-link class="quickplay" tag="a" :to="{name: 'SnabbParning',}">
        <h2>10+0</h2>
        <h3>Rapid</h3>
      </router-link>
    </div>

    <div class="square column-2-row-3">
      <router-link class="quickplay" tag="a" :to="{name: 'SnabbParning',}">
        <h2>15+15</h2>
        <h3>Classical</h3>
      </router-link>
    </div>

    <div class="square column-3-row-3">
      <router-link class="quickplay" tag="a" :to="{name: 'SnabbParning',}">
        <h3>Anpassad</h3>
      </router-link>
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
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  box-sizing: border-box;
}

.column-1,
.column-2,
.column-3 {
  padding: 50px;
}

.column-1-row-2,
.column-2-row-2,
.column-3-row-2 {
  grid-column: span 1;
  padding: 50px;
}

.column-1-row-3,
.column-2-row-3,
.column-3-row-3 {
  grid-column: span 1;
  padding: 50px;
}

.square{
    background-color: white;
    border: 1px solid black;

}
.square:hover{
    background-color: lightskyblue;
}
.quickplay{
    text-decoration: none;
    color:black;
}
</style>
