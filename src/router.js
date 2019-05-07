import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Admin from './views/admin'
import Login from './views/login'
import Register from './views/register'
import Home from './views'

// Middlewares
import auth from './middleware/auth'

// Layouts : { admin }

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { middleware: auth },
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/admin',
      name: 'admin',
      meta: { layout: 'admin', middleware: 'auth' },
      component: Admin
    }
  ]
})