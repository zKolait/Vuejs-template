import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/views'
import Login from '@/views/login'
import Register from '@/views/register'
import Admin from '@/views/admin'

// Middlewares
import authMiddleware from '@/middleware/authMiddleware'

// Layouts : { admin }

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { layout: 'landing' }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: 'landing' }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { layout: 'landing' }
    },
    {
      path: '/admin',
      name: 'admin',
      beforeEnter: authMiddleware,
      component: Admin,
      meta: { layout: 'admin' },
    }
  ]
})


export default router