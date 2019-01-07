import VueRouter from 'vue-router';
import TheChessboard from "../src/game/components/TheChessboard"

const routes = [
    {
        path: '/game',
        name:'Chessboard',
        component: TheChessboard
    },

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
