<template>

    <div class="container-fluid">
      <div class="social">

          <a href="https://instagram.com"><i class="fab fa-instagram fa-2x"></i></a>

          <a href="https://twitter.com/?lang=sv"><i class="fab fa-twitter fa-2x"></i></a>

          <a href="https://www.facebook.com/"><i class="fab fa-facebook fa-2x"></i></a>

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        created() {

        },
    }
</script>

<style scoped>
    .container-fluid{
        background-color: lightsalmon;
        opacity: 0.9;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
    }

.fab {
    padding: 20px;
}

a {
    text-decoration: none;
    color: #fff;
}

a:hover {
    color: #999999;
}

</style>
