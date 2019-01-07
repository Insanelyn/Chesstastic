<template>

    <div>


        <router-link tag="a" :to = "{name: 'SnabbParning',}">
            <a href="#">
                Tab 1
            </a>
        </router-link>

        <router-link tag="a" :to = "{name: 'LobbyContent',}">
            <a href="#">
                Tab 2
            </a>
        </router-link>

        <router-link tag="a" :to = "{name: 'KorrespondensContent',}">
            <a href="#">
                Tab 3
            </a>
        </router-link>


    </div>

</template>

<script>
    import SnabbParningContent from './SnabbParningContent'
    import LobbyContent from './LobbyContent'
    import KorrespondensContent from './KorrespondensContent'

    export default {

        name: "SeeksComponentLayout",

        components: {
            SnabbParningContent,
            LobbyContent,
            KorrespondensContent
        },
    }
</script>

<style scoped>

    .horizontal {
        margin-top: 10px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    #tabs a {
        border: 1px solid black;
        margin: 5px;
        padding: 5px;
        border-radius: 5px
    }

    a:hover {
        opacity: 50%;
        background-color: darkgray;
    }


</style>