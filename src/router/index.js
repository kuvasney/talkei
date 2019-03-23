import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'SignIn',
    //   component: SignIn
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
    }
  ]
})

export default router
