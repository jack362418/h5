import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:  () => import('@/view/index.vue')
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/view/my/my.vue')
    },
    {
      path: '/reduce',
      name: 'reduce',
      component: () => import('@/view/my/reduce.vue')
    },
    {
      path: '/appointment/:id',
      name: 'appointment',
      component: () => import('@/view/appointmentDetail/appointmentDetail.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('@/view/appointmentDetail/add.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/view/sign/sign.vue')
    }
  ]
})
