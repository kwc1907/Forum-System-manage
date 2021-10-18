import request from '@/utils/request'

export function getComment(page, size) {
    return request({
      url: '/manageComment/getAll',
      method: 'get',
      params: {
        pageNo: page,
        size: size
      }
    })
  }
  export function deleteOne(id) {
    return request({
      url: `/manageComment/deleteOne/${id}`,
      method: 'delete',
    })
  }
