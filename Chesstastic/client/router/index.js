import VueRouter from 'vue-router';
import ContainerComponent from '@/game/components/ContainerComponent'

const routes = [
    {
        path: '/game',
        name:'Container',
        component: ContainerComponent
    }

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
