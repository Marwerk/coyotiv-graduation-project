import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import RoomsView from '../views/RoomsView.vue'
import ContactView from '../views/ContactView.vue'

// Views = pages of your webapp
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: RoomsView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router

// {
//   path: '/contact',
//   name: 'contact',
//   // TODO: vue components homework
//   // route level code-splitting
//   // this generates a separate chunk (About.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import('../views/ContactView.vue')
// }
