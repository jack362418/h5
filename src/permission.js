import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // 验权
const whiteList = ['/login'] // 不重定向白名单

//路由守卫
router.beforeEach((to, from, next) => {

      next()
})

router.afterEach(() => {

})
