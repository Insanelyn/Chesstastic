<template>

    <nav class="horizontal top-border block-section">
        <div class="col-md-20" id="tabs">
            <a href="#" v-for="tab in tabs" @click.prevent="setActiveTabName(tab.name)">
                {{ tab.displayName }}
            </a>
        </div>

        <div v-if="displayContents(activeTabName, 'snabb-parning')">
            <SnabbParningContent></SnabbParningContent>
        </div>
        <div v-if="displayContents(activeTabName, 'lobby')">
            <LobbyContent></LobbyContent>
        </div>
        <div v-if="displayContents(activeTabName, 'korrespondens')">
            <KorrespondensContent></KorrespondensContent>
        </div>
    </nav>

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

        data () {
            return {
                tabs: [
                    {
                        name: 'snabb-parning',
                        displayName: 'Snabb parning'
                    },
                    {
                        name: 'lobby',
                        displayName: 'Lobby'
                    },
                    {
                        name: 'korrespondens',
                        displayName: 'Korrespondens'
                    }
                ],
                activeTabName: null,
            };
        },
        mounted() {
            this.activeTabName = this.tabs[0].name;
        },
        methods: {
            setActiveTabName(name) {
                this.activeTabName = name;
            },
            displayContents(name) {
                return this.activeTabName === name;
            },
        },
        created() {
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