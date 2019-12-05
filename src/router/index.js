import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import parent from '../components/parent.vue'

const routes = [
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    path: '/',
    name: 'home',
    component: parent
    // component: () => import('../components/test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
