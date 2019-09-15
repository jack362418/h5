import request from '@/utils/request'
export const FileBaseURL = request.httpRoot // 文件上传地址
export const FileURL = request.httpRoot // 文件地址

/* 通用api */
export function upload(data) {
  return request({
    url: '/admin/upload',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
/* 通用api */
/* 登录信息模块begin*/
export function login(username, password) {
  return request({
    url: '/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post',
    data: {}
  })
}

