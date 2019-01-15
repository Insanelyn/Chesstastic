<template>
  <div class="container">
    <div class="row">
      <div class="tab-container">
        <router-link class="tab-item" tag="a" :to="{name: 'SnabbParning',}">
          <a href="#">Snabb parning</a>
        </router-link>

        <router-link class="tab-item" tag="a" :to="{name: 'LobbyContent',}">
          <a href="#">Lobby</a>
        </router-link>

        <router-link class="tab-item" tag="a" :to="{name: 'KorrespondensContent',}">
          <a href="#">Korrespondens</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import SnabbParningContent from "./SnabbParningContent";
import LobbyContent from "./LobbyContent";
import KorrespondensContent from "./KorrespondensContent";

export default {
  data: function() {
    return {};
  },

  name: "SeeksComponentLayout",

  components: {
    SnabbParningContent,
    LobbyContent,
    KorrespondensContent
  }
};

</script>

<style scoped>


.tab-container {
  margin-top: 8px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}

.tab-item {
  border: 1px solid grey;
  border-radius: 5px 5px 0 0;
  padding: 5px;
  margin: 2px;
}

a {
  text-decoration: none;
  color: black;
}

a:active {
  background-color: darkgray;
}
</style>