import { createRouter, createWebHashHistory } from 'vue-router';
import { character } from '@/service';
import store from '@/store';
const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../views/Auth/AuthView.vue'),
  },
  {
    path: '/',
    name: 'BasicLayout',
    component: () => import('../layout/BasicLayout'),
    children: [
      {
        path: 'books',
        name: 'Books',
        component: () => import('../views/Books/index.vue'),
      },
      {
        path: 'books/:id',
        name: 'BookDetail',
        component: () => import('../views/Books/BookDetail/index.vue'),
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('../views/Users/index.vue'),
      },
      {
        path: 'log',
        name: 'Log',
        component: () => import('../views/Log/index.vue'),
      },
      {
        path: 'reset/password',
        name: 'ResetPassword',
        component: () => import('../views/ResetPassword/index.vue'),
      },
      {
        path: 'invite-code',
        name: 'InviteCode',
        component: () => import('../views/InviteCode/index.vue'),
      },
      {
        path: 'book-classify',
        name: 'BookClassify',
        component: () => import('../views/BookClassify/index.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../views/Profile/index.vue'),
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {

  if (!store.state.characterInfo.length) {
   await store.dispatch('getCharacterInfo');
  }
  const reqArr = []
  if (!store.state.userInfo.account) {
   reqArr.push(store.dispatch('getUserInfo'));
  }
  if (!store.state.bookClassify.length) {
  reqArr.push(store.dispatch('getBookClassify'));

  }
  await Promise.all(reqArr)
  // console.log(store.state);
  next();
});

export default router;
