import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Products from '@/views/Products.vue';
import NotFound from '@/views/NotFound.vue';
import PastOrders from '@/views/PastOrders.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrders,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
