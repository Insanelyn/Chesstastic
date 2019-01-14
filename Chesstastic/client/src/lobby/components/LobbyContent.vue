<template>
    <div class="table-container">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <table>
        <tr>
            <th class="header"><span class="fas fa-random"> Spelare</span></th>
            <th class="header"><span class="fas fa-angle-down"> Rating</span></th>
            <th class="header">Tid</th>
            <th class="header">Typ</th>
        </tr>
        <tr v-for="(user,i) in userRaw" :key="i">
            <td><span class="fas fa-adjust"> {{user.user}}</span></td>
            <td>{{user.ranked}}</td>
            <td>{{user.time}}</td>
            <td><span class="fas fa-bolt"> {{user.rating}}</span></td>
        </tr>
    </table>
    </div>
</template>

<script>

    import io from 'socket.io-client';

    const socket = io.connect('http://localhost:5000');

    export default {
        name: "LobbyContent",

        data() {
            return {
                userData: []
            }
        },

        mounted() {
            socket.on('MOCKDATA_SEEK', (data) => {
                const rawData = Array.of(data).flat();
                this.userData = rawData;
                console.log(this.userData);
            });
        }
    }
</script>

<style scoped>

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 50%;
        margin-top: 25px;
        margin-left: 379.5px;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        width: 20%;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }

    a:hover {
        background-color: darkgray;
    }

</style>