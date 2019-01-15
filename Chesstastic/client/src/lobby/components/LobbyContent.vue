<template>
<container>

    <div class="grid-container">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">


        <h2 class="th-1">Spelare</h2>

        <h2 class="th-2" v-on:click="userRating">Rating</h2>

        <h2 class="th-3">Tid</h2>

       <h2 class="th-4">Typ<router-link tag="a" :to = "{name: 'filter',}">
           <button class="btn btn-settings pull-right" ><i class="fa fa-sliders-h"></i></button>
       </router-link></h2>

    </div>
        <!-------------------------------------------------------------------------------------------------------------------->
<router-link tag="div" :to="{name: 'Container'}">
        <div class="container"  v-for="(user,i) in userData" :key="i" >

            <div  class="column-1"> {{user.user}}</div>

            <div class="column-2"> {{user.rating}} </div>

            <div class="column-3"> {{user.time}} </div>

            <div class="column-4"> {{user.ranked}} </div>

    </div>
</router-link>
    </container>
</template>

<script>

    import io from 'socket.io-client';

    const socket = io.connect('http://localhost:5000');

    export default {
        name: "LobbyContent",

        data() {
            return {
                userData: [],
                ratingData: false
            }
        },

        mounted() {
            socket.on('MOCKDATA_SEEK', (data) => {
                const rawData = Array.of(data).flat();
                if(this.ratingData === true ) {
                        this.userData = rawData.filter(user => user.rating >= 1000);
                }
                else {
                    this.userData = rawData;
                }
            });
        },

        methods: {
            userRating() {
                this.ratingData = this.ratingData === false;
            }
        }
    }

</script>

<style scoped>

    .grid-container, .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        padding-left: 50px;
        padding-right: 50px;
    }

    .th-1, .th-2, .th-3, .th-4{
        grid-column: span 1;
        grid-row: auto;
        border-style: groove;
        text-align: center;
        background-color: lightgrey;
        height: 40px;

    }

    .column-1, .column-2, .column-3, .column-4 {
        grid-column: span 1;
        grid-row: auto;
        text-align: center;
        height: 30px;
        border-bottom: groove;
        border-right:groove;
    }

</style>