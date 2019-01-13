import VueRouter from 'vue-router';
import SeekComponentLayout from '../src/lobby/components/SeekComponentLayout'
import SnabbParningContent from '../src/lobby/components/SnabbParningContent'
import LobbyContent from '../src/lobby/components/LobbyContent'
import KorrespondensContent from '../src/lobby/components/KorrespondensContent'
import ContainerComponent from '@/game/components/ContainerComponent'
import LobbyFilterComponent from '../src/lobby/components/LobbyFilterComponent'

const routes = [
    {
        path: '/layout',
        name:'SeekComponentLayout',
        component: SeekComponentLayout
    },
    {
        path: '/SnabbParning',
        name:'SnabbParning',
        component: SnabbParningContent
    },
    {
        path: '/LobbyContent',
        name:'LobbyContent',
        component: LobbyContent
    },
    {
        path: '/KorrespondensContent',
        name:'KorrespondensContent',
        component: KorrespondensContent
    },
    {
        path: 'Container',
        name:'Container',
        component: ContainerComponent
    },   
    {
        path: '/filter',
        name:'filter',
        component: LobbyFilterComponent
    },

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
