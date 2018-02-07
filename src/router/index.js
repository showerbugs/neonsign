import Vue from 'vue'
import Router from 'vue-router'
import Neon from '@/components/NeonView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'neonView',
      component: Neon
    }
  ]
})
