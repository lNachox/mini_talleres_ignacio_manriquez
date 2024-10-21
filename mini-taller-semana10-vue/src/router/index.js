import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Route1 from '../views/Route1.vue';
import Route2 from '../views/Route2.vue';
import Route3 from '../views/Route3.vue';
import Route4 from '../views/Route4.vue';
import Route5 from '../views/Route5.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/route1', name: 'Route1', component: Route1 },
  { path: '/route2', name: 'Route2', component: Route2 },
  { path: '/route3', name: 'Route3', component: Route3 },
  { path: '/route4', name: 'Route4', component: Route4 },
  { path: '/route5', name: 'Route5', component: Route5 },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
