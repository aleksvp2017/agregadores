import Agregadores from './components/agregadores/Agregadores.vue';
import Home from './components/home/Home.vue';

export const routes = [

    { path: '', component: Home, descricao: 'Home' },
    { path: '/agregadores', component: Agregadores, descricao: 'Agregadores' }

];