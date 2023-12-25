import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/index.vue';
import Interesting from '@/views/interesting/index.vue';
import InterestingDetail from '@/views/interesting/[id].vue';
import Profile from '@/views/Profile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/interesting',
      name: 'interesting',
      component: Interesting
    }, {
      path: '/interesting/:id',
      name: 'interesting - detail',
      component: InterestingDetail
    }, {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router;
