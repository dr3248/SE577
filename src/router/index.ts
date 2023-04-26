import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/africa',
      name: 'Africa',
      component: () => import('../pages/Africa.vue')
    },
    {
      path: '/america',
      name: 'America',
      component: () => import('../pages/America.vue')
    },
    {
      path: '/asia',
      name: 'Asia',
      component: () => import('../pages/Asia.vue')
    },
    {
      path: '/europe',
      name: 'Europe',
      component: () => import('../pages/Europe.vue')
    },
    {
      path: '/oceania',
      name: 'Oceania',
      component: () => import('../pages/Oceania.vue')
    },
    {
      path: '/maps',
      name: 'Maps',
      component: () => import('../views/Maps.vue')
    },
    {
      path: '/login',
      name: 'login_page',
      component: () => import('../pages/Login.vue')
    }
  ]
})

export default router
