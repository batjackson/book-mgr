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
        path: '/books',
        name: 'Books',
        component: () => import('../views/Books/index.vue'),
      },
      {
        path: '/books/:id',
        name: 'BookDetail',
        component: () => import('../views/Books/BookDetail/index.vue'),
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/Users/index.vue'),
      },
      {
        path: '/log',
        name: 'Log',
        component: () => import('../views/Log/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const reqArr = [];
  if (!store.state.characterInfo.length) {
    reqArr.push(store.dispatch('getCharacterInfo'));
  }

  if (!store.state.userInfo.account) {
    reqArr.push(store.dispatch('getUserInfo'));
  }

  await Promise.all(reqArr)
  // console.log(store.state);
  next();
});

export default router;
