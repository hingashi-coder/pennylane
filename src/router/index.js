import Vue from 'vue'
import Router from 'vue-router'
import landing from '@/components/landing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: landing
    }
  ]
})
