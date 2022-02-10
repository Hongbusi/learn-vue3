import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: 'message',
        component: () => import('../views/HomeMessage.vue'),
      },
      {
        path: 'shops',
        component: () => import('../views/HomeShops.vue'),
      }
    ]
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
