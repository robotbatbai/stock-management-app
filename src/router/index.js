import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Follow from '@/components/FollowDashboard'
import Trans from '@/components/TransDashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/follow',
      name: Follow,
      component: Follow
    },
    {
      path: '/trans',
      name: Trans,
      component: Trans
    }
  ]
})
