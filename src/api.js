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
export function login(loginName, password) {
  return request({
    url: '/account/token',
    method: 'post',
    data: {
      loginName,
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

//查询所有会议记录
export function getAllRecord(data) {
  return request({
    url: '/room/findAllRecord?date='+ data.date + '&pageNum='+ data.page ,
    method: 'get'
  })
}

//获取用户个人信息
export function getInfo(data) {
  return request({
    url: '/account/info',
    method: 'get'
  })
}

//获取我的预约记录
export function getMyReservation(data) {
  return request({
    url: '/room/queryMyReservation?data=' + data.page,
    method: 'get'
  })
}

//查询会议室预约详情
export function getReservationDetail(data) {
  return request({
    url: '/room/findAllRecord?id='+ data.id + '&date=' + data.date,
    method: 'get'
  })
}

