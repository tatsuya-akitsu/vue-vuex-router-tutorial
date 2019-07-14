const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/containers/home/index.vue'),
  },
  {
    path: '/add',
    name: 'TodoAdd',
    component: () => import('../views/containers/add/index.vue'),
  },
  {
    path: '/detail/:id',
    name: 'TodoDetail',
    component: () => import('../views/containers/detail/index.vue'),
  },
  {
    path: '/edit/:id',
    name: 'TodoEdit',
    component: () => import('../views/containers/edit/index.vue'),
  },
];

export default routes;
