import request from '@/utils/request'

export function getPost(page, size) {
    return request({
      url: '/managePost/getAll',
      method: 'get',
      params: {
        pageNo: page,
        size: size
      }
    })
  }
  export function deleteOne(id) {
    return request({
      url: `/managePost/deleteOne/${id}`,
      method: 'delete',
    })
  }
  export function detailOne(id) {
    return request({
      url: `/managePost/detailOne/${id}`,
      method: 'get',
    })
  }

  export function searchOne(page,size,keyword) {
    return request({
      url: '/managePost/searchOne',
      method: 'get',
      params: {
        pageNo: page,
        size: size,
        keyword: keyword
      }
    })
  }