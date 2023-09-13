import { createRouter, createWebHistory } from 'vue-router';
import ArtistsView from '../views/ArtistsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'artists',
      component: ArtistsView,
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('../views/AlbumsView.vue'),
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddView.vue'),
    },
  ],
});

export default router;
