import Home from './components/Home.vue';
import Room from './components/Room.vue';
export const routes = [
    {path: '/', name: 'home', component: Home, props:true},
    {path: '/(\\d+)', name: 'room', component: Room, props: true },
]