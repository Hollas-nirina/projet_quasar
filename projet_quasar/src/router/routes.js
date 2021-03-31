
const routes = [
  {
    path: '/',
    component: () => import('layouts/home.vue'),
    children: [
      { path: '', component: () => import('pages/test.vue') }

    ]
  }
]

export default routes
