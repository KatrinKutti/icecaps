import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newsletter',
    name: 'NewsLetter',
    component: function () {
      return import(/* webpackChunkName: "newsletter" */ '../views/NewsLetter.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
