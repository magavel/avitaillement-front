import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/stations',
    name: 'Stations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Stations.vue'),
  },
  {
    path: '/station/:id',
    name: 'Station',
    component: () => import(/* webpackChunkName: "about" */ '../views/Station.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
