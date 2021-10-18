import request from '@/utils/request'

export function getUser(page, size) {
    return request({
      url: '/manageUser/getAll',
      method: 'get',
      params: {
        pageNo: page,
        size: size
      }
    })
  }
  export function deleteOne(id) {
    return request({
      url: `/manageUser/deleteOne/${id}`,
      method: 'delete',
    })
  }
  export function searchOne(page,size,key) {
    return request({
      url: '/manageUser/searchOne',
      method: 'get',
      params: {
        pageNo: page,
        size: size,
        key: key
      }
    })
  }