import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // 验权

//全局路由守卫 按需求编写
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    }else{
        next()
      }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next()
      // next(`/login`) // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {

})
