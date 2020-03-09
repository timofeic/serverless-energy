
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '',
      name: 'auth',
      component: () => import('pages/Auth.vue'),
      meta: {
        requiresAuth: false
      }
    }]
  },
  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      name: 'profile',
      path: '',
      component: () => import('pages/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
