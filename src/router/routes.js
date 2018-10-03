import Homepage from 'pages/Homepage';

export default [
  {
    name: 'Homepage',
    path: '/',
    component: Homepage
  },
  // default redirect (could be a 404)
  {
    path: '*',
    redirect: '/'
  }
]
