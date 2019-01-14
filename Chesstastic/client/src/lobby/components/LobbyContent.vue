<template>       
<container>
<router-link tag="a" :to = "{name: 'filter',}">
<button class="btn btn-settings pull-right" ><i class="fa fa-sliders-h"></i></button>
</router-link>
    <div class="table-container">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">


        <tr>
            <th class="header"><span class="fas fa-random"> Spelare</span></th>
            <th class="header"><span class="fas fa-angle-down"> Rating</span></th>
            <th class="header">Tid</th>
            <th class="header">Typ</th>
            
        </tr>
        <tr>
            <td><span class="fas fa-adjust"> MadChess</span></td>
            <td>1568</td>
            <td>1</td>
            <td><span class="fas fa-bolt"> Rankat</span></td>
        </tr>
        <tr>
            <td><span class="fas fa-adjust"> MacCheese</span></td>
            <td>684</td>
            <td>2</td>
            <td><span class="fas fa-bolt"> Rankat</span></td>
        </tr>
        <tr>
            <td><span class="fas fa-adjust"> CoolWomen</span></td>
            <td>1568</td>
            <td>3</td>
            <td><span class="fas fa-bolt"> Rankat</span></td>
        </tr>
    </div>
    </container>
</template>

<script>
    export default {
        name: "LobbyContent",
   
    methods: {
   
    }
    }
    
</script>

<style scoped>
.table-container {
    width: 65%;
}

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 80%;
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
    .btn-settings{

    }

</style>