// import { logout } from '@/api'
// import { login, logout, getInfo } from '@/api'
import { login, logout } from '@/api'
// import { logout } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: false
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const loginName = userInfo.loginName.trim()
      console.log(userInfo)
      return new Promise((resolve, reject) => {
        login(loginName, userInfo.password).then(response => {
          const data = response.data
          if (response.code === 0 || response.code === 200) {
            setToken(data.token)
            localStorage.setItem('token', data.token) // 本地缓存token
            // setToken('username', loginName)
            localStorage.setItem('username', loginName) // 本地缓存用户名
            commit('SET_ROLES', data.roles)
            commit('SET_TOKEN', data.token)
            // commit('SET_ROLES', ['admin'])
            commit('SET_NAME', loginName)
            resolve(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    Roles({ commit }, roles) {
      commit('SET_ROLES', roles)
    },

    // 本地storage用户信息存入store
    SetLocalInfo({ commit }, info) {
      if (info && info.username && info.token) {
        commit('SET_NAME', info.username)
        commit('SET_TOKEN', info.token)
      }
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return true
      // return new Promise((resolve, reject) => {
      //   getInfo(state.token).then(response => {
      //     const data = response.data
      //     if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
      //       commit('SET_ROLES', data.roles)
      //     } else {
      //       reject('getInfo: roles must be a non-null array !')
      //     }
      //     commit('SET_NAME', data.name)
      //     commit('SET_AVATAR', data.avatar)
      //     resolve(response)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout({}).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          localStorage.clear() // 本地清除缓存
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        localStorage.clear() // 本地清除缓存
        resolve()
      })
    }
  }
}

export default user
