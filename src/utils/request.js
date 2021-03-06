import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'
const until = 'Bearer '
// 判断运行环境，如果是生产环境就获取服务器地址，如果是开发环境获取配置dev.env.js

// console.log(process.env.NODE_ENV) //判断环境

// console.log(process.env.BASE_API) //服务器地址

// console.log(location.protocol + '//' + location.host) //本地地址

let HttpRoot = (process.env.NODE_ENV === 'production')
  ? (location.protocol + '//' + location.host)
  : process.env.BASE_API

// 创建axios实例
const service = axios.create({
  baseURL: HttpRoot, // api 的 base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true
})


// request拦截器
service.interceptors.request.use(
  config => {
    console.log('config',config)
    if (store.getters.token) {
      config.headers['Authorization'] = until + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    // if (config.headers['Content-Type'] != 'multipart/form-data') {
    //   config.data = JSON.parse(JSON.stringify(config.data));
    // }

    // if(config.method  === 'post'){
    //   config.data = JSON.parse(JSON.stringify(config.data));
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(
      error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = JSON.parse(JSON.stringify(response.data))
    console.log('数据请求',res)


    return res
  },
  error => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)


service.httpRoot = HttpRoot


export default service
