import request from '@/utils/request'

export function adminlogin(data) {
    return request({
      url: '/ums/admin/login',
      method: 'post',
      data: data
    })
  }

  export function getAdminInfo() {
    return request({
      url: '/ums/admin/info',
      method: 'get'
    })
  }

  export function logout() {
    return request({
      url: '/ums/admin/logout'
    })
}

