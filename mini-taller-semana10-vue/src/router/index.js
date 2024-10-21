import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Route1View from '../views/Route1View.vue';
import Route2View from '../views/Route2View.vue';
import Route3View from '../views/Route3View.vue';
import Route4View from '../views/Route4View.vue';
import Route5View from '../views/Route5View.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/route1', name: 'Route1', component: Route1View },
  { path: '/route2', name: 'Route2', component: Route2View },
  { path: '/route3', name: 'Route3', component: Route3View },
  { path: '/route4', name: 'Route4', component: Route4View },
  { path: '/route5', name: 'Route5', component: Route5View },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;