<template>

  <div class="container-fluid">
    <chessboard class="chessboard cg-board-wrap blue"></chessboard>
  </div>
</template>

<script>
    import {chessboard} from 'vue-chessboard'
    import 'vue-chessboard/dist/vue-chessboard.css'
    import Chessboard from "../../../node_modules/vue-chessboard/src/components/chessboard/index.vue";

    export default {
    components: {Chessboard},
    data() {
        return {
        }
    },
    created() {

    },
}
</script>

<style scoped>

  .container-fluid {
    background-color: lightgoldenrodyellow;
    display: flex;
    justify-content: center;
  }

  .chessboard {
    margin: 45px 10px 45px 10px;
  }

</style>
